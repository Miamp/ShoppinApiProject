import fetch from "node-fetch"  //Importar fetch

/*  const allProducts = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))*/

async function allProducts() {
    const allProducts = "https://fakestoreapi.com/products";
    const respuestaAllProducts = await fetch(allProducts);
    var respJsonP = await respuestaAllProducts.json();
    //console.log(respJsonP);
    var productos = respJsonP;
    productos.forEach((elemento, indice, arreglo) => {
        let contenido = document.getElementById("contenido")
        contenido.innerHtml = `
        <div class="card" style="width: 18rem;">
        <img src=${elemento.image} class="card-img-top" alt="${elemento.id}">
        <div class="card-body">
            <h5 class="card-title">Tittle</h5>
            <p class="card-text">Mini descripcion</p>
            <a href="#" class="btn btn-primary">Detalles</a>
        </div>
    </div>
    `
    })
}



module.exports={
    allProducts,
}