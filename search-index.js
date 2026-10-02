// ============================================================
// LAB SEARCH INDEX — lab.ivonnealdaz.com
// Public-safe search metadata only.
// Search uses this registry + public ARC_DATA + public NOTES.
// ============================================================

var LAB_SEARCH_ITEMS = [
  {
    id:'app-eve',
    title:'Ask Eve',
    subtitle:'Ask about Ivonne\'s work, background, projects, or what she has built.',
    source:'ask_eve.exe',
    type:'app',
    icon:'🌚',
    keywords:['eve','ask','ai assistant','portfolio assistant','chatbot','resume','cv','career','background','experience','projects'],
    action:{kind:'window',target:'chat-win'}
  },
  {
    id:'app-archive',
    title:'Archive',
    subtitle:'Browse 12+ years of projects, research, writing, talks, art, and things built.',
    source:'archive.exe',
    type:'app',
    icon:'🗂️',
    keywords:['archive','work','portfolio','projects','case studies','research','writing','speaking','art','built','career'],
    action:{kind:'archiveFilter',filter:'all'}
  },
  {
    id:'app-notes',
    title:'Notes',
    subtitle:'Books, films, music, travel, ideas, recipes, resources, and things worth remembering.',
    source:'notes.app',
    type:'app',
    icon:'📓',
    keywords:['notes','books','movies','films','music','travel','ideas','quotes','recipes','resources','reading'],
    action:{kind:'window',target:'notes-win'}
  },
  {
    id:'photos-art',
    title:'Art Photos',
    subtitle:'Artwork and studio images pulled live from Google Drive.',
    source:'photos.exe / art',
    type:'folder',
    icon:'🎨',
    keywords:['art','artwork','paintings','painting','ceramics','clay','watercolor','studio','photos','gallery'],
    action:{kind:'photoFolder',folder:'art'}
  },
  {
    id:'photos-travel',
    title:'Travel Photos',
    subtitle:'Travel images pulled live from Google Drive.',
    source:'photos.exe / travel',
    type:'folder',
    icon:'🌍',
    keywords:['travel','photos','france','italy','europe','provence','lake como','trips','places'],
    action:{kind:'photoFolder',folder:'travel'}
  },
  {
    id:'app-chatroom',
    title:'CHATROOM.exe',
    subtitle:'A tiny retro internet chatroom with public rooms and private DMs.',
    source:'chatroom.exe',
    type:'app',
    icon:'💬',
    keywords:['chatroom','chat','aim','yahoo','messenger','community','old internet','retro internet','dm'],
    action:{kind:'window',target:'chat-room-win'}
  },
  {
    id:'app-snake',
    title:'Snake',
    subtitle:'Fully playable, with a leaderboard.',
    source:'snake.exe',
    type:'app',
    icon:'🐍',
    keywords:['snake','game','play','leaderboard','arcade'],
    action:{kind:'window',target:'snake-win'}
  },
  {
    id:'app-work',
    title:'Work With Me',
    subtitle:'Strategy, research, AI + automation, fractional marketing, brand systems, speaking, and workshops.',
    source:'work_with_me.exe',
    type:'app',
    icon:'📋',
    keywords:['work with me','hire ivonne','hire','consulting','consultant','fractional marketing','marketing leader','strategy','research','ai','automation','brand','speaking','workshop','project','contact'],
    action:{kind:'window',target:'work-win'}
  },
  {
    id:'app-about',
    title:'About the Lab',
    subtitle:'Why this personal OS exists and what is inside it.',
    source:'about.txt',
    type:'file',
    icon:'📄',
    keywords:['about','ivonne','lab','personal os','portfolio','website','bio','who is ivonne'],
    action:{kind:'window',target:'about-win'}
  },
  {
    id:'app-ventures',
    title:'Ventures',
    subtitle:'Whitespace and Good World Living.',
    source:'ventures',
    type:'folder',
    icon:'📁',
    keywords:['ventures','business','founder','entrepreneur','whitespace','good world living','studio'],
    action:{kind:'window',target:'ventures-win'}
  },
  {
    id:'app-music',
    title:'Music',
    subtitle:'Playlists and whatever is currently on repeat.',
    source:'music.exe',
    type:'app',
    icon:'🎵',
    keywords:['music','playlist','songs','spotify','listen'],
    action:{kind:'window',target:'music-win'}
  },
  {
    id:'action-email',
    title:'Email Ivonne',
    subtitle:'hello@ivonnealdaz.com',
    source:'command',
    type:'action',
    icon:'✉️',
    keywords:['email','contact','reach out','say hi','message ivonne','hire ivonne'],
    action:{kind:'email'}
  },
  {
    id:'action-gallery',
    title:'Open Art Gallery',
    subtitle:'ivonnealdaz.com/gallery',
    source:'external',
    type:'action',
    icon:'🎨',
    keywords:['art gallery','gallery','paintings','artwork','portfolio art'],
    action:{kind:'external',url:'https://ivonnealdaz.com/gallery'}
  },
  {
    id:'action-portfolio',
    title:'Open ivonnealdaz.com',
    subtitle:'Main portfolio and selected work.',
    source:'external',
    type:'action',
    icon:'👤',
    keywords:['portfolio','ivonnealdaz.com','main site','website'],
    action:{kind:'external',url:'https://ivonnealdaz.com'}
  },
  {
    id:'action-note',
    title:'Leave Ivonne a Note',
    subtitle:'Send a private note from the Lab.',
    source:'command',
    type:'action',
    icon:'✉️',
    keywords:['leave a note','note','message','feedback','say hi'],
    action:{kind:'window',target:'note-form-win'}
  },
  {
    id:'action-surprise',
    title:'Surprise Me',
    subtitle:'Open something random from the Lab.',
    source:'command',
    type:'action',
    icon:'✦',
    keywords:['surprise me','random','randomize','show me something','explore'],
    action:{kind:'surprise'}
  }
];

