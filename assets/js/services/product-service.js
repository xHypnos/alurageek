const listaProductos = () => {
    return fetch(`http://localhost:3000/producto`).then(respuesta => respuesta.json())
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
};