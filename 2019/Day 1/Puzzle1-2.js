/* https://adventofcode.com/2019/day/1#part2
--- Part Two ---
During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)
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
let sumFuel = 0

inputArray.forEach(mass => {
    let requiredFuel = parseInt(mass/3)-2
    let moduleFuel = 0

    while (requiredFuel > 0) {
        moduleFuel+=requiredFuel
        requiredFuel = parseInt(requiredFuel/3)-2
    }

    sumFuel+=moduleFuel
})

console.log(sumFuel)