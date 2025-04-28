/* <?php
    session_set_cookie_params(0);
    session_start();
    
    $pet = '';
    
    if (isset($_REQUEST['pet'])){ 
        $pet = $_REQUEST['pet']; 
    }
    
            
    switch ($pet) {
            case '':
                include_once('./static/pages/main.php');
                break;
            case 'work':
                include_once('./static/pages/work.php');
                break;
                
            default:
                include_once('./static/pages/main.php');
                break;
    }
?> */

// static/js/importarComponentes.js

function cargarComponente(id, ruta) {
    fetch(ruta)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error al cargar ${ruta}:`, error));
}

// Carga los componentes
cargarComponente("header", "components/header.html");
cargarComponente("nav", "components/headMenu.html");
cargarComponente("footer", "components/footer.html");
