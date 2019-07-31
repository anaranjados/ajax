<?php
// JSON with padding (no AJAX)

header("Content-Type: application/json; charset=UTF-8");
$param = json_decode($_GET["params"], false);
$conn = new mysqli('localhost', 'web_conn', '321', 'Grids');

$result = $conn->query("DELETE Customer, Account FROM Customer LEFT JOIN Account ON Customer.id=Account.cust_id WHERE Customer.id=" .$param->id. ";");
$dset = array();
$dset = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($dset);