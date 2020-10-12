import images from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const closeModal = document.querySelector(".lightbox__button");
const modalWindow = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");

const imagesMarkup = creatImagesMarkup(images);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

galleryContainer.addEventListener("click", onOpenModal);
closeModal.addEventListener("click", onCloseModal);

function creatImagesMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join("");
}

function onOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
    }
    
  modalWindow.classList.add("is-open");

  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
}

function onCloseModal() {

  modalWindow.classList.remove("is-open");
  modalImg.src = " ";
}



