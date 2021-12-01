/* https://adventofcode.com/2019/day/6

*/

const input = `K)L
E)F
G)H
J)K
B)G
D)E
E)J
D)I
C)D
B)C
COM)B`

const inputArray = input.split('\n')

class OrbitMap {
    constructor(input) {
        this.planets = {}

        this._createPlanets(input)
        this._assignOrbiters(input)
    }

    _createPlanets(input) {
        input.forEach((instruction) => {
            const splitInstruction = instruction.split(')')
            const orbitee = splitInstruction[0] 
            const orbiter = splitInstruction[1]

            if(!this.planets[orbitee]) {
                this.planets[orbitee] = new Planet(orbitee)
            } 
            
            if(!this.planets[orbiter]) {
                this.planets[orbiter] = new Planet(orbiter)
            }
        })
    }

    _assignOrbiters(input) {
        input.forEach((instruction) => {
            const splitInstruction = instruction.split(')')
            const orbitee = splitInstruction[0] 
            const orbiter = splitInstruction[1]

            this.planets[orbitee].addOrbiter(this.planets[orbiter])
        })
    }

    getTotalOrbits() {
        return this.planets['COM'].count()
    }
}

class Planet {
    constructor(name) {
        this.name = name
        this.orbittingPlanets = []
    }

    addOrbiter(planet) {
        if(!this.orbittingPlanets.includes(planet)) {
            this.orbittingPlanets.push(planet)
        }
    }

    count() {
        let total = 0
        total+=this.orbittingPlanets.length
        this.orbittingPlanets.forEach((planet) => {
            let planetCount = planet.count()
            console.log(this.name, ' Getting count of', planet.name, ' Got',planet.count(), ' Before total', total, ' After ', total+planetCount)
            total+=planetCount
        })
        console.log('Total of', this.name, total)
        return total
    }
}

function calculate(inputArray) {
    const orbitMap = new OrbitMap(inputArray)
    const totalOrbits = orbitMap.getTotalOrbits()

    return totalOrbits
}

console.log('Total Orbits:', calculate(inputArray))