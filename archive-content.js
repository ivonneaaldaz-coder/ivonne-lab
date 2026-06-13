// ============================================================
// ARCHIVE CONTENT — lab.ivonnealdaz.com
// Edit this file to update archive entries and detail pages.
// No other files need to change.
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
  // ── LEADERSHIP ───────────────────────────────────────────
  // (Building the Insights Function is in Featured above)
  // ── BUILT ────────────────────────────────────────────────
  {date:"2025–Present",title:"Whitespace",desc:"Independent brand strategy studio — research, positioning, narrative, and execution.",tags:["built"],type:"studio",url:"https://bywhitespace.com",icon:"💼"},
  {date:"2024–Present",title:"Good World Living",desc:"Platform exploring creativity, travel, and intentional living.",tags:["built","writing"],type:"built",url:"https://goodworldliving.com",icon:"🌿"},
  // ── WRITING ──────────────────────────────────────────────
  {date:"2025",title:"AI and the Art of Creative Direction",desc:"What AI can't replace in creative work — and why taste still wins.",tags:["writing"],type:"essay",url:"https://www.bywhitespace.com/blog/ai-and-the-art-of-creative-direction-why-taste-still-wins",icon:"📝"},
  {date:"2025",title:"The Shift Toward Intentional Branding",desc:"On why brands that stand for something specific outperform brands that try to stand for everything.",tags:["writing"],type:"essay",url:null,icon:"📝"},
  {date:"2025",title:"From Brand to Atmosphere",desc:"What it means to build a brand that feels like something before anyone says a word.",tags:["writing"],type:"essay",url:null,icon:"📝"},
  // ── SPEAKING ─────────────────────────────────────────────
  {date:"2016–Present",title:"Selected Talks, Panels & Podcasts",desc:"Adweek, University of Portland, Texas Tech, Hootsuite, ICSMAX, San Antonio Startup Week, and more.",tags:["speaking"],type:"talk",url:"/entry-speaking",icon:"🎤"},
  // ── ART ──────────────────────────────────────────────────
  {date:"2026",title:"UTSA Subversive Exhibition",desc:"Group exhibition exploring personal and cultural narratives. San Antonio.",tags:["art"],type:"exhibition",url:null,icon:"🎨"},
  {date:"March 2026",title:"The Dominion Exhibition",desc:"Abstract expressionism and landscape. Sold two large paintings.",tags:["art"],type:"exhibition",url:"/entry-dominion",icon:"🎨"},
  {date:"2025",title:"Torre Delle Arti",desc:"International exhibition. Lake Como, Italy. Themes of memory, place, and reflection.",tags:["art"],type:"exhibition",url:"https://www.goodworldliving.com/articles/when-the-universe-hands-you-a-yes",icon:"🎨"},
  {date:"Sept 2024",title:"NG Art Residency, Provence",desc:"Three weeks in Maussane-les-Alpilles. Abstraction, color, landscape, and daily practice.",tags:["art"],type:"residency",url:"/entry-provence",icon:"🎨"},
  {date:"May 2023",title:"La Roane Residency, France",desc:"Art retreat in St. Antonin Noble Val. First European residency.",tags:["art"],type:"residency",url:"https://www.goodworldliving.com/articles/france-art-retreat",icon:"🎨"}
];

var STATS_DATA = [
  {n:'50,000+', label:'newsletter subscribers'},
  {n:'130+',    label:'newsletter issues'},
  {n:'10+',     label:'years in marketing'},
  {n:'15+',     label:'speaking engagements'},
  {n:'3',       label:'countries exhibited in'}
];

var TYPE_LABELS = {built:"Built",essay:"Essay",exhibition:"Exhibition",talk:"Talk",residency:"Residency",research:"Research",newsletter:"Newsletter",studio:"Studio",community:"Community",leadership:"Leadership"};
var TYPE_COLORS = {built:"#3a7fa8",essay:"#7a5a9a",exhibition:"#a06a30",talk:"#5a8a5a",residency:"#a06060",research:"#4a7a7a",newsletter:"#7a7a40",studio:"#3a6a3a",community:"#6a5a8a",leadership:"#5a6a9a"};
var TAG_L = {featured:"Featured",built:"Built",research:"Research",writing:"Writing",speaking:"Speaking",leadership:"Leadership",art:"Art"};
var arcFilter = 'all';

// ============================================================
// DETAIL PAGES
// ============================================================

