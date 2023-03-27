const listaUsuarios = (email) => {
    return fetch(`http://localhost:3000/usuario/${email}`).then(respuesta => respuesta.json())
};


export const loginServices = {
    listaUsuarios,
};