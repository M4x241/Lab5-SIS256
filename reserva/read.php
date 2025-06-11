<?php
session_start();

require '../config/conexion.php';
/* require '../core/verificarsesion.php';
require '../core/verificarRol.php';
 */

$sql = "SELECT id,fecha_ingreso, fecha_salida,usuario_id,habitacion_id FROM reservas";

$resultado = $con->query($sql);

$arreglo = [];


while ($row = mysqli_fetch_array($resultado)) {
    $arreglo[] = [
        "id" => $row['id'],
        "fecha_ingreso" => $row['fecha_ingreso'],
        "fecha_salida" => $row['fecha_salida'],
        "usuario_id" => $row['usuario_id'],
        "habitacion_id" => $row['habitacion_id']
    ];
}


$nuevoarreglo = [
    "datos" => $arreglo
];
echo json_encode($nuevoarreglo);
