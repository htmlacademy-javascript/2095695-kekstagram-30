const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];
const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
export { updateSlider };

// const normalizeHashtags = (str) => str.trim().split(' ').filter((hashtag) => Boolean(hashtag.length));
// const checkValidateHashtag = (value) => normalizeHashtags(value).every((hashtag) => REXEXP_HASHTAG.test(hashtag));
// const checkHashtagListLength = (value) => normalizeHashtags(value).length <= NUMBER_OF_HASHTAGS;
// const checkUniqueHashtags = (value) => {
//   const loserCaseHashtags = normalizeHashtags(value).map((hashtag) => hashtag.toLowerCase());
//   return loserCaseHashtags.length === new Set(loserCaseHashtags).size;
// };
// //введён невалидный хэш-тег
// pristine.addValidator(
//   textHashtags,
//   checkValidateHashtag,
//   'Введён невалидный хэш-тег',
//   1,
//   true
// );
// //превышено количество хэш-тегов
// pristine.addValidator(
//   textHashtags,
//   checkHashtagListLength,
//   'Превышено количество хэш-тегов',
//   2,
//   true
// );
// //хэш-теги повторяются
// pristine.addValidator(
//   textHashtags,
//   checkUniqueHashtags,
//   'Хэш-теги повторяются',
//   3,
//   true
