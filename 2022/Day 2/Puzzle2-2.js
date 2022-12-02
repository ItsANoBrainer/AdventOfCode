/* https://adventofcode.com/2022/day2#part2 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\r\n');

start(input)

// A = Rock 1 | B = Paper 2 | C = Scissors 3 - X = Loss 0 | Y = Draw 3 | Z = Win 6
function start(input) {
	const outcomes = {
		['A X']: 3,
		['A Y']: 4,
		['A Z']: 8,
		['B X']: 1,
		['B Y']: 5,
		['B Z']: 9,
		['C X']: 2,
		['C Y']: 6,
		['C Z']: 7,
	}
	let total = 0
	input.forEach(x => {
		total += outcomes[x]
	})
	console.log(total)
}