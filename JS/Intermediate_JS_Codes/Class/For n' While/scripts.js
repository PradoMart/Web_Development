/*
//while
let execute = true
while(execute){
    let response = window.prompt("CONTINUAR: 1-YES / 2-NO")

    if (response === "2"){
        execute = false
    }
}

//do while
let value = 0
do{
    value++
    console.log(value)
} while( value < 10)


//FOR
let list = []
for(i = 0; i < 10; i++){
    list.push(i)
}
console.log(list)

//FOR IN
let person = {
    name: "Leandro",
    surname: "Martins",
    email: "leandro@email.com"
}

for (let x in person){
    //exibe a chave
    console.log(x)

    //exibe o valor
    console.log(person[x])
}
*/
//FOR OF (Itera sobre os valores)

let students = ["Leandro", "Ana", "Thamiris"]

for (let student of students){
    console.log(student)
}


// BREAK
for(let i = 0; i < 10; i++){
    if (i === 5){
        break
    }
    console.log(i)
}

// CONTINUE (quando chega na condição, volta pro loop, ñ executa)
for(let i = 0; i < 10; i++){
    if (i === 5){
        continue
    }
    console.log(i)
}