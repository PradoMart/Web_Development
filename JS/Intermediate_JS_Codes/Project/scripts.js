// Selecionando elementos do forms
const form = document.querySelector("form")
const category = document.getElementById("category")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")

//Seleciona os elementos da lista
const expenseList = document.querySelector("ul")

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

//captura o evento de submit obtendo os valores
form.onsubmit = (event) =>{
    event.preventDefault()

    //cria obj c/ detalhes na nova despesa
    const newExpense = {
        //pegando o timestamp como ID, pois sempre será único
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    //chamando function q adicionará o item na lista
    expenseAdd(newExpense)
}

function expenseAdd(newExpense){
    try{
        //cria o elemento na lista 
        const expenseItem = document.createElement("li")
        //add a classe "expense" estilização CSS
        expenseItem.classList.add("expense")

        //criando a img/icon
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `./img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        //criando o nome da categora da despesa
        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")
        
        //cria o nome da despesa
        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense
        
        //cria o nome da categoria da despesa
        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name
        
        //add nome e categoria na div
        expenseInfo.append(expenseName, expenseCategory)
        
        
        //add as infos no item
        expenseItem.append(expenseIcon, expenseInfo)

        //add o item na lista
        expenseList.append(expenseItem)

    }catch (error){
        alert("Não foi possivel atualizar a lista de despesas.")
        console.log(error)
    }
}