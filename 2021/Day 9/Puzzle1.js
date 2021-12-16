/* https://adventofcode.com/2021/day/9 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input)

function start(input) {
    const ventMap = input.map(vents => (vents.split('').map(vent => parseInt(vent))))

    let riskLevel = 0

    for(let i = 0; i < ventMap.length; i++) {
        for(let j = 0; j < ventMap[i].length; j++) {
            const currentNumber = ventMap[i][j]

            let isLowest = true
            let isSameLevel = true
            let adjacentNumbers = []
            
            let adjLoc = {
                'above': getAbove(ventMap, i, j), 
                'right': getRight(ventMap, i, j), 
                'below': getBelow(ventMap, i, j), 
                'left': getLeft(ventMap, i, j), 
            }

            // Check above, right, below, left, and same level
            Object.keys(adjLoc).forEach(key => {
                if(adjLoc[key]) {
                    adjacentNumbers.push(adjLoc[key]['num'])
                    if(adjLoc[key]['num'] < currentNumber) { isLowest = false }
                    if(adjLoc[key]['num'] != currentNumber) { isSameLevel = false }
                }
            })
            // Check if same level
            if(isSameLevel) { isLowest = false }

            if(isLowest) { 
                // console.log(`${currentNumber} at row ${i} column ${j} was the lowest around. Adding ${currentNumber+1}. Total ${riskLevel+currentNumber+1}`)
                riskLevel+=(currentNumber+1)
            }

        }
    }

    console.log(`The risk level is ${riskLevel}`)
}

function getAbove(ventMap, row, col) {
    if(row != 0) { return { 'row': row-1, 'col': col, 'num': ventMap[row-1][col] } }
    return false
}

function getLeft(ventMap, row, col) {
    if(col != 0) { return { 'row': row, 'col': col-1, 'num': ventMap[row][col-1] } }
    return false
}

function getRight(ventMap, row, col) {
    if(col != ventMap[row].length-1) { return { 'row': row, 'col': col+1, 'num': ventMap[row][col+1] } }
    return false
}

function getBelow(ventMap, row, col) {
    if(row != ventMap.length-1) { return { 'row': row+1, 'col': col, 'num': ventMap[row+1][col] } }
    return false
}