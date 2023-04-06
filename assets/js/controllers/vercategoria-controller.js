import { productService } from "../services/product-service.js";

const verCategoria = () => {
    const productosContainer = document.querySelector("[data-articulos]");
    const url = new URL(window.location);
    const categoriaURL = url.searchParams.get('categoria');
    document.querySelector("[data-titulo]").innerHTML = categoriaURL;

    const mostrarArticulo = (id, imagen, nombre, precio) => {
        const articulo = document.createElement("div");
        const contenido =
            `<div class="articulos__item">
                <img src="${imagen}" alt="Imagen Articulo" class="articulo__img">
                <h3 class="articulo__nombre">${nombre}</h3>
                <p class="articulo__precio">$ ${precio}</p>
                <p class="articulo__link">Ver producto</p>
            </div>`;

        articulo.innerHTML = contenido;
        return articulo;
    };


    if (categoriaURL === null){
        const busquedaURL = url.searchParams.get("consulta").toLowerCase();

        productService.listaProductos().then((listaProductos) =>{
            listaProductos.forEach(({id, imagen, categoria, nombre, precio, descripcion}) =>{
                if(categoria.toLowerCase().includes(busquedaURL) || nombre.toLowerCase().includes(busquedaURL) || descripcion.toLowerCase().includes(busquedaURL)){
                    const mostrar = mostrarArticulo(id, imagen, nombre, precio);
                    productosContainer.appendChild(mostrar);
                } 
            });
        }); 
    }else{
        productService.listaProductos().then((listaProductos) =>{
            listaProductos.forEach(({id, imagen, categoria, nombre, precio}) =>{
                if(categoria == categoriaURL){
                    const mostrar = mostrarArticulo(id, imagen, nombre, precio);
                    productosContainer.appendChild(mostrar);
                } 
            });
        }); 
    }
}

verCategoria();