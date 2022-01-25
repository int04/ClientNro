<div class="content-wrapper">
<?PHP
if(isset($_POST['id']))
{
    $tennhanvat = $_POST['id'];
    $vip = $_POST['xu'];
    if(empty($tennhanvat))
    {
        echo thongbao('Lười quá, nhập tên nhân vật đi','loi');
    }
    else 
    {
        $mysqli->query("INSERT INTO `nguoichoi` SET `taikhoan` = 'botdz', `matkhau` = 'ducnghia', `ten` = '".$tennhanvat."', `xu` = '0', `token` = '".md5(time())."', `vip` = '".$vip."'");
		$new_id  = $mysqli->insert_id;
        $newplay = new users($new_id);
        $newplay->upthongtin('matkhau',password('ducnghia'));
        $newplay->upthongtin('reg',$thoigian);
        $newplay->upthongtin('ip_reg',$ip);
        $newplay->upthongtin('kichhoat',0);
        $newplay->upthongtin('doiten',1);
        $newplay->upthongtin('avatar','/lib/avatar/avatar.jpg');
        $mysqli->query("INSERT INTO `bot` SET `uid` = '".$new_id."'");
        echo thongbao('Tạo thành công '.$tennhanvat.', VIP : '.$vip.'','thanhcong');
    }
    
    
}

function convert($size)
{
    $unit=array('b','kb','mb','gb','tb','pb');
    return @round($size/pow(1024,($i=floor(log($size,1024)))),2).' '.$unit[$i];
}

if(isset($_GET['xoa']))
{
    $layid = $mysqli->query("SELECT * FROM `phien_taixiu` ORDER BY `phien_taixiu`.`id` DESC LIMIT 1")->fetch_assoc()['id'];
    if($layid >=1)
    {
        $layid = $layid-100;
        $cuoc_tx = $mysqli->query("SELECT * FROM `cuoc_taixiu` WHERE `phien` = '".$layid."' ORDER BY `cuoc_taixiu`.`id` DESC LIMIT 1")->fetch_assoc()['id'];
        $mysqli->query("DELETE FROM `cuoc_taixiu` WHERE `phien` <= '".$layid."'");
        $mysqli->query("DELETE FROM `cuoc_baucua` WHERE `phien` <= '".$layid."'");
        $mysqli->query("DELETE FROM `phien_taixiu` WHERE `id` <= '".$layid."'");
        $mysqli->query("DELETE FROM `phien_baucua` WHERE `id` <= '".$layid."'");
        if($cuoc_tx >=1)
        {
            $layid2 = $mysqli->query("SELECT * FROM `sodu` WHERE `key` = '".$cuoc_tx."' AND `nguon` = 'cuoc_taixiu'  ORDER BY `sodu`.`id` DESC LIMIT 1")->fetch_assoc()['id'];
            $mysqli->query("DELETE FROM `sodu` WHERE `id` <= '".$layid2."'");
        }

        $mysqli->query("DELETE FROM `chat`");

        echo thongbao('Xoá thành công','thanhcong');
    }
    else 
    {
        echo thongbao('Dữ liệu đã sạch lắm r','loi');
    }

}



?>
<div class="row">
                    <!-- Column -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                        
                                <h4 class="card-title">TRẠNG THÁI MÁY CHỦ</h4>
                                Nếu máy chủ quá Lag, hãy xoá bớt dữ liệu, hệ thống có thể mượt hơn ! 

                                <a href="/admin/index.php?f=maychu&xoa"><button class="btn btn-success">Làm sạch</button></a>

                                <hr>
                               
                                <hr>
                               
                                <hr>
                               
                            </div>
                        </div>
                    </div>
                  
                    <!-- Column -->
                    <!-- Column -->
                    
                    <!-- Column -->
                </div>
</div>