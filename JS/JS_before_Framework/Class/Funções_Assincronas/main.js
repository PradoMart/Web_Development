/*
//setTimeout() -> executa uma função após um intervalo especificado

setTimeout(() => {
    console.log("Olá, tudo bem?")
}, 3000); //tempo em milissegundos


//setInterval() -> executa repetidamente uma função após um intervalo de tempo
let value = 10

const interval = setInterval(() => {
    console.log(value)
    value--

    //interrompe o intervalo de execução
    if (value === 0){
        console.log("HAPPY NEW YEAR")
        clearInterval(interval)
    }

}, 1500);
*/

//Função q retorna uma Promise
function asyncFunction() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const isSuccess = true
    
            if(isSuccess){
                resolve("Deu certo!")
            }else{
                reject("Deu ruim!")
            }
        }, 3000);
    })
}

/*
//then -> deu certo / catch -> deu errado / finally -> faz de qualquer forma no final
asyncFunction()
    .then((response) => {
    console.log("Sucesso: ", response)
})
    .catch((error) =>{
    console.log("Erro: ", error)
})
    .finally(() => {
    console.log("Fim da execução")
})

// console.log(asyncFunction())


//arrow function
// const fetch = async () => {}

async function fetch(){
    try{
        const response = await asyncFunction()
        console.log("Sucesso: ", response)
    }catch (error){
        console.log("Erro: ", error)
    }finally{
        console.log("Fim da execução")
    }
}

fetch()
*/


//testando ordem de execução
//a saída será 1 4 2 5 3

// executa sincrona
console.log(1)

// são executadas antes de temporizadores
queueMicrotask(() => {
    console.log(2)
})

//macrotask q aguarda o temporizador
setTimeout(() => {
    console.log(3)
}, 1000)

// executa sincrona
console.log(4)

//add uma microtask
Promise.resolve(true).then(() => {
    console.log(5)
})
