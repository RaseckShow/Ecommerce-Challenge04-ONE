const listaProductos = () => fetch("https://e-commerce-one.onrender.com/producto")
    .then(respuesta => respuesta.json())

    const crearProducto = (nombre,email) => {
        return fetch("http://localhost:3000/perfil", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre,email, id: uuid.v4()})
        })
    }
    
    const eliminarProducto = (id) => {
        return fetch(`http://localhost:3000/perfil/${id}`, {method:'DELETE'});
    }
    
    const detalleCliente = (id) => {
        return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => {
            return respuesta.json();
        });
    };
    
    const actualizarProducto = (imageUrl,name,price,description,id) =>{
            console.log(JSON.stringify({imageUrl, name, price,description,id}));
            // return fetch(`https://127.0.0.1:5500/producto/${id}`,{
        return fetch(`https://e-commerce-one.onrender.com/producto/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({imageUrl, name, price,description,id})
        })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
        
    };

export const productoServices = {
    listaProductos,
    actualizarProducto,
}
