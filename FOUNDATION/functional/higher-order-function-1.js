function run(fn) {
    fn()
}   

function sayHello() {
    console.log('Hello')
    return 3
}

run(sayHello)