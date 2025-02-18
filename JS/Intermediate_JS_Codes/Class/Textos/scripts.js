/*
let message = "To aprendendo JavaScript."
console.log(message);

//UPPER CASE n' lower case
console.log(message.toUpperCase())
console.log(message.toLowerCase())


//COMPRIMENTO (propriedade)
message = "Leandro"
console.log(message.length)


//SUBSTITUINDO PARTE DE UM TEXTO
console.log(message.replace("JavaScript", "Python"))

//EXTRAINDO PARTE DA STRING
console.log(message.slice(0,10))

//EXTRAINDO PARTE DA STRING (DE TRÁS P/ FRENTE)
console.log(message.slice(-11,-1))

//REMOVENDO ESPAÇOS EM BRANCO NO INICIO E FINAL
let textWithSpace = "    Texto de exemplo  "
console.log(textWithSpace.length)

let textNoSpace = textWithSpace.trim()
console.log(textNoSpace.length)


//COMPLETANDO/OCULTANDO STRING
const creditCard = "1234567812344928"

const last4Digtis = creditCard.slice(-4)

//mascarando os 12 digitos inicias
const maskedNumber = last4Digtis.padStart(creditCard.length, "X")

console.log(maskedNumber)


//SEPARANDO E UNINDO STRINGS
let text = "Estudar, Aprender, Praticar"

let separate = text.split(",")
console.log(separate) //retorna um array com as palavras

let joined = separate.join(" - ")
console.log(joined)
*/

//ENCONTRANDO CONTEÚDO NO TEXTO
let message = "To aprendendo JavaScript."

//Pegando index inicial da palavra (quando ñ encontra, retorno -1)
console.log(message.indexOf("JavaScript"))

//Verificando se existe uma palavra dentro da string
console.log(message.includes("JavaScript"))

