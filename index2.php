<?PHP 

$servername = "localhost";
$username = "root";
$password = "";
$talbe = "nro";

// Create connection
$conn = new mysqli($servername, $username, $password,"nro");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$mysqli = $conn;
$g = $mysqli->query("SHOW TABLES");

while($f = $g->fetch_assoc()) 
{
	$mysqli->query("ALTER TABLE `".$f['Tables_in_nro']."`  CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT");

}
