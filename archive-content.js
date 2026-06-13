// ============================================================
// ARCHIVE CONTENT — lab.ivonnealdaz.com
// Edit this file to update archive entries and detail pages.
// ============================================================

var ENTRIES_DATA = {};

var ARC_DATA = [
  // ── FEATURED ─────────────────────────────────────────────
  {date:"2026",title:"CV Agent — Ask Ivonne",desc:"An AI agent trained on a decade of work. Ask it anything.",tags:["featured","built"],type:"built",url:"/entry",icon:"📄"},
  {date:"2020–2023",title:"Future of Marketing Newsletter",desc:"130+ issues. 7K → 50K subscribers. Three years, zero missed issues.",tags:["featured","writing"],type:"newsletter",url:"/entry-newsletter",icon:"📧"},
  {date:"2022–2025",title:"Building the Insights Function",desc:"Built and scaled a research function supporting CPG, beauty, and retail brands.",tags:["featured","leadership"],type:"leadership",url:"/entry-insights",icon:"📈"},
  {date:"2021–2023",title:"Community-Powered Marketing Research Series",desc:"Three annual industry studies. Fueled an entire year of marketing each time.",tags:["featured","research"],type:"research",url:"/entry-research",icon:"📊"},
  {date:"2024",title:"Omelette Rounds Rebrand",desc:"Consumer research supporting a product rename — from Egg Patties to Omelette Rounds.",tags:["featured","research"],type:"research",url:"/entry-omelette",icon:"🥚"},
  // ── RESEARCH ─────────────────────────────────────────────
  {date:"2024",title:"Purina: The Role of Video Reviews",desc:"Quantifying the influence of video reviews on purchase decisions in the pet care category.",tags:["research"],type:"research",url:"/entry-purina",icon:"📊"},
  {date:"2024",title:"Gaia Herbs: Concept Validation",desc:"Evaluated multivitamin concepts before launch to identify the strongest market opportunities.",tags:["research"],type:"research",url:"/entry-gaia",icon:"📊"},
  // ── BUILT ────────────────────────────────────────────────
  {date:"2025–Present",title:"Whitespace",desc:"Independent brand strategy studio — research, positioning, narrative, and execution.",tags:["built"],type:"studio",url:"/entry-whitespace",icon:"💼"},
  {date:"2024–Present",title:"Good World Living",desc:"Platform exploring creativity, travel, and intentional living.",tags:["built","writing"],type:"built",url:"/entry-gwl",icon:"🌿"},
  // ── WRITING ──────────────────────────────────────────────
  {date:"2025",title:"AI and the Art of Creative Direction",desc:"What AI can't replace in creative work — and why taste still wins.",tags:["writing"],type:"essay",url:"https://www.bywhitespace.com/blog/ai-and-the-art-of-creative-direction-why-taste-still-wins",icon:"📝"},
  {date:"2025",title:"The Shift Toward Intentional Branding",desc:"On why brands that stand for something specific outperform brands that try to stand for everything.",tags:["writing"],type:"essay",url:"https://www.bywhitespace.com/blog/intentional-branding-designing-with-meaning-in-a-noisy-world",icon:"📝"},
  {date:"2025",title:"From Brand to Atmosphere",desc:"What it means to build a brand that feels like something before anyone says a word.",tags:["writing"],type:"essay",url:"https://www.bywhitespace.com/blog/designing-experiences-that-feel-like-worlds",icon:"📝"},
  // ── SPEAKING ─────────────────────────────────────────────
  {date:"2016–Present",title:"Selected Talks, Panels & Podcasts",desc:"Adweek, University of Portland, Texas Tech, Hootsuite, ICSMAX, San Antonio Startup Week, and more.",tags:["speaking"],type:"talk",url:"/entry-speaking",icon:"🎤"},
  // ── ART ──────────────────────────────────────────────────
  {date:"2026",title:"UTSA Subversive Exhibition",desc:"Group exhibition exploring personal and cultural narratives. San Antonio.",tags:["art"],type:"exhibition",url:null,icon:"🎨"},
  {date:"March 2026",title:"The Dominion Exhibition",desc:"Abstract expressionism and landscape. Sold two large paintings.",tags:["art"],type:"exhibition",url:"/entry-dominion",icon:"🎨"},
  {date:"2025",title:"Torre Delle Arti",desc:"International exhibition. Lake Como, Italy. Themes of memory, place, and reflection.",tags:["art"],type:"exhibition",url:"https://www.goodworldliving.com/articles/when-the-universe-hands-you-a-yes",icon:"🎨"},
  {date:"Sept 2024",title:"NG Art Residency, Provence",desc:"Three weeks in Maussane-les-Alpilles. Abstraction, color, landscape, and daily practice.",tags:["art"],type:"residency",url:"https://www.goodworldliving.com/articles/how-an-art-residency-in-provence-transformed-my-creative-path",icon:"🎨"},
  {date:"May 2023",title:"La Roane Residency, France",desc:"Art retreat in St. Antonin Noble Val. First European residency.",tags:["art"],type:"residency",url:"https://www.goodworldliving.com/articles/france-art-retreat",icon:"🎨"}
];

