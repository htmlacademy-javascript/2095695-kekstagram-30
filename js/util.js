
// функция, которая генерирует случайное целое положительное число в заданном диапазоне.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция, которая проверяет, что длина переданной строки не превышает заданное значение
const checkStringLength = (string, length) => string.length <= length;

// Функция, которая выбирает случайный элемент из переданного массива.
const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

export { getRandomPositiveInteger, checkStringLength, getRandomArrayElement };
