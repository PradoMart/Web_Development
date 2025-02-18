//Criando array de 10 posições
const newArray = new Array(10)

let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits)
console.log(fruits[1])

//add elementos no final do array
fruits.push("Pineapple")

//add elementos no inicio do array
fruits.unshift("Coconut")

//removendo elemento inicial do array
fruits.shift()

//removendo elemento no final do array
fruits.pop()

console.log(fruits)

//removendo item específico do array
let pickerFruit = fruits.indexOf("Banana")
console.log(pickerFruit)

fruits.splice(pickerFruit, 1)
console.log(fruits)

//verificando se há algum item no array
console.log(fruits.includes("Orange"))