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

// PART 1

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

// PART 2

count = 0;

linesAsObjs.forEach(line => {
  const pos1 = parseInt(line.policy.split(' ')[0].split('-')[0], 10);
  const pos2 = parseInt(line.policy.split(' ')[0].split('-')[1], 10);
  const letter = line.policy.split(' ')[1];

  if ((line.password.charAt(pos1 - 1) === letter || line.password.charAt(pos2 - 1) === letter) && !(line.password.charAt(pos1 - 1) === letter && line.password.charAt(pos2 - 1) === letter) ) {
    count++
  }
})

console.log(count);