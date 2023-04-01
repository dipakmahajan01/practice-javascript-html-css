// string length 
const a = 'ram lakhan'
// let b = a.length // return string length
// let b = a.slice(7, 10) // return string according to given number form right side
let b = a.slice(-7)
console.log(b)

let n = 5, string = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - i) {
            string += '*'
        }
        else {
            if (j === 0 || j === n - j) {
                string += '*'
            }
            else {
                string += ' '
            }
        }

    }
    string += '\n'
}
console.log(string)

let x 
x = 10
console.log(x)