// Stats — 4 only (no countries to avoid mobile overlap)
var STATS_DATA = [
  {n:'50,000+', label:'newsletter subscribers'},
  {n:'130+',    label:'newsletter issues'},
  {n:'10+',     label:'years in marketing'},
  {n:'15+',     label:'speaking engagements'}
];

var TYPE_LABELS = {built:"Built",essay:"Essay",exhibition:"Exhibition",talk:"Talk",residency:"Residency",research:"Research",newsletter:"Newsletter",studio:"Studio",community:"Community",leadership:"Leadership"};
var TYPE_COLORS = {built:"#3a7fa8",essay:"#7a5a9a",exhibition:"#a06a30",talk:"#5a8a5a",residency:"#a06060",research:"#4a7a7a",newsletter:"#7a7a40",studio:"#3a6a3a",community:"#6a5a8a",leadership:"#5a6a9a"};
var TAG_L = {featured:"Featured",built:"Built",research:"Research",writing:"Writing",speaking:"Speaking",leadership:"Leadership",art:"Art"};
var arcFilter = 'all';

// ============================================================
// DETAIL PAGES
// ============================================================

// CV Agent — matches same structure as other entries (no old "process" style)
ENTRIES_DATA['/entry'] = {
  title: 'CV Agent — Ask Ivonne',
  date: '2026',
  tags: ['built'],
  lede: 'What if a resume could answer questions? Built a conversational interface around a decade of work — part resume, part knowledge base, part AI agent.',
  sections: [
    {label:'The Problem', body:'Most resumes are static documents. They get skimmed for 30 seconds, reduced to a handful of bullet points, and forgotten.||I had more than a decade of work spread across a Google Sheet with ten separate tabs — projects, roles, speaking, research, exhibitions. The information existed, but there was no way to navigate it, and no way to ask questions.'},
    {label:'The Approach', table:[
      ['Interactive CV','Searchable project archive, tabbed by category, fully linked.'],
      ['AI Agent','Trained on actual CV data. Answers questions in first person.'],
      ['Stack','Anthropic API, GitHub, Vercel, Vanilla HTML/CSS/JS. No templates. No frameworks.']
    ]},
    {label:'The Outcome', body:'Visitors can ask questions about my work, explore projects, and navigate more than a decade of experience through conversation.'},
    {label:'What I Learned', quote:'Building an AI agent feels surprisingly similar to building a brand. You\'re defining a voice, a perspective, and a set of rules for how something shows up in the world.'}
  ]
};

ENTRIES_DATA['/entry-newsletter'] = {
  title: 'Future of Marketing Newsletter',
  date: '2020 – 2023',
  tags: ['writing'],
  lede: '130+ issues. Three years. A weekly dispatch on where marketing was going — and what it meant for brands trying to build something real.',
  sections: [
    {label:'The Problem', body:'How do you position a company as an industry leader?||At TINT, one answer was creating a consistent source of original thinking.'},
    {label:'The Approach', table:[
      ['Issues','130+ published'],
      ['Growth','7,000 → 50,000 subscribers'],
      ['Run','Three years, zero missed issues']
    ]},
    {label:'The Outcome', body:'The newsletter became one of the company\'s most important thought leadership assets. It helped establish authority, support partnerships, generate leads, and create a recognizable point of view within the industry.'},
    {label:'What I Learned', quote:'Writing every week forces intellectual honesty. You cannot hide behind vague opinions. A brand without a point of view is not a brand.'}
  ]
};

