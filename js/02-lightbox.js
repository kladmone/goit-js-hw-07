import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imagesList = document.querySelector(".gallery");
function createImgListMarkup(img) {
  return img
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
const imgMarkup = createImgListMarkup(galleryItems);
imagesList.insertAdjacentHTML("beforeend", imgMarkup);
imagesList.addEventListener("click", handleImageClick);
function handleImageClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
console.log(lightbox);
console.log(galleryItems);
