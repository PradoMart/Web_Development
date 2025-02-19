/*
//pegando data/hora atual
console.log(new Date())

//pegando dt especifica (mês começa em 0)
console.log(new Date(2024,11,3)) //retorna 03/12/2024

//add hora
console.log(new Date(2024, 5, 4, 15,30))

//pegando datetime usando string
let date = new Date("2024-07-03T14:30:00")
console.log(date)


//MÉTODOS TRABALHANDO COM DATETIME

// dia da semana de 0 6 (domingo é 0)
console.log(date.getDay())

// Mes do ano (0 a 11, sendo 0 janeiro)
console.log(date.getMonth())


//MODIFICANDO DATA E HORA
//mudando a data para 05/10/2030 20:30
date.setDate(5)
date.setMonth(9)
date.setFullYear(2030)
date.setHours(20)
console.log(date)


//FORMATANDO DATETIME
let date = new Date("2024-07-03T14:30:00")
//colocando 0 a esquerda no dia.
console.log("DIA: " + date.getDate())
console.log("DIA FORMATADO: " + date.getDate().toString().padStart(2, "0"))
console.log("MÊS FORMATADO: " + (date.getMonth()+1).toString().padStart(2, "0"))

//retirando o time
console.log("usando toDateString: "+ date.toDateString())

//formato BR (ToLocale)
console.log("usando toLocaleDateString: "+ date.toLocaleDateString("pt-BR"))

console.log("usando toLocaleString: "+ date.toLocaleString("pt-BR", {
    dateStyle: "medium",
    // day: "2-digit",
}))
*/

//CONHECENDO A INTL - API de Internacionalização do ECMAScript
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

// exibindo no formato de acordo c/ localidade
const date =  new Date();
const dateFormat = new Intl.DateTimeFormat("pt-BR")
console.log(dateFormat.format(date))

// pegando a diferença de fuso horario em horas (divisao por 60)
console.log(date.getTimezoneOffset() / 60)
