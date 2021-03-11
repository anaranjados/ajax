<?php
// JSON with padding (no AJAX)

header("Content-Type: application/json; charset=UTF-8");
$param = json_decode($_GET["params"], false);
$conn = new mysqli('localhost', 'web_conn', '321', 'Grids');


$result = $conn->query("INSERT into Customer (cust_name, inn, address) VALUES('" .$param->name. "', " .$param->inn. ", address='" .$param->address. "');");
$dset = array();
$dset = $result->fetch_all(MYSQLI_ASSOC);

// echo json_encode($dset);
