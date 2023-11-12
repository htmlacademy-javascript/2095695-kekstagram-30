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
  updateSlider();
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


const normalizeHashtags = (str) => {
  const hashtags = str.trim().split(' ').filter((hashtag) => hashtag.length > 0);
  return hashtags;
};

const checkValidateHashtag = (value) => {
  const hashtags = normalizeHashtags(value);
  return hashtags.every((hashtag) => HASHTAG_SYMBOLS.test(hashtag));
};

const checkHashtagListLength = (value) => {
  const hashtags = normalizeHashtags(value);
  return hashtags.length <= MAX_HASHTAG_COUNT;
};

const checkUniqueHashtags = (value) => {
  const hashtags = normalizeHashtags(value).map((hashtag) => hashtag.toLowerCase());
  return hashtags.length === new Set(hashtags).size;
};

pristine.addValidator(
  hashtagField,
  checkValidateHashtag,
  'Введён невалидный хэш-тег',
  1,
  true
);

pristine.addValidator(
  hashtagField,
  checkHashtagListLength,
  'Превышено количество хэш-тегов',
  2,
  true
);

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

