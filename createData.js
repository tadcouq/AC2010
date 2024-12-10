import fs from 'fs';
const filename = './dataStudent.json';

const minStrLen = 8;
const maxStrLen = 8;

const maxElement = 9000;
let k = 1;
let aSV = [ ];

for (let i = 1; i < maxElement; i++) {
  let sv = {id: (20000000+(Math.floor(Math.random()*(24-19)+19))*10000+(i+1)), name: makeRdnStr(makeRdnFloat(minStrLen, maxStrLen)), cpa: makeRdnFloat(0,4).toFixed(2)};
  aSV.push(sv);
}

const jsonData = (JSON.stringify(aSV));
fs.writeFile(filename, jsonData, 'utf-8', (err) => console.log(err? err:'The file was saved!'));

// Tools

function makeRdnStr(length) {
  let result = '';
  const characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function makeRdnFloat(min, max) {
  return (Math.random() * (max - min) ) + min;
}

// For debug
console.log(aSV);
console.log(jsonData);