<?php


//me devuelve la convinacion de las tablas de habitacion y tipohabitacion


session_start();

require '../config/conexion.php';
//require '../core/verificarsesion.php';

$sql = "SELECT 
h.id,
    h.numero AS numero_habitacion,
    h.piso,
    t.nombre AS tipo_nombre,
    t.superficie,
    t.nro_camas
FROM 
    habitaciones h
JOIN 
    tipoHabitacion t ON h.id_tipoHabitacion = t.id;";

$resultado = $con->query($sql);

$arreglo = [];

while ($row = mysqli_fetch_array($resultado)) {
    $arreglo[] = [
        "id" => $row['id'],
        "numero" => $row['numero_habitacion'],
        "piso" => $row['piso'],
        "tipo_nombre" => $row['tipo_nombre'],
        "superficie" => $row['superficie'],
        "nro_camas" => $row['nro_camas']
    ];
}

$nuevoarreglo = [
    "datos" => $arreglo
];

echo json_encode($nuevoarreglo);
