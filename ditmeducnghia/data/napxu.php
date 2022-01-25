<div class="content-wrapper">
<?PHP
if(isset($_POST['id']))
{
    $nap = $_POST['id'];
    $xu = $_POST['xu'];
    if($mysqli->query("SELECT * FROM `nguoichoi` WHERE `id` = '".$nap."'")->num_rows <=0)
    {
        echo thongbao('Tài khoản không tồn tại','loi');
    }
    
    else
    {
        $n = new users($nap);
        sodu($n->id,$n->xu,$xu,'Nạp tiền từ admin.');
        $n->upxu($xu);
        $n->upthongtin('napxu',round($n->thongtin->napxu+$xu));
        $mysqli->query("UPDATE `nguoichoi` SET `nap` = `nap` + '".$xu."' WHERE `id` = '".$nap."'");
        $data = array(
            "id" => $n->id,
            "xu" => $xu,
            "thoigian" => $thoigian,
            );
        $mysqli->query("INSERT INTO `log_nap` SET `uid` = '".$id."', `data` = '".json_encode($data)."'");
        echo thongbao('Nạp tiền thành công','thanhcong');
        
    }
    
}


$log = $mysqli->query("SELECT * FROM `log_nap`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;
$trang = '';
$table = '';
while($giftcode = $log->fetch_assoc())
{
    $da = json_decode($giftcode['data'],true);
    $table.='<tr>
    <td>'.$giftcode['id'].'</td>
    <td>'.thoigian($da['thoigian']).'</td>
    <td>'.(new users($giftcode['uid']))->name().'</td>
    <td>'.(new users($da['id']))->name().'</td>
    <td>'.number_format($da['xu']).'</td>
    </tr>';
    
}
if($mysqli->query("SELECT * FROM `log_nap` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('?', $start, $mysqli->query("SELECT * FROM `log_nap` ")->num_rows, $kmess) . '</center>';
}


?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="card">
                            <div class="card-body">
                        
                                <h4 class="card-title">Nạp xu</h4>
                                <form name="dangki" action="/admin/index.php?f=napxu" class="form pt-3" id="formlogin" method="post">
                                   
                                    
                                  <div class="form-group">
                                        <label>ID Tài khoản (số)</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="number" class="form-control" value="1"  aria-label="tieude" name="id" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="form-group">
                                        <label>Xu :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="number" class="form-control" value="0"  aria-label="tieude" name="xu" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    
                                    

                                  

                                    <button name="dangki"  type="submit" class="btn btn-success mr-2">Nạp</button>
                                </form>
                                <hr>
                                <b>Ghi chú :</b>
                                <br> - Nạp tiền xin hãy nhập  <b>ID NICK</b> 
                                <br> - Sau khi nạp hệ thống sẽ lưu log lại !
                                <hr>
                               
                                <hr>
                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">#ID</th>
                                            <th scope="col">Thời gian</th>
                                            <th scope="col">Người nạp</th>
                                            <th scope="col">Người được nạp</th>
                                            <th scope="col">Số tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?=$table?>
                                       
                                    </tbody>
                                </table>
                                <?=$trang?>
                                
                            </div>
                        </div>
                    </div>
                  
                    <!-- Column -->
                    <!-- Column -->
                    
                    <!-- Column -->
                </div>
</div>