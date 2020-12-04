var fs = require('fs');
var text = fs.readFileSync('./day2_input.txt', 'utf-8');
var textByLine = text.split('\n')
var linesAsObjs = [];
textByLine.forEach(line => {
  linesAsObjs.push({
    policy: line.split(':')[0],
    password: line.split(':')[1].substring(1)
  })
})

var count = 0;

linesAsObjs.forEach(line => {
  const min = parseInt(line.policy.split(' ')[0].split('-')[0], 10);
  const max = parseInt(line.policy.split(' ')[0].split('-')[1], 10);
  const letter = line.policy.split(' ')[1];

  if ((line.password.match(new RegExp(letter, 'g')) || []).length >= min && (line.password.match(new RegExp(letter, 'g')) || []).length <= max) {
    count++;
  }
})
console.log(count);