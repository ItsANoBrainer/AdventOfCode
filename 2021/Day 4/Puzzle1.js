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

    let foundWinner = false
    let lastCalledNumber;
    for (let i = 0; i < numbers.length; i++) {
        lastCalledNumber = numbers[i]
        boards = callNumber(boards, lastCalledNumber)
        foundWinner = checkForWinner(boards)
        if (foundWinner != -1) { break }
    }

    if (foundWinner != -1) {
        console.log(`Found a Winner!`)
        console.log(`Last called: ${lastCalledNumber} | Final Score: ${calculateFinalScore(boards[foundWinner], lastCalledNumber)}`)
    } else {
        console.log('No Winners Found')
    }

    // console.log(boards)
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

function checkForWinner(boards) {
    // console.log('Checking for Winner')
    for (let i = 0; i < boards.length; i++) {
        const currentBoard = boards[i]

        // Check Each Row
        for (let r = 0; r < currentBoard.length; r++) {
            const currentRow = currentBoard[r]

            if (rowCheck(currentRow)) { return i }
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

            if (rowCheck(currentRowColumn)) { return i }
        }

        // Check Diagonals
        // let diagonalRight = []
        // for (let r = 0; r < currentBoard.length; r++) {
        //     const currentRow = currentBoard[r]
        //     diagonalRight.push(currentRow[r])
        // }
        // if (rowCheck(diagonalRight)) { return i }

        // let diagonalLeft = []
        // for (let r = 0; r < currentBoard.length; r++) {
        //     const currentRow = currentBoard[r]
        //     diagonalLeft.push(currentRow[currentBoard.length - (1 + r)])
        // }
        // if (rowCheck(diagonalLeft)) { return i }
    }
    return -1
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