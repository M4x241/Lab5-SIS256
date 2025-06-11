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
$stmt = $con->prepare("INSERT INTO reservas(fecha_ingreso, fecha_salida,usuario_id,habitacion_id ) VALUES (?, ?,?,?)");
$stmt->bind_param("ssii", $fecha_ingreso,$fecha_salida,$usuario_id,$habitacion_id);

if ($stmt->execute()) {
    echo "habitacion creada correctamente";
} else {
    echo "Error: " . $stmt->error;
}

$con->close();