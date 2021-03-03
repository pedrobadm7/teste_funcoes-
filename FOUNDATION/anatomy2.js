//Função anônima 
(function (a, b) {
    return a + b;  
})



//Function Expression
const x = 1
const sum = function (c,d) {
    return c + d
}

const result = sum(10,9)
console.log(result)

const anotherSum = sum
console.log(sum(5,3))