
function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1)

function defaultParameter(d, e, f=9) {
    console.log(d,e,f)
}

defaultParameter(1,2)


// Spread/Rest
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n)
    }
}

logNums(1, 2, 3)

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total = total + n
    }
    return total
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18))