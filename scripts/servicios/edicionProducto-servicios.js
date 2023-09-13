import { productoServices } from "./productos-servicios.js";
const contenidoCargado = await window.addEventListener("load",(loaded)=>{
    const btnsEditar = document.querySelectorAll(".editar__btn");    
    const btnsEliminar = document.querySelectorAll(".eliminar__btn");
    const loader = document.querySelector(".loader");

    let listenersEditLoad = false;
    let listenersDelLoad = false;

    btnsEditar.forEach((btnEdit)=>{
        listenersEditLoad = true;
        btnEdit.addEventListener("click",(e)=>{
            e.preventDefault();
            localStorage.setItem("idProducto", e.target.id);
            setTimeout (window.location.href="editarProducto.html", 3000);
        });
    });

    btnsEliminar.forEach((btnEliminar)=>{
        listenersDelLoad = true;
        btnEliminar.addEventListener("click",(e)=>{
            e.preventDefault();
            const id = e.target.id;
            productoServices.eliminarProducto(id).then(()=>{
                alert("Producto eliminado con exito!");
                setTimeout (window.location.reload(), 3000);
            });
        });
    });
    
    if (listenersDelLoad && listenersEditLoad) {
        loader.remove();    
    }
});


