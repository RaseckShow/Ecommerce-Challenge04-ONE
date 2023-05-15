const listaProductos = () => fetch("https://e-commerce-one.onrender.com/producto")
    .then(respuesta => respuesta.json());
    
    const crearProducto = (imageUrl,name,category,price,description,id) => {
        return fetch("https://e-commerce-one.onrender.com/producto", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({imageUrl,name,category,price,description, id})
        })
    };
    
    const eliminarProducto = (id) => {
        return fetch(`https://e-commerce-one.onrender.com/producto/${id}`, {method:'DELETE'});
    };
    
    const detalleCliente = (id) => {
        return fetch(`https://e-commerce-one.onrender.com/producto/${id}`).then((respuesta) => {
            return respuesta.json();
        });
    };
    
    const actualizarProducto = (category,imageUrl,name,price,description,id) =>{
        return fetch(`https://e-commerce-one.onrender.com/producto/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({category,imageUrl, name, price,description,id})
        })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
        
    };

export const productoServices = {
    listaProductos,
    actualizarProducto,
    crearProducto,
    eliminarProducto,
}
