import { productService } from "../services/product-service.js";

const editarProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    if (id === null || id === ""){
        window.location.href = "/assets/templates/error.html";
    };

    const imagenView = document.querySelector("[data-vistaprevia]");
    const imagen = document.querySelector("[data-imagen]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const articulo = await productService.datosProducto(id); 
        imagenView.src = articulo.imagen;
        imagen.value = articulo.imagen;
        categoria.value = articulo.categoria;
        nombre.value = articulo.nombre;
        precio.value = articulo.precio;
        descripcion.value = articulo.descripcion; 
    }catch(e){
        console.log(e.message);
        window.location.href = "/assets/templates/error.html";
    }

    const seleccionarImg = document.querySelector("[data-imagen]");

    seleccionarImg.addEventListener("change", ()=>{
        const img = seleccionarImg.value;
        document.querySelector("[data-vistaprevia]").src = img;
    });

    const editarProductoForm = document.querySelector("[data-form]");

    editarProductoForm.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const imagen = document.querySelector("[data-imagen]").value;
        const categoria = document.querySelector("[data-categoria]").value;
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
    
        productService.editarProducto(id, imagen, categoria, nombre, precio, descripcion)
        .then(()=> {
            window.location.href = "/assets/templates/producto_editado.html";
        });
    });

};

editarProducto();