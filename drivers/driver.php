<?php
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
?>