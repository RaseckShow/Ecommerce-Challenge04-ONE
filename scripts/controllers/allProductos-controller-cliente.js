import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl,id) => {
    const card = document.createElement("div");
    const content = 
    `<div class="producto__box">
        <div class="imagen__card" style="background: url(${imageUrl}) no-repeat center / cover">
            
        </div>
    <h3 class="producto__name">${name}</h3>
    <p class="producto__precio">$ ${price}</p>
    <a href=""><button id="${id}" class="verproducto__btn">Ver Producto</button></a>
    </div>`

    card.innerHTML = content;
    card.classList.add("card");
    return (card);
}

const producto = document.querySelectorAll("[data-productos]");

const renderCliente = async() => {
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
                    producto[0].appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl,elemento.id));
            }
        );
    }
    catch(error){
        console.log(error);
    }
}

renderCliente();