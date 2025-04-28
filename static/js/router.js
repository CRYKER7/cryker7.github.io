// static/js/router.js

// Función para leer el parámetro "pet" en la URL
function obtenerPeticion() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('pet'); // Regresa el valor de 'pet'
}

// Función para cargar la subpágina
function cargarPeticion() {
    const pet = obtenerPeticion();
    const contenedor = document.getElementById("contenido-principal");

    if (pet) {
        fetch(`static/pages/${pet}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Página no encontrada');
                }
                return response.text();
            })
            .then(html => {
                contenedor.innerHTML = html;
            })
            .catch(error => {
                contenedor.innerHTML = `<h2>Error 404: Página no encontrada</h2>`;
                console.error(error);
            });
    } else {
        // Si no hay parámetro, puedes cargar una página por defecto
        fetch(`static/pages/main.html`)
            .then(response => response.text())
            .then(html => {
                contenedor.innerHTML = html;
            });
    }
}

// Ejecutar cuando la página cargue
document.addEventListener("DOMContentLoaded", cargarPeticion);
