<?php
session_start();

require '../config/conexion.php';
require '../core/verificarsesion.php';
require '../core/verificarRol.php';


$sql = "SELECT id,correo,nombre,apellido,rol FROM usuarios";

$resultado = $con->query($sql);

$arreglo = [];


while ($row = mysqli_fetch_array($resultado)) {
    $arreglo[] = [
        "id" => $row['id'],
        "correo" => $row['correo'],
        "nombre" => $row['nombre'],
        "apellido" => $row['apellido'],
        "rol" => $row['rol']
    ];
}


$nuevoarreglo = [
    "datos" => $arreglo
];
echo json_encode($nuevoarreglo);
