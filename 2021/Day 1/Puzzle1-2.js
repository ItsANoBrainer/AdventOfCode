/* https://adventofcode.com/2021/day/1#part2 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n');


start(arrayStringToInt(input))

function start(input) {
    const newDepths = createDepthSums(input)

    let totalIncreases = 0
    newDepths.forEach((depth, index, depths) => {
        if (index != 0 && depth > depths[index - 1]) { totalIncreases++ }
    })

    console.log(`Total Increases: ${totalIncreases}`)
}

function createDepthSums(depths) {
    let newDepthSums = []
    depths.forEach((depth, index, depths) => {
        if (index < (depths.length - 2)) {
            newDepthSums.push(depth + depths[index + 1] + depths[index + 2])
        }
    })
    return newDepthSums
}

function arrayStringToInt(input) {
    let intArray = []
    input.forEach(element => {
        intArray.push(parseInt(element))
    })
    return intArray
}