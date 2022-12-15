import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
// Change code below this line
const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onGalleryElClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function onGalleryElClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  const bigGalleryImg = event.target.dataset.source;
  console.log(bigGalleryImg);
  const instance = basicLightbox.create(`
    <img src="${bigGalleryImg}" width="800" height="600">`);

  instance.show();
}
