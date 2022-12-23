import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgItemEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
  })
  .join("");

function onGalleryElClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()

function handleCloseAction(event) {
    if (event.code === "Escape") {
      instance.close();
    }

}

}


galleryEl.insertAdjacentHTML("afterbegin", imgItemEl);
galleryEl.addEventListener("click", onGalleryElClick);
