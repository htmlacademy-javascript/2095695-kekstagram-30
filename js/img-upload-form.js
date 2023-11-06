
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');

const bodyContainer = document.body;

const showEditingForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onImgEscKeydown);
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
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeEditingForm();
  }
}

imgUploadInput.addEventListener('change', onShowFormButtonClick);
imgUploadCancelButton.addEventListener('click', onCloseFormButtonClick);

export { showEditingForm, closeEditingForm, onImgEscKeydown };
