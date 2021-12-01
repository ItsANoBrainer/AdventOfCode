/* https://adventofcode.com/2019/day/4
--- Day 4: Secure Container ---
You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

It is a six-digit number.
The value is within the range given in your puzzle input.
Two adjacent digits are the same (like 22 in 122345).
Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
Other than the range rule, the following are true:

111111 meets these criteria (double 11, never decreases).
223450 does not meet these criteria (decreasing pair of digits 50).
123789 does not meet these criteria (no double).
How many different passwords within the range given in your puzzle input meet these criteria?

Your puzzle input is 172851-675869.
*/

const input1 = `172851-675869`
const input1Array = input1.split('-')
const start = parseInt(input1Array[0])
const end = parseInt(input1Array[1])

console.log('Total Number:', startSearch(start, end))

function startSearch(start, end) {
    let passwordArray = []
    console.log(start, end)
    for(let i = start; i <= end; i++) {
        if(hasAdjacentDigits(i) && hasIncreasingDigits(i) ) { 
            console.log('Adding', i)
            passwordArray.push(i)
        }
    }
    return passwordArray.length
}

function hasAdjacentDigits(num) {
    const currentNum = num.toString()
    for(let i = 0; i < currentNum.length; i++) {
        if(currentNum[i] == currentNum[i+1]) { return true }
    }
    return false
}

function hasIncreasingDigits(num) {
    const currentNum = num.toString()
    for(let i = 0; i < currentNum.length; i++) {
        if(currentNum[i] > currentNum[i+1]) { return false }
    }
    return true
}