<?php
//esto me devuelve el tipo de habitacion qeu hay en la base de datos

session_start();

require '../config/conexion.php';
/* require '../core/verificarsesion.php';
require '../core/verificarRol.php';
 */

$sql = "SELECT id,nombre,superficie,nro_camas,precio FROM tipohabitacion";

$resultado = $con->query($sql);

$arreglo = [];



while ($row = mysqli_fetch_array($resultado)) {
    $arreglo[] = [
        "id" => $row['id'],
        "nombre" => $row['nombre'],
        "superficie" => $row['superficie'],
        "nro_camas" => $row['nro_camas'],
        "precio"=>$row['precio']
    ];
}


$nuevoarreglo = [
    "datos" => $arreglo
];
echo json_encode($nuevoarreglo);


?>