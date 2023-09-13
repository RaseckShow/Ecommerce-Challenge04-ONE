import { productoServices } from "../servicios/productos-servicios.js";
const contenidoCargado = await window.addEventListener("load",(loaded)=>{
    
    const btnConfirmar = document.querySelector(".confirmar__btn");
    btnConfirmar.addEventListener("click",(e)=>{
        e.preventDefault();
        const id = localStorage.getItem("idProducto");
        const imageUrl = localStorage.getItem("imageUrl");
        const category = localStorage.getItem("category");
        const name = document.querySelector(".producto__name").value;
        const price= document.querySelector(".producto__precio").value;
        const description = document.querySelector(".producto__descripcion").value;
        productoServices.actualizarProducto(category,imageUrl,name,price,description,id).then(()=>{
            alert("Cambios guardados con exito!");
            window.location.href="administrador.html";
        });
    });
});