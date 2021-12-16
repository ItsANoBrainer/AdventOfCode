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
    const basinLocations = getBasinLocations(ventMap)

    let basinSizes = []
    basinLocations.forEach(location => {
        basinSizes.push(getBasinSize(ventMap, location))
    })

    console.log(basinLocations)
    console.log(basinSizes)
}

function getBasinSize(ventMap, startLocation) {
    let size = 0
    let checkedLocations = []
    
    size+=ventMap[startLocation[0]][startLocation[1]]
    checkedLocations.push(getStringFromLocation(row, col))

    let currAdjLocs = {}
    let 
    while(currAdjLocs['above'] || currAdjLocs['right'] || currAdjLocs['below'] || currAdjLocs['left']) {

    }
}

function getStringFromLocation(row, col) {
    return `${row},${col}`
}

function getSurroundingLocations(ventMap, row, col) {
    return {
        'above': getAbove(ventMap, row, col), 
        'right': getRight(ventMap, row, col), 
        'below': getBelow(ventMap, row, col), 
        'left': getLeft(ventMap, row, col), 
    }
}

function getBasinLocations(ventMap) {
    let basinLocations = []
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

            if(isLowest) { basinLocations.push([i,j]) }
        }
    }
    return basinLocations
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