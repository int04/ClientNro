<?PHP 
$ip = $_SERVER['REMOTE_ADDR'];
$ip = str_replace(".", ";",$ip);
$ip = str_replace("0", "NghiaYeuTrang.",$ip);
$ip = str_replace("1", "TrangYeuNghiaKhong.",$ip);
$ip = str_replace("2", "NghiaYeuTrangNhat.",$ip);
$ip = str_replace("3", "TrangLaNhat.",$ip);
$ip = str_replace("4", "TranThuTrang.",$ip);
$ip = str_replace("5", "Trang2004.",$ip);
$ip = str_replace("6", "TrangThangTu.",$ip);
$ip = str_replace("7", "Nghia2004.",$ip);
$ip = str_replace("8", "NghiaYeuBanTrang.",$ip);
$ip = str_replace("9", "TrangTranThu.",$ip);

echo $ip;