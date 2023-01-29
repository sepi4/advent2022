export {}
let input: string = getInput()
// let input: string = getExampleInput()
type Addx = {
  action: 'addx',
  value: number,
}
type Noop = {
  action: 'noop',
}
let arr: (Addx | Noop)[] = input
  .split('\n')
  .map((row: string) => {
    let temp = row.split(' ')
    if (temp[0] === 'noop') {
      return {
        action: 'noop'
      }
    } else {
      return {
        action: 'addx',
        value: Number(temp[1])
      }
    }
  })

let X = 1
let cycle = 1
let sums: number[] = []
let answer = ''

for (let com of arr) {
  if (com.action === 'noop') {
    check(com)
    cycle++
  } else {
    check(com)
    cycle++
    check(com)
    cycle++
    X += com.value
  }
}

console.log(sums)
console.log(sums.reduce((a, b) => a + b, 0))
console.log(answer)



function check(com: any) {
  if ((cycle - 1) % 40 === 0) {
    answer += '\n'
  }
  let temp = cycle % 40
  if (temp === X || temp === X+1 || temp === X+2) {
    answer += '#'
  } else {
    answer += '.'
  }
  if (
    cycle === 20 ||
    cycle === 60 ||
    cycle === 100 ||
    cycle === 140 ||
    cycle === 180 ||
    cycle === 220
  ) {
    sums.push(cycle * X)
  }
}


function getInput() {
  return `noop
noop
addx 6
addx -1
noop
addx 5
addx 3
noop
addx 3
addx -1
addx -13
addx 17
addx 3
addx 3
noop
noop
noop
addx 5
addx 1
noop
addx 4
addx 1
noop
addx -38
addx 5
noop
addx 2
addx 3
noop
addx 2
addx 2
addx 3
addx -2
addx 5
addx 2
addx -18
addx 6
addx 15
addx 5
addx 2
addx -22
noop
noop
addx 30
noop
noop
addx -39
addx 1
addx 19
addx -16
addx 35
addx -28
addx -1
addx 12
addx -8
noop
addx 3
addx 4
noop
addx -3
addx 6
addx 5
addx 2
noop
noop
noop
noop
noop
addx 7
addx -39
noop
noop
addx 5
addx 2
addx 2
addx -1
addx 2
addx 2
addx 5
addx 1
noop
addx 4
addx -13
addx 18
noop
noop
noop
addx 12
addx -9
addx 8
noop
noop
addx -2
addx -36
noop
noop
addx 5
addx 2
addx 3
addx -2
addx 2
addx 2
noop
addx 3
addx 5
addx 2
addx 19
addx -14
noop
addx 2
addx 3
noop
addx -29
addx 34
noop
addx -35
noop
addx -2
addx 2
noop
addx 6
noop
noop
noop
noop
addx 2
noop
addx 3
addx 2
addx 5
addx 2
addx 1
noop
addx 4
addx -17
addx 18
addx 4
noop
addx 1
addx 4
noop
addx 1
noop
noop`
}

function getExampleInput(): string {
  return `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`
}