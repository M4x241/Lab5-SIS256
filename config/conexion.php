<?php 
$con=mysqli_connect("localhost","root","","");// base de datos aun no creada
if(mysqli_connect_errno()){
    die("Se produjo un error ".mysqli_connect_error());
}
?>