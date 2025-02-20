//map() -> Cham a function callback recebida por parametro p/ cd elemento do array original (em ordem) e constroi um novo array c/ base nos retornos de cada chamada e no final devolve o novo array

const products = ["teclado", "mouse", "monitor"]

//percorrendo itens do array
products.map(function (item){
    console.log(item)
})

const formatted = products.map((item) => {
    return item.toUpperCase()
})

console.log(formatted)


//filter() -> cria um novo array com todos os elementos que passaram na condição
const words = ["Javascript", "HTML", "CSS", "WEB"]

const result = words.filter((word) => word.length > 5)
console.log(result)

const fruits = [
    {description: "Banana", price: 5, promotion: true},
    {description: "Orange", price: 10, promotion: false},
    {description: "Apple", price: 15, promotion: true}
]

const promotion = fruits.filter((fruit) => fruit.promotion === true && fruit.price > 6)
console.log(promotion)


//findIndex() -> retorna o index no array do primeiro elemento q satisfazer a condição. Do contrário, retorna -1, indicando q nenhum elemento passou no teste
const numbers = [4, 6, 8, 12]

const index = numbers.findIndex((number) => number > 4)
console.log(index)


//find() -> retorna o valor do primeiro elemento q satisfazer a condição. Do contrário, retorna undefined.
// const found = numbers.find((number) => number > 6)
const found = numbers.find(function (number){
    return number < 6
})
console.log(found)

const result2 = fruits.find((fruit) => fruit.description.includes("pple"))
console.log(result2)


//every() -> testa se todos os elementos do array passam na condição e retorna um valor boolean
const idades = [15, 67, 26, 16]

const result3 = idades.every((idade) => idade > 14)
console.log(result3) //retorna false


//every() -> testa se ao menos um  dos elementos do array passam na condição e retorna um valor boolean
const result4 = idades.some((idade) => idade > 20)
console.log(result4) //retorna true


//reduce() -> usado p/ reduzir um array a um unico valor
    /*
    Parametros:
        Array original (values)
        Acumulador (accumulator)
        Valor Iteração (currentValue)
        Valor Inicial (0)
        Index (index da iteração atual - opcional)
    */
const valores = [2,2]

const sum = valores.reduce((accumulator, currentValue, index) => {
    return accumulator + currentValue
}, 0)

console.log(sum)