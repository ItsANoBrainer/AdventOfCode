/* https://adventofcode.com/2020/day/13#part2

*/

const input = `23,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,863,x,x,x,x,x,x,x,x,x,x,x,19,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,571,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41`

const arrayInput = input.split(',').map(x => {
    if (x == 'x') return 'x'
    else return +x
})

console.log(execute(arrayInput))

function execute(IDs) {
    let currentNum = 0
    let values = 0

    const adjustedInput = adjustInput(IDs)

    const newInput = adjustedInput[0]
    const highestNumber = adjustedInput[1]

    do {
        values = 0
        currentNum += highestNumber[0]
        newInput.forEach(idInfo => {
            const divisiableByNum = (currentNum + ( idInfo[1] - highestNumber[1] )) % idInfo[0]
            if (divisiableByNum != 0) values++

        })
    } while (values != 0)

    return currentNum-highestNumber[1]
}

function adjustInput(oldInput) {
    let newInput = []
    let highestInput = [0,0]
    for (let i = 0; i < oldInput.length; i++) {
        const num = oldInput[i] 
        if (num != 'x') {
            newInput.push([num, i])

            if(num > highestInput[0]) highestInput=[num,i]
        }
        
    }
    return [newInput,highestInput]
}
