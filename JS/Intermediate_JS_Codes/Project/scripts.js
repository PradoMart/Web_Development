// Selecionando elementos do forms
const amount = document.getElementById("amount")

//evento observa os inputs e remove char ñ numeric
amount.oninput = () =>{
    let value = amount.value.replace(/\D+/g,"")

    //transformando o valor em centavos
    value = Number(value) / 100

    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
    //formatando o valor em BRL
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return value
}