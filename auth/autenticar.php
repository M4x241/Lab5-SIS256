<?php 
session_start();
require '../config/conexion.php';

// Validar que los datos existan
if (!isset($_POST['correo']) || !isset($_POST['password'])) {
    die("Faltan datos del formulario.");
}

$correo = $_POST['correo'];
$password = sha1($_POST['password']); // Considera usar password_hash y password_verify más adelante

// ✅ CORREGIR LA CONSULTA SQL
$stmt = $con->prepare('SELECT correo, nombre, apellido, rol FROM usuarios WHERE correo = ? AND password = ?');
$stmt->bind_param("ss", $correo, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();
    
    $_SESSION['correo'] = $usuario['correo'];
    $_SESSION['nombre'] = $usuario['nombre'];
    $_SESSION['apellido'] = $usuario['apellido'];
    $_SESSION['rol'] = $usuario['rol'];

    // Redirigir según el rol
    if ($usuario['rol'] == 'admin') {
        header("Location: ../admin/admin.html");
    } elseif ($usuario['rol'] == 'user') {
        header("Location: ../usuario/main.html");
    } else {
        echo "Rol desconocido.";
    }

    exit;

} else {
    echo "Error: datos de autenticación incorrectos.";
    ?>
    <meta http-equiv="refresh" content="3;url= ../auth/form-login.html">
    <?php
}
?>
