import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}"><img src="${item.preview}"  class="gallery__image" alt="${item.description}"</img></a>`
  )
  .join("");

gallery.innerHTML = galleryItem;

const showFullscreenImage = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;
};

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
