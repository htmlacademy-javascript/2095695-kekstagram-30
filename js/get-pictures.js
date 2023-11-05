import {
  AVATAR_COUNT, NAMES, COMMENT_LINES, DESCRIPTIONS, MIN_LIKES, MAX_LIKES,
  MIN_COMMENTS, MAX_COMMENTS, MIN_COMMENT_LINES, MAX_COMMENT_LINES,
} from './data.js';
import { createIdGenerator, getRandomPositiveInteger, getRandomArrayElement } from './util.js';

function createMessage() {
  const lines = Array.from({ length: getRandomPositiveInteger(MIN_COMMENT_LINES, MAX_COMMENT_LINES) },
    () => getRandomArrayElement(COMMENT_LINES));
  return lines.join(' ');
}

function createComment() {
  const generateCommentId = createIdGenerator();
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, AVATAR_COUNT)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
}

function createPicture(generatePictureId) {
  const pictureId = generatePictureId();
  return {
    id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS) }, () => createComment()),
  };
}

function getPictures(count) {
  const generatePictureId = createIdGenerator();
  return Array.from({ length: count}, () => createPicture(generatePictureId));
}

export { getPictures };
