<?php
header('Content-Type: application/json');
session_start();
require '../config/conexion.php';
// require '../core/verificarsesion.php';
// require '../core/verificarRol.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'] ?? '';
$correo = $_POST['correo'];
$rol = $_POST['rol'] ?? 'user';
$password = sha1($_POST['password']);
// Preparar y ejecutar actualización
$stmt = $con->prepare('UPDATE usuarios SET correo=?, nombre=?, apellido=?, password=?, rol=? WHERE id=?');
$stmt->bind_param('sssssi', $correo, $nombre, $apellido, $password, $rol, $id);
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Usuario actualizado']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al actualizar: ' . $stmt->error]);
}

$stmt->close();
$con->close();
?>