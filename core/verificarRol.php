<?php
session_start(); // Asegúrate de tener esto antes de acceder a $_SESSION

if (!isset($_SESSION["rol"]) || $_SESSION["rol"] === 'user') {
    echo "Usted no está autorizado a realizar esta operación.";
    // Si prefieres redirigir:
    // header("Refresh: 3; url=read.php");
    exit;
}
?>
