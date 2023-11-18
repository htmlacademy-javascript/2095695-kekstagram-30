import { renderGallery } from './gallery.js';
import { loadPicure } from './api.js';
import './form-validator.js';
import { showErrorMessage } from './util.js';
import { initFilter } from './filter.js';

async function bootstrap() {
  try {
    const pictures = await loadPicure();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
}

bootstrap();

