import { productoServices } from "../servicios/productos-servicios.js";

const edicionProducto = (name, price, imageUrl,id) => {
    const card = document.createElement("div");
    const content = 
    `<div class="producto__box">
        <div class="imagen__card" name="${imageUrl}" style="background: url(${imageUrl}) no-repeat center / cover">
            <div class="botonesModificadores">
                <a href=""><button id="d-${id}" class="eliminar__btn"><img  id="${id}" src="img/btnEliminar.png" alt=""></button></a>
                <a href=""><button id="m-${id}"  class="editar__btn"><img class="edit__btn" id="${id}" src="img/btnEditar.png" alt=""></button></a>
            </div>
        </div>
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