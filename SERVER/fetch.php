<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
$servername = "localhost";
$username = "krish"; 
$password = "123"; 
$dbname = "demo"; 

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, first_name,last_name,email,gender,ip_address FROM MOCK_DATA";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "No records found.";
}
$conn->close();


echo json_encode($data);
?>
