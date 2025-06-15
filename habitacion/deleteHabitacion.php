<?php session_start();


require '../config/conexion.php';
//require '../core/verificarsesion.php';
//require '../core/verificarRol.php';

$id=$_POST['id'];
//$sql="DELETE FROM personas WHERE id=$id";

$stmt=$con->prepare('DELETE FROM habitaciones WHERE id=?');
$stmt->bind_param("i",$id);
// Ejecutar la consulta
if ($stmt->execute()) {
   echo json_encode(['success' => true, 'message' => 'Habitación eliminada correctamente']);
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Error al eliminar la habitación: ' . $stmt->error]);
    $stmt->close();
}

$con->close();
?>
