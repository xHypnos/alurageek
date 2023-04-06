const buscarProducto = () => {
    const searchBtn = document.querySelector("[data-searchbtn]");

    searchBtn.addEventListener("click", () => {
        const busqueda = document.querySelector("[data-searchtxt]").value;
        if(busqueda === "" || busqueda === undefined) {
            alert("Ingrese elemento a buscar");
        }else{
            window.location.href = `/assets/templates/productos_categoria.html?consulta=${busqueda}`;
        }
    });
};

buscarProducto();