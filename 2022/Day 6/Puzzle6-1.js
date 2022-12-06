/* https://adventofcode.com/2022/day6 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\r\n')[0];

start(input)
function start(input) {
	const markerNum = 4
	for (let i = 0; i <= input.length - 1; i++) {
		if (i <= input.length - markerNum) {
			const section = input.slice(i, i + markerNum)
			let hasDuplicate = false
			for (let j = 0; j <= section.length - 1; j++) {
				const charIndex = section.indexOf(section[j])
				if (charIndex != j && charIndex != -1) {
					hasDuplicate = true
					break;
				}
			}
			if (!hasDuplicate) {
				console.log('Chars Processed', i + markerNum)
				break;
			}
		}
	}
}