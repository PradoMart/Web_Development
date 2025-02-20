//STRICT MODE (passa a apresentar erros q eram tratados automatico)

// "use strict"

/*function showMessage(){
    let personName = "Leandro Martins"
    console.log(personName)
}

showMessage()

//passando parametros iguais na função
function sum(a, a, c){
    return a + a + c
}
//DESTRUTURAÇÃO DE ARRAY
const data = ["Leandro", "leandro@gmail.com"]

const [username, email] = data
console.log(username)

const fruits = ["banana", "apple", "orange"]

const [banana] = fruits
const [, maça] = fruits
const [, ,laranja] = fruits
console.log(banana, maça, laranja)



//DESESTRUTURAÇÃO DE OBJETOS
const product = {
    description: "Teclado",
    price: 150
}

const {description , price} = product
console.log("Descrição: ", description)

function newProduct({description, price}){
    console.log("Descrição: ", description)
    console.log("Preço: ", price)
}

newProduct({description: "Mouse", price: 70})
*/


//REST PARAMS (...) permite representar um nmr indefinido de args como um array
function values(...rest){
    console.log(rest)
    console.log(...rest)
}

values(5, 50, 500, 5000)


//SPREAD - Permite q um obj iteravel (array ou string) seja expandido p/ ser usado onde zero ou mais argumentos
const numbrs = [1, 2, 3]
console.log(numbrs)

console.log(...numbrs)