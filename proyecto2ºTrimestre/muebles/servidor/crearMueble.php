<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

require_once "conexion.php";

$nombre = $_POST["nombre"];
$tipo = $_POST["tipo"];
$tamanio = $_POST["tamanio"];
$descripcion = $_POST["descripcion"];
$precio = $_POST["precio"];

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");

$sql =  "INSERT INTO `muebles`(`id`, `nombre`, `tipo`, `tamanio`, `descripcion`, `precio`) VALUES ('', '$nombre', '$tipo', '$tamanio', '$descripcion', '$precio')";
$conexion->query($sql);
?>