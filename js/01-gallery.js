import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML('beforeend', createGalery (galleryItems) );
gallery.addEventListener('click', openOriginalImage);


function createGalery(galleryItems) {
    
   return galleryItems.map(({ preview, original, description }) => {
        return ` <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    }).join('');
}

function openOriginalImage(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    else {
        window.addEventListener('keydown', onPressEscapeClosedOriginImage)
        const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" />
`
        )
        instance.show()
  
 function onPressEscapeClosedOriginImage (e) {
        if (e.code === "Escape") {
            window.removeEventListener('keydown', onPressEscapeClosedOriginImage)
            instance.close()
            console.log(e.code);
        }
}}
}
