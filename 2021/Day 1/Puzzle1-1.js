/* https://adventofcode.com/2021/day/1 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n');

start(arrayStringToInt(input))

function start(input) {

    let totalIncreases = 0
    input.forEach((depth, index, depths) => {
        if (index != 0 && depth > depths[index - 1]) { totalIncreases++ }
    })

    console.log(`Total Increases: ${totalIncreases}`)
}

function arrayStringToInt(input) {
    let intArray = []
    input.forEach(element => {
        intArray.push(parseInt(element))
    })
    return intArray
}