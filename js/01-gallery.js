import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img src="${item.preview}" data-source="${item.original}" class="gallery__image" alt="${item.description}"</img></a></div>`
  )
  .join("");

gallery.innerHTML = galleryItem;

const showFullscreenImage = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
  <img src="${source}"width="1280">`,
    {
      onShow: () => {
        window.addEventListener("keydown", escapeDown);
      },
      onClose: () => {
        window.removeEventListener("keydown", escapeDown);
      },
    }
  );

  const escapeDown = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
};

gallery.addEventListener("click", showFullscreenImage);
