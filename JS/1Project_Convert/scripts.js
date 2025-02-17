const amount = document.getElementById("amount")

// manipulando o input p/ recber só numeros
amount.addEventListener("input", () => {
    const regex = /\D+/g

    amount.value = amount.value.replace(regex,"")
})