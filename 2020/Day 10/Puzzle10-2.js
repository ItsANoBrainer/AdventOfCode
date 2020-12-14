/* https://adventofcode.com/2020/day/10#part2

*/

const input = `114
51
122
26
121
90
20
113
8
138
57
44
135
76
134
15
21
119
52
118
107
99
73
72
106
41
129
83
19
66
132
56
32
79
27
115
112
58
102
64
50
2
39
3
77
85
103
140
28
133
78
34
13
61
25
35
89
40
7
24
33
96
108
71
11
128
92
111
55
80
91
31
70
101
14
18
12
4
84
125
120
100
65
86
93
67
139
1
47
38
`


var inputArray = ( (input.split('\n') ).map(Number) ) .sort(function (a, b) { return parseInt(a) - parseInt(b) })
inputArray.push(inputArray[inputArray.length] + 3)

var numArray = []
var totalOptions = 1

// Using Dynamic Programming, we can easily calculate the number of possiblities, without needing to calculate EACH possibility.
for (var i = 0; i < inputArray.length - 1; i++) {
    const currentNum = inputArray[i]
    const numMinus1 = currentNum - 1
    const numMinus2 = currentNum - 2
    const numMinus3 = currentNum - 3

    // Check if theres more than 1 way to get to the currentNumber
    if (inputArray.includes(numMinus1) + inputArray.includes(numMinus2) + inputArray.includes(numMinus3) > 1) {
        const numMinus1Options = (numArray[numMinus1] != undefined ? numArray[numMinus1] : 0)
        const numMinus2Options = (numArray[numMinus2] != undefined ? numArray[numMinus2] : 0)
        const numMinus3Options = (numArray[numMinus3] != undefined ? numArray[numMinus3] : 0)

        //Set totaloptions equal to the sum of each numMinus options 
        totalOptions = numMinus1Options + numMinus2Options + numMinus3Options
    }
    // Set the currentnumbers index in the numArray to the number of totaloptions. 
    // If there was only 1 way to get to currentNumber, total options never changes.
    // Because of this we can just set it to the current number of totaloptions
    numArray[currentNum] = totalOptions

}

console.log(`Total Possible Options: ${totalOptions}`)