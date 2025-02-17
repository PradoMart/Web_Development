//Cotações moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// Obtendo os elementos TAG
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// manipulando o input p/ recber só numeros
amount.addEventListener("input", () => {
    const regex = /\D+/g

    amount.value = amount.value.replace(regex,"")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrecy(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrecy(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrecy(amount.value, GBP, "£")
            break
    }
}

function convertCurrecy(amount, price, symbol){
    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
             
        //exibe o resultado a partir da classe.
        footer.classList.add("show-result")
        
    }catch (erro) {
        footer.classList.remove("show-result")
        
        console.log(erro)
        alert("Não foi possível. Tente mais tarde!")
    }
}

// Formatando a cotação da moeda p/ real BRL
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}