import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function(q) {
  const type = 'track'

  return new Promise(function(resolve, reject) {
      const obj = {
        tracks:{
          total: 33,
          items:[
            {id: 1, duration_ms: "228626", name:"abs1", artists: [{name:'xx1'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 2, duration_ms: "228626", name:"abs2", artists: [{name:'xx2'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 3, duration_ms: "228626", name:"abs3", artists: [{name:'xx3'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 4, duration_ms: "228626", name:"abs4", artists: [{name:'xx4'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 5, duration_ms: "228626", name:"abs5", artists: [{name:'xx5'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 6, duration_ms: "228626", name:"abs6", artists: [{name:'xx6'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 7, duration_ms: "228626", name:"abs7", artists: [{name:'xx7'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 8, duration_ms: "228626", name:"abs8", artists: [{name:'xx8'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 9, duration_ms: "228626", name:"abs9", artists: [{name:'xx9'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 10, duration_ms: "228626", name:"abs10", artists: [{name:'xx10'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 11, duration_ms: "228626", name:"abs11", artists: [{name:'xx11'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 12, duration_ms: "228626", name:"abs12", artists: [{name:'xx12'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 13, duration_ms: "228626", name:"abs13", artists: [{name:'xx13'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 14, duration_ms: "228626", name:"abs14", artists: [{name:'xx14'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 15, duration_ms: "228626", name:"abs15", artists: [{name:'xx15'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 16, duration_ms: "228626", name:"abs16", artists: [{name:'xx16'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 17, duration_ms: "228626", name:"abs17", artists: [{name:'xx17'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 18, duration_ms: "228626", name:"abs18", artists: [{name:'xx18'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 19, duration_ms: "228626", name:"abs19", artists: [{name:'xx19'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 20, duration_ms: "228626", name:"abs20", artists: [{name:'xx20'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 21, duration_ms: "228626", name:"abs21", artists: [{name:'xx21'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 22, duration_ms: "228626", name:"abs22", artists: [{name:'xx22'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 23, duration_ms: "228626", name:"abs23", artists: [{name:'xx23'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 24, duration_ms: "228626", name:"abs24", artists: [{name:'xx24'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 25, duration_ms: "228626", name:"abs25", artists: [{name:'xx25'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 26, duration_ms: "228626", name:"abs26", artists: [{name:'xx26'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 27, duration_ms: "228626", name:"abs27", artists: [{name:'xx27'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 28, duration_ms: "228626", name:"abs28", artists: [{name:'xx28'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 29, duration_ms: "228626", name:"abs29", artists: [{name:'xx29'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 30, duration_ms: "228626", name:"abs30", artists: [{name:'xx30'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 31, duration_ms: "228626", name:"abs31", artists: [{name:'xx31'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 32, duration_ms: "228626", name:"abs32", artists: [{name:'xx32'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" },
            {id: 33, duration_ms: "228626", name:"abs33", artists: [{name:'xx33'}], album: {images:[{height:640, url:"src/img/img2.png", width:640},{height:640, url:"src/img/img2.png", width:640}]}, preview_url: "src/mp3/son_1.mp3" }
          ]
        }
      };

    setTimeout(function() {
      resolve(obj);
    }, 1000);

  });

}

export default trackService
