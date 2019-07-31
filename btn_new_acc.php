<?php
// JSON with padding (no AJAX)

header("Content-Type: application/json; charset=UTF-8");
$param = json_decode($_GET["params"], false);
$conn = new mysqli('localhost', 'web_conn', '321', 'Grids');


$result = $conn->query("INSERT INTO Account (cust_id, acc_number, acc_name, bik, balance) VALUES(" .$param->id. ", " .$param->acc_number. ", '" .$param->acc_name. "', " .$param->bik. ", " .$param->balance. ");");
$dset = array();
$dset = $result->fetch_all(MYSQLI_ASSOC);