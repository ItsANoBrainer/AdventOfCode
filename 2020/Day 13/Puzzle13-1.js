/* https://adventofcode.com/2020/day/13

*/

const input = `1000052
23,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,863,x,x,x,x,x,x,x,x,x,x,x,19,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,571,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41`

const inputArray = input.split('\n')

const time = inputArray[0]
const IDs = inputArray[1].split(',').filter(id => id!='x')

console.log(findBestBus(time, IDs))

function findBestBus(time, IDs) {
    let closestID = 0
    let closestNumber = null

    IDs.forEach(id => {
        const tempClosestNumber = Math.ceil(time/id)*id
        if(tempClosestNumber - time < Math.abs(closestNumber - time)) {
            closestID = id
            closestNumber = tempClosestNumber
        }
    })
    return closestID*(closestNumber-time)
}