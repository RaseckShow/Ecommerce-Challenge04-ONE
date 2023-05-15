import { productoServices } from "../servicios/productos-servicios.js";

const mostrarProducto = (name, price, imageUrl,descripcion) => {
    const card = document.createElement("div");
    const content = 
    `<div class="info__producto">
        <img class="producto__img" src="${imageUrl}" alt="">
        <div class="infoContainer">
            <input class="producto__name" type="text" value="${name}">
            <input class="producto__precio" type="number" value="${price}">
            <textarea class="producto__descripcion" rows="8">${descripcion}</textarea>
        </div>
    </div>
    <div class="btnsConfirmacion">
        <a href="administrador.html"><button class="cancelar__btn">Cancelar</button></a>
        <a href=""><button action="info__producto" class="confirmar__btn">Confirmar cambios</button></a>
    </div>`

    card.innerHTML = content;
    card.classList.add("card");
    return (card);
}

const producto = document.querySelectorAll(".edicionProducto__container");

const renderEditor = async() => {
    try{
        const listaProductos = await productoServices.listaProductos();
        const idProducto = localStorage.getItem("idProducto");
        listaProductos.filter(elemento => {
            if(elemento.id == idProducto){
                producto[0].appendChild(mostrarProducto(elemento.name, elemento.price,elemento.imageUrl,elemento.description));
                localStorage.setItem("imageUrl", elemento.imageUrl);
                localStorage.setItem("category", elemento.category);
            }    
        });
    }
    catch(error){
        console.log(error);
    }
}

renderEditor();

