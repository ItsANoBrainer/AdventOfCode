/* https://adventofcode.com/2020/day/8#part2
--- Part Two ---
After some careful analysis, you believe that exactly one instruction is corrupted.

Somewhere in the program, either a jmp is supposed to be a nop, or a nop is supposed to be a jmp. (No acc instructions were harmed in the corruption of this boot code.)

The program is supposed to terminate by attempting to execute an instruction immediately after the last instruction in the file. By changing exactly one jmp or nop, you can repair the boot code and make it terminate correctly.

For example, consider the same program from above:

nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
If you change the first instruction from nop +0 to jmp +0, it would create a single-instruction infinite loop, never leaving that instruction. If you change almost any of the jmp instructions, the program will still eventually find another jmp instruction and loop forever.

However, if you change the second-to-last instruction (from jmp -4 to nop -4), the program terminates! The instructions are visited in this order:

nop +0  | 1
acc +1  | 2
jmp +4  | 3
acc +3  |
jmp -3  |
acc -99 |
acc +1  | 4
nop -4  | 5
acc +6  | 6
After the last instruction (acc +6), the program terminates by attempting to run the instruction below the last instruction in the file. With this change, after the program terminates, the accumulator contains the value 8 (acc +1, acc +1, acc +6).

Fix the program so that it terminates normally by changing exactly one jmp (to nop) or nop (to jmp). What is the value of the accumulator after the program terminates?
*/

