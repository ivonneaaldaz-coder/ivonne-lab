module.exports = async function handler(req,res){
  const url='https://open.spotify.com/embed/playlist/6srDkgcJIEo3QiOMvlRr1q';
  const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0'}});
  const html=await r.text();
  const idx=html.indexOf('__NEXT_DATA__');
  const around=idx>=0?html.slice(Math.max(0,idx-500),Math.min(html.length,idx+12000)):'';
  res.status(200).json({status:r.status,length:html.length,idx,around});
}