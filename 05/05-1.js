let input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

input = getInput()

let arr = input.split('\n')
let inputStacks = []
let inputMoves = []

let toMoves = false
for (let row of arr) {
  if (row.startsWith('move') && !toMoves) {
    toMoves = true
  }
  if (toMoves) {
    inputMoves.push(row)
  } else {
    inputStacks.push(row)
  }
}

let moves = makeMoves(inputMoves)
let stacks = makeStacks(inputStacks)
// console.log(stacks)
// console.log(moves)

for (let m of moves) {
  for (let i = m.move; i > 0; i--) {
    let x = stacks[m.from].pop()
    stacks[m.to].push(x)
  }
}

let message = ''
for (let s of stacks) {
  message += s[s.length - 1]
}
console.log(message)


function makeMoves(inputMoves) {
  let m = []
  for(let row of inputMoves) {
    let r = row.split(' ')
    m.push({
      move: +r[1],
      from: +r[3] - 1,
      to: +r[5] - 1,
    })
  }
  return m
}

function makeStacks(inputStacks) {
  inputStacks.pop()
  inputStacks.pop()

  let s = []
  for (let i = inputStacks.length - 1; i >= 0; i--) {
    let stackIndex = 0
    for (let j = 1; j < inputStacks[i].length; j += 4, stackIndex++) {
      const letter = inputStacks[i][j]
      if (i === inputStacks.length - 1) { // first
        s.push([])
      }
      if (letter !== ' ') {
        s[stackIndex].push(letter)
      }
    }
  }
  return s
}

