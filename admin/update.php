<?php

session_start();
require '../config/conexion.php';
require '../core/verificarsesion.php';
require '../core/verificarRol.php';

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$rol = $_POST['rol'];
$id = $_POST['id'];


$stmt = $conexion->prepare('UPDATE usuarios SET correo=?,nombre=?,apellido=?, password=?,rol=? where id=?');

$stmt->bind_param('sssssi', $correo,$nombre,$apellido, $password, $rol, $id);


if ($stmt->execute()) {
    echo "usuario Actualizado";
} else {
    echo "Error: " . $stmt->error;
}

$conexion->close();
