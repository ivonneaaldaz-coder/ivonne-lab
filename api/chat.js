const fs = require('fs')
const path = require('path')
const { parseCV } = require('./parse-cv')

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwOPfspfeghSzKGUkNDqEA1gpY_JpRN_GGKoBM8OrNqZAyiB0djYY6sviz05fh42Pt5/exec'

function getContext() {
  const xlsxPath = path.join(process.cwd(), 'IVONNE-ALDAZ_CV-Tabs.xlsx')
  if (fs.existsSync(xlsxPath)) {
    try { return parseCV(xlsxPath) } catch(e) { console.error('xlsx parse error:', e.message) }
  }
  const mdPath = path.join(process.cwd(), 'context.md')
  if (fs.existsSync(mdPath)) return fs.readFileSync(mdPath, 'utf8')
  return ''
}

function getVoice() {
  const voicePath = path.join(process.cwd(), 'voice.md')
  if (fs.existsSync(voicePath)) return fs.readFileSync(voicePath, 'utf8')
  return ''
}

function buildSystem() {
  return `You are an AI agent representing Ivonne Aldaz. Answer questions about her on her behalf, in first person.

${getVoice()}

---

# CV DATA — answer only from this information. Do not speculate or invent.

${getContext()}`
}

async function classifyAndScore(question) {
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 60,
        system: 'Classify visitor questions to a personal portfolio site. Respond with ONLY valid JSON, no markdown. Format: {"topic":"Art|Brand|Writing|Built|General","leadScore":1}. Lead score 1-5: 1=general curiosity, 3=professional interest, 5=consulting/hiring intent.',
        messages: [{ role: 'user', content: `Question: ${question}` }]
      })
    })
    const data = await res.json()
    return JSON.parse(data.content[0].text.trim())
  } catch(e) {
    return { topic: 'General', leadScore: 1 }
  }
}

async function logToSheet(question, response, topic, leadScore) {
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        question,
        response,
        topic,
        leadScore
      })
    })
    const text = await res.text()
    console.log('Sheet log result:', text)
  } catch(e) {
    console.error('Logging failed:', e.message)
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { messages } = req.body
    const lastQuestion = messages[messages.length - 1]?.content || ''

    // Get AI response
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: buildSystem(),
        messages
      })
    })

    const data = await response.json()

    // Log synchronously before returning — runs within the function lifetime
    if (!data.error) {
      const reply = data.content[0].text
      const { topic, leadScore } = await classifyAndScore(lastQuestion)
      await logToSheet(lastQuestion, reply, topic, leadScore)
    }

    return res.status(200).json(data)
  } catch(err) {
    console.error(err)
    return res.status(500).json({ error: 'Request failed' })
  }
}