var LAB_SEARCH_ALIASES = {
  'ai':['artificial intelligence','automation','agent','agents','workflow','workflows','claude','chatbot','prototype','tool','tools'],
  'marketing':['strategy','brand','gtm','go to market','campaign','content','growth','positioning','research','insights'],
  'research':['insights','consumer research','market research','study','studies','validation','survey'],
  'art':['artist','painting','paintings','ceramics','clay','watercolor','exhibition','residency','creative'],
  'travel':['france','italy','europe','provence','lake como','places','trip','trips'],
  'teaching':['lecturer','university','education','class','classes','workshop','workshops','speaking'],
  'speaking':['talk','talks','panel','panels','podcast','podcasts','workshop','workshops'],
  'writing':['newsletter','essay','article','articles','blog','thought leadership'],
  'build':['built','builder','product','prototype','system','systems','tool','tools','app','apps'],
  'hire':['work with me','consulting','fractional','project','email','contact'],
  'whitespace':['strategy studio','agency','consulting','brand','marketing'],
  'good world living':['travel','intentional living','retreats','lifestyle','editorial','experiences']
};

var LAB_ARCHIVE_KEYWORDS = {
  'CV Agent — Ask Ivonne':['ai','agent','assistant','chatbot','claude','resume','cv','portfolio','built'],
  'Future of Marketing Newsletter':['newsletter','audience','subscribers','content','thought leadership','marketing','writing'],
  'Building the Insights Function':['consumer insights','research leadership','research function','team','strategy','leadership'],
  'Community-Powered Marketing Research Series':['research','community','marketing','industry research','report','reports','ugc'],
  'Omelette Rounds Rebrand':['consumer research','cpg','product naming','rename','rebrand','food'],
  'Purina: The Role of Video Reviews':['purina','pet care','video reviews','consumer research','purchase decision'],
  'ARM & HAMMER: Shelf Placement & Pricing Strategy':['arm and hammer','retail','pricing','shelf placement','consumer research','product'],
  'Gaia Herbs: Concept Validation':['gaia herbs','concept testing','concept validation','multivitamin','consumer research'],
  'Whitespace':['marketing','strategy','studio','agency','consulting','positioning','brand','ai','automation','fractional'],
  'Good World Living':['travel','intentional living','retreats','lifestyle','editorial','creative experiences'],
  'CHATROOM.exe':['chat','aim','yahoo','messenger','old internet','retro','community','built'],
  'AI and the Art of Creative Direction':['ai','creative direction','taste','design','creative work'],
  'The Shift Toward Intentional Branding':['branding','brand strategy','positioning','intentional'],
  'From Brand to Atmosphere':['brand experience','creative direction','experience design','atmosphere'],
  'Selected Talks, Panels & Podcasts':['speaking','talks','panels','podcasts','adweek','university','teaching','workshops'],
  'UTSA Subversive Exhibition':['art','exhibition','utsa','san antonio'],
  'The Dominion Exhibition':['art','painting','exhibition','dominion','san antonio'],
  'Torre Delle Arti':['art','exhibition','lake como','italy','residency','travel'],
  'NG Art Residency, Provence':['art','residency','provence','france','maussane','travel'],
  'La Roane Residency, France':['art','residency','france','travel','europe']
};

var LAB_NOTE_KEYWORDS = {
  movies:['movies','films','cinema','shows','tv','watch'],
  books:['books','reading','read','literature'],
  thoughts:['thoughts','quotes','ideas','reminders','learnings'],
  music:['music','songs','playlist','listen'],
  travel:['travel','places','france','italy','europe','guides','bucket list'],
  recipes:['recipes','food','cooking'],
  resources:['resources','tools','stack','tech','github','vercel','supabase','claude']
};

var LAB_SEARCH_QUICK_TERMS = ['ai','art','research','travel','marketing','teaching'];
