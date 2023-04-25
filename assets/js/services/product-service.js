const listaProductos = () => {
    return fetch(`/database.json`)
    .then(respuesta => respuesta.json())
    .then(data => {
        const productos = data['producto'];
        return productos;
    })
};

const agregarProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch(`http://localhost:3000/producto`, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: uuid.v4(), imagen, categoria, nombre, precio, descripcion})
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: 'DELETE',
    });
};

const datosProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`)
    .then((response) => response.json());
};

const editarProducto = (id, imagen, categoria, nombre, precio, descripcion) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion}),
    }).then((response) => response).catch(error => console.log(error));
};

const cargarImagen = (formData) => {
    return fetch("http://localhost:3000/producto",{
        method: "POST",
        body: formData
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
};

export const productService = {
    listaProductos,
    cargarImagen,
    agregarProducto,
    editarProducto,
    eliminarProducto,
    datosProducto,
};