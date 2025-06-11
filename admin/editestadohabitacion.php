<?php  session_start();
require '../config/conexion.php';
require '../core/verificarsesion.php';
require '../core/verificarRol.php';

$numero = $_POST['estado'] == 'DISPONIBLE' ? 'DISPONIBLE' : 'MANTENIMIENTO';


$id=$_POST['id'];


$stmt=$con->prepare('UPDATE habitaciones SET numero=?,piso=?,id_tipoHabitacion=? WHERE id=?');


// Vincular parámetros
$stmt->bind_param("si",$numero,$piso,$id_tipoHabitacion,  $id);



// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro Actualizado";
} else {
    echo "Error: " . $stmt->error;
}

$con->close();
?>

