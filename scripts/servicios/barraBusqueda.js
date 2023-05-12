const inputBuscar = document.getElementById("buscador");

const estaEnfocado = () => {
    inputBuscar.addEventListener('keyup', (event) => {
        let keyValue = event.key;
        if(keyValue == "Enter" && inputBuscar.value != "" ){
            localStorage.setItem("dataBusqueda",inputBuscar.value);
            setTimeout (window.location.href="filtrarProductos.html", 3000);
        }
    });
}

inputBuscar.addEventListener('focus',estaEnfocado ,false);