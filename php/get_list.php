<?php
// JSON with padding (no AJAX)

header("Content-Type: application/json; charset=UTF-8");
$par = json_decode($_GET["params"], false);

$conn = new mysqli('localhost', 'web_conn', '321', 'Grids');	

$result = $conn->query("SELECT " .$par->field. " FROM " .$par->table. ";" );
$dset = array();
$dset = $result->fetch_all(MYSQLI_ASSOC);

echo "getList_sub(" .json_encode($dset). ")";
