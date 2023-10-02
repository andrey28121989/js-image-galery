const image = document.querySelector('.grid__img');
const search = document.querySelector('.input');
const iconSearch = document.getElementById('search');

async function getData(photo) {
  const url = `https://api.unsplash.com/search/photos?query=${photo}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
  const response = await fetch(url);
  const data = await response.json();
  renderItem(data);
  console.log(data);
}

document.addEventListener('DOMContentLoaded', getData);

function renderItem(data) {
  setPhotos()
  if (data.results.length === 0) {
    image.innerHTML = 'Errors';     
  }
  data.results.map(i => {
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = i.urls.regular;
    img.alt = 'Image';
    image.appendChild(img);
  })
}

function setPhotos() {
  image.innerHTML = '';
}

function enter(e) {
    if (e.keyCode === 13) {
        getData(input.value);
    }
}

search.addEventListener('keydown', enter);


const closeButton = document.querySelector('.button');

const closeInput = e => {
  search.value = '';
}

closeButton.addEventListener("click", closeInput);
