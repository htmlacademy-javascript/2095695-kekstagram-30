import {
  avatarCount, names, commentLines, descriptions, minLikes, maxLikes,
  minComments, maxComments, minCommentLines, maxCommentLines,
} from './data.js';
import { createIdGenerator, getRandomPositiveInteger, getRandomArrayElement } from './util.js';

function createMessage() {
  const lines = Array.from({ length: getRandomPositiveInteger(minCommentLines, maxCommentLines) },
    () => getRandomArrayElement(commentLines));
  return lines.join(' ');
}

function createComment() {
  const generateCommentId = createIdGenerator();
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, avatarCount)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(names),
  };
}

function createPicture(generatePictureId) {
  const pictureId = generatePictureId();
  return {
    id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomPositiveInteger(minLikes, maxLikes),
    comments: Array.from({ length: getRandomPositiveInteger(minComments, maxComments) }, () => createComment()),
  };
}

function getPictures(count) {
  const generatePictureId = createIdGenerator();
  return Array.from({ length: count}, () => createPicture(generatePictureId));
}

export { getPictures };
