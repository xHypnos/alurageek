const listaProductos = () => {
    return fetch(`http://localhost:3000/producto`).then(respuesta => respuesta.json())
};

export const productService = {
    listaProductos,
};