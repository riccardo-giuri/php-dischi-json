<?php 
    $dischiJson = file_get_contents(__DIR__ . '/./db/dischi.json');

    header('Content-Type: application/json');

    echo $dischiJson;
?>