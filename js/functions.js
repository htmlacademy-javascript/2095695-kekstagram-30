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

// функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность
// встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false
function checkMeetingTime(startTime, endTime, meetingStartTime, meetingDurationInMinutes) {
  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);
  const meetingStartMinutes = convertToMinutes(meetingStartTime);
  const meetingEndMinutes = meetingStartMinutes + meetingDurationInMinutes;
  return meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;
}
function convertToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

checkMeetingTime('8:0', '10:0', '8:0', 120);

