// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.
// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems.map(({preview, original, description}) => `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`).join("");

//console.log(galleryList);

gallery.insertAdjacentHTML("beforeend", galleryList);

gallery.addEventListener("click", imageClick);

//const instance = basicLightbox.create(`<img src="${ev.target.dataset.source}">`), {}


function imageClick(ev) {
    ev.preventDefault();
    const targetImg = ev.target.classList.contains('gallery__image');
    if (!targetImg)
    {return};
    const instance = basicLightbox.create(`<img src="${ev.target.dataset.source}">`, {
        onShow: (instance) => {window.addEventListener("keydown", escape)},
        onClose: (instance) => {window.removeEventListener("keydown", escape)}
    })
//console.log(ev.target.dataset.source);
instance.show();
function escape(ev) {
    const escapeKey = "Escape";
    if (ev.code === escapeKey) {
        console.log(ev.code);
instance.close();
    }
};
}

