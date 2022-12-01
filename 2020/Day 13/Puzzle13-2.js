/* https://adventofcode.com/2020/day/13#part2
** Example:
**
** Previous bus is 7, this bus is 13, with delay +1.
** A time T is needed such that:
**      7x == T
**     13y == (T + 1)
**
** Performing an iterative search for T on multiples of 7 and checking (T + 1)
** eventually reveals that:
**   (7 * 11) == 77
**   (13 * 6) == 78
**
** To find further times that match this condition, imagine some value W added to T.
**    7j == T + W
**   13k == (T + 1) + W
** Substituting:
**    7j == 7x + W,  and j == x + (W / 7)
**   13k == 13y + W, and k == y + (W / 13)
** For j and k to be integers, since x and y are integers, W must be a multiple of both 7 and 13.
** Since all input numbers are conveniently prime, the smallest multiple of both 7 and 13 is (7 * 13).
** Thus, W == (7 * 13) == 91.
**
**
** Next, a time T is needed such that:
**      7x == T
**     13y == (T + 1)
**     59z == (T + 4)
**
** Performing an iterative search from 77, adding multiples of 91, eventually reveals that:
**    (7 * 50) == 350
**   (13 * 27) == 351
**    (59 * 6) == 354
**
** As above, the next T that matches this condition would be 350 + (7 * 13 * 59) == 350 + (5369) == 5719.
*/

const input = `23,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,863,x,x,x,x,x,x,x,x,x,x,x,19,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,571,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41`

const arrayInput = input.split(',').map(x => {
    if (x == 'x') return 'x'
    else return +x
})

console.log(execute(arrayInput))

function execute(IDs) {
    const newInput = adjustInput(IDs)
    const newItterative = getItteration(newInput[0], newInput[1])
    const startingNum = newItterative[0]
    const itterative = newItterative[1]

    //Use values we have to do stuff and things maybe idk
    let currentNum = startingNum
    let values = 0

    do { 
        values = 0
        currentNum += itterative
        newInput.forEach(idInfo => {
            const divisiableByNum = (currentNum + idInfo[1]) % idInfo[0]
            if (divisiableByNum != 0) values++
        })
    } while (values != 0)

    return currentNum
}

function getItteration(inputA, inputB) {
    let inputANum = inputA[0]
    let inputAIndex = inputA[1]

    let inputBNum = inputB[0]
    let inputBIndex = inputB[1]

    let values = 0
    let currentNum = 0
    let modA = 0
    let modB = 0

    do {
        values = 0
        currentNum+=inputANum
        if((currentNum + inputAIndex) % inputANum != 0) values++
        if((currentNum + inputBIndex) % inputBNum != 0) values++
    } while(values != 0)

    return [currentNum,inputANum*inputBNum]
}

function adjustInput(oldInput) {
    let newInput = []
    for (let i = 0; i < oldInput.length; i++) {
        const num = oldInput[i]
        if (num != 'x') {
            newInput.push([num, i])
        }

    }
    return newInput
}