ENTRIES_DATA['/entry'] = {
  title: 'CV Agent — Ask Ivonne',
  date: 'May 2026',
  tags: ['built'],
  lede: 'Parsed a 10-tab Google Sheet of personal CV data and vibecoded it into a navigable interactive profile + an AI agent that answers questions about the work. Built with Claude, zero templates, no design tools.',
  sections: [
    {label:'The Problem', body:'A CV is a dead document. It sits in a PDF, gets skimmed for 30 seconds, closes. There is no way to ask it a question, filter by what you care about, or understand the person behind the entries.||I had a Google Sheet with 10 tabs covering a decade of work. The question was whether I could turn that raw data into something worth visiting.'},
    {label:'What I Built', table:[['Part 1','Interactive CV — tabbed, filterable, fully linked.'],['Part 2','AI agent — answers questions in first person, sourced from actual CV data.'],['Stack','Vanilla HTML, CSS, JS. Anthropic API. No frameworks.'],['Deployed','GitHub + Vercel. Live at lab.ivonnealdaz.com/ask']]},
    {label:'Process', steps:[['01','Uploaded the spreadsheet','Dropped the .xlsx into Claude. It parsed all 10 tabs and extracted the raw data.'],['02','Built the interactive CV','Designed and coded a tabbed interface with dark editorial aesthetic. Tab navigation, linked entries, responsive.'],['03','Layered in the AI agent','Built the Ask interface — a chat UI calling the Anthropic API with a system prompt trained on the full CV.'],['04','Deployed as a mini-site','Multiple HTML files, shared nav. Pushed to GitHub, deployed on Vercel. Live in under an hour.']]},
    {label:'Reflection', quote:'The interesting part was the editorial work. Deciding what goes in the system prompt, how the agent sounds, what it refuses to answer. Brand strategy applied to AI.'}
  ]
};

ENTRIES_DATA['/entry-dominion'] = {
  title: 'The Dominion — Group Exhibition',
  date: 'March 2026',
  tags: ['art'],
  lede: 'Abstract expressionism alongside landscape. Two large paintings sold. A room full of work that surprised me — including my own.',
  sections: [
    {label:'Context', body:'This show came at a specific moment — I had spent the previous two years making work in Europe, in controlled residency environments. The Dominion brought that work home. Into a room where people would walk past it with a glass of wine and make a split-second decision about whether to stop.||That is a different kind of pressure than a white-wall gallery. And it clarified something: the work that stops people is not always the work you expect.'},
    {label:'The Work', body:'I showed a mix — large abstract expressionist canvases and smaller landscape pieces from Provence and Como. The abstracts outsold the landscapes. That surprised me and did not.||Works shown: what I didn\u2019t say (36x48, oil, sold) · before dark (30x40, acrylic, sold) · enough to stay (24x30, oil) · just because (18x24, acrylic)'},
    {label:'What I Learned', body:'Abstract work communicates something different in a social setting than landscape does. Landscape asks you to look at a place. Abstract asks you to look at a feeling.||The titles matter more than I thought. what I didn\u2019t say stopped people before they even looked at the painting.'},
    {label:'Quote', quote:'\u201cI don\u2019t usually buy art but I kept coming back to it.\u201d \u2014 collector, after purchasing what I didn\u2019t say'}
  ]
};

ENTRIES_DATA['/entry-provence'] = {
  title: 'NG Art Residency, Provence',
  date: 'September 2024',
  tags: ['art'],
  externalLink: 'https://www.goodworldliving.com/articles/how-an-art-residency-in-provence-transformed-my-creative-path',
  lede: 'Four weeks in Maussane-les-Alpilles. Painting from life, painting from memory, and learning to tell the difference between the two.',
  sections: [
    {label:'Why Provence', body:'I applied without expecting to get in. A full month in Provence felt like a different scale of commitment — to the practice, to myself, to the idea that this was real and not a hobby I was managing around the rest of my life.||I got in. I went. It changed things.'},
    {label:'The Work', body:'Provence in September is specific. The light is late-summer thick, gold by 4pm, gone fast. I painted en plein air every morning and worked in studio every afternoon.||By week three I had stopped trying to capture the landscape and started using it as raw material for something more interior. That shift is visible in the work.'},
    {label:'Timeline', table:[['Week 1','Arrival. Plein air in the village. Mostly bad paintings. Necessary.'],['Week 2','Found a rhythm. Morning light, olive groves, studio afternoons. First good canvas.'],['Week 3','The shift. Less observational, more interior. Started working larger.'],['Week 4','Finishing, editing, letting go. Did not want to leave.']]},
    {label:'What It Changed', body:'The residency made the practice non-negotiable. When you spend four weeks doing nothing but making work, you stop being able to pretend it is optional.||Work from this period was shown at The Dominion in San Antonio (March 2026). Some sold. Some is still in my studio. Some I painted over.'}
  ]
};

