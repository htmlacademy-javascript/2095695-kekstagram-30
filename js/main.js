import { renderGallery } from './gallery.js';
import { loadPicure } from './api.js';
import './img-upload-form.js';
import './form-validator.js';
import { showErrorMessage } from './util.js';

async function bootstrap() {
  try {
    const pictures = await loadPicure();
    renderGallery(pictures);
  } catch (error) {
    showErrorMessage();
  }
}

bootstrap();
showErrorMessage();
