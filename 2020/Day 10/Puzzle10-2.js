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

for (var i = 0; i < inputArray.length - 1; i++) {
    const currentNum = inputArray[i]
    const numMinus1 = currentNum - 1
    const numMinus2 = currentNum - 2
    const numMinus3 = currentNum - 3
    
    // console.log(`==========\nCurrentNum: ${currentNum}`)
    // console.log(`-1:${hasMinus1} -2:${hasMinus2} -3:${hasMinus3}`)
    if (inputArray.includes(numMinus1) + inputArray.includes(numMinus2) + inputArray.includes(numMinus3) > 1) {
        const numMinus1Options = (numArray[numMinus1] != undefined ? numArray[numMinus1] : 0)
        const numMinus2Options = (numArray[numMinus2] != undefined ? numArray[numMinus2] : 0)
        const numMinus3Options = (numArray[numMinus3] != undefined ? numArray[numMinus3] : 0)

        // console.log(`-1:${numMinus1Options} -2:${numMinus2Options} -3:${numMinus3Options} | Setting total options to ${numMinus1Options + numMinus2Options + numMinus3Options}`)
        totalOptions = numMinus1Options + numMinus2Options + numMinus3Options

    }
    numArray[currentNum] = totalOptions

}

// console.log(numArray)
console.log(`Total Possible Options: ${totalOptions}`)