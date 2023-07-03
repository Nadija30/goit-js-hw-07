import { galleryItems } from './gallery-items.js';
// Change code below this line
let instance;
console.log(galleryItems);
const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => 
`<li class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}"
    />
  </a>
</li >`);
container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick)

function onClick(evt) {
     evt.preventDefault();
if (!evt.target.classList.contains('gallery__image')) {
    return;  
}
 //console.log(evt.target)
    const imgSource = evt.target.dataset.source ?? evt.target.closest('img').dataset.source;
  console.log(imgSource);

  instance = basicLightbox.create(`
    <img
      src = "${imgSource}" "width="1280" height="auto"
    />
`, {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
	
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }
  );
    instance.show();

}

    function onEscKeyPress(evt) {
if (evt.code !== 'Escape') {
    return;
}
instance.close();
}


