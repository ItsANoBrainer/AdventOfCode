/* https://adventofcode.com/2017/day/1#part2 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim();

console.log(start(input))

function start(input) {
    let total = 0
    const array = input.split("").map(x => parseInt(x))

    array.forEach((num, index, array) => {
        const moveAmount = array.length / 2
        const newIndex = index + moveAmount
        const actualIndex = newIndex > array.length-1 ? (newIndex) - (array.length-1) - 1: newIndex
        if (num == array[actualIndex]) {
            total += num
        }
    })
    return total
}