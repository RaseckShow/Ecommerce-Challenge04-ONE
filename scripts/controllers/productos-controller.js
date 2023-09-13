import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl,id) => {
    const card = document.createElement("div");
    const content = 
    `<div class="producto__box">
    <img src="${imageUrl}" alt="" class="producto__img" >
    <h3 class="producto__name">${name}</h3>
    <p class="producto__precio">$ ${price}</p>
    <a href="descripcionProducto.html"><button id="${id}" class="verproducto__btn">Ver Producto</button></a>
    </div>`

    card.innerHTML = content;
    card.classList.add("card");
    return (card);
}
const productosAMostrar =(width)=>{
    let cantidadProductos= 0;
    switch (true) {
        case (width < 768):
            cantidadProductos = 4;
            break;
        case (width < 1024 && width>=768):
            cantidadProductos = 5;
        break;
        default:
            cantidadProductos = 6;
        break;
    }
    return cantidadProductos;
}
const producto = document.querySelectorAll("[data-productos]");

const render = async() => {
    try{
        const width = document.documentElement.clientWidth;
        const loader = document.querySelector(".loader");
        const listaProductos = await productoServices.listaProductos();
        let productosMostradosStarwars = 0;
        let productosMostradosConsolas = 0;
        let productosMostradosDiversos = 0;
        listaProductos.forEach(elemento => {
            const categoria = elemento.category;

            switch(categoria){
                case "star wars":
                    if (productosMostradosStarwars < productosAMostrar(width)) {
                        producto[0].appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl,elemento.id));
                        productosMostradosStarwars++;                        
                    } 
                break;
                case "consolas":
                    if (productosMostradosConsolas < productosAMostrar(width)) {
                        producto[1].appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl,elemento.id));
                        productosMostradosConsolas++;                        
                    }     
                break;
                case "diversos":
                    if (productosMostradosDiversos < productosAMostrar(width)) {
                        producto[2].appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl,elemento.id));                        
                        productosMostradosDiversos++;                        
                    } 
                break;
            }
        });
    loader.remove();
    }
    catch(error){
        console.log(error);
    }
}

render();