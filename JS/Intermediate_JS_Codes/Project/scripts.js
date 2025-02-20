// Selecionando elementos do forms
const form = document.querySelector("form")
const category = document.getElementById("category")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")

//Seleciona os elementos da lista
const expenseList = document.querySelector("ul")
const expenseQuatity = document.querySelector("aside header p span")
const expensesTotal = document.querySelector("aside header h2")

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
        
        //criando o valor da despesa
        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.replace("R$","")}`

        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt", "remover")

        //add as infos no item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

        //add o item na lista
        expenseList.append(expenseItem)

        //limpando inputs para add novo item
        formClear()

        //atualiza os totais
        updateTotals()


    }catch (error){
        alert("Não foi possivel atualizar a lista de despesas.")
        console.log(error)
    }
}

function updateTotals(){
    try{

        const items = expenseList.children
        expenseQuatity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

        let total = 0

        for(item = 0; item < items.length; item++){
            const itemAmount = items[item].querySelector(".expense-amount")

            //removendo char ñ numéricos e substituindo virgula por ponto
            let value = itemAmount.textContent.replace(/[^\d,]/g,"").replace(",",".")

            //convertendo p/ float
            value = parseFloat(value)

            //verificando se é um numero valido
            if(isNaN(value)){
                return alert("Não foi possível calcular o total. Valor inválido!")
            }

            //somando as despesas
            total += Number(value);
        }

        //criando span formatando valor total lista
        const symbolBRL = document.createElement("small")
        symbolBRL.textContent = "R$"

        //formatando com BRL e retirando o R$, pq será exibido customizado pela small
        total = formatCurrencyBRL(total).toUpperCase().replace("R$","")

        //limpa o conteudo do elemento
        expensesTotal.innerHTML = ""
        
        //add o simbolo R$ e o valor total formatado
        expensesTotal.append(symbolBRL,total)

    }catch(error){
        console.log(error)
        alert("Não foi possível atualizar os totais.")
    }
}

//evento q captura o clique de remover itens da lista
expenseList.addEventListener("click", function(event){
    
    //verifica se o elemento clicado é o ícone de remover
    if(event.target.classList.contains("remove-icon")){
        //obtem a li pai do elemento clicado
        const item = event.target.closest(".expense")
        
        //removendo o item da lista
        item.remove()

        console.log(event)
    }
    
    //atualiza os totais
    updateTotals()

})

function formClear(){
    //limpando os inputs
    expense.value = ""
    category.value = ""
    amount.value = ""

    //focando no input nome da despesa
    expense.focus()
}