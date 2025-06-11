<?php  session_start();
require '../config/conexion.php';
require '../core/verificarsesion.php';
require '../core/verificarRol.php';

$estado = $_POST['estado'] == 'DISPONIBLE' ? 'DISPONIBLE' : 'MANTENIMIENTO';


$id=$_POST['id'];

// Verificar si el ID está vacío
if (empty($id)) {
    echo "El ID no puede estar vacío";
    $con->close();
    exit;
}
// el sql
$con->query("SET NAMES 'utf8'");
$sql = "UPDATE habitaciones SET estado = ? WHERE id = ?";
$stmt = $con->prepare($sql);
// Verificar si la preparación de la consulta fue exitosa
if (!$stmt) {
    echo "Error en la preparación de la consulta: " . $con->error;
    $con->close();
    exit;
}
// Vincular los parámetros
$stmt->bind_param("si", $estado, $id);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Estado de la habitación actualizado correctamente']);
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Error al actualizar el estado de la habitación: ' . $stmt->error]);
    $stmt->close();
}

$con->close();
?>