ENTRIES_DATA['/entry-newsletter'] = {
  title: 'Future of Marketing Newsletter',
  date: '2020 – 2023',
  tags: ['writing'],
  lede: '130+ issues. Three years. A weekly dispatch on where marketing was going — and what it meant for brands trying to build something real.',
  sections: [
    {label:'The Numbers', table:[['Issues','130+ published'],['Growth','7,000 \u2192 50,000 subscribers'],['Run','3 years, zero missed issues']]},
    {label:'What It Was', body:'At TINT, one answer to positioning the company as an industry leader was creating a consistent source of original thinking. I researched, wrote, analyzed, and published a weekly newsletter focused on emerging trends in marketing, community, social media, creator economy, and technology.'},
    {label:'The Outcome', body:'The newsletter became one of the company\u2019s most important thought leadership assets. It helped establish authority, support partnerships, generate leads, and create a recognizable point of view within the industry.'},
    {label:'What I Learned', quote:'Writing every week forces intellectual honesty. You cannot hide behind vague opinions. A brand without a point of view is not a brand.'}
  ]
};

ENTRIES_DATA['/entry-insights'] = {
  title: 'Building the Insights Function',
  date: '2022 \u2013 2025',
  tags: ['leadership'],
  lede: 'Research demand was growing faster than the systems supporting it. The challenge was not simply delivering insights \u2014 it was creating a function capable of consistently turning data into decisions.',
  sections: [
    {label:'The Problem', body:'Most organizations don\u2019t suffer from a lack of information. They suffer from a lack of clarity.||I was brought in to help solve both problems: delivering insights in the short term while building the infrastructure to do it sustainably.'},
    {label:'What I Built', table:[['Scope','Research function supporting CPG, beauty, food & beverage, retail, and technology brands'],['Team','Hired analysts, created onboarding systems, standardized reporting'],['Process','Introduced AI-assisted synthesis workflows, improved project management'],['Outcome','A team capable of delivering strategic recommendations across multiple clients simultaneously']]},
    {label:'Industries Supported', body:'CPG \u2014 Beauty \u2014 Food & Beverage \u2014 Retail \u2014 Technology||Brands included Nestl\u00e9, Unilever, Hero Cosmetics, ARM & HAMMER, Purina, and Sir Kensington\u2019s.'},
    {label:'What I Learned', quote:'Most organizations don\u2019t suffer from a lack of information. They suffer from a lack of clarity.'}
  ]
};

ENTRIES_DATA['/entry-research'] = {
  title: 'Community-Powered Marketing Research Series',
  date: '2021 \u2013 2023',
  tags: ['research'],
  lede: 'Three annual industry benchmark studies. Each one became the cornerstone content asset that fueled an entire year of marketing.',
  sections: [
    {label:'The Studies', table:[['State of UGC 2021','Annual research report cited by Forbes, Adweek, and Digiday. Focused on how brands were using user-generated content.'],['State of Social & UGC 2022','Expanded scope to social commerce and creator partnerships.'],['State of Community Powered Marketing 2023','Explored community-led brand growth and customer advocacy at scale.']]},
    {label:'My Role', body:'I led each initiative end-to-end: survey design, methodology, data analysis, insight generation, and strategic narrative development.||I worked closely with sales, marketing, partners, industry experts, and executive leadership.'},
    {label:'The Impact', body:'The reports became cornerstone content assets that fueled demand generation, sales enablement, webinars, thought leadership, partner campaigns, and industry presentations.'},
    {label:'What I Learned', quote:'The best research does more than answer questions. It creates a shared narrative that influences an entire organization.'}
  ]
};

ENTRIES_DATA['/entry-omelette'] = {
  title: 'Omelette Rounds Rebrand',
  date: '2024',
  tags: ['research'],
  lede: 'Sometimes the product isn\u2019t the problem. The way people understand it is.',
  sections: [
    {label:'The Problem', body:'Veggies Made Great wanted to better understand how consumers perceived one of its breakfast products, previously called Egg Patties.||The question was whether the name was getting in the way of the product.'},
    {label:'The Approach', body:'I led consumer research exploring product understanding, purchase intent, naming associations, key benefits, and positioning opportunities.'},
    {label:'The Outcome', body:'The findings helped support the transition from Egg Patties to Omelette Rounds \u2014 giving the product language that more accurately reflected how consumers thought about and described it.'},
    {label:'What I Learned', quote:'Consumers don\u2019t buy products as they exist internally. They buy products as they understand them.'}
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
    {label:'What I Learned', quote:'Consumers don\u2019t trust content because it\u2019s video. They trust content because it feels authentic, relevant, and reflective of real-world experiences.'}
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
    {label:'What I Learned', quote:'The most innovative idea isn\u2019t always the one consumers choose. The strongest opportunities often exist where relevance and differentiation intersect.'}
  ]
};

ENTRIES_DATA['/entry-speaking'] = {
  title: 'Selected Talks, Panels & Podcasts',
  date: '2016 \u2013 Present',
  tags: ['speaking'],
  lede: 'Speaking at universities, industry conferences, and podcasts on marketing, brand strategy, community, and the future of creative work.',
  sections: [
    {label:'Organizations', speaks:[
      {org:'Adweek', type:'Industry panel'},
      {org:'University of Portland', type:'Guest lecture'},
      {org:'St. Mary\u2019s University', type:'Guest lecture'},
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
