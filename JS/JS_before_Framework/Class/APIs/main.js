//Utilizando  fetch com o .then
// fetch("http://localhost:3000/products")
//     .then((response) => response.json())
//     .then((data) => console.log(data))


//Utilizando fetch com async/await
async function fetchProducts(){
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()

    console.log(data)
}
// fetchProducts()
/*
async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json()

    console.log(data)
}

fetchProductById("2")*/

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event) =>{
    event.preventDefault()

    await fetch("http://localhost:3000/products", {
        method: "POST",
        headers:{
            //formato em json
            "Content-Type": "application/json"
        },
        
        //transformando de JS para JSON
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value,
        })
    })

    await fetchProducts()  
})
