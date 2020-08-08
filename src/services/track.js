import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function(q) {
  const type = 'track'

  return platziMusicService.get('/search', {
//    params: { q: q, type: type }
    params: { q, type } // simplified
  })
//  .them(function (res) {
//    return res.data
//  })
  .then(res => res.data)

}

export default trackService
