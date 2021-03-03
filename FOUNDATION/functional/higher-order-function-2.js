// Curring (Retornar uma fnção a partir de outra função)
function finalPrice(tax) {
    return function(price){
        return price* (1+tax)
    }

    
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))