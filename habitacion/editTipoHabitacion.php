<?php  session_start();
require '../config/conexion.php';
/* require '../core/verificarsesion.php';
require '../core/verificarRol.php'; */

$nombre = $_POST['nombre'];
$superficie=$_POST['superficie'];
$nro_camas =$_POST['nro_camas'];
$precio =$_POST['precio'];

$id=$_POST['id'];


$stmt=$con->prepare('UPDATE tipohabitacion SET nombre=?,superficie=?,nro_camas=?,precio=? WHERE id=?');


// Vincular parámetros
$stmt->bind_param("ssssi",$nombre,$superficie,$nro_camas, $precio, $id);



// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro Actualizado";
} else {
    echo "Error: " . $stmt->error;
}

$con->close();
?>

