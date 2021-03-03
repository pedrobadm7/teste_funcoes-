const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const greatStudent = student => student.score >=9
const getScore = students => students.score
const avg = (total, element, index, array) => {
    if( index === array.length - 1 ){
        return (total + element) /array.length
    } else {
        return total + element
    }
}

console.log(
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)
)