import { adminServices } from "../servicios/login-servicios.js"

const inputs = document.querySelectorAll(".input__login");
let accesoValido = false;
const mostrar = async () =>{
    try{
        const credenciales = await adminServices.listaAdmins();
        credenciales.forEach(admin => {
            const datos = localStorage.getItem("credencial");
            const credencialValida = (JSON.stringify(admin) == datos);
            if (credencialValida) {
                accesoValido = true;                
            } else if(accesoValido){
                accesoValido = true;
            }
                else{
                accesoValido = false;
            }
        });
    }catch(error){
        console.log(error);
    }
}


const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();

    const data = {
        email: inputs[0].value,
        password: inputs[1].value
    }

    localStorage.setItem("credencial", JSON.stringify(data));
    mostrar();
    
    setTimeout(()=>{
        if (accesoValido) {
            location.href = "agregarProducto.html";
            accesoValido = false;
        } else {
            document.getElementById("input__container__email").classList.remove("input__container-valido");
            document.getElementById("input__container__password").classList.remove("input__container-valido");
            document.getElementById("mensaje__accesoDenegado").classList.add("mensaje__accesoDenegado-activo");
            setTimeout(() =>{
            document.getElementById("mensaje__accesoDenegado").classList.remove("mensaje__accesoDenegado-activo");
            }, 2500);
        }
    },700); 
});
