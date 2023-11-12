import { getPictures } from './get-pictures.js';
import { renderGallery } from './gallery.js';
const AMOUNT_OF_DESCRIPTION = 25;
renderGallery(getPictures(AMOUNT_OF_DESCRIPTION));
import './img-upload-form.js';
import './form-validator.js';
