<?php
// JSON with padding (no AJAX)

header("Content-Type: application/json; charset=UTF-8");
$param = json_decode($_GET["params"], false);
$conn = new mysqli('localhost', 'web_conn', '321', 'Grids');

$result = $conn->query("UPDATE Account a RIGHT JOIN Customer c ON c.id=a.cust_id SET acc_number='" .$param->acc_number. "', acc_name=" .$param->acc_name. ", bik=" .$param->bik. ", balance=" .$param->balance. " WHERE a.cust_id=" .$param->id. ";");
$dset = array();
$dset = $result->fetch_all(MYSQLI_ASSOC);
