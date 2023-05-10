import { productoServices } from "../servicios/productos-servicios.js";

const mostrarProducto = (name, price, imageUrl,descripcion) => {
    const card = document.createElement("div");
    const content = 
    `<div class="info__producto">
        <img class="producto__img" src="${imageUrl}" alt="">
        <div class="infoContainer">
            <h3 class="producto__name">${name}</h3>
            <p class="producto__precio">$ ${price}</p>
            <p class="producto__descripcion">${descripcion}</p>
        </div>
    </div>`

    card.innerHTML = content;
    card.classList.add("card");
    return (card);
}

const producto = document.querySelectorAll(".descripcion__container");

const renderDescripcion = async() => {
    try{
        const listaProductos = await productoServices.listaProductos();
        const idProducto = localStorage.getItem("idProducto");
        listaProductos.filter(elemento => {
            if(elemento.id == idProducto){
            producto[0].appendChild(mostrarProducto(elemento.name, elemento.price,elemento.imageUrl,elemento.description))
            }
        });
    }
    catch(error){
        console.log(error);
    }
}

renderDescripcion();