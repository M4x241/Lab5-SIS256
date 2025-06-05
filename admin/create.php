<?php
//esto permitira crear usuario
session_start();
include '../config/conexion.php';
$nombre = $_POST['nombre'];
$apellido=$_POST['apellido'];
$correo = $_POST['correo'];
$password = sha1($_POST['password']);
$rol = 'user';


// Verificar si el correo ya existe
$sql = "SELECT correo FROM usuarios WHERE correo = ?";
$stmt = $con->prepare($sql);
$stmt->bind_param("s", $correo);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo 'el correo ya existe';
    $stmt->close();
    $conexion->close();
    exit;
}
$stmt->close();

// Insertar nuevo usuario
$stmt = $con->prepare("INSERT INTO usuarios( correo,nombre,apellido, password, rol) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $correo,$nombre,$apellido, $password, $rol);

if ($stmt->execute()) {
    echo "usuario creado correctamente";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$con->close();
