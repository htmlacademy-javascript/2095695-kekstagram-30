// Функция для проверки длины строки.
function checkStringLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}
checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом.
function checkStringPalindrome(inputString) {
  const normalizedString = inputString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
}

checkStringPalindrome('топот');
checkStringPalindrome('ДовОд');
checkStringPalindrome('Кекс');
checkStringPalindrome('Лёша на полке клопа нашёл');

