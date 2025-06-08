<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION["rol"]) || $_SESSION["rol"] === 'user') {
    echo "Usted no está autorizado a realizar esta operación.";
    exit;
}
?>
