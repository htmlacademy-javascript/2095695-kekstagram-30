// // Функция для проверки длины строки.
// const checkStringLength = (inputString, maxLength) => inputString.length <= maxLength;
// checkStringLength('проверяемая строка', 20);

// // Функция для проверки, является ли строка палиндромом.
// function checkStringPalindrome(inputString) {
//   const normalizedString = inputString.replaceAll(' ', '').toLowerCase();
//   let reversedString = '';
//   for (let i = normalizedString.length - 1; i >= 0; i--) {
//     reversedString += normalizedString[i];
//   }
//   return normalizedString === reversedString;
// }

// checkStringPalindrome('Лёша на полке клопа нашёл');

// // Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// function extractDigitsAndParseToInt(inputString) {
//   const digitMatches = inputString.match(/\d/g);
//   if (digitMatches) {
//     const digitsString = digitMatches.join('');
//     const parsedNumber = parseInt(digitsString, 10);
//     return isNaN(parsedNumber) ? NaN : parsedNumber;
//   } else {
//     return NaN;
//   }
// }

// extractDigitsAndParseToInt('2023 год');

// // возвращает функцию для генерации уникальных идентификаторов
// function createIdGenerator() {
//   let lastGeneratedId = 0;
//   return function () {
//     lastGeneratedId += 1;
//     return lastGeneratedId;
//   };
// }

// const generateCommentId = createIdGenerator();
// const generatePictureId = createIdGenerator();

// const avatarCount = 6;
// const minLikes = 15;
// const maxLikes = 200;
// const minComments = 0;
// const maxComments = 6;
// const maxCommentLines = 2;
// const minCommentLines = 1;
// const amountOfDescription = 25;

// const commentLines = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];

// const descriptions = [
//   'Утренний кофе в любимой кофейне. #кофе #утро #кофейня #вкусно #пробуждение',
//   'Прогулка в парке под лучами солнца. #прогулка #парк #солнце #природа #весна',
//   'Закат над океаном. #закат #океан #пейзаж #красота #путешествие',
//   'Семейный ужин с самодельными бургерами. #ужин #бургеры #семья #вкусно #вечер',
//   'Путешествие в горы на выходные. #горы #путешествие #приключения #природа',
//   'Романтический ужин на крыше. #романтика #крыша #ужин #вечер #звезды',
//   'Встреча заката на вершине горы. #закат #горы #путешествие #природа #красота',
//   'Колоритный рынок в местной деревне. #рынок #местнаякухня #путешествие #культура',
//   'Учебная сессия в полном разгаре. #учеба #студенты #сессия #библиотека #знания',
//   'Забавные игры с детьми во дворе. #дети #игры #двор #веселье #семья',
//   'Вдохновляющее занятие искусством. #творчество #искусство #художество #вдохновение',
// ];

// const names = [
//   'Александр',
//   'Дмитрий',
//   'Анна',
//   'Иван',
//   'Юлия',
//   'Сергей',
//   'Светлана',
//   'Владимир',
//   'Павел',
//   'Антон',
// ];

// const getRandomPositiveInteger = (min, max) => {
//   const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
//   const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
//   return Math.floor(Math.random() * (upper - lower + 1) + lower);
// };

// const checkStringLength = (string, maxLength) => string.length <= maxLength;

// const getRandomArrayElement = (array) =>
//   array[getRandomPositiveInteger(0, array.length - 1)];

// const createMessage = () =>
//   Array.from({ length: getRandomPositiveInteger(minCommentLines, maxCommentLines) }, () =>
//     getRandomArrayElement(commentLines)
//   ).join(' ');

// const createComment = () => ({
//   id: generateCommentId(),
//   avatar: `img/avatar-${getRandomPositiveInteger(1, avatarCount)}.svg`,
//   message: createMessage(),
//   name: getRandomArrayElement(names),
// });

// const createPicture = () => {
//   const pictureId = generatePictureId();
//   return {
//     id: pictureId,
//     url: `photos/${pictureId}.jpg`,
//     description: getRandomArrayElement(descriptions),
//     likes: getRandomPositiveInteger(minLikes, maxLikes),
//     comments: Array.from(
//       { length: getRandomPositiveInteger(minComments, maxComments) },
//       () => createComment()
//     ),
//   };
// };
// const getPictures = () =>
//   Array.from({ length: amountOfDescription }, () => createPicture());


// checkStringLength(0, 140);
// getPictures();
