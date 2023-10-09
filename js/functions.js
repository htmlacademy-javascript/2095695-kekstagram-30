// Функция для проверки длины строки.
const checkStringLength = (inputString, maxLength) => inputString.length <= maxLength;
checkStringLength('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом.
function checkStringPalindrome(inputString) {
  const normalizedString = inputString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
}

checkStringPalindrome('Лёша на полке клопа нашёл');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function extractDigitsAndParseToInt(inputString) {
  const digitMatches = inputString.match(/\d/g);
  if (digitMatches) {
    const digitsString = digitMatches.join('');
    const parsedNumber = parseInt(digitsString, 10);
    return isNaN(parsedNumber) ? NaN : parsedNumber;
  } else {
    return NaN;
  }
}

extractDigitsAndParseToInt('2023 год');
