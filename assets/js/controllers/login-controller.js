import { loginServices } from "../services/login-service.js";

const validarInformacion = async (email, password) =>{
    try{
        const usuario = await loginServices.listaUsuarios(email);
        if(usuario.id == email && usuario.password == password){
            window.location.href = "/assets/templates/productos.html";
        }else{
            throw new Error();
        }
    }catch(e){
        console.log("Catch error: " + e);
    }
};

export const loginController = {
    validarInformacion,
};
