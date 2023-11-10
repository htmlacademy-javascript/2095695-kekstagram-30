import { isTextFieldFocused} from './form-validator.js';
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const previewContainer = document.querySelector('.img-upload__preview');
const previewImage = previewContainer.querySelector('img');

const bodyContainer = document.body;

const showEditingForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onImgEscKeydown);

  const file = imgUploadInput.files[0];
  const reader = new FileReader();

  // Определяем обработчик события onload для обновления предварительного просмотра
  reader.onload = function () {
    previewImage.src = reader.result;
  };

  // Если выбран файл, читаем его содержимое
  if (file) {
    reader.readAsDataURL(file);
  }
};


const onShowFormButtonClick = () => {
  showEditingForm();
};

const closeEditingForm = () => {
  imgUploadOverlay.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEscKeydown);
  imgUploadInput.value = '';
};

const onCloseFormButtonClick = () => {
  closeEditingForm();
};

function onImgEscKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeEditingForm();
  }
}

imgUploadInput.addEventListener('change', onShowFormButtonClick);
imgUploadCancelButton.addEventListener('click', onCloseFormButtonClick);
