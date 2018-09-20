const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    var splitInput = input.split('d');
    var sum = 0;
    var rolls = [];
    for (i = 0; i < splitInput[0]; i++) {
        var roll = Math.floor(Math.random() * (splitInput[1])) + 1;
        sum += roll;
        rolls.push(roll);
    }
    console.log(sum + ': ' + rolls.toString());
});