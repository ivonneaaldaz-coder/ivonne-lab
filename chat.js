const fs = require('fs')
const path = require('path')
const { parseCV } = require('./parse-cv')

function getContext() {
  // Try to load from xlsx first
  const xlsxPath = path.join(process.cwd(), 'IVONNE-ALDAZ_CV-Tabs.xlsx')
  if (fs.existsSync(xlsxPath)) {
    try {
      return parseCV(xlsxPath)
    } catch (e) {
      console.error('Failed to parse xlsx:', e.message)
    }
  }
  // Fall back to context.md if it exists
  const mdPath = path.join(process.cwd(), 'context.md')
  if (fs.existsSync(mdPath)) {
    return fs.readFileSync(mdPath, 'utf8')
  }
  return ''
}

function getVoice() {
  const voicePath = path.join(process.cwd(), 'voice.md')
  if (fs.existsSync(voicePath)) {
    return fs.readFileSync(voicePath, 'utf8')
  }
  return ''
}

function buildSystem() {
  const voice = getVoice()
  const context = getContext()
  return `You are an AI agent representing Ivonne Aldaz. Answer questions about her on her behalf, in first person.

${voice}

---

# CV DATA — answer only from this information. Do not speculate or invent.

${context}`
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { messages } = req.body
    const system = buildSystem()

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
        system,
        messages
      })
    })

    const data = await response.json()
    return res.status(200).json(data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Request failed' })
  }
}
