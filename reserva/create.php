<?php
//esto permitira crear usuario
session_start();
include '../config/conexion.php';
// id 	fecha_ingreso 	fecha_salida 	usuario_id 	habitacion_id 	
//create de reserva
$fecha_ingreso = $_POST['fecha_ingreso'];
$fecha_salida = $_POST['fecha_salida'];
$usuario_id = $_POST['usuario_id'];
$habitacion_id = $_POST['habitacion_id'];
// Verificar si los campos están vacíos
if (empty($fecha_ingreso) || empty($fecha_salida) || empty($usuario_id) || empty($habitacion_id)) {
    echo json_encode(['error' => 'Todos los campos son obligatorios']);
    $con->close();
    exit;
}
// Verificar si la habitación ya está reservada en las fechas especificadas
$sql = "SELECT * FROM reservas WHERE habitacion_id = ? AND ((fecha_ingreso <= ? AND fecha_salida >= ?) OR (fecha_ingreso <= ? AND fecha_salida >= ?))";
$stmt = $con->prepare($sql);
$stmt->bind_param("issss", $habitacion_id, $fecha_ingreso, $fecha_ingreso, $fecha_salida, $fecha_salida);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    echo json_encode(['error' => 'La habitación ya está reservada en esas fechas']);
    $stmt->close();
    $con->close();
    exit;
}
// Insertar nueva reserva
$stmt = $con->prepare("INSERT INTO reservas (fecha_ingreso, fecha_salida, usuario_id, habitacion_id) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssii", $fecha_ingreso, $fecha_salida, $usuario_id, $habitacion_id);
if ($stmt->execute()) {
    echo json_encode(['success' => 'Reserva creada correctamente']);
} else {
    echo json_encode(['error' => 'Error al crear la reserva: ' . $stmt->error]);
}
$stmt->close();
$con->close();
?>
