/* https://adventofcode.com/2017/day/1 */
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
        if (num == array[index == array.length -1 ? 0 : index+1]) {
            total += num
        }
    })
    return total
}