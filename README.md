# Ivonne Lab

A personal operating system for work, experiments, art, writing, and endless side quests.

**Live:** [lab.ivonnealdaz.com](https://lab.ivonnealdaz.com)

## What this is

Most portfolios flatten a career into a few neat categories. This one does the opposite.

Ivonne Lab is an experimental portfolio built like a retro desktop: part archive, part sketchbook, part playground. It brings together marketing strategy, research, AI builds, writing, art, ventures, teaching, and other things currently in motion.

The goal is simple: make the portfolio feel more like the person behind it.

## Inside the OS

- **Ask Eve** — an AI portfolio assistant built to answer questions about Ivonne's work and background.
- **Archive** — a browsable record of projects, research, writing, talks, art, leadership, and things built.
- **Notes** — books, films, ideas, travel, music, recipes, resources, and miscellaneous thoughts.
- **Ventures** — projects including Whitespace, Good World Living, and other things being built.
- **Photos + music** — a more personal layer of the desktop.
- **Snake + Chatroom** — because a portfolio does not have to behave like a portfolio.
- **Dynamic desktop** — retro windows, changing skies, little details, and ongoing experiments.

## Ask Eve

Eve is an AI portfolio assistant built by Ivonne and powered by Claude.

Rather than answering from a generic model alone, Eve is grounded in three project files:

- `resume.md` — factual career and experience data
- `eve-context.md` — projects, ventures, portfolio context, and approved background
- `voice.md` — personality, boundaries, and response behavior

The API lives in `api/chat.js`.

Eve is intentionally scoped to Ivonne's work, background, projects, and the portfolio itself. Application-level guardrails handle repetitive, unrelated, or adversarial requests before they become expensive model calls.

Eve conversations are logged so Ivonne can review how the system behaves, catch bad answers, and improve it over time.

## Stack

- Vanilla HTML, CSS, and JavaScript
- Vercel
- Anthropic Claude API
- Supabase
- GitHub
- Google Analytics

No frontend framework. The weirdness is handcrafted.

## Repo map

```text
index.html            Portfolio OS
archive-content.js    Archive entries + detail-page content
ask.html              Standalone Ask Eve page

api/
  chat.js             Eve backend

resume.md             Eve's factual resume source
eve-context.md        Eve's extended portfolio context
voice.md              Eve's voice + behavior rules

entry-*.html          Selected archive detail pages
vercel.json           Deployment configuration
```

## Design notes

The visual language borrows from old desktop operating systems: draggable windows, file explorers, title bars, tiny utility apps, and a little bit of internet-era weirdness.

The interface is intentionally playful, but the work underneath it is real.

## Status

Always in progress.

This repo doubles as a portfolio and a place to experiment with AI interfaces, interaction design, personal knowledge systems, and new ways of presenting a multidisciplinary body of work.

---

Built by [Ivonne Aldaz](https://ivonnealdaz.com)  
[Whitespace](https://bywhitespace.com) · [Good World Living](https://goodworldliving.com)
