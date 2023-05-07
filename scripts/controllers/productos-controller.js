import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) => {
    const card = document.createElement("div");
    const content = 
    `<div class="producto__box">
    <img src="${imageUrl}" alt="" class="producto__img">
    <h3 class="producto__name">${name}</h3>
    <p class="producto__precio">$ ${price}</p>
    <a href=""><button class="verproducto__btn">Ver Producto</button></a>
    </div>`

    card.innerHTML = content;
    card.classList.add("card");
    return (card);
}

const producto = document.querySelectorAll("[data-productos]");

const render = async() => {
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            const categoria = elemento.category;
            switch(categoria){
                case "star wars":
                    producto[0].appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl));
                break;
                case "consolas":
                    producto[1].appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl));
                break;
                case "diversos":
                    producto[2].appendChild(nuevoProducto(elemento.name, elemento.price,elemento.imageUrl));
                break;
                    
            }
        });
    }
    catch(error){
        console.log(error);
    }
}

render();