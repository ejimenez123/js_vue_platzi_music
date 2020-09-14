import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function(q) {
  const type = 'track'

  return new Promise(function(resolve, reject) {
      const obj = {
        tracks:{
          items:[
            {name:"abs1", artists: [{name:'xx1'}]},
            {name:"abs2", artists: [{name:'xx2'}]},
            {name:"abs3", artists: [{name:'xx3'}]}
          ]
        }
      };
      resolve(obj);
  });

}

export default trackService
