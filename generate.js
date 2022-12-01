const fs = require('fs')

main()
function main() {
	const year = 2022
	CreateFolder(`${year}`, '.\\')
	for (let day = 1; day <= 25; day++) {
		CreateFolder(`Day ${day}`, `.\\${year}`)
		CreateFile(`input.txt`, `.\\${year}\\Day ${day}`, '')
		CreateFile(`Puzzle${day}-1.js`, `.\\${year}\\Day ${day}`, GenerateContent(day, year, 1))
		CreateFile(`Puzzle${day}-2.js`, `.\\${year}\\Day ${day}`, GenerateContent(day, year, 2))
	}
}

function CreateFolder(name, location) {
	const dir = `${location}\\${name}`
	if (!fs.existsSync(dir)) fs.mkdirSync(dir)
}

function CreateFile(name, location, content) {
	const dir = `${location}\\${name}`
	if(!fs.existsSync(dir)) fs.writeFileSync(dir, content)
}

function GenerateContent(day, year, part) {
	return `/* https://adventofcode.com/${year}/day${day}${part == 2 ? "#part2" :''} */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\\r\\n');

start(input)
function start(input) {

}`
}