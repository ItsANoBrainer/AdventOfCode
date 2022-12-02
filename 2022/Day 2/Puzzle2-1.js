/* https://adventofcode.com/2022/day2 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\r\n');

start(input)

// A = Rock | B = Paper 2 | C = Scissors 3 - X = Rock 1 | Y = Paper 2 | Z = Scissors 3 - Loss 0 | Draw 3 | Win 6
function start(input) {
	const outcomes = {
		['A X']: 4,
		['A Y']: 8,
		['A Z']: 3,
		['B X']: 1,
		['B Y']: 5,
		['B Z']: 9,
		['C X']: 7,
		['C Y']: 2,
		['C Z']: 6
	}
	let total = 0
	input.forEach(x => {
		total += outcomes[x]
	})
	console.log(total)
}