ENTRIES_DATA['/entry-insights'] = {
  title: 'Building the Insights Function',
  date: '2022 – 2025',
  tags: ['leadership'],
  lede: 'Research demand was growing faster than the systems supporting it. The challenge wasn\'t simply delivering insights — it was creating a function capable of consistently turning data into decisions.',
  sections: [
    {label:'The Problem', body:'Research demand was growing faster than the systems supporting it.||The challenge wasn\'t simply delivering insights. It was creating a function capable of consistently turning data into decisions.'},
    {label:'The Approach', body:'I helped build and mature the insights function supporting brands across CPG, Beauty, Food & Beverage, Retail, and Technology.||This included hiring analysts, creating onboarding systems, standardizing reporting, improving project management, and introducing AI-assisted synthesis workflows.'},
    {label:'Industries & Brands', body:'CPG — Beauty — Food & Beverage — Retail — Technology||Brands included Nestlé, Unilever, Hero Cosmetics, ARM & HAMMER, Purina, and Sir Kensington\'s.'},
    {label:'The Outcome', body:'The team became more scalable, efficient, and capable of delivering strategic recommendations across multiple clients simultaneously.'},
    {label:'What I Learned', quote:'Most organizations don\'t suffer from a lack of information. They suffer from a lack of clarity.'}
  ]
};

ENTRIES_DATA['/entry-research'] = {
  title: 'Community-Powered Marketing Research Series',
  date: '2021 – 2023',
  tags: ['research'],
  lede: 'Three annual industry benchmark studies. Each one became the cornerstone content asset that fueled an entire year of marketing.',
  sections: [
    {label:'The Problem', body:'How do you create one piece of content capable of fueling an entire year of marketing?||At TINT (now TrueLoyal), we wanted to better understand how brands were approaching user-generated content, community, creator partnerships, and customer advocacy. Rather than publish another opinion piece, we built industry benchmark studies.'},
    {label:'The Studies', table:[
      ['State of UGC 2021','Annual research report cited by Forbes, Adweek, and Digiday. Focused on how brands were using user-generated content.'],
      ['State of Social & UGC 2022','Expanded scope to social commerce and creator partnerships.'],
      ['State of Community Powered Marketing 2023','Explored community-led brand growth and customer advocacy at scale.']
    ]},
    {label:'The Outcome', body:'The reports became cornerstone content assets that fueled demand generation, sales enablement, webinars, thought leadership, partner campaigns, and industry presentations.'},
    {label:'What I Learned', quote:'The best research does more than answer questions. It creates a shared narrative that influences an entire organization.'}
  ]
};

ENTRIES_DATA['/entry-omelette'] = {
  title: 'Omelette Rounds Rebrand',
  date: '2024',
  tags: ['research'],
  lede: 'Sometimes the product isn\'t the problem. The way people understand it is.',
  sections: [
    {label:'The Problem', body:'Veggies Made Great wanted to better understand how consumers perceived one of its breakfast products, previously called Egg Patties.||The question was whether the name was getting in the way of the product.'},
    {label:'The Approach', body:'I led consumer research exploring product understanding, purchase intent, naming associations, key benefits, and positioning opportunities.'},
    {label:'The Outcome', body:'The findings helped support the transition from Egg Patties to Omelette Rounds — giving the product language that more accurately reflected how consumers thought about and described it.'},
    {label:'What I Learned', quote:'Consumers don\'t buy products as they exist internally. They buy products as they understand them.'}
  ]
};

ENTRIES_DATA['/entry-purina'] = {
  title: 'Purina: The Role of Video Reviews',
  date: '2024',
  tags: ['research'],
  lede: 'How much influence do video reviews actually have on purchase decisions? Purina wanted to find out.',
  sections: [
    {label:'The Problem', body:'Purina wanted to better understand the role of creator and consumer-generated video content within the pet care category.'},
    {label:'The Approach', body:'We surveyed general market consumers and Purina brand fans, exploring trust and credibility, influence on purchase decisions, preferred review formats, and differences between loyal customers and the broader market.'},
    {label:'The Outcome', body:'The study helped quantify where video reviews create value, how consumers evaluate authenticity, and where brands should invest when building content strategies.'},
    {label:'What I Learned', quote:'Consumers don\'t trust content because it\'s video. They trust content because it feels authentic, relevant, and reflective of real-world experiences.'}
  ]
};

