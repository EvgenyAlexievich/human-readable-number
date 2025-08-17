module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const res = [];

  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;
  const remainderTens = Math.floor(remainder / 10);
  const remainderUnits = remainder % 10;

  if (hundreds > 0) {
    res.push(`${units[hundreds]} hundred`);
  }

  if (remainder >= 10 && remainder < 20) {
    res.push(teens[remainder - 10]);
  } else {
    if (remainderTens > 0) {
      res.push(tens[remainderTens]);
    }
    if (remainderUnits > 0) {
      res.push(units[remainderUnits]);
    }
  }

  return res.join(' ');
};
