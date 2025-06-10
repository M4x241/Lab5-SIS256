<?php
//esto permitira crear usuario
session_start();
require '../config/conexion.php';
require '../core/verificarsesion.php';
/* require '../core/verificarRol.php';
 */


$fecha_ingreso = $_POST['fecha_ingreso'];
$fecha_salida=$_POST['fecha_salida'];
$usuario_id =$_SESSION['id'];
$habitacion_id = $_POST['habitacion_id'];


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
