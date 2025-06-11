<?php
session_start();
require '../config/conexion.php';
require '../core/verificarsesion.php';
require '../core/verificarRol.php';

header('Content-Type: application/json');

// Leer datos JSON del cuerpo
$input = json_decode(file_get_contents('php://input'), true);

// Validación básica
if (!isset($input['id'], $input['nombre'], $input['correo'])) {
    echo json_encode(['success' => false, 'message' => 'Faltan campos obligatorios']);
    exit;
}

$id = $input['id'];
$nombre = $input['nombre'];
$apellido = $input['apellido'] ?? '';
$correo = $input['correo'];
$rol = $input['rol'] ?? 'user';
$password = password_hash($input['password'], PASSWORD_DEFAULT);

// Preparar y ejecutar actualización
$stmt = $conexion->prepare('UPDATE usuarios SET correo=?, nombre=?, apellido=?, password=?, rol=? WHERE id=?');
$stmt->bind_param('sssssi', $correo, $nombre, $apellido, $password, $rol, $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Usuario actualizado']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al actualizar: ' . $stmt->error]);
}

$stmt->close();
$conexion->close();
?>