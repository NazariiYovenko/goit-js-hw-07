import { galleryItems } from "./gallery-items.js";

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
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const boxMarkup = `<img src="${event.target.dataset.source}" width="800" height="600">`;

  function onKeyDownAction(event) {
    event.preventDefault();
    if (event.code === "Escape") {
      instance.close();
    }
  }

  const addListener = () =>
    document.addEventListener("keydown", onKeyDownAction);

  const removeListener = () =>
    document.removeEventListener("keydown", onKeyDownAction);

  const instance = basicLightbox.create(boxMarkup, {
    onShow: addListener,
    onClose: removeListener,
  });

  instance.show();
}
