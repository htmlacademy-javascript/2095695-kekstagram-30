import {showBigPicture} from './big-pictures.js';
function renderPhotos(photos) {
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  const picturesBlockElement = document.querySelector('.pictures');
  picturesBlockElement.querySelector('.pictures__title').classList.remove('visually-hidden');
  photos.forEach((photo) => {
    const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);
    const thumbnail = pictureTemplate.querySelector('.picture');

    thumbnail.querySelector('.picture__img').src = photo.url;
    thumbnail.querySelector('.picture__img').alt = photo.description;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

    thumbnail.addEventListener('click', () => {
      showBigPicture(photo); // Вызываем функцию полноразмерного режима и передаем данные фотографии
    });

    fragment.appendChild(thumbnail);
  });

  picturesContainer.appendChild(fragment);
}
export { renderPhotos };
