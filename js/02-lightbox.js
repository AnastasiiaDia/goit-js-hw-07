import { galleryItems } from "./gallery-items.js";

const ulEl = document.querySelector(".gallery");

// ulEl.addEventListener("click", onClick);

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

SetToGallery(CreateMarkup(galleryItems));

function CreateMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
    )
    .join("");
}

function SetToGallery(gallery) {
  ulEl.innerHTML = gallery;
}

// function onClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   scale(evt);
// }

// function scale(evt) {

//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}" width="800" height="600">`
//   );

//   ulEl.addEventListener(
//     "keydown",
//     (evt) => {
//       if (evt.code === "Escape") {
//         instance.close();
//       }
//     },
//     { once: true }
//   );
// }
