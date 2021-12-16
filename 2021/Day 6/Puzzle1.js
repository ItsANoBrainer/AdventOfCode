/* https://adventofcode.com/2021/day/6 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input, 80)

function start(input, days) {
    let fishies = [...input[0].split(',')].map(x => parseInt(x))



    for(let d = 1; d <= days; d++) {
        let newFish = 0


        fishies.forEach((fish, element) => {
            if(fish == 0) {
                fishies[element] = 6
                newFish++
            } else { 
                fishies[element]--
            }
        })

        for(let n = 0; n < newFish; n++ ) { fishies.push(8) }
    }

    console.log(`Oh boy there are ${fishies.length} fish!`)
    console.log(fishies)
}
