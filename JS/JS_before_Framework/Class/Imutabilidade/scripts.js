const adrs1 = {
    street: "av. Brasil",
    number: 20
}

//usando o spread pra copiar as propriedades de adrs 1
const adrs2 = {...adrs1, street: "av. Pinho"}
adrs2.number = 30
console.log(adrs1,adrs2)

//exemplo com array (segue a mesma lógica)
const fruits = ["Apple", "Orange", "Banana"]
const fruits2 = [...fruits, "Melon"]
fruits2.push("Watermelon")
console.log(fruits, fruits2)


//Shallow Copy (cópia superficial) -> não pega os itens aninhados
const htmlCourse = {
    course: "HTML",
    students: [{name: "Fernando", email: "fernando@gmail.com"}]
}

const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",

    //deep copy (add novo estudante no obj)
    students: [...htmlCourse.students, {name: "Laura", email: "laura@gmail.com"}]
}

console.log(htmlCourse, jsCourse)


//Shallow Freezing (impedir modificação rasa (não se aplica nas aninhadas) )
Object.freeze(jsCourse)
jsCourse.course = "CSS" //ñ está sendo aplicado, por causa do freeze

jsCourse.students[1].name = "Matilda" //esse será aplicado
console.log(jsCourse.students[1].name)

//Deep Freezing (impedir modificação de todos os elementos)
const book = {
    title: "Objs Imutaveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "ro@gmail.com"
    }
}

function deepFreeze(object){
    
    //pega as keys do obj e joga num array
    const props = Reflect.ownKeys(object)

    //iterando sobre todas as props do obj
    for(const prop of props){
        const value = object[prop]

        //verifica se o valor é obj ou função p/ continuat aplicando o deepfreeze em obj aninhados
        if( (value && typeof value === "object") || (typeof value === "function") ){
            deepFreeze(value)
        }
    }

    return Object.freeze(object)
}

deepFreeze(book)