const listaProductos = () => fetch("https://e-commerce-one.onrender.com/producto")
    .then(respuesta => respuesta.json())

export const productoServices = {
    listaProductos,
}
