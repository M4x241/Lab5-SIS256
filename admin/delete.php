<?php

session_start();
require '../config/conexion.php';
require '../core/verificarsesion.php';
require '../core/verificarRol.php';

$id = $_GET['id'] ?? null;

if ($id === null) {
    echo json_encode([
        'success' => false,
        'message' => 'ID no especificado'
    ]);
    exit;
}

$stmt = $con->prepare('DELETE FROM usuarios WHERE id=?');
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'Usuario eliminado'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $stmt->error
    ]);
}

$stmt->close();
$conexion->close();
?>
