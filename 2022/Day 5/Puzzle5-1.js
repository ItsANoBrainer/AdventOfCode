/* https://adventofcode.com/2022/day5 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.split('\r\n');

start(input)
function start(input) {
	const division = input.indexOf('')
	let stacks = GetStacks(input.slice(0, division))
	const instructions = input.slice(division + 1)

	instructions.forEach(instruction => {
		const split = instruction.split(' ')
		const moveAmount = split[1]
		const moveFrom = split[3]
		const moveTo = split[5]

		for (i = 1; i <= moveAmount; i++) {
			stacks[moveTo - 1].push(stacks[moveFrom - 1].pop())
		}
	})

	const topLevel = stacks.map(stack => {
		return stack.slice(-1)
	}).join('')

	console.log(topLevel)
}

function GetStacks(stackInput) {
	const stacks = stackInput.slice(0, stackInput.length - 1)
	const stackIndexes = stackInput.reverse()[0]
	const numberOfStacks = parseInt(stackIndexes[stackIndexes.length - 1])
	let finalStacks = []

	stacks.reverse().forEach(x => {
		for (i = 1; i <= numberOfStacks; i++) {
			const currentIndex = stackIndexes.indexOf(i.toString())
			const currentLetter = x[currentIndex]
			if (currentLetter && currentLetter != ' ') {
				if (!finalStacks[i - 1]) finalStacks[i - 1] = []
				finalStacks[i - 1].push(currentLetter)
			}
		}
	})

	return finalStacks
}