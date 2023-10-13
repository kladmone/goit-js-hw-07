import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imagesList = document.querySelector(".gallery");
function createImgListMarkup(img) {
  return img
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
const imgMarkup = createImgListMarkup(galleryItems);
imagesList.insertAdjacentHTML("beforeend", imgMarkup);

imagesList.addEventListener(){
    
};
console.log(galleryItems);
