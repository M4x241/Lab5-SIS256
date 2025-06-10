<?php
//esto me devuelve el tipo de habitacion qeu hay en la base de datos

session_start();

require '../config/conexion.php';
//require '../core/verificarsesion.php';
//require '../core/verificarRol.php'; 


$sql = "SELECT id,fotografias_drc,orden,id_habitacion FROM fotografiahabitacion";

$resultado = $con->query($sql);

$arreglo = [];



while ($row = mysqli_fetch_array($resultado)) {
    $arreglo[] = [
        "id" => $row['id'],
        "fotografias_drc" => $row['fotografias_drc'],
        "orden" => $row['orden'],
        "id_habitacion" => $row['id_habitacion']
    ];
}


$nuevoarreglo = [
    "datos" => $arreglo
];
echo json_encode($nuevoarreglo);


?>