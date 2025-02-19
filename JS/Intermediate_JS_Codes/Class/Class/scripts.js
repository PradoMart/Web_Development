/*
//CRIANDO CLASE C/ MÉTODO CONSTRUTOR
class Person{
    constructor(name){
        console.log("Olá, " + name)
    }
}

let p1 = new Person("Leandro")

//Utilizando o this.
class Product{
    constructor(name){
        this.name = name
    }
}

let prod1 = new Product("Teclado")
let prod2 = new Product("Mouse")
console.log(prod1.name + "\n" + prod2.name)


//CRIANDO MÉTODOS
class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    //métodos
    sendEmail(){
        console.log("E-mail enviado para", this.name, "no endereço", this.email)
    }
}

const user1 = new User("Leandro", "leandro@gmail.com")
user1.sendEmail()

//METÓDO ESTÁTICO (podem ser acessados sem instanciar as classes)
class TesteEstatico{
    static showMessage(){
        console.log("This is a message.")
    }
}

TesteEstatico.showMessage();

//HERANÇAS (só colocar "extends" na declaração da classe)
class Animal{
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log("Some generic sound")
    }
}

class Dog extends Animal{
    makeNoise(){
        console.log(this.name, "faz: Au... au...")
    }
}

class Cat extends Animal{
    makeNoise(){
        console.log(this.name, "faz: Miau... Miau...")
    }
}

let dog1 = new Dog("Maradona")
dog1.makeNoise()

let cat1 = new Cat("Loren")
cat1.makeNoise()
//EXCEÇÕES
let obj = []
let nbm = 250
try{
    if(! obj.includes(17)){
        throw new Error("O nmr 17 ñ tá disponível.")
    }

    if (nbm > 99){
        throw new RangeError("Número tá fora do intervalo. Escolha até 99.")
    }
}catch (error){
    if (error instanceof TypeError){
        console.log("Método indisponível")
    }

    if (error instanceof RangeError){
        console.log(error.message)
    }
    
    console.log(error)
}*/


//ERROS CUSTOMIZADOS
class MyCustomErro{
    constructor(message){
        this.message = "CLASSE DE ERRO CUSTOMIZADA: " + message
    }
}

try{
    throw new MyCustomErro("Erro personalizado lançado!")
}catch(error) {
    if (error instanceof MyCustomErro){
        console.log(error.message)
    }
}