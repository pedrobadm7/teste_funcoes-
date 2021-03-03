const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, element) => total + element
const fibonacci = numbers.reduce(sum)
console.log(fibonacci)

let media = fibonacci/numbers.length
console.log(media)

const avg = (total, element, i, numbers) => {
    if( i === numbers.length - 1) {
        return (total + element) / numbers.length
    } else {
        return total + element
    }
}


const result = numbers.reduce(avg)
console.log(result)
