// delete object property
// const student = {
//     name: 'pravin patil',
//     sClass: 'v1',
//     rollNo: 12,
// }
// console.log(student);
// delete student.rollNo
// console.log(student)

//Write a JavaScript program to get the length of a JavaScript object.
// const student = {
//     name: 'pravin patil',
//     sClass: 'v1',
//     rollNo: 12,
// }

// Object.objsize = function (Myobj) {
//     var osize = 0, key;
//     for (key in Myobj) {
//         if (Myobj.hasOwnProperty(key)) osize++;
//     }
//     return osize;
// };
// let objSize = Object.objsize(student)
// console.log(objSize)
//
const a = [
    {
        id: 1, name: 'ram'
    },
    {
        id: 2, name: 'ramu'
    },
    {
        id: 3, name: 'kamu'
    }
]
const b = [
    {
        id: 2, name: 'shyam'
    },
    {
        id: 1, name: "xxx"

    },

]
const c = [{ ...a, ...b }]
console.log(c)


const efsdf = 'dkdkakdj'


const z = eval("efsdf")
console.log(z)