function getInput() {
  return `[V]     [B]                     [F]
[N] [Q] [W]                 [R] [B]
[F] [D] [S]     [B]         [L] [P]
[S] [J] [C]     [F] [C]     [D] [G]
[M] [M] [H] [L] [P] [N]     [P] [V]
[P] [L] [D] [C] [T] [Q] [R] [S] [J]
[H] [R] [Q] [S] [V] [R] [V] [Z] [S]
[J] [S] [N] [R] [M] [T] [G] [C] [D]
 1   2   3   4   5   6   7   8   9 

move 1 from 8 to 4
move 1 from 7 to 8
move 1 from 6 to 3
move 2 from 6 to 5
move 8 from 5 to 1
move 5 from 3 to 8
move 1 from 7 to 8
move 8 from 1 to 2
move 3 from 3 to 9
move 13 from 8 to 7
move 2 from 1 to 2
move 1 from 6 to 2
move 2 from 1 to 7
move 4 from 4 to 2
move 10 from 9 to 4
move 7 from 4 to 1
move 1 from 6 to 7
move 2 from 4 to 5
move 1 from 5 to 2
move 1 from 5 to 8
move 3 from 1 to 5
move 2 from 4 to 6
move 2 from 6 to 4
move 2 from 4 to 5
move 5 from 1 to 5
move 1 from 9 to 5
move 1 from 8 to 5
move 14 from 2 to 6
move 12 from 7 to 4
move 4 from 6 to 7
move 3 from 6 to 4
move 4 from 4 to 9
move 2 from 4 to 6
move 2 from 9 to 3
move 9 from 4 to 3
move 2 from 1 to 6
move 5 from 7 to 3
move 4 from 7 to 8
move 2 from 6 to 7
move 3 from 6 to 7
move 10 from 5 to 8
move 8 from 8 to 9
move 10 from 9 to 7
move 12 from 7 to 5
move 1 from 1 to 5
move 3 from 7 to 2
move 10 from 3 to 7
move 6 from 5 to 7
move 2 from 6 to 1
move 12 from 2 to 7
move 3 from 3 to 1
move 1 from 6 to 5
move 10 from 5 to 7
move 3 from 3 to 4
move 34 from 7 to 1
move 2 from 6 to 9
move 1 from 6 to 3
move 3 from 1 to 3
move 1 from 7 to 3
move 3 from 3 to 6
move 1 from 4 to 3
move 22 from 1 to 6
move 2 from 9 to 7
move 2 from 4 to 9
move 12 from 6 to 8
move 1 from 7 to 6
move 4 from 8 to 2
move 1 from 7 to 1
move 6 from 8 to 9
move 1 from 2 to 5
move 1 from 2 to 7
move 13 from 1 to 2
move 2 from 3 to 1
move 4 from 7 to 5
move 3 from 9 to 4
move 1 from 1 to 8
move 4 from 5 to 2
move 12 from 6 to 2
move 3 from 1 to 3
move 1 from 4 to 1
move 9 from 8 to 5
move 6 from 5 to 7
move 2 from 4 to 5
move 5 from 9 to 6
move 5 from 3 to 7
move 30 from 2 to 6
move 11 from 7 to 9
move 36 from 6 to 3
move 10 from 9 to 3
move 1 from 6 to 5
move 3 from 5 to 2
move 2 from 5 to 2
move 28 from 3 to 4
move 6 from 4 to 1
move 1 from 2 to 3
move 2 from 5 to 2
move 6 from 1 to 7
move 1 from 1 to 6
move 6 from 3 to 5
move 6 from 7 to 2
move 1 from 6 to 4
move 2 from 2 to 6
move 8 from 2 to 1
move 3 from 2 to 4
move 2 from 3 to 4
move 4 from 3 to 4
move 1 from 6 to 1
move 2 from 1 to 8
move 1 from 6 to 4
move 1 from 9 to 3
move 2 from 5 to 4
move 1 from 8 to 7
move 1 from 7 to 9
move 1 from 3 to 5
move 1 from 8 to 6
move 34 from 4 to 9
move 13 from 9 to 8
move 1 from 8 to 2
move 1 from 2 to 1
move 4 from 5 to 1
move 9 from 8 to 7
move 11 from 1 to 3
move 1 from 4 to 2
move 1 from 6 to 7
move 1 from 9 to 4
move 1 from 4 to 1
move 1 from 5 to 3
move 5 from 7 to 8
move 1 from 2 to 5
move 1 from 5 to 1
move 21 from 9 to 5
move 19 from 3 to 4
move 17 from 4 to 6
move 2 from 8 to 4
move 2 from 6 to 8
move 2 from 6 to 9
move 2 from 7 to 6
move 1 from 4 to 9
move 6 from 5 to 6
move 1 from 9 to 8
move 8 from 5 to 7
move 15 from 6 to 2
move 1 from 9 to 7
move 2 from 1 to 6
move 3 from 4 to 7
move 1 from 1 to 6
move 3 from 5 to 4
move 2 from 5 to 6
move 2 from 4 to 1
move 13 from 7 to 8
move 2 from 6 to 4
move 3 from 2 to 4
move 2 from 7 to 6
move 5 from 4 to 6
move 4 from 2 to 6
move 1 from 1 to 9
move 18 from 8 to 3
move 1 from 4 to 5
move 1 from 2 to 7
move 15 from 3 to 1
move 1 from 5 to 1
move 3 from 3 to 4
move 1 from 5 to 4
move 1 from 5 to 6
move 1 from 6 to 8
move 2 from 8 to 2
move 3 from 1 to 8
move 6 from 2 to 8
move 1 from 7 to 6
move 12 from 8 to 5
move 2 from 9 to 6
move 6 from 1 to 5
move 9 from 5 to 3
move 1 from 2 to 8
move 20 from 6 to 9
move 3 from 6 to 7
move 1 from 7 to 1
move 7 from 3 to 4
move 2 from 7 to 2
move 1 from 8 to 7
move 8 from 4 to 1
move 11 from 1 to 7
move 10 from 7 to 6
move 2 from 4 to 9
move 21 from 9 to 3
move 6 from 5 to 9
move 6 from 3 to 2
move 1 from 4 to 5
move 1 from 7 to 9
move 8 from 3 to 2
move 9 from 2 to 1
move 14 from 1 to 6
move 1 from 1 to 7
move 4 from 3 to 8
move 3 from 8 to 7
move 5 from 7 to 4
move 3 from 6 to 9
move 2 from 3 to 7
move 3 from 5 to 6
move 1 from 5 to 6
move 2 from 7 to 9
move 1 from 8 to 3
move 22 from 6 to 5
move 3 from 9 to 4
move 3 from 6 to 1
move 5 from 4 to 6
move 9 from 2 to 8
move 4 from 6 to 1
move 1 from 3 to 2
move 1 from 2 to 3
move 6 from 8 to 1
move 2 from 4 to 3
move 10 from 1 to 7
move 2 from 8 to 7
move 1 from 9 to 6
move 4 from 3 to 5
move 1 from 8 to 3
move 4 from 9 to 8
move 1 from 4 to 3
move 1 from 3 to 8
move 3 from 7 to 6
move 1 from 1 to 5
move 10 from 5 to 9
move 5 from 6 to 4
move 5 from 8 to 5
move 4 from 9 to 8
move 3 from 3 to 9
move 2 from 8 to 6
move 5 from 7 to 5
move 1 from 4 to 1
move 1 from 1 to 2
move 2 from 8 to 6
move 1 from 2 to 1
move 1 from 7 to 2
move 1 from 1 to 5
move 28 from 5 to 9
move 3 from 6 to 1
move 1 from 6 to 9
move 1 from 2 to 9
move 2 from 1 to 2
move 2 from 7 to 5
move 1 from 7 to 5
move 1 from 2 to 5
move 3 from 1 to 9
move 1 from 5 to 8
move 15 from 9 to 2
move 11 from 9 to 4
move 11 from 4 to 7
move 2 from 4 to 1
move 7 from 7 to 8
move 1 from 1 to 4
move 20 from 9 to 1
move 2 from 7 to 8
move 1 from 4 to 6
move 1 from 6 to 2
move 2 from 7 to 5
move 1 from 9 to 6
move 1 from 4 to 9
move 4 from 5 to 2
move 1 from 6 to 8
move 1 from 4 to 9
move 11 from 8 to 3
move 1 from 1 to 9
move 1 from 5 to 9
move 1 from 2 to 6
move 4 from 9 to 8
move 4 from 8 to 7
move 10 from 1 to 6
move 7 from 1 to 5
move 8 from 3 to 4
move 2 from 3 to 5
move 3 from 7 to 4
move 1 from 4 to 5
move 2 from 1 to 6
move 9 from 2 to 6
move 1 from 7 to 9
move 1 from 3 to 2
move 7 from 4 to 3
move 3 from 3 to 7
move 5 from 2 to 3
move 1 from 1 to 9
move 2 from 2 to 7
move 1 from 4 to 6
move 3 from 5 to 6
move 4 from 7 to 6
move 1 from 7 to 4
move 1 from 4 to 7
move 1 from 2 to 8
move 1 from 7 to 1
move 27 from 6 to 2
move 1 from 4 to 1
move 7 from 5 to 7
move 1 from 4 to 1
move 1 from 8 to 3
move 3 from 7 to 3
move 2 from 1 to 6
move 2 from 9 to 1
move 18 from 2 to 1
move 2 from 7 to 5
move 12 from 3 to 4
move 1 from 5 to 6
move 3 from 6 to 1
move 24 from 1 to 8
move 9 from 2 to 4
move 3 from 2 to 1
move 2 from 6 to 3
move 1 from 6 to 9
move 1 from 5 to 6
move 1 from 6 to 2
move 1 from 1 to 7
move 1 from 2 to 1
move 1 from 1 to 2
move 3 from 7 to 2
move 2 from 1 to 4
move 8 from 4 to 5
move 22 from 8 to 1
move 1 from 8 to 1
move 13 from 4 to 1
move 1 from 8 to 5
move 3 from 3 to 1
move 1 from 2 to 7
move 38 from 1 to 6
move 27 from 6 to 1
move 2 from 2 to 9
move 3 from 9 to 8
move 2 from 8 to 6
move 1 from 8 to 3
move 1 from 2 to 1
move 1 from 3 to 6
move 1 from 2 to 3
move 1 from 7 to 6
move 7 from 6 to 3
move 20 from 1 to 4
move 6 from 1 to 6
move 17 from 4 to 7
move 3 from 6 to 5
move 14 from 7 to 9
move 8 from 5 to 7
move 3 from 1 to 6
move 3 from 3 to 1
move 2 from 4 to 1
move 4 from 5 to 1
move 9 from 6 to 2
move 3 from 6 to 4
move 4 from 7 to 8
move 4 from 1 to 6
move 2 from 3 to 1
move 6 from 6 to 7
move 4 from 8 to 7
move 4 from 2 to 1
move 4 from 2 to 3
move 4 from 9 to 5
move 8 from 9 to 5
move 1 from 9 to 5
move 1 from 2 to 1
move 16 from 7 to 2
move 10 from 2 to 9
move 11 from 9 to 8
move 4 from 3 to 5
move 3 from 1 to 4
move 13 from 5 to 7
move 10 from 8 to 5
move 2 from 1 to 5
move 11 from 7 to 4
move 2 from 3 to 6
move 3 from 7 to 6
move 1 from 3 to 2
move 1 from 1 to 8
move 2 from 8 to 4
move 3 from 1 to 2
move 4 from 6 to 1
move 7 from 1 to 9
move 1 from 6 to 7
move 2 from 5 to 8
move 1 from 2 to 9
move 1 from 7 to 8
move 5 from 5 to 8
move 1 from 2 to 3
move 4 from 2 to 5
move 17 from 4 to 1
move 10 from 5 to 9
move 2 from 4 to 2
move 2 from 4 to 1
move 1 from 4 to 9
move 1 from 3 to 7
move 1 from 7 to 8
move 12 from 9 to 2
move 1 from 2 to 4
move 1 from 4 to 1
move 1 from 1 to 9
move 1 from 8 to 1
move 8 from 8 to 3
move 2 from 5 to 1
move 3 from 1 to 9
move 1 from 2 to 6
move 4 from 3 to 7
move 1 from 7 to 6
move 10 from 9 to 2
move 1 from 5 to 9
move 1 from 9 to 3
move 17 from 1 to 6
move 2 from 1 to 2
move 11 from 6 to 7
move 2 from 2 to 9
move 2 from 9 to 5
move 12 from 7 to 9
move 20 from 2 to 7
move 5 from 9 to 5
move 21 from 7 to 1
move 2 from 6 to 4
move 11 from 1 to 4
move 5 from 4 to 6
move 1 from 7 to 8
move 5 from 9 to 3
move 5 from 2 to 8
move 3 from 9 to 3
move 2 from 8 to 7
move 2 from 1 to 7
move 10 from 6 to 3
move 1 from 2 to 6
move 2 from 8 to 5
move 1 from 6 to 5
move 2 from 4 to 9
move 1 from 4 to 5
move 8 from 1 to 6
move 4 from 4 to 8
move 6 from 8 to 4
move 21 from 3 to 9
move 5 from 9 to 2
move 4 from 7 to 9
move 22 from 9 to 3
move 9 from 6 to 4
move 2 from 2 to 6
move 2 from 2 to 1
move 2 from 5 to 7
move 7 from 5 to 4
move 22 from 4 to 2
move 2 from 5 to 4
move 16 from 2 to 5
move 2 from 6 to 2
move 13 from 3 to 4
move 5 from 5 to 7
move 15 from 4 to 7
move 3 from 2 to 3
move 3 from 2 to 5
move 1 from 1 to 2
move 1 from 2 to 4
move 6 from 5 to 9
move 4 from 3 to 6
move 2 from 5 to 9
move 1 from 2 to 7
move 1 from 1 to 9
move 2 from 4 to 5
move 19 from 7 to 8
move 1 from 6 to 5
move 1 from 5 to 1
move 1 from 9 to 4
move 5 from 8 to 1
move 3 from 8 to 1
move 7 from 5 to 6
move 3 from 7 to 1
move 1 from 2 to 5
move 4 from 9 to 8
move 2 from 5 to 6
move 10 from 1 to 4
move 1 from 7 to 2
move 6 from 3 to 4
move 9 from 4 to 3
move 2 from 2 to 8
move 2 from 9 to 5
move 5 from 8 to 3
move 1 from 1 to 5
move 2 from 5 to 6
move 1 from 1 to 7
move 2 from 9 to 7
move 8 from 4 to 7
move 3 from 3 to 9
move 4 from 6 to 3
move 1 from 5 to 3
move 1 from 7 to 2
move 1 from 2 to 1
move 1 from 6 to 5
move 1 from 5 to 2
move 10 from 7 to 4
move 10 from 4 to 1
move 10 from 1 to 8
move 1 from 9 to 6
move 1 from 1 to 4
move 11 from 8 to 1
move 2 from 9 to 5
move 5 from 6 to 3
move 1 from 3 to 8
move 4 from 1 to 3
move 5 from 3 to 8
move 1 from 4 to 7
move 1 from 7 to 2
move 13 from 3 to 5
move 2 from 2 to 1
move 4 from 3 to 1
move 4 from 5 to 6
move 3 from 6 to 2
move 4 from 5 to 4
move 8 from 8 to 7
move 1 from 3 to 9`
}