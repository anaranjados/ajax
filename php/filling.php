<?php
// JSON with padding (no AJAX)

header("Content-Type: application/json; charset=UTF-8");
$param = json_decode($_GET["params"], false);
$conn = new mysqli('localhost', 'web_conn', '321', 'Grids');

$result = $conn->query("SELECT * FROM Customer c LEFT JOIN Account a ON c.id=a.cust_id WHERE c.cust_name='" .$param->name. "';" );
$dset = array();
$dset = $result->fetch_all(MYSQLI_ASSOC);

echo "filling_sub(" .json_encode($dset). ")";