ENTRIES_DATA['/entry-gaia'] = {
  title: 'Gaia Herbs: Concept Validation',
  date: '2024',
  tags: ['research'],
  lede: 'Launching the wrong product is expensive. Gaia Herbs wanted to evaluate multiple multivitamin concepts before investing further in development.',
  sections: [
    {label:'The Problem', body:'Gaia Herbs needed to identify which product concepts best addressed consumer needs while validating positioning, pricing, and product claims.'},
    {label:'The Approach', body:'We evaluated purchase intent, believability, uniqueness, consumer relevance, pricing expectations, and ability to meet consumer needs across multiple concepts.'},
    {label:'The Outcome', body:'The research helped prioritize concepts, refine messaging, validate claims, and identify which opportunities showed the strongest market potential.'},
    {label:'What I Learned', quote:'The most innovative idea isn\'t always the one consumers choose. The strongest opportunities often exist where relevance and differentiation intersect.'}
  ]
};

ENTRIES_DATA['/entry-whitespace'] = {
  title: 'Whitespace',
  date: '2025 – Present',
  tags: ['built'],
  externalLink: 'https://www.bywhitespace.com',
  externalLinkLabel: 'visit bywhitespace.com',
  lede: 'Independent brand strategy studio built on the idea that clarity is the most undervalued form of creativity.',
  sections: [
    {label:'The Problem', body:'Most brand strategy engagements are too long, too expensive, and too disconnected from execution.||Whitespace was built to solve that.'},
    {label:'The Approach', body:'Three-month sprint engagements for founders and fast-growing companies. Research, positioning, narrative, and creative direction — in sequence, not silos.'},
    {label:'The Outcome', body:'Whitespace became the vehicle through which I could apply everything learned across agency, in-house, research, and leadership roles.'},
    {label:'What I Learned', quote:'A portfolio career offers freedom, but freedom comes with responsibility. You become responsible for creating your own opportunities.'}
  ]
};

ENTRIES_DATA['/entry-gwl'] = {
  title: 'Good World Living',
  date: '2024 – Present',
  tags: ['built'],
  externalLink: 'https://www.goodworldliving.com',
  externalLinkLabel: 'visit goodworldliving.com',
  lede: 'A platform built around creativity, travel, and intentional living. Most platforms optimize for attention. This one optimizes for curiosity.',
  sections: [
    {label:'The Problem', body:'Most platforms optimize for attention.||I wanted to explore what happens when you optimize for curiosity instead.'},
    {label:'The Approach', body:'Building an ecosystem around creativity, travel, intentional living, and life design.||Current initiatives include retreats, digital products, creative experiences, and community experiments.'},
    {label:'The Outcome', body:'Still being written.'},
    {label:'What I Learned', quote:'Not every project begins as a business. Some begin as a question.'}
  ]
};

ENTRIES_DATA['/entry-essay-ai'] = {
  title: 'AI and the Art of Creative Direction',
  date: '2025',
  tags: ['writing'],
  externalLink: 'https://www.bywhitespace.com/blog/ai-and-the-art-of-creative-direction-why-taste-still-wins',
  lede: 'What happens when execution becomes abundant? The value shifts elsewhere — toward taste, judgment, curation, direction.',
  sections: [
    {label:'The Question', body:'What happens when execution becomes abundant?'},
    {label:'The Argument', body:'As AI lowers the cost of creating, the value shifts elsewhere.||Toward taste. Toward judgment. Toward curation. Toward direction.'},
    {label:'What I Learned', quote:'Execution is becoming cheaper. Taste is becoming more valuable.'}
  ]
};

ENTRIES_DATA['/entry-essay-branding'] = {
  title: 'The Shift Toward Intentional Branding',
  date: '2025',
  tags: ['writing'],
  lede: 'On why brands that stand for something specific outperform brands that try to stand for everything.',
  sections: [
    {label:'The Argument', body:'Most brands try to appeal to everyone. The result is a brand that resonates with no one.||Specificity creates belonging. Belonging creates loyalty. Loyalty creates growth.'},
    {label:'What I Learned', quote:'Clarity is the most undervalued form of creativity.'}
  ]
};

ENTRIES_DATA['/entry-essay-atmosphere'] = {
  title: 'From Brand to Atmosphere',
  date: '2025',
  tags: ['writing'],
  lede: 'What it means to build a brand that feels like something before anyone says a word.',
  sections: [
    {label:'The Argument', body:'The strongest brands don\'t just communicate — they create an atmosphere.||Before the tagline. Before the logo. Before the campaign. There is a feeling.||The best brand work creates that feeling deliberately, consistently, and invisibly.'},
    {label:'What I Learned', quote:'The goal isn\'t to say the right things. It\'s to create the right conditions for people to feel the right things.'}
  ]
};

