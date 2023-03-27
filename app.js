import { loginController } from "./assets/js/controllers/login-controller.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    loginController.validarInformacion(email, password);
})