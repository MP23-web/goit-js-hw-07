import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const imgItemEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML('afterbegin', imgItemEl)

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

