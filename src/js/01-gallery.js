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
    imgEl.dataset.source = item.original;
    linkEl.appendChild(imgEl);

    return itemEl;
  });
  listGallery.append(...galleryElements);
}

listGallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const imageSource = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageSource}">`);
    instance.show();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeOnEscape);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
  }
});

createGalleryEl(galleryItems);
listGallery.addEventListener("click", (event) => {
  if (!event.target.closest(".gallery__item")) {
    event.preventDefault();
  }
});
