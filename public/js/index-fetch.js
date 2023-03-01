
const posts = document.getElementsByClassName('post-card');


function buildCardsUsingDOMAPI(container, data) {
  let cardDiv = document.createElement('div');
  cardDiv.addEventListener('click', function (ev) {
  console.log(posts.length);
   document.getElementById('post-count-amount').innerHTML = posts.length-1;

   var opacity = 1;
   let curTarget = ev.currentTarget;
   var t = setInterval(()=> {
      opacity -= .1;
      curTarget.style.opacity = opacity;
      if(opacity < 0){
        clearInterval(t);
        curTarget.remove();
      }
   }, 50);
    
  })
  cardDiv.setAttribute('class', 'post-card');
  let imgElement = document.createElement('img');
  imgElement.setAttribute('src', data.url);
  imgElement.setAttribute('class', 'post-img');
  let postInfoDiv = document.createElement('div');
  postInfoDiv.setAttribute('class', 'post-info');
  let titleP = document.createElement('p');
  titleP.setAttribute('class', 'post-title');
  titleP.appendChild(document.createTextNode(data.title));
  postInfoDiv.appendChild(titleP);
  cardDiv.appendChild(imgElement);
  cardDiv.appendChild(postInfoDiv);
  container.appendChild(cardDiv);

}


function fetchPhotos() {
  fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let container = document.getElementById('post-list');
      data.forEach(function (post) {
        buildCardsUsingDOMAPI(container, post);
      });

    });
  console.log('test');
}
fetchPhotos();

