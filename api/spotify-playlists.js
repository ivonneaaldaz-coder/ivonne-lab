const PLAYLISTS = [
  'https://open.spotify.com/playlist/6srDkgcJIEo3QiOMvlRr1q',
  'https://open.spotify.com/playlist/3G8AYHiczaJoHhcVjzh9TR',
  'https://open.spotify.com/playlist/3J1lx2Ydr5NrGEB5Eq6NJe',
  'https://open.spotify.com/playlist/3MJORK5D5v7d5cSG1Cte6a',
  'https://open.spotify.com/playlist/3tnq9920I6cEP0fzLYTDU0'
]

function playlistId(url = '') {
  const match = String(url).match(/playlist\/([A-Za-z0-9]+)/)
  return match ? match[1] : ''
}

module.exports = async function handler(req, res) {
  try {
    const results = await Promise.all(
      PLAYLISTS.map(async url => {
        const id = playlistId(url)
        const endpoint = 'https://open.spotify.com/oembed?url=' + encodeURIComponent(url)

        try {
          const response = await fetch(endpoint, {
            headers: {
              'User-Agent': 'Ivonne-Lab/1.0'
            }
          })

          if (!response.ok) {
            return { id, url, ok: false }
          }

          const data = await response.json()

          return {
            id,
            url,
            ok: true,
            title: typeof data.title === 'string' ? data.title : '',
            thumbnail_url: typeof data.thumbnail_url === 'string' ? data.thumbnail_url : ''
          }
        } catch {
          return { id, url, ok: false }
        }
      })
    )

    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=86400')
    return res.status(200).json({ playlists: results })
  } catch (error) {
    console.error('Spotify playlist metadata error:', error)
    return res.status(500).json({ error: 'Could not load playlist metadata' })
  }
}
