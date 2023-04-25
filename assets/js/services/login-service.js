const listaUsuarios = (email) => {
    return fetch(`/database.json`)
    .then(respuesta => respuesta.json())
    .then(data => {
        const usuarios = data['usuario'];
        const datosUsuario = usuarios.find(usuario => usuario.id === email);
        return datosUsuario; 
    }) 
};


export const loginServices = {
    listaUsuarios,
};