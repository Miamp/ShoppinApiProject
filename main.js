import fetch from "node-fetch"
window.onload = ((event) => {
    allProducts()
});

async function allProducts() {
    var allProducts = "https://fakestoreapi.com/products?limit=8";
    var respuestaAllProducts = await fetch(allProducts);
    var respJsonP = await respuestaAllProducts.json();
    var productos = respJsonP;
    let contenido = document.getElementById("contenido")
    

    productos.forEach((elemento, indice, arreglo) => {
        contenido.innerHTML +=
            `
        <div class="card cardDetalles" style="width: 13rem;">
            <img class="imagen" src=${elemento.image} class="card-img-top" alt="${elemento.id}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.price}</p>
            </div>
        </div>
    `

    })
}

async function Electronicos (){
    var allelectronicos = "https://fakestoreapi.com/products/category/electronics";
    var respuestaElectronicos = await fetch (allelectronicos);
    var respElectronicos = await respuestaElectronicos.json();
    var electronicos = respElectronicos;

    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ""
    electronicos.forEach((elemento, indice, arreglo) => {
        contenido.innerHTML +=
            `
        <div class="card cardDetalles" style="width: 13rem;">
            <img class="imagen" src=${elemento.image} class="card-img-top" alt="${elemento.id}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.price}</p>
            </div>
        </div>
    `

    }) 

}

async function Joyeria(){
    var allJoyeria = "https://fakestoreapi.com/products/category/jewelery";
    var respuestaJoyeria = await fetch (allJoyeria);
    var respJoyeria = await respuestaJoyeria.json();
    var joyeria = respJoyeria;
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ""
    joyeria.forEach((elemento, indice, arreglo) => {
        contenido.innerHTML +=
            `
        <div class="card cardDetalles" style="width: 13rem;">
            <img class="imagen" src=${elemento.image} class="card-img-top" alt="${elemento.id}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.price}</p>
            </div>
        </div>
    `

    }) 
}

async function ropaH(){
    var allRopaH = "https://fakestoreapi.com/products/category/men's clothing";
    var respuestaRopaH = await fetch (allRopaH);
    var respRopaH = await respuestaRopaH.json()
    var ropaH = respRopaH;
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ""
    ropaH.forEach((elemento, indice, arreglo) => {
        contenido.innerHTML +=
            `
        <div class="card cardDetalles" style="width: 13rem;">
            <img class="imagen" src=${elemento.image} class="card-img-top" alt="${elemento.id}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.price}</p>
            </div>
        </div>
    `

    }) 
}

async function ropaM(){
    var allRopaM = "https://fakestoreapi.com/products/category/women's clothing"
    var respuestaRopaM = await fetch (allRopaM);
    var resRopaM = await respuestaRopaM.json();
    var ropaM = resRopaM;
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ""
    ropaM.forEach((elemento, indice, arreglo) => {
        contenido.innerHTML +=
            `
        <div class="card cardDetalles" style="width: 13rem;">
            <img class="imagen" src=${elemento.image} class="card-img-top" alt="${elemento.id}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.price}</p>
            </div>
        </div>
    `

    })
}

async function inicio() {
    var allProducts = "https://fakestoreapi.com/products?limit=8";
    var respuestaAllProducts = await fetch(allProducts);
    var respJsonP = await respuestaAllProducts.json();
    var productos = respJsonP;
    let contenido = document.getElementById("contenido")
    contenido.innerHTML = ""

    productos.forEach((elemento, indice, arreglo) => {
        contenido.innerHTML +=
            `
        <div class="card cardDetalles" style="width: 13rem;">
            <img class="imagen" src=${elemento.image} class="card-img-top" alt="${elemento.id}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.price}</p>
            </div>
        </div>
    `

    })
}