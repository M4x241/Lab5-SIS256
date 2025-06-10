<?php
//esto permitira crear usuario
session_start();
require '../config/conexion.php';
/* require '../core/verificarsesion.php';
require '../core/verificarRol.php'; */



$nombre = $_POST['nombre'];
$superficie=$_POST['superficie'];
$nro_camas =$_POST['nro_camas'];
$precio =$_POST['precio'];

// Insertar nuevo usuario
$stmt = $con->prepare("INSERT INTO tipohabitacion(nombre, superficie,nro_camas,precio) VALUES (?, ?,?,?)");
$stmt->bind_param("ssss", $nombre,$superficie,$nro_camas ,$precio);

if ($stmt->execute()) {
    echo "habitacion creada correctamente";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$con->close();
