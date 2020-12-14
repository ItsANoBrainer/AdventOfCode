/* https://adventofcode.com/2020/day/10

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

var oneDiff = 0
var twoDiff = 0
var threeDiff = 1

for(var i = 0; i < inputArray.length-1; i++) {
    const numDiff = inputArray[i+1] - inputArray[i]
    //console.log(`${inputArray[i+1]} - ${inputArray[i]} = ${numDiff}`)
    switch(numDiff) {
        case 1:
            oneDiff++
            break;
        case 2:
            twoDiff++
            break;
        case 3:
            threeDiff++
            break;
    }
}

console.log(`${oneDiff} ${twoDiff} ${threeDiff} | ${oneDiff * threeDiff}`)
