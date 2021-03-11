<?php
// JSON with padding (no AJAX)

header("Content-Type: application/json; charset=UTF-8");
$param = json_decode($_GET["params"], false);
$conn = new mysqli('localhost', 'web_conn', '321', 'Grids');

$result = $conn->query("DELETE Account FROM Account LEFT JOIN Customer ON Customer.id=Account.cust_id WHERE Customer.acc_number=" .$param->acc_number. ";");
$dset = array();
$dset = $result->fetch_all(MYSQLI_ASSOC);
