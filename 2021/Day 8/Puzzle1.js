/* https://adventofcode.com/2021/day/8 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input)

function start(input) {
    let total = 0

    input.forEach(entry => {
        const splitEntry = entry.split(' | ')
        const signalPatterns = splitEntry[0].split(' ')
        const outputPatterns = splitEntry[1].split(' ')

        const goodDigits = [2,4,3,7]

        outputPatterns.forEach(pattern => {
            if(goodDigits.includes(pattern.length)) { total++ }
        })

    })

    console.log(`Total Times Appear: ${total}`)
}
