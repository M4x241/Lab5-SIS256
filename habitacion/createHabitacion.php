<?php
//esto permitira crear usuario
session_start();
require '../config/conexion.php';
require '../core/verificarsesion.php';
require '../core/verificarRol.php';



$numero = $_POST['numero'];
$piso=$_POST['piso'];
$id_tipoHabitacion =$_POST['tipo_id'];


// Verificar si la habitacion ya existe
$sql = "SELECT numero,piso FROM habitaciones WHERE numero = ? and piso=?";
$stmt = $con->prepare($sql);
$stmt->bind_param("ss", $numero,$piso);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo 'la habitacion ya existe';
    $stmt->close();
    $conexion->close();
    exit;
}
$stmt->close();

// Insertar nuevo usuario
$stmt = $con->prepare("INSERT INTO habitaciones(numero, piso,id_tipoHabitacion) VALUES (?, ?,?)");
$stmt->bind_param("ssi", $numero,$piso,$id_tipoHabitacion);

if ($stmt->execute()) {
    echo "habitacion creada correctamente";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$con->close();
