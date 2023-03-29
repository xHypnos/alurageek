import { productService } from "../services/product-service.js";

const mostrarProductos = () => {
    const productosContainer = document.querySelector("[data-articulos]");

    productService.listaProductos().then(function(listaProductos){
        listaProductos.forEach(function(producto){
            const productoImagen = producto.imagen;
            const productoNombre = producto.nombre;
            const productoPrecio = producto.precio;

            const productoHTML =
            `<div class="articulos__item">
                <img src="${productoImagen}" alt="Imagen Articulo" class="articulo__img">
                <div class="container__icons">
                    <ion-icon class="delete__icon" name="trash"></ion-icon>
                    <ion-icon class="edit__icon" name="create"></ion-icon>
                </div>
                <h3 class="articulo__nombre">${productoNombre}</h3>
                <p class="articulo__precio">${productoPrecio}</p>
                <p class="articulo__link">Ver producto</p>
            </div>`;

            productosContainer.innerHTML += productoHTML;
        });
    }); 
};

const crearProducto = () =>{
    const agregarProductoForm = document.querySelector("[data-form]");
    const seleccionarImg = document.querySelector("[data-imagen]");

    seleccionarImg.addEventListener("change", (evento)=>{
        const img = evento.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(img);
        reader.onload = () => {
            const rutaImg = reader.result;
            document.querySelector("[data-vistaprevia]").src = rutaImg;
        };
    });

    agregarProductoForm.addEventListener("submit", (evento) => {
        evento.preventDefault();

        /* const urlImagen = document.querySelector("[data-vistaprevia]").src;
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = function () {
            const blobImagen = xhr.response;
            const nombreArchivo = 'imagen.jpg';
            const rutaCarpeta = '/assets/img/';
        
            const formData = new FormData();
            formData.append('archivo', blobImagen, nombreArchivo);
        
            const xhrSubir = new XMLHttpRequest();
            xhrSubir.open('POST', rutaCarpeta, true);
            xhrSubir.onload = function () {
                console.log('Imagen guardada correctamente');
            };
            xhrSubir.send(formData);
        };
        
        xhr.open('GET', urlImagen, true);
        xhr.send();

        const express = require('express');
        const fs = require('fs');
        const app = express();

        app.post('/ruta-de-tu-servidor', (req, res) => {
            const archivo = req.files.archivo;
            const ruta = '/assets/img/' + archivo.name;

            archivo.mv(ruta, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error al guardar el archivo');
                } else {
                    console.log('Archivo guardado correctamente');
                    res.send('Archivo guardado correctamente');
                }
            });
        }); */

        const imagen = document.querySelector("[data-imagen]").value;
        const categoria = document.querySelector("[data-categoria]").value;
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
    
        productService.agregarProducto(imagen, categoria, nombre, precio, descripcion);
    });
};

if(window.location.pathname == "/assets/templates/productos.html"){
    mostrarProductos();
};

if(window.location.pathname == "/assets/templates/agregar_producto.html"){
    crearProducto();
}
