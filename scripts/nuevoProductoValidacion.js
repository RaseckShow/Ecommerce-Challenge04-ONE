// Seccion Validacion de imagen
const dropZone = document.querySelector(".dropzone__agregarProducto");
const dragText = dropZone.querySelector("p");
const button = dropZone.querySelector(".input__file");
const input = dropZone.querySelector("input")

button.addEventListener("click", (e) =>{
    e.preventDefault();
    input.click();
});
input.addEventListener("change",(e) => {
    const file = e.target.files[0];
    processFile(file)
});

dropZone.addEventListener("dragover", event => {
    event.preventDefault();
    dropZone.classList.add("active");
    dragText.textContent = "Suelta para subir la imagen";
});
dropZone.addEventListener("dragleave", event => {
    event.preventDefault();
    dropZone.classList.remove("active");
    dragText.textContent = "Arrastra y suelta una imagen a esta zona ...";
});

dropZone.addEventListener("drop", event => {
    event.preventDefault();
    input.files = event.dataTransfer.files;
    const file = input.files[0];      
        processFile(file);
        dropZone.classList.remove("active"); 
});

function processFile(file) {
    if (file != undefined){
        const docType = file.type;
        const validExtensions = ['image/jpeg','image/jpg', 'image/png'];

        if (validExtensions.includes(docType)) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            
            fileReader.addEventListener("load", (e) => {
            const fileURL = fileReader.result;
            const image = `<img class="img" src="${fileURL}" width="50px" height ="35px">`;

            dropZone.querySelector("p").innerHTML = image + `${file.name}`;

            dropZone.classList.add("valido");
            });
            uploadFile(file);
        } else {
            dragText.textContent = "Arrastra y suelta una imagen a esta zona ...";
            alert("Inserte un archivo valido");
            file = undefined;
            input.value = null;
        }
    }
    else {
        dropZone.classList.remove("valido");
        dropZone.querySelector("img").remove(this);
        dropZone.querySelector("p").innerHTML = "Arrastra y suelta una imagen a esta zona ...";
        alert("Debe ingresar una imagen");
    }
}

function uploadFile(file) {
    
}
////////Seccion Validacion Formulario////////////////
const formulario = document.getElementById("agregarProducto__form");
const inputs = document.querySelectorAll(".input__agregarProducto");

const expresiones = {
    nombre: /^[a-zA-Z\s]{1,20}$/,
    precio: /^\d+$/,
    descripcion: /[\s\S]{5,150}/
};

const campos = {
    nombre: false,
    categoria: false,
    precio: false,
    descripcion: false
};

const validarFormulario = (ev) =>{
    switch(ev.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, ev.target, "nombre");
        break;
        case "categoria":
            validarOtherCampo(ev.target, "categoria")
        break;
        case "precio":
            validarCampo(expresiones.precio, ev.target, "precio");
        break;
        case "descripcion":
            validarCampo(expresiones.descripcion, ev.target, "descripcion");
        break;
    }
}
const validarOtherCampo = (input, campo) =>{
    if (input.value != "") {
        document.getElementById(`input__container__${campo}`).classList.remove("input__container-invalido");
        document.getElementById(`input__container__${campo}`).classList.add("input__container-valido");
        document.getElementById(`${campo}-error`).style.display = "none";
        campos[campo] = true;        
    }else{
        console.log("NULL");
        document.getElementById(`input__container__${campo}`).classList.remove("input__container-valido");
        document.getElementById(`input__container__${campo}`).classList.add("input__container-invalido");
        document.getElementById(`${campo}-error`).style.display = "flex";
        campos[campo] = false;
    }

}
const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`input__container__${campo}`).classList.remove("input__container-invalido");
        document.getElementById(`input__container__${campo}`).classList.add("input__container-valido");
        document.getElementById(`${campo}-error`).style.display = "none";
        campos[campo] = true;
    }else{
        document.getElementById(`input__container__${campo}`).classList.remove("input__container-valido");
        document.getElementById(`input__container__${campo}`).classList.add("input__container-invalido");
        document.getElementById(`${campo}-error`).style.display = "flex";
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("blur",validarFormulario)
});
///////// Seccion Envio de Data al Servidor///////////
formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    if(campos.nombre && campos.categoria && campos.precio && campos.descripcion){
        const getData = () =>{
            const datos = new FormData(formulario);
            const datosCompletos = Object.fromEntries(datos.entries());
            return datosCompletos;
        }
        const postData = async () => {
            const nuevoProducto = getData();
            try {
                const response = await fetch("http://localhost:3000/producto", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(nuevoProducto)
                });
                if(response.ok){
                    formulario.reset();
                        
                    document.getElementById("input__container__precio").classList.remove("input__container-valido");
                    document.getElementById("input__container__categoria").classList.remove("input__container-valido");            
                    document.getElementById("input__container__nombre").classList.remove("input__container-valido");
                    document.getElementById("input__container__descripcion").classList.remove("input__container-valido");
                    document.getElementById("mensaje__envioCorrecto").classList.add("mensaje__envioCorrecto-activo");
                    setTimeout(() =>{
                        document.getElementById("mensaje__envioCorrecto").classList.remove("mensaje__envioCorrecto-activo");
                    }, 2500);
                }
            }catch (error) {
                console.log(error);
            }
        }
        postData();
    }else{
        alert("Debe llenar el formulario");
    }
});





