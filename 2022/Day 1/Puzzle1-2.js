/* https://adventofcode.com/2022/day/1#part2 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input)
function start(input) {
    // Make each array index a number instead of string. Empty lines make undefined for later.
    input = input.map(x => parseInt(x) || undefined)

    // Loop through all input. Make an array of each number until undefined is hit, then take that array and push it to the totals array.
    let totals = []
    let tempTotal = []
    input.forEach(num => {
        if (num == undefined) {
            totals.push(tempTotal)
            tempTotal = []
        } else {
            tempTotal.push(num)
        }
    })

    // Take the total of each index's array and make that array of totals the new array
    totals = totals.map(totalArray => {
        let total = 0
        totalArray.forEach(num => total += num)
        return total
    })

    // Sort by highest to lowest
    totals.sort(function (a, b) { return b - a })

    console.log(`Highest 3 Total: ${totals[0] + totals[1] + totals[2]}`)
}