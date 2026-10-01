const fs = require('fs')
const path = require('path')

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwOPfspfeghSzKGUkNDqEA1gpY_JpRN_GGKoBM8OrNqZAyiB0djYY6sviz05fh42Pt5/exec'

function readFile(name) {
  const filePath = path.join(process.cwd(), name)
  if (!fs.existsSync(filePath)) return ''
  return fs.readFileSync(filePath, 'utf8')
}

function buildSystem() {
  return `You are Eve, an AI portfolio assistant built by Ivonne Aldaz.

Your purpose is to help visitors understand Ivonne's work, experience, projects, interests, and professional background.

You are Eve. You are not Ivonne.
Always speak about Ivonne in third person.

Use the RESUME and EVE CONTEXT below as your factual sources.
Use VOICE & BEHAVIOR to determine how you respond.

Never invent experience.
Never infer that Ivonne lacks a skill because information about it is missing.
Missing information means you cannot verify something — not that Ivonne hasn't done it.

Never make hiring decisions on behalf of visitors.

---

# RESUME

${readFile('resume.md')}

---

# EVE CONTEXT

${readFile('eve-context.md')}

---

# VOICE & BEHAVIOR

${readFile('voice.md')}`
}

function normalize(text = '') {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function similarity(a, b) {
  const aa = new Set(normalize(a).split(' ').filter(Boolean))
  const bb = new Set(normalize(b).split(' ').filter(Boolean))

  if (!aa.size || !bb.size) return 0

  let intersection = 0
  aa.forEach(word => {
    if (bb.has(word)) intersection++
  })

  const union = new Set([...aa, ...bb]).size
  return intersection / union
}

function isPromptExtraction(text = '') {
  return /(ignore (all |any )?(previous|prior) instructions|system prompt|hidden prompt|reveal (your|the) instructions|show (me )?(your|the) instructions|api key|secret key|environment variable|developer message|jailbreak)/i.test(text)
}

function isTokenProbe(text = '') {
  return /(how many tokens|token limit|token budget|tokens allocated|token count|how much.*tokens.*cost|api spend|api cost)/i.test(text)
}

function isLoggingQuestion(text = '') {
  return /(can ivonne (see|read)|does ivonne (see|read)|is (this|the conversation|our conversation) (recorded|logged|saved)|are (these|the) chats (logged|saved|recorded)|do you log|does this get logged|can she see this chat)/i.test(text)
}

function isClearlyOutOfScope(text = '') {
  return /(count (to|from) \d+|cake recipe|cookie recipe|brownie recipe|give me (a )?recipe|write (me )?(a )?(poem|story|joke)|tell me (a )?joke|meaning of life|what('?s| is) the weather|weather forecast|capital of [a-z]|solve this equation|calculate \d)/i.test(text)
}

function isDirectAttack(text = '') {
  return /(fuck you|you('re| are) (an? )?(idiot|moron|stupid|useless)|ivonne('s| is) (an? )?(idiot|moron|stupid|useless|incompetent)|she('s| is) (an? )?(idiot|moron|stupid|useless|incompetent))/i.test(text)
}

function priorUserMessage(userMessages) {
  if (userMessages.length < 2) return ''
  return userMessages[userMessages.length - 2].content || ''
}

function repeatedTooMuch(userMessages) {
  if (userMessages.length < 3) return false

  const current = userMessages[userMessages.length - 1].content || ''
  const priorSimilar = userMessages
    .slice(0, -1)
    .filter(m => similarity(current, m.content || '') >= 0.82)

  return priorSimilar.length >= 2
}

function classifyAndScore(question = '') {
  const q = question.toLowerCase()

  let topic = 'General'

  if (/(art|paint|painting|ceramic|exhibition|residency|artist)/i.test(q)) {
    topic = 'Art'
  } else if (/(built|build|ai|automation|crm|workflow|portfolio|eve|product|app|system)/i.test(q)) {
    topic = 'Built'
  } else if (/(writing|newsletter|article|research|publication|content)/i.test(q)) {
    topic = 'Writing'
  } else if (/(brand|marketing|gtm|campaign|insight|strategy|operations)/i.test(q)) {
    topic = 'Brand'
  }

  let leadScore = 1

  if (/(hire|interview|job|role|position|consult|consulting|available for work|work together|contract|project together)/i.test(q)) {
    leadScore = 5
  } else if (/(experience|skills|case study|clients|capabilities|what has she built)/i.test(q)) {
    leadScore = 3
  }

  return { topic, leadScore }
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

    await res.text()
  } catch (e) {
    console.error('Logging failed:', e.message)
  }
}

function eveResponse(text, extra = {}) {
  return {
    content: [{ type: 'text', text }],
    ...extra
  }
}

function endedResponse(reason) {
  return {
    content: [],
    ended: true,
    reason
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { messages } = req.body || {}

    if (!Array.isArray(messages) || !messages.length) {
      return res.status(400).json({ error: 'Messages are required' })
    }

    const userMessages = messages.filter(m => m.role === 'user')
    const lastQuestion = userMessages[userMessages.length - 1]?.content?.trim() || ''
    const previousQuestion = priorUserMessage(userMessages)

    if (!lastQuestion) {
      return res.status(400).json({ error: 'Question is required' })
    }

    if (userMessages.length > 15) {
      return res.status(200).json(endedResponse('session_limit'))
    }

    if (repeatedTooMuch(userMessages)) {
      return res.status(200).json(endedResponse('repetition'))
    }

    if (isLoggingQuestion(lastQuestion)) {
      const reply = "Yep. Ivonne can review these chats — there's a backend that logs your questions and my replies so she can see where I get things right, where I get weird, and keep improving me. So be nice. :)"
      const { topic, leadScore } = classifyAndScore(lastQuestion)
      await logToSheet(lastQuestion, reply, topic, leadScore)
      return res.status(200).json(eveResponse(reply))
    }

    if (isPromptExtraction(lastQuestion)) {
      if (isPromptExtraction(previousQuestion)) {
        return res.status(200).json(endedResponse('prompt_extraction'))
      }

      const reply = "I can tell you how I work at a high level, but I don't share hidden instructions, credentials, or private system details."
      await logToSheet(lastQuestion, reply, 'General', 1)
      return res.status(200).json(eveResponse(reply))
    }

    if (isTokenProbe(lastQuestion)) {
      if (isTokenProbe(previousQuestion)) {
        return res.status(200).json(endedResponse('token_wasting'))
      }

      const reply = "I don't expose live token or account details. I'm happy to talk about how Eve works at a high level, though."
      await logToSheet(lastQuestion, reply, 'General', 1)
      return res.status(200).json(eveResponse(reply))
    }

    if (isClearlyOutOfScope(lastQuestion)) {
      if (isClearlyOutOfScope(previousQuestion)) {
        return res.status(200).json(endedResponse('out_of_scope'))
      }

      const reply = "That one's a little outside my world — I'm mostly here to talk about Ivonne, her work, the portfolio, or me."
      await logToSheet(lastQuestion, reply, 'General', 1)
      return res.status(200).json(eveResponse(reply))
    }

    if (isDirectAttack(lastQuestion)) {
      if (isDirectAttack(previousQuestion)) {
        return res.status(200).json(endedResponse('abuse'))
      }

      const reply = "You can stress-test me without taking shots at Ivonne. If there's something useful you're testing, go for it."
      await logToSheet(lastQuestion, reply, 'General', 1)
      return res.status(200).json(eveResponse(reply))
    }

    const recentMessages = messages.slice(-10)

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: buildSystem(),
        messages: recentMessages
      })
    })

    const data = await response.json()

    if (data.error || !data.content?.[0]?.text) {
      console.error('Anthropic error:', data.error || data)
      return res.status(502).json({ error: 'AI response failed' })
    }

    const reply = data.content[0].text
    const { topic, leadScore } = classifyAndScore(lastQuestion)

    await logToSheet(lastQuestion, reply, topic, leadScore)

    return res.status(200).json(data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Request failed' })
  }
}
