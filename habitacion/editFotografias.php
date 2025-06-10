<?php session_start();
require '../config/conexion.php';
//require '../core/verificarsesion.php';
//require '../core/verificarRol.php';

$orden = $_POST['orden'];
$id_habitacion = $_POST['id_habitacion'];
$id = $_POST['id'];


$fotografia = "";

if ($_FILES['fotografia']["name"] != "") {

    $datosfotografia = explode('.', $_FILES['fotografia']['name']);
    $fotografia = uniqid() . '.' . $datosfotografia[1];
    copy($_FILES['fotografia']['tmp_name'], "images/" . $fotografia);

    $stmt = $con->prepare('UPDATE fotografiahabitacion SET fotografias_drc=?, orden=?,id_habitacion=? WHERE id=?');


    // Vincular parámetros
    $stmt->bind_param("ssii", $fotografia, $orden, $id_habitacion, $id);
} else {
    $stmt = $con->prepare('UPDATE fotografiahabitacion SET  orden=?,id_habitacion=? WHERE id=?');

    // Vincular parámetros
    $stmt->bind_param("sii", $orden, $id_habitacion, $id);
}





// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro Actualizado";
} else {
    echo "Error: " . $stmt->error;
}

$con->close();
