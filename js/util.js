import { createIdGenerator } from './data.js';
export const generateCommentId = createIdGenerator();
export const generatePictureId = createIdGenerator();

export function getRandomPositiveInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

export function getRandomArrayElement(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

export function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}