ENTRIES_DATA['/entry-speaking'] = {
  title: 'Selected Talks, Panels & Podcasts',
  date: '2016 – Present',
  tags: ['speaking'],
  lede: 'Speaking at universities, industry conferences, and podcasts on marketing, brand strategy, community, and the future of creative work.',
  sections: [
    {label:'Organizations', speaks:[
      {org:'Adweek', type:'Industry panel'},
      {org:'University of Portland', type:'Guest lecture'},
      {org:'St. Mary\'s University', type:'Guest lecture'},
      {org:'Texas Tech University', type:'Guest lecture'},
      {org:'San Antonio Startup Week', type:'Panel'},
      {org:'Hootsuite', type:'Webinar'},
      {org:'Acquia', type:'Webinar'},
      {org:'Poppulo', type:'Webinar'},
      {org:'Upfluence', type:'Webinar'},
      {org:'ICSMAX', type:'Conference presentation'},
      {org:'Hustle & Socialize', type:'Podcast'}
    ]},
    {label:'Topics', body:'B2B Marketing in SaaS \u2022 Community-Created Content \u2022 Creator Economy \u2022 Employee Advocacy \u2022 Social Commerce \u2022 Visual Content Strategy \u2022 Brand Building \u2022 Marketing in a Recession \u2022 Future Digital Marketing Leaders'},
    {label:'What I Learned', quote:'Teaching is one of the fastest ways to sharpen your thinking.'}
  ]
};

ENTRIES_DATA['/entry-dominion'] = {
  title: 'The Dominion Exhibition',
  date: 'March 2026',
  tags: ['art'],
  lede: 'Abstract expressionism alongside landscape. Two large paintings sold. A room full of work that surprised me — including my own.',
  sections: [
    {label:'Context', body:'This show came at a specific moment — I had spent the previous two years making work in Europe, in controlled residency environments. The Dominion brought that work home. Into a room where people would walk past it with a glass of wine and make a split-second decision about whether to stop.||That is a different kind of pressure than a white-wall gallery. And it clarified something: the work that stops people is not always the work you expect.'},
    {label:'The Work', body:'I showed a mix — large abstract expressionist canvases and smaller landscape pieces from Provence and Como. The abstracts outsold the landscapes. That surprised me and did not.||Works shown: what I didn\u2019t say (36x48, oil, sold) · before dark (30x40, acrylic, sold) · enough to stay (24x30, oil) · just because (18x24, acrylic)'},
    {label:'What I Learned', body:'Abstract work communicates something different in a social setting than landscape does. Landscape asks you to look at a place. Abstract asks you to look at a feeling.'},
    {label:'Quote', quote:'\u201cI don\u2019t usually buy art but I kept coming back to it.\u201d \u2014 collector, after purchasing what I didn\u2019t say'}
  ]
};

ENTRIES_DATA['/entry-torre'] = {
  title: 'Torre Delle Arti',
  date: '2025',
  tags: ['art'],
  externalLink: 'https://www.goodworldliving.com/articles/when-the-universe-hands-you-a-yes',
  lede: 'International exhibition exploring themes of memory, place, and reflection. Lake Como, Italy.',
  sections: [
    {label:'Summary', body:'Group exhibition at Torre Delle Arti in Bellagio, Lake Como. Work shown alongside regional and international artists.||Themes of memory, place, and reflection ran through the exhibition.'},
    {label:'What I Learned', quote:'Art is another form of research.'}
  ]
};

ENTRIES_DATA['/entry-provence'] = {
  title: 'NG Art Residency, Provence',
  date: 'September 2024',
  tags: ['art'],
  externalLink: 'https://www.goodworldliving.com/articles/how-an-art-residency-in-provence-transformed-my-creative-path',
  lede: 'Three weeks in Maussane-les-Alpilles. Painting from life, painting from memory, and learning to tell the difference between the two.',
  sections: [
    {label:'Summary', body:'Three-week artist residency focused on abstraction, color, landscape, and daily creative practice.||I painted en plein air every morning and worked in studio every afternoon. By week three I had stopped trying to capture the landscape and started using it as raw material for something more interior.'},
    {label:'Timeline', table:[
      ['Week 1','Arrival. Plein air in the village. Mostly bad paintings. Necessary.'],
      ['Week 2','Found a rhythm. Morning light, olive groves, studio afternoons. First good canvas.'],
      ['Week 3','The shift. Less observational, more interior. Started working larger.']
    ]},
    {label:'What I Learned', quote:'Consistency matters more than inspiration.'}
  ]
};
