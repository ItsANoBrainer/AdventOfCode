/* https://adventofcode.com/2018/day/2 */
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

console.log(start(input))

function start(input) {
    let found;
    input.forEach(item1 => {
        input.forEach(item2 => {
            if(!found) {
                for(let i=0;i<item1.length;i++) {
                    if(item1[i] != item2[i]) {
                        let splitItem1 = item1[i].split('')
                        let splitItem2 = item2[i].split('')
    
                        splitItem1.splice(i,1)
                        splitItem2.splice(i,1)
    
                        splitItem1.join()
                        splitItem2.join()
    
                        if(splitItem1 == splitItem2) {
                            console.log('found')
                            found = splitItem1
                        } else {
                            break;
                        }
                    }
                }
            }
        })
    })
    return found
}