
function renderPhotos(photos) {
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  const picturesBlockElement = document.querySelector('.pictures');
  picturesBlockElement.querySelector('.pictures__title').classList.remove('visually-hidden');
  photos.forEach((photo) => {
    const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);
    const picture = pictureTemplate.querySelector('.picture');

    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__img').alt = photo.description;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;

    fragment.appendChild(picture);
  });

  picturesContainer.appendChild(fragment);
}
export { renderPhotos };
