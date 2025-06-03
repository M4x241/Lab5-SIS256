<?php
if ($_SESSION["nivel"]==0)//dependiendo del nivel si va a ser numero se cambia nomas
{
    echo "usted no esta autorizado a realizar esta operación";
    ?>
    <meta http-equiv="refresh" content="3;url=read.php">
    <?php
    die();
}
?>