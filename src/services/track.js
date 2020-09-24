import platziMusicService from './platzi-music'

const trackService = {}

/*trackService.search = function(q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    //params: { query: q, type: type }
    //params: { q: q, type: type }
    params: { q, type } // simplified

  })
  .then(res => res.data)

}*/

/*trackService.getById = function(id) {

  return platziMusicService.get(`/tracks/${id}`)
  .then(res => res.data)

}*/

trackService.search = function() {
  return platziMusicService.get("/tracks.json")
  .then(res => res.data)
}

trackService.getById = function(id) {
  return platziMusicService.get("/track.json")
    .then(res => res.data)
}

export default trackService

