/* https://adventofcode.com/2021/day/3 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input)

function start(input) {
    const oxygenRating = getRating('o2')
    const co2Rating = getRating('co2')

    console.log(`Ratings: O2 - ${oxygenRating} | CO2 - ${co2Rating} | Life Support Rating - ${oxygenRating*co2Rating}`)
}

function getBitPositionAmounts(input) {
    let bitTracking = {}

    for (let i = 0; i < input[0].length; i++) {
        bitTracking[i] = { 0: 0, 1: 0 }
    }

    input.forEach((binaryNumber) => {
        for (let b = 0; b < binaryNumber.length; b++) {
            if (binaryNumber[b] == '0') {
                bitTracking[b]['0'] += 1
            } else {
                bitTracking[b]['1'] += 1
            }
        }
    })

    Object.keys(bitTracking).forEach((index) => {
        if (bitTracking[index]['0'] > bitTracking[index]['1']) {
            bitTracking[index]['greater'] = '0'
            bitTracking[index]['lesser'] = '1'
        } else {
            bitTracking[index]['greater'] = '1'
            bitTracking[index]['lesser'] = '0'
        }
    })

    return bitTracking
}

function getRating(type) {
    let bitPositions = getBitPositionAmounts(input)
    let inputCopy = [...input]
    let newInput = []
    let currentBit = 0
    while (inputCopy.length > 1 || currentBit > Object.keys(bitPositions).length) {
        for (let i = inputCopy.length - 1; i >= 0; i--) {
            const litBit = (type == 'o2' ? bitPositions[currentBit].greater : bitPositions[currentBit].lesser)
            if (inputCopy[i][currentBit] == litBit) { newInput.push(inputCopy[i]) }
        }
        inputCopy = [...newInput]
        newInput = []
        bitPositions = getBitPositionAmounts(inputCopy)
        currentBit++
    }

    return parseInt(inputCopy[0], 2)
}