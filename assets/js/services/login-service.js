import { firebaseService } from "./firebase-service.js";

const listaUsuarios = (email) => {
    /* const usuarios = firebaseService.getDbUsuarios; */

    const usuarios = firebaseService.getDbUsuarios;
    console.log(usuarios)

    /* return fetch(`http://localhost:3000/usuario/${email}`).then(respuesta => respuesta.json()) */
};


export const loginServices = {
    listaUsuarios,
};