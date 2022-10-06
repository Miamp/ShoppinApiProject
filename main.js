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
                <a href="#" class="btn btn-primary">Detalles</a>
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
    console.log(respElectronicos);

    let contenido = document.getElementById("contenido")
    electronicos.forEach((elemento, indice, arreglo) => {
        contenido.innerHTML +=
            `
        <div class="card cardDetalles" style="width: 13rem;">
            <img class="imagen" src=${elemento.image} class="card-img-top" alt="${elemento.id}">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.price}</p>
                <a href="#" class="btn btn-primary">Detalles</a>
            </div>
        </div>
    `

    }) 

}