/* https://adventofcode.com/2018/day/1#part2 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

console.log(start(input))

function start(input) {
    let total = 0
    let frequencies = []
    let isFound = false
    while (!isFound) {
        input.forEach(num => {
            if(!isFound) {
                total+=parseInt(num)
                if(frequencies.includes(total)) {
                    isFound = true
                } else {
                    frequencies.push(total)
                }
            }
        })
    }
    return total
}