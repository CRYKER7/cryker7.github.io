function cargarComponente(id, ruta) {
    fetch(ruta)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error al cargar ${ruta}:`, error));
}

// Carga los componentes
cargarComponente("head", "components/head.html");
cargarComponente("nav", "components/headMenu.html");
cargarComponente("footer", "components/footer.html");
cargarComponente("contenido", "pages/main.html");