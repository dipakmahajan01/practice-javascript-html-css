
const students = [
    {
      name: 'Dipak',
      age: 21,
      subject: [
        {
          subjectName: 'math',
          marks: 50
        },
        {
          subjectName: 'science',
          marks: 50
        },
        {
          subjectName: 's.s',
          marks: 50
        }
      ]
  
    },
    {
      name: 'John',
      age: 21,
      subject: [
        {
          subjectName: 'math',
          marks: 50
        },
        {
          subjectName: 'science',
          marks: 50
        },
        {
          subjectName: 's.s',
          marks: 50
        }
      ]
  
    },
    {
      name: 'shone',
      age: 21,
      subject: [
        {
          subjectName: 'math',
          marks: 50
        },
        {
          subjectName: 'science',
          marks: 50
        },
        {
          subjectName: 's.s',
          marks: 50
        }
      ]
  
    }
  ]
  // const newArr = students[0].subject.reduce((result, item) => {
  //       return result += item.marks
  // }, 0)
  // console.log(newArr)
  const newArr = students.map((index, element) => {
    console.log(index.name)
    return index.subject.reduce((result, item) => {
     return result + item.marks
    }, 0)
  })
  console.log(newArr)