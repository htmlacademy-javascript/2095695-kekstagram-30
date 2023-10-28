
function createIdGenerator() {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

function getRandomPositiveInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function getRandomArrayElement(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

export {createIdGenerator, getRandomArrayElement, getRandomPositiveInteger, checkStringLength};
