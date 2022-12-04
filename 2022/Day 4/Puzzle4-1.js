/* https://adventofcode.com/2022/day4 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\r\n');

start(input)
function start(input) {
	let total = 0
	input.forEach(x => {
		const set1 = x.split(',')[0]
		const set1First = parseInt(set1.split('-')[0])
		const set1Second = parseInt(set1.split('-')[1])

		const set2 = x.split(',')[1]
		const set2First = parseInt(set2.split('-')[0])
		const set2Second = parseInt(set2.split('-')[1])

		const isSet1InSet2 = (set1First >= set2First && set1Second <= set2Second)
		const isSet2InSet1 = (set2First >= set1First && set2Second <= set1Second)
		if (isSet1InSet2 || isSet2InSet1 ) total++
	})

	console.log(total)
}