/* https://adventofcode.com/2022/day3 */
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

	input.forEach(x => {
		const first = x.slice(0,x.length/2)
		const second = x.slice(x.length/2)
		let found = false
		for(let i = 0; i < first.length; i++) {
			const currentChar = first.charAt(i)
			if(!found && second.indexOf(currentChar) != -1) {
				total += (points.indexOf(currentChar)+1)
				found = true
			}
		}
	})

	console.log(total)
}