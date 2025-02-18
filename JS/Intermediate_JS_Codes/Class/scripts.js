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
        console.log(user.name.first_name)
    }
}

user.message()