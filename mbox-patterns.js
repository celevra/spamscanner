const numeral = require('numeral');

const patterns = [
  '.mbox',
  '*.mbox.*',
  '.mail',
  '*.mail.*',
  '*.mail',
  '*.mbox',
  '*.orig'
];

const array = [];

for (let i = 0; i <= 99; i++) {
  for (let z = 0; z <= 99; z++) {
    array.push(
      `*.19${numeral(i).format('00')}.${numeral(z).format('00')}`,
      `*.20${numeral(i).format('00')}.${numeral(z).format('00')}`,
      `19${numeral(i).format('00')}-${numeral(z).format('00')}`,
      `20${numeral(i).format('00')}-${numeral(z).format('00')}`
    );
  }
}

for (const pattern of patterns) {
  array.push(pattern, `*/${pattern}`, `*/**/${pattern}`, `*/**/**/${pattern}`);
}

module.exports = array;
