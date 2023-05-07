import { productoServices } from "../servicios/productos-servicios.js";

const edicionProducto = (name, price, imageUrl,id) => {
    const card = document.createElement("div");
    const content = 
    `<div class="producto__box">
    <div class="btnsEdicionProducto">
        <img src="img/btnEliminar.png" alt="" class="eliminarProducto__img">
        <img src="img/btnEditar.png" alt="" class="editarProducto__img">
    </div>
    <img src="${imageUrl}" alt="" class="producto__img">
    <h3 class="producto__name">${name}</h3>
    <p class="producto__precio">$ ${price}</p>
    <p class="producto__id"># ${id}</p>
    </div>`

    card.innerHTML = content;
    card.classList.add("card");
    return (card);
}

const producto = document.querySelectorAll("[data-productos]");

const renderAdmin = async() => {
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
                    producto[0].appendChild(edicionProducto(elemento.name, elemento.price,elemento.imageUrl,elemento.id));
            }
        );
    }
    catch(error){
        console.log(error);
    }
}

renderAdmin();