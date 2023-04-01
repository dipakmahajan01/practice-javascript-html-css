
//reverse array by using for loop
// const newArr = [];
// const arr = [1, 2, 3, 'a', 'b', true];
// for (let index = arr.length - 1; index >= 0; index--) {
//     newArr.push(arr[index])
// }
// console.log(newArr)


//star pattern right side
// let x, y, char=''
// for (let x = 1; x < 6; x++) {
//     for (let y = 0; y < x; y++) {
//         char += ('*')
//     }
//     char += '\n'

// }
// console.log(char)
//star pattern Hollow Triangle Star Pattern

// let n = 6, string = ""
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n-1) {
//             string += "*"
//         } else {
//             if (j === 0 || j === n-1) {
//                 string += "*"
//             }
//             else {
//                 string += ' '
//             }
//         }

//     }
//     string += '\n'

// }
// console.log(string)

// javascript Pyramid Pattern
// let n = 5, string = ''
// for (let i = 1; i <= n; i++) {

//     for (let j = 1; j <= n - i; j++) {

//         string += ' '
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string)
// reverse Pyramid Pattern
// let n = 5, string = ''
// for (let i = 0; i < n; i++) {

//     for (let j = 0; j < i; j++) {

//         string += ' '
//     }
//     for (let k = 0; k < 2 * (n - i) - 1; k++) {
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string)

//square pattern

// let n = 5, string = ''
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         string += '*'
//     }
//     string += '\n'

// }
// console.log(string)
//

// let n = 3, string = '';
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += '*'
//     }
//     // for (let k = 0; k < 2 * (i - 1); k++) {


//     // }
//     console.log(string)
// }




let n = 10
let str =  ''
for (let i = 0; i < n; i++) {
    for (let j = 2; j < n; j++) {
        if (i == j - 1 && j == n - ((j + 2) + 1)) {
            str += ' '
        }
        if (i == j - 1 && j == n - ((n / 2) + i)) {
            str += ' '
        }
        str += '*'
    }
    str += '\n'
}
console.log(str)