<?php
session_start();
// header('Content-Type: application/json');

// Verificar si el usuario está autenticado
if (isset($_SESSION['correo']) && isset($_SESSION['nombre'])) {
    // Usuario autenticado
     echo json_encode([
         'autenticado' => true,
         'nombre' => $_SESSION['nombre'],
         'correo' => $_SESSION['correo'],
         'rol' => $_SESSION['rol'] ?? 'user'
     ]);
} else {
    // Usuario no autenticado
    echo json_encode([
        'autenticado' => false
    ]);
}
?>