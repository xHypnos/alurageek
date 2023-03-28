import { productService } from "../services/product-service.js";

const productosContainer = document.querySelector("[data-articulos]");

const mostrarProductos = () => {
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

mostrarProductos();
