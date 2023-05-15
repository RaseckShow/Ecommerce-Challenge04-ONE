import { productoServices } from "./productos-servicios.js";
const contenidoCargado = window.addEventListener("load",(loaded)=>{
    const btnsEditar = document.querySelectorAll(".editar__btn");    
    const btnsEliminar = document.querySelectorAll(".eliminar__btn");
    const btnConfirmar = document.querySelector(".confirmar__btn");
    
    btnsEditar.forEach((btnEdit)=>{
        btnEdit.addEventListener("click",(e)=>{
            e.preventDefault();
            localStorage.setItem("idProducto", e.target.id);
            setTimeout (window.location.href="editarProducto.html", 3000);
        });
    });

    btnsEliminar.forEach((btnEliminar)=>{
        btnEliminar.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log("Boton Eliminar # " + e.target.id);
            // localStorage.setItem("idProducto", e.target.id);
            // setTimeout (window.location.href="EditarProducto.html", 3000);
        });
    });
    
    btnConfirmar.addEventListener("click",(e)=>{
        e.preventDefault();
        const id = localStorage.getItem("idProducto");
        const imageUrl = localStorage.getItem("imageUrl");
        const name = document.querySelector(".producto__name").value;
        const price= document.querySelector(".producto__precio").value;
        const description = document.querySelector(".producto__descripcion").value;
        productoServices.actualizarProducto(imageUrl,name,price,description,id).then(()=>{
            alert("Cambios guardados con exito!");
            window.location.href="administrador.html";
        });
    });
});


