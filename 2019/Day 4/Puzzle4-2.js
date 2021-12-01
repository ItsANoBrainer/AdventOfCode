/* https://adventofcode.com/2019/day/4#part2
--- Part Two ---
An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

Given this additional criterion, but still ignoring the range rule, the following are now true:

112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).
How many different passwords within the range given in your puzzle input meet all of the criteria?
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
        const occurancesOfI = currentNum.split(currentNum[i]).length - 1
        if(currentNum[i] == currentNum[i+1] && occurancesOfI <= 2) {
            return true
        }
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