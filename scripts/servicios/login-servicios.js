const listaAdmins = () => fetch("https://e-commerce-one.onrender.com/admins")
    .then(respuesta => respuesta.json())
    

export const adminServices = {
    listaAdmins,
}