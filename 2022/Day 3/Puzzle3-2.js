/* https://adventofcode.com/2022/day3#part2 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\r\n');

start(input)
function start(input) {
	const points = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let total = 0

	let groups = []
    for (let i = 0; i < input.length; i += 3) {
        groups.push(input.slice(i, i + 3));
    }

	groups.forEach(group => {
		let found = false
		let first = group[0]
		let second = group[1]
		let third = group[2]

		for(let i = 0; i < first.length; i++) {
			const currentChar = first.charAt(i)
			if(!found && second.indexOf(currentChar) != -1 && third.indexOf(currentChar) != -1) {
				total += (points.indexOf(currentChar)+1)
				found = true
			}
		}
	})


	console.log(groups, total)
}