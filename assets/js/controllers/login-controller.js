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

const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    validarInformacion(email, password);
});
