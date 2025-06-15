<?php
session_start();

require '../config/conexion.php';
// require '../core/verificarsesion.php';
// require '../core/verificarRol.php';

$id = $_GET['id'] ?? null;
$sql = "SELECT id,correo,nombre,apellido,rol,password FROM usuarios WHERE id = $id";

$resultado = $con->query($sql);

$row = mysqli_fetch_array($resultado);

$arreglo = [
    "id" => $row['id'],
    "correo" => $row['correo'],
    "nombre" => $row['nombre'],
    "apellido" => $row['apellido'],
    "rol" => $row['rol'],
    "password" => $row['password']
];



$nuevoarreglo = [
    "datos" => $arreglo
];
echo json_encode($nuevoarreglo);
