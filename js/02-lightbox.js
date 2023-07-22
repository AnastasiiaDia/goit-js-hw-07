import { galleryItems } from "./gallery-items.js";

const ulEl = document.querySelector(".gallery");

setToGallery(createMarkup(galleryItems));

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
    )
    .join("");
}

function setToGallery(gallery) {
  ulEl.innerHTML = gallery;
}
let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
