import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price,imageUrl) => {
    const card = document.createElement("div");
    const content = 
    `<div class="producto__box">
    <img src="${imageUrl}" alt="" class="producto__img">
    <h3 class="producto__name">${name}</h3>
    <p class="producto__precio">${price}</p>
    <a href=""><button class="verproducto__btn">Ver Producto</button></a>
    </div>`

    card.innerHTML = content;
    card.classList.add("card");
    return (card);
}

const producto = document.querySelector("[data-productos]");

const render = async() => {
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl))
        });
    }
    catch(error){
        console.log(error);
    }
}

render();