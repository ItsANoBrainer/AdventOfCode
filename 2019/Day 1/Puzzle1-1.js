/* https://adventofcode.com/2019/day/1
--- Day 1: The Tyranny of the Rocket Equation ---
Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
*/
const input = `118505
138608
125418
146131
136211
98802
95533
65338
50826
118071
54328
108176
60708
99108
64556
103726
87778
108165
78648
68391
79748
94421
137497
138264
125872
127901
116850
93683
68526
134908
102609
69769
106181
89986
127197
74669
109912
51328
125824
105763
70648
66476
117452
50181
70915
92821
94381
130405
128627
65090
125594
148506
95193
143595
71834
147624
142247
112838
149474
139785
134850
92177
110591
102115
141224
117174
68695
65212
54709
51982
53791
68079
120439
76513
132952
132959
142650
135186
59593
83982
56889
141751
87634
148232
50803
63222
97836
103121
106561
88348
69735
75400
74045
56715
101561
124401
106296
144550
134903
113838`

const inputArray = input.split('\n')
let sum = 0

inputArray.forEach(value => {
    sum+=(parseInt(value/3)-2)
})

console.log(sum)