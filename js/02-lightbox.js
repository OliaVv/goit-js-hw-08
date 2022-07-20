// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryList = galleryItems.map(({preview, original, description}) => `
<li class="gallery__list">
    <a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}"
            alt="${description}"
        />
    </a>
</li>`).join("");


//<a class="gallery__item" href="large-image.jpg">
 // <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//</a>

gallery.insertAdjacentHTML("beforeend", galleryList);

const lightboxGallery = new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });