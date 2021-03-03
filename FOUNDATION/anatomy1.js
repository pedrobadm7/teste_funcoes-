// Function declaration

function sayHello(){ //Função sem parâmetro e sem return
    console.log('Hello')
}

sayHello()

function sayHelloTo(name){
    console.log(`Hello ${name}`)
}

sayHelloTo('Pedro')

function returnHi(){ //Função sem parâmetro e com retorno
    return 'Hi'
}

let greeting = returnHi()
console.log(greeting)

function returnHiTo(name){
    return `Hi ${name}` 
}
console.log(returnHiTo('Pedro'))

