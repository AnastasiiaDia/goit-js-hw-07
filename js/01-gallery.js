import { galleryItems } from "./gallery-items.js";
const ulEl = document.querySelector(".gallery");

ulEl.addEventListener("click", onClick);

setToGallery(createMarkup(galleryItems));

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`
    )
    .join("");
}

function setToGallery(markup) {
  ulEl.insertAdjacentHTML("beforeend", markup);
}

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  scale(evt);
}

function scale(evt) {
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
  ulEl.addEventListener(
    "keydown",
    (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}
