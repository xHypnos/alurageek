import { productService } from "../services/product-service.js";

const mostrarProductos = () => {
    const productosContainer = document.querySelector("[data-articulos]");

    const mostrarArticulo = (id, imagen, nombre, precio) => {
        const articulo = document.createElement("div");
        const contenido =
            `<div class="articulos__item">
                <img src="${imagen}" alt="Imagen Articulo" class="articulo__img">
                <div class="container__icons">
                    <ion-icon id=${id} class="delete__icon" name="trash"></ion-icon>
                    <a class="edit__icon" href="/assets/templates/editar_producto.html?id=${id}"><ion-icon name="create"></ion-icon></a>
                </div>
                <h3 class="articulo__nombre">${nombre}</h3>
                <p class="articulo__precio">$ ${precio}</p>
                <p class="articulo__link">Ver producto</p>
            </div>`;

        articulo.innerHTML = contenido;
        
        const eliminarBtn = articulo.querySelector(".delete__icon");
        eliminarBtn.addEventListener("click", () =>{
            productService.eliminarProducto(id).then(respuesta =>{
                console.log(respuesta);
            }).catch(error => alert(error));
        });
        return articulo;
    };
    
    productService.listaProductos().then((listaProductos) =>{
        listaProductos.forEach(({id, imagen, nombre, precio}) =>{
            const mostrar = mostrarArticulo(id, imagen, nombre, precio);
            productosContainer.appendChild(mostrar);
        });
    }); 
};

const mostrarProductosCategoria = () => {
    const starWarsContainer = document.querySelector("[data-starwars]");
    const consolasContainer = document.querySelector("[data-consolas]");
    const dataDiversos = document.querySelector("[data-diversos]");

    const mostrarArticulo = (id, imagen, nombre, precio) => {
        const articuloContainer = document.createElement("div");

        const contenido =
            `<div class="articulos__item">
                <img src="${imagen}" alt="Imagen Articulo" class="articulo__img">
                <h3 class="articulo__nombre">${nombre}</h3>
                <p class="articulo__precio">$ ${precio}</p>
                <p class="articulo__link">Ver producto</p>
            </div>`;
        
        articuloContainer.innerHTML = contenido;
        return articuloContainer;
    };
    
    productService.listaProductos().then((listaProductos) =>{
        listaProductos.forEach(({id, imagen, categoria, nombre, precio}) =>{
            if(categoria == "Star Wars"){
                const mostrar = mostrarArticulo(id, imagen, nombre, precio);
                starWarsContainer.appendChild(mostrar);
            };

            if(categoria == "Consolas"){
                const mostrar = mostrarArticulo(id, imagen, nombre, precio);
                consolasContainer.appendChild(mostrar);
            };

            if(categoria == "Diversos"){   
                const mostrar = mostrarArticulo(id, imagen, nombre, precio);
                dataDiversos.appendChild(mostrar);
            };
        });
    }); 
};

const crearProducto = () =>{
    const agregarProductoForm = document.querySelector("[data-form]");
    const seleccionarImg = document.querySelector("[data-imagen]");

    seleccionarImg.addEventListener("change", ()=>{
        const img = seleccionarImg.value;
        document.querySelector("[data-vistaprevia]").src = img;
    });

    agregarProductoForm.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const imagen = document.querySelector("[data-imagen]").value;
        const categoria = document.querySelector("[data-categoria]").value;
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
    
        productService.agregarProducto(imagen, categoria, nombre, precio, descripcion);
    });
};

if(window.location.pathname == "/index.html"){
    mostrarProductosCategoria();
};

if(window.location.pathname == "/assets/templates/productos.html"){
    mostrarProductos();
};

if(window.location.pathname == "/assets/templates/agregar_producto.html"){
    crearProducto();
};
