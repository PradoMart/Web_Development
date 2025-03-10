//Cotações moedas em 17/02
const USD = 5.71
const EUR = 5.98
const GBP = 7.20


// Obtendo os elementos TAG
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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

        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")
        result.textContent = `${total} Reais`
             
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