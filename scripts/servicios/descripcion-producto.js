const contenidoCargado = window.addEventListener("load",(loaded)=>{
    const btnsVerProducto = document.querySelectorAll(".verproducto__btn");    
    console.log("Botones Cargados");
    btnsVerProducto.forEach((btnVerProducto)=>{
        btnVerProducto.addEventListener("click",(e)=>{
            e.preventDefault(); 
            localStorage.setItem("idProducto", e.target.id);
            setTimeout (window.location.href="descripcionProducto.html", 3000);
            });
        });
    });


