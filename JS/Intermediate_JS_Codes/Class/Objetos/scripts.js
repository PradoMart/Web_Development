/*
//criando um objeto vazio
const obj = {}

//criando obj com propriedade e metodo
const user = {
    email: "leandro@email.com",
    age: 18,

    //obj aninhado
    name: {
        first_name: "Leandro",
        surname: "Martins"
    },
    
    //obj aninhado
    address: {
        street: "Rua Y",
        number: 24,
        city: "Uberlandia",
        postal_code: "38401575"
    },

    message: function(){
        //acessando o first name
        console.log(user.name.first_name)
        
        //acessando prop usando this.
        console.log(`Olá, ${user.name.first_name}. Sua cidade é ${this.address.city}.`)
    }
}

//mostrando o first name pelo método message
user.message()

//Atualizando valores das propriedades
user.name.first_name = "Geovane"

console.log(user.name.first_name)

//Optional chaining (não sei se colocaram o ZIP, se colocar, mostra na tela, se não, retorna undefined.)
console.log(user?.address?.postal_code)

user.message?.()
*/
function createProduct(name){
    const product = {}

    product.name = name
    product.details = function () {
        console.log(`O nome do produto é ${this.name}.`)
    }
    return product
}

//função construtora p/ obj
const product1 = new createProduct("Teclado")
product1.details()

const product2 = new createProduct("Mouse")

//otimizando a função construtora
function Person(name){
    this.name = name
    this.message = function(){
        console.log(`Olá, ${this.name}`)
    }
}

const pessoa1 = new Person("Gustavo")
pessoa1.message()