// .map() = Transforma os elementos de um array

const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero =  el => el >= 0  
const greaterThanTen = el => el >= 10
const even = el => el%2 ===0 

console.log(
    numbers
        .filter(greaterThanZero)
        .filter(greaterThanTen)
        .filter(even)
    )

const numbersV2 = numbers.map(arrayElement=>  arrayElement * 2 )

/*console.log(numbersV2)*/


const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]


const approvedClassMates = el =>el.score >=9.0
console.log(students.filter(approvedClassMates))

const getScore = elements => elements.score


const results = students
    .map(getScore)
    .map(Math.ceil)

    console.log(students, results)

// .filter() = Filtra os dados de um array, mas não muda os elementos