const input = `acc +15
acc +2
acc -14
jmp +362
acc +22
nop +236
jmp +474
acc +10
jmp +1
acc +0
jmp +236
acc +10
acc +14
jmp +334
acc +12
acc -1
jmp +478
jmp +90
jmp +208
acc +49
jmp +94
acc +2
acc -8
jmp +375
nop +21
acc +0
acc +10
nop +25
jmp +492
nop +182
acc +49
acc -12
jmp -14
acc -16
jmp +140
acc -3
acc -18
acc +28
acc -6
jmp +558
acc +2
acc +27
nop +438
acc +41
jmp +508
acc +13
jmp +117
acc +21
acc -13
acc +34
jmp +1
jmp +1
nop +451
acc +28
acc +31
acc +31
jmp +280
acc +32
acc +35
acc -18
jmp +509
acc -15
acc -8
nop +288
acc -16
jmp +376
acc -19
acc -8
acc +11
acc +10
jmp +50
acc +19
nop -58
acc -9
jmp +43
acc +10
acc +2
nop -63
jmp +280
acc -7
jmp +175
jmp +69
acc +16
acc +9
acc -2
acc -5
jmp +276
nop +195
acc +50
acc -8
jmp -55
nop +1
nop -78
acc +31
jmp +535
acc +9
acc +33
acc +4
acc +48
jmp +8
acc +30
acc +42
acc +18
acc +37
jmp -69
nop +121
jmp +44
acc +3
acc +33
acc -6
acc +37
jmp +403
acc -6
jmp +245
jmp -93
acc +5
jmp +406
jmp -26
nop -47
jmp +239
acc +7
acc +31
acc +14
acc +0
jmp +291
acc +46
jmp +394
acc +44
acc +36
nop +45
jmp +137
acc -16
acc +10
acc -4
acc +7
jmp +76
acc +24
jmp +93
acc +17
acc +0
acc +6
acc +4
jmp +385
acc -8
acc +49
acc +28
jmp +95
nop +12
acc +33
jmp +153
nop +254
acc +18
acc -16
acc +50
jmp +299
acc +27
acc +47
acc -17
jmp -15
acc +35
acc +14
jmp +204
jmp +93
acc +46
nop -5
nop -158
jmp +221
jmp +321
acc -2
acc +49
acc +3
acc -17
jmp -52
jmp +7
nop +52
acc +25
jmp +376
acc -3
nop -133
jmp +32
jmp +328
nop +374
acc +37
acc +6
jmp +92
acc +47
nop +394
jmp -13
jmp -170
acc +9
jmp -47
acc -18
acc +27
jmp +1
acc +3
acc -5
jmp +337
acc +21
jmp +364
acc +24
acc +43
acc +50
jmp +58
jmp -18
acc +30
jmp +144
nop +5
acc +50
nop +245
nop +133
jmp +270
jmp -22
nop -76
jmp +398
acc +40
acc +30
jmp +361
acc +36
acc +30
jmp +392
acc -17
nop +71
acc -12
jmp +102
acc +17
jmp +283
acc -16
jmp +65
nop -2
jmp +149
jmp -103
jmp -179
acc +46
jmp +289
acc +48
jmp +114
acc +13
jmp +114
nop +215
nop -89
jmp +337
acc -2
acc +2
acc -7
jmp -18
jmp -51
acc +30
acc +43
acc +28
jmp -188
acc +36
acc +7
acc -5
acc +38
jmp +88
jmp +225
acc -14
acc -3
acc -15
jmp +66
acc +7
acc +43
nop -210
acc -9
jmp +109
acc -10
jmp +242
acc -5
acc +15
acc +8
jmp +310
acc +31
acc -2
acc +11
acc -15
jmp +103
acc +32
jmp -92
acc -10
acc +6
acc -1
jmp -131
acc +43
acc +30
acc +13
acc +33
jmp +25
acc +9
acc -14
acc +19
acc +44
jmp -50
acc -8
acc +9
jmp +312
jmp -96
acc -3
acc -3
acc +24
jmp +94
acc -15
jmp +61
acc +19
nop -89
acc +24
nop -94
jmp +5
acc -13
acc +25
acc +42
jmp +1
jmp +137
acc +44
acc +44
acc +41
jmp +152
jmp +144
acc -1
nop +293
jmp -120
acc -17
nop -171
acc +27
jmp -173
jmp +231
acc +3
jmp +109
acc +18
acc +32
acc -14
acc -8
jmp +177
acc +28
jmp -134
nop +277
jmp -124
jmp +167
nop +274
acc +6
acc +43
acc +10
jmp -320
acc +28
acc -9
acc +22
jmp -90
jmp -203
jmp -133
jmp -6
jmp -181
jmp +170
acc +40
acc +5
jmp -274
acc +36
acc +24
nop +6
jmp -339
jmp -251
acc +10
acc +10
jmp -347
jmp +263
acc +37
jmp -201
acc -11
acc +42
jmp +153
nop -179
acc -9
jmp +8
jmp -289
jmp -25
acc +45
jmp -142
acc +42
acc -10
jmp +83
acc +43
acc +3
acc -6
jmp -222
acc +41
acc +14
acc +7
acc +2
jmp -35
jmp +168
acc +11
acc +18
acc +8
acc -4
jmp -203
acc +44
jmp +10
nop -184
acc +0
jmp +91
acc -5
nop +226
acc +46
acc -10
jmp -15
jmp -321
acc +0
acc +33
jmp +82
jmp +1
acc -12
acc +30
jmp +152
acc +6
jmp -208
acc +43
jmp +39
acc +23
acc +23
acc +24
acc +26
jmp -390
acc +15
acc +3
acc +14
acc +46
jmp -239
acc -10
acc +19
jmp +167
acc +46
acc +0
jmp -280
acc -7
jmp -107
acc +13
jmp -76
acc +48
jmp -65
nop +23
nop -89
acc +47
jmp -304
acc -5
jmp +1
acc +50
acc +37
jmp -129
acc +27
jmp +1
jmp -212
acc +18
acc +29
acc +1
jmp -74
acc +24
acc -12
jmp -173
acc -18
acc -6
nop -156
jmp -309
acc +46
acc -13
acc +41
acc +11
jmp -188
acc +32
jmp -190
acc +31
acc +30
jmp -122
acc -7
jmp +37
acc +2
acc +16
acc +45
acc +44
jmp -376
acc +47
jmp +1
jmp -147
acc +47
acc -18
acc -1
acc +2
jmp -152
acc +12
acc -8
jmp +90
nop +67
acc +9
jmp +1
jmp -377
jmp +1
jmp -238
jmp +1
acc +47
acc +7
acc +31
jmp -427
acc +10
acc +13
nop +13
jmp -8
nop -292
acc +11
nop -203
jmp -164
jmp -19
acc +31
jmp -289
acc -7
acc -16
acc +35
jmp -333
jmp -500
acc +32
acc +29
acc +18
acc +14
jmp -161
jmp -60
jmp +6
acc +4
nop -108
acc +27
jmp +2
jmp -133
acc +2
jmp -103
acc +40
nop -512
acc +48
jmp -196
acc +47
acc +40
nop -346
acc -2
jmp -530
acc +17
nop -31
acc +1
jmp -74
acc -15
acc +4
nop -330
acc +32
jmp -115
acc -3
jmp +1
acc +14
acc +31
jmp -352
jmp -10
acc +18
jmp -322
acc +41
jmp +59
acc -16
nop -359
acc +29
acc +26
jmp -418
acc +10
acc +47
jmp -519
acc -5
nop +40
acc +30
jmp -195
acc +31
acc +3
acc +8
jmp -10
acc -12
acc +21
acc -1
jmp +30
jmp -341
acc -5
jmp -405
acc -13
jmp -170
acc +24
acc -16
acc +20
acc +17
jmp -145
acc +42
acc +33
jmp -395
nop -142
acc +45
acc +15
jmp -399
nop -223
jmp -299
jmp -453
acc -6
nop -498
acc +42
jmp -112
acc +39
acc +46
acc +4
acc +27
jmp -234
jmp +1
acc +45
acc +47
jmp -307
jmp -378
jmp -431
acc +13
acc +29
jmp -282
acc +4
acc -3
acc +37
acc +40
jmp -32
nop -148
acc +38
acc +40
acc +18
jmp -171
nop -546
jmp -490
acc +36
jmp -514
acc +27
acc -10
nop -560
acc +44
jmp +1`

const inputArray = input.split('\n')

for(var i = 0; i < inputArray.length; i++) {
    const inputCopy = inputArray.slice(0)
    const type = inputCopy[i].split(' ')[0]
    const num = inputCopy[i].split(' ')[1]
    
    var termination = [false, 0]
    switch(type) {
        case 'jmp':
            inputCopy[i] = `nop ${num}`
            termination = doesItTerminate(inputCopy)
            break;
        case 'nop':
            inputCopy[i] = `jmp ${num}`
            termination = doesItTerminate(inputCopy)
            break;
    }

    if(termination[0] == true) {
        console.log(termination[1])
        break;
    }
}

function doesItTerminate(instructions){
    var acc = 0
    var currentIndex = 0
    
    while (instructions[currentIndex] != 'visited') {
        if(currentIndex == instructions.length) { break }
        const type = instructions[currentIndex].split(' ')[0]
        const num = parseInt(instructions[currentIndex].split(' ')[1])
        instructions[currentIndex] = 'visited'
        
        switch (type) {
            case 'jmp':
                currentIndex+=num
                break;
            case 'acc':
                acc+=num
            case 'nop':
                currentIndex++
                break;
        }
    }

    if(currentIndex==instructions.length) {
        return [true, acc]
    } else {
        return [false, acc]
    }
}