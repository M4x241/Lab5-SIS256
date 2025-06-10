<?php

session_start();

require '../config/conexion.php';
/* require '../core/verificarsesion.php';
require '../core/verificarRol.php'; */


$fotografia = "";

if ($_FILES['fotografia']["name"]!="")
{
    $datosfotografia=explode('.', $_FILES['fotografia']['name']);
    $fotografia=uniqid().'.'.$datosfotografia[1];
    copy($_FILES['fotografia']['tmp_name'],"images/".$fotografia);
}

$orden = $_POST['orden'];
$id_habitacion= $_POST['id_habitacion'];

$stmt=$con->prepare('INSERT INTO fotografiahabitacion(fotografias_drc,orden,id_habitacion) VALUES(?,?,?)');

$stmt->bind_param("sii",$fotografia,$orden,$id_habitacion);



if ($stmt->execute()) {
    echo "Nuevo registro creado con éxito";
} else {
    echo "Error: " . $stmt->error;
}

$con->close();
?>





?>