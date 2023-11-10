import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import {updateSlider } from './effects.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1, 19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  updateSlider.classList.add('hidden');
  resetScale();
  resetEffects();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

const hasValidCommentLength = () => {
  const comment = commentField.value.trim();
  return comment.length <= MAX_COMMENT_LENGTH;
};
pristine.addValidator(
  commentField,
  hasValidCommentLength,
  'Длина комментария не может быть больше 140 символов');


const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const isValidTag = (tag) => HASHTAG_SYMBOLS.test(tag);

pristine.addValidator(
  hashtagField,
  isValidTag,
  'Введён невалидный хэш-тег',
  1,
  true
);

const hasValidCount = (tagsString) => {
  const tagsArray = tagsString.split(' ');
  return tagsArray.length <= MAX_HASHTAG_COUNT;
};

pristine.addValidator(
  hashtagField,
  hasValidCount,
  'Превышено количество хэш-тегов',
  2,
  true
);

const checkUniqueHashtags = (value) => {
  const hashtags = value
    .split(' ').filter((tag) => tag.trim().length);

  const lowerCaseHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};


pristine.addValidator(
  hashtagField,
  checkUniqueHashtags,
  'Хэш-теги повторяются',
  3,
  true
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export { isTextFieldFocused };
