/* https://adventofcode.com/2021/day/5 */
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

start(input)

function start(input) {
    const ventCoords = getVentCoords(input)
    const ventMap = getVentMap(ventCoords)

    console.log(ventMap)

    const multiVentcount = getMultiVentcount(ventMap)

    console.log(`We found ${multiVentcount} vents that overlapped.`)
}

function getVentCoords(input) {
    return input.map((coord) => {
        const splitCoords = coord.split(' -> ')
        const splitNumFrom = splitCoords[0].split(',')
        const splitNumTo = splitCoords[1].split(',')
        return [
            [splitNumFrom[0], splitNumFrom[1]],
            [splitNumTo[0], splitNumTo[1]]
        ]
    })
}

function getVentMap(ventCoords) {
    let ventMap = []
    ventCoords.forEach(coords => {
        if (isValidCoords(coords)) {
            const coordX1 = coords[0][0]
            const coordY1 = coords[0][1]
            const coordX2 = coords[1][0]
            const coordY2 = coords[1][1]

            for (let x = coordX1;
                (coordX1 < coordX2 ? x <= coordX2 : x >= coordX2);
                (coordX1 < coordX2 ? x++ : x--)) {
                for (let y = coordY1;
                    (coordY1 < coordY2 ? y <= coordY2 : y >= coordY2);
                    (coordY1 < coordY2 ? y++ : y--)) {

                    const ventRowExists = ventMap?.[y] != undefined
                    const ventColExists = ventMap?.[y]?.[x] != undefined

                    if(!ventRowExists) { ventMap[y] = [] }

                    if(ventColExists) {
                        ventMap[y][x]+=1
                    } else {
                        ventMap[y][x] = 1
                    }
                }
            }
        }
    })
    return ventMap
}

function isValidCoords(coords) {
    if (coords[0][0] == coords[1][0] || coords[0][1] == coords[1][1]) { return true }
    return false
}

function getMultiVentcount(ventMap) {
    let count = 0
    ventMap.forEach(row => {
        row.forEach(num => {
            if(num>1) { count++ }
        })
    })
    return count
}