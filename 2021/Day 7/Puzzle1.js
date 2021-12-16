/* https://adventofcode.com/2021/day/7 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input)

function start(input) {
    let crabPositions = [...input[0].split(',')]
    let cheapestPosition;
    let cheapestFuel;

    for(let i = 0; i < crabPositions.length; i++) {
        let totalFuel = 0
        crabPositions.forEach((position) => {
            totalFuel+=(Math.abs(position-i))
        })

        if(cheapestPosition == undefined || totalFuel < cheapestFuel) { 
            cheapestPosition = i
            cheapestFuel = totalFuel
        }
    }

    console.log(`The cheapest fuel is ${cheapestFuel} at position ${cheapestPosition}!`)
}
