import { renderGallery } from './gallery.js';
import { loadPicture } from './api.js';
import './form-validator.js';
import { showErrorMessage } from './util.js';
import { initFilter } from './filter.js';

async function bootstrap() {
  try {
    const pictures = await loadPicture();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
}

bootstrap();

