/* https://adventofcode.com/2021/day/3 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n');

start(input)

function start(input) {
    let bitTracking = {}

    for (let i = 0; i < input[0].length - 1; i++) {
        bitTracking[i] = { 0: 0, 1: 0 }
    }

    input.forEach((binaryNumber) => {
        for (let b = 0; b < binaryNumber.length - 1; b++) {
            if (binaryNumber[b] == '0') {
                bitTracking[b]['0'] += 1
            } else {
                bitTracking[b]['1'] += 1
            }
        }
    })

    let gamma = ''
    let epsilon = ''

    Object.keys(bitTracking).forEach((key) => {
        const currentIndex = bitTracking[key]
        if (currentIndex['0'] > currentIndex['1']) {
            gamma += '0'
            epsilon += '1'
        } else {
            gamma += '1'
            epsilon += '0'
        }
    })

    gamma = parseInt(gamma, 2)
    epsilon = parseInt(epsilon, 2)

    console.log(`Gamma: ${gamma} | Epsilon: ${epsilon} | Power Consumption ${gamma*epsilon}`)
}