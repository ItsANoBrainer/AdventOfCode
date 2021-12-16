/* https://adventofcode.com/2021/day/6 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input, 256)

function start(input, days) {
    const fishies = [...input[0].split(',')].map(x => parseInt(x))
    let fishAgeCount = []

    for(let i = 0; i < 9; i++) { fishAgeCount[i] = 0}
    fishies.forEach(fish => { fishAgeCount[fish]++ })

    console.log(`Initial | ${fishAgeCount}`)
    for(let d = 1; d <= days; d++) {
        let newFish = 0
        fishAgeCount.forEach((count, index) => {
            if(index == 0) { 
                newFish = count
                fishAgeCount[0] = 0
            } else {
                fishAgeCount[index-1] = count
                fishAgeCount[index] = 0
            }
        })

        fishAgeCount[6] += newFish
        fishAgeCount[8] = newFish

        console.log(`Day ${d} | ${fishAgeCount}`)
    }

    console.log(`Oh boy there are ${fishAgeCount.reduce((old, curr) => old + curr)} fish!`)
}
