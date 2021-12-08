/* https://adventofcode.com/2021/day/4 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input)

function start(input) {
    const numbers = getCallNumbers(input)
    let boards = getBoards(input)

    let foundWinners = []
    let allWon = false
    let lastCalledNumber;
    for (let i = 0; i < numbers.length; i++) {
        lastCalledNumber = numbers[i]
        boards = callNumber(boards, lastCalledNumber)
        let winners = checkForWinners(boards, foundWinners)
        if (winners.length > 0) {
            winners.forEach(winner => {
                if (!foundWinners.includes(winner)) { foundWinners.push(winner) }
            })
            if (foundWinners.length == boards.length) {
                allWon = true
                break;
            }
        }
    }

    if (allWon) {
        const lastWinner = foundWinners[foundWinners.length - 1]
        console.log(`We are done! Last board: ${lastWinner} - Last called: ${lastCalledNumber}`)
        console.log(`Final Score: ${calculateFinalScore(boards[lastWinner], lastCalledNumber)}`)
    } else {
        console.log('Not everyone won :(')
    }
}

function getCallNumbers(input) {
    return input[0].split(',')
}

function getBoards(input) {
    const count = (input.length - 1) / 6

    let boards = []
    for (let i = 0; i < count; i++) {
        boards[i] = []
        for (let j = 0; j < 5; j++) {
            const index = (i * 6) + 2 + j
            boards[i].push(input[index].replace(/  /g, ' ').trim().split(' '))
        }
    }

    return boards
}

function callNumber(boards, number) {
    // console.log(`Calling ${number}`)
    return boards.map(board => {
        return board.map(row => {
            return row.map(num => {
                return num == number ? 'X' : num
            })
        })
    })
}

function checkForWinners(boards, winners) {
    let newWinners = []
    for (let i = 0; i < boards.length; i++) {
        if (!winners.includes(i)) {
            const currentBoard = boards[i]

            // Check Each Row
            for (let r = 0; r < currentBoard.length; r++) {
                const currentRow = currentBoard[r]

                if (rowCheck(currentRow)) { newWinners.push(i) }
            }

            // Check Each Column
            let columns = []
            currentBoard.forEach((row) => {
                for (let c = 0; c < row.length; c++) {
                    if (!columns[c]) { columns[c] = [] }
                    columns[c].push(row[c])
                }
            })

            for (let cc = 0; cc < columns.length; cc++) {
                const currentRowColumn = columns[cc]

                if (rowCheck(currentRowColumn)) { newWinners.push(i) }
            }

            // Check Diagonals
            // let diagonalRight = []
            // for (let r = 0; r < currentBoard.length; r++) {
            //     const currentRow = currentBoard[r]
            //     diagonalRight.push(currentRow[r])
            // }
            // if (rowCheck(diagonalRight)) { newWinners.push(i) }

            // let diagonalLeft = []
            // for (let r = 0; r < currentBoard.length; r++) {
            //     const currentRow = currentBoard[r]
            //     diagonalLeft.push(currentRow[currentBoard.length - (1 + r)])
            // }
            // if (rowCheck(diagonalLeft)) { newWinners.push(i) }

        } else {
            // console.log(`${i} already won, skipping`)
        }
    }
    return newWinners
}

function rowCheck(row) {
    return row.every(num => num == 'X')
}

function calculateFinalScore(board, lastCall) {
    let sum = 0
    board.forEach(row => {
        row.forEach(num => {
            if (num != 'X') {
                sum += parseInt(num)
            }
        })
    })
    return sum * lastCall
}