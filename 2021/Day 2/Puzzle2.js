/* https://adventofcode.com/2021/day/2 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n');

start(input)

function start(input) {

    let depth = 0
    let horizontal = 0
    let aim = 0
    input.forEach((command) => {
        const commandArray = command.split(' ')
        const direction = commandArray[0]
        const amount = parseInt(commandArray[1])

        switch (direction) {
            case 'forward':
                horizontal += amount
                depth += (aim * amount)
                break;
            case 'up':
                aim -= amount
                break;
            case 'down':
                aim += amount
                break;
        }
    })

    console.log(`Totals: ${depth} * ${horizontal} = ${depth*horizontal}`)
}