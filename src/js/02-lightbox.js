import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
const listGallery = document.querySelector(".gallery");

function createGalleryEl(items) {
  let galleryElements = items.map((item) => {
    let itemEl = document.createElement("li");
    itemEl.classList.add("gallery__item");

    let linkEl = document.createElement("a");
    linkEl.classList.add("gallery__link");
    linkEl.href = item.original;
    itemEl.appendChild(linkEl);

    let imgEl = document.createElement("img");
    imgEl.classList.add("gallery__image");
    imgEl.src = item.preview;
    imgEl.alt = item.description;

    linkEl.appendChild(imgEl);

    return itemEl;
  });
  listGallery.append(...galleryElements);
}

function initGallery(items) {
  let galleryElements = createGalleryEl(items);
  const captions = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
    // captionType: "alt",
  });
}
initGallery(galleryItems);
