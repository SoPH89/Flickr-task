const pictureBox = document.querySelector('.photoBox');
let page_number = 1;

async function getPhotos(){

const api_key = 'fdd4ea4fec3d91104951cb44425ff351';

let url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${api_key}&page=${page_number}&format=json&nojsoncallback=1`

  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  let picArray = data.photos.photo.map((pic)=>{
      const sizeSuffix = 'q';
const srcPath = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_${sizeSuffix}.jpg`;
     pictureBox.innerHTML += `<a href=${srcPath} target="_blank"><img src=${srcPath}/> </a>`;
  })
  var pagePhotos = data.photos.page;
     console.log(page_number)
     if(pagePhotos<= data.photos.pages){
      page_number++
     }else {
       return Error('Error');
     }
}

getPhotos();


window.addEventListener('scroll', ()=>{
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
getPhotos();
  }
})