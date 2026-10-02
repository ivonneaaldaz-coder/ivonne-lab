module.exports = async function handler(req,res){
  const url='https://open.spotify.com/embed/playlist/6srDkgcJIEo3QiOMvlRr1q';
  const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0'}});
  const html=await r.text();
  const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map((m,i)=>({i,len:m[1].length,sample:m[1].slice(0,1200)}));
  res.status(200).json({status:r.status,length:html.length,scripts:scripts.slice(0,12),hasNext:html.includes('__NEXT_DATA__'),hasTrack:html.includes('track')});
}