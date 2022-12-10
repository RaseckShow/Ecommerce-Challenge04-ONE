const listaAdmins = () => fetch("http://localhost:3000/admins")
    .then(respuesta => respuesta.json())
    

export const adminServices = {
    listaAdmins,
}