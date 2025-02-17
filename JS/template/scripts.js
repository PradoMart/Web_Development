/*
// consigo ver (no inspecionar) o conteudo da webpage na área de console, ao invés de elements;
console.log(document)


//pegando o title da página
console.log(document.title)

//pegando elemento pelo ID
let guest = document.getElementById("guest-1")
console.log(guest)

// mostrar as propriedades do obj
console.dir(guest)

// pegando elemento(s) pela casse
let guest_class = document.getElementsByClassName("guest")
console.log(guest_class)
console.log(guest_class[1]) //pegando um específico

// pegando elemento(s) pela TAG
let guests_Tag = document.getElementsByTagName("li")

// querySelector (usa os seletores de CSS [# p/ id (.) p/ classe ])
let guest_qS = document.querySelector("#guest-1"); //VAI PEGAR APENAS O PRIMEIRO

let guest_qS_class = document.querySelectorAll(".guest") //PEGA TODOS OS ELEMENTOS

// Atribuindo novo texto pro elemento.
console.log(document.querySelector("#guest-1 span").textContent = "Maria") 

// TextContent e inner Text (mostrando conteúdos)
console.log(guest_qS.textContent);
console.log(guest_qS.innerText);
console.log(guest_qS.innerHTML);


//ALTERANDO ESTILOS
const input = document.querySelector("#name");

//add uma class css numa tag html pelo JS
//input.classList.add("input-error");

//removendo
//input.classList.remove("input-error");

// toggle add a classe se não existir, caso contrário, remove-a.
input.classList.toggle("input-error");

//mudando a cor do botão pelo JS
const button = document.querySelector("button");
button.style.backgroundColor = "orange";


//CRIANDO ELEMENTOS
const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");

const guestName = document.createElement("span");
guestName.textContent = "Leandro";

//add os elementos SPAN criados dentro da li
newGuest.append(guestName);

guests.append(newGuest);
// guests.prepend(newGuest); (add o elemento antes do primeiro conteúdo)


//MANIPULANDO ATRIBUTOS set.Attribute("nome_atributo", "novo_valor_atributo")
const input = document.querySelector("input");
// input.setAttribute("type", "checkbox");
input.setAttribute("placeholder", "Seu nome:");
input.removeAttribute("placeholder");



//EVENTOS
//monitorando o F5.
window.addEventListener("load", () => {
    console.log("A página foi carregada!")
});

//monitorando os cliques na tela
addEventListener("click", (event) =>{
    //não recarrega a pag ao clicar no button    
    event.preventDefault()

    //retorna todas as infos do evento
    console.log(event)

    //retornar o elemento clicado
    console.log(event.target);
})

//evento em tag específica
const ul = document.querySelector("ul");

ul.addEventListener("scroll", (event) => {
    // console.log(event);
    console.log(ul.scrollTop);

    if (ul.scrollTop > 380){
        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})


//evento em forms (USANDO ON)
const form = document.querySelector("form")

// O unico problema do "on" é que ele pega apenas o ultima codigo.
form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("Submit no forms. #1")
}

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log("Submit c/ add event. #2")
})


//event em input (keydown / keypress)
const input = document.querySelector("input")

//keydown = qualquer tecla é pressionada, incluindo CTRL, CHIFT
input.addEventListener("keydown", (event) =>{
    console.log(event.key);
})

//keypress = teclas pressionadas (letras, numeros, pontos)
input.addEventListener("keypress", (event) =>{
    console.log(event.key)
})
*/


//REGEX
const input = document.querySelector("input")
const form = document.querySelector("form")
input.addEventListener("input", () => {
    const value = input.value;

    const regex = /\D+/g

    //o match é um método usado com a REGEX que valida o código passada na expressão com alguma outra variável.
    console.log(value.match(regex)) 

    //testa se o valor passado tá nos padrões da regex, o return é false/true
    const isValid = regex.test(value)
})

form.addEventListener("submit", (event) => {
    event.defaultPrevented()
    
    const regex = /\D+/g

    //substituindo char ñ digitos por nada.
    const value = input.value.replace(regex, "")
    
    console.log(value)
})