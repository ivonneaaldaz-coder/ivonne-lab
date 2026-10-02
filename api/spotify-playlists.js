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

function findTrackList(value, seen = new Set()) {
  if (!value || typeof value !== 'object') return null
  if (seen.has(value)) return null
  seen.add(value)

  if (Array.isArray(value.trackList)) return value.trackList

  for (const key of Object.keys(value)) {
    const found = findTrackList(value[key], seen)
    if (found) return found
  }

  return null
}

function normalizeTrack(track) {
  if (!track || typeof track !== 'object') return null

  const uri = typeof track.uri === 'string' ? track.uri : ''
  const title = typeof track.title === 'string' ? track.title.trim() : ''
  if (!uri.startsWith('spotify:track:') || !title) return null

  return {
    uri,
    title,
    artist: typeof track.subtitle === 'string' ? track.subtitle.trim() : '',
    duration_ms: Number.isFinite(Number(track.duration)) ? Number(track.duration) : 0,
    explicit: Boolean(track.isExplicit)
  }
}

async function readPlaylistTracks(id) {
  const response = await fetch('https://open.spotify.com/embed/playlist/' + id, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Ivonne-Lab/1.0)'
    }
  })

  if (!response.ok) return []

  const html = await response.text()
  const match = html.match(
    /<script[^>]+id=["']__NEXT_DATA__["'][^>]*>([\s\S]*?)<\/script>/i
  )

  if (!match) return []

  try {
    const data = JSON.parse(match[1])
    const trackList = findTrackList(data)
    if (!Array.isArray(trackList)) return []
    return trackList.map(normalizeTrack).filter(Boolean)
  } catch {
    return []
  }
}

module.exports = async function handler(req, res) {
  try {
    const results = await Promise.all(
      PLAYLISTS.map(async url => {
        const id = playlistId(url)
        const endpoint = 'https://open.spotify.com/oembed?url=' + encodeURIComponent(url)

        try {
          const [metaResponse, tracks] = await Promise.all([
            fetch(endpoint, {
              headers: {
                'User-Agent': 'Ivonne-Lab/1.0'
              }
            }),
            readPlaylistTracks(id)
          ])

          if (!metaResponse.ok) {
            return { id, url, ok: false, tracks }
          }

          const data = await metaResponse.json()

          return {
            id,
            url,
            ok: true,
            title: typeof data.title === 'string' ? data.title.trim() : '',
            thumbnail_url: typeof data.thumbnail_url === 'string' ? data.thumbnail_url : '',
            tracks,
            track_count: tracks.length
          }
        } catch {
          return { id, url, ok: false, tracks: [] }
        }
      })
    )

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=21600')
    return res.status(200).json({ playlists: results })
  } catch (error) {
    console.error('Spotify playlist metadata error:', error)
    return res.status(500).json({ error: 'Could not load playlist metadata' })
  }
}
