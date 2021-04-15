<?php
    header("Content-Type:text/html; charset=utf-8");
    header("Access-Control-Allow-Origin: *");  
$content=$_POST["test-editormd-markdown-doc"];
$root = getenv('DOCUMENT_ROOT');
$name = $root . "/" . $_POST["fname"];
file_put_contents($name, $content);
echo "File " . $name . " saved";

    exit;
?>