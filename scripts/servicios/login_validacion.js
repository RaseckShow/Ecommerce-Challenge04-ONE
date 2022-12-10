const formulario = document.getElementById("formulario__login");
const inputs = document.querySelectorAll(".input__login");

const expresiones = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
};

const campos = {
  email: false,
  password: false
};

const validarFormulario = (e) =>{
    switch(e.target.name){
    case "email":
      validarCampo(expresiones.email, e.target, "email");
    break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
    break;
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

formulario.addEventListener("submit", (e) =>{
  e.preventDefault();

  if(campos.email && campos.password){
    document.getElementById("input__container__email").classList.remove("input__container-valido");
    document.getElementById("input__container__password").classList.remove("input__container-valido");
    document.getElementById("mensaje__accesoDenegado").classList.add("mensaje__accesoDenegado-activo");
    setTimeout(() =>{
      document.getElementById("mensaje__accesoDenegado").classList.remove("mensaje__accesoDenegado-activo");
    }, 2500);
  }
});