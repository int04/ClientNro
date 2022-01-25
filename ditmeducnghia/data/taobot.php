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



?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="card">
                            <div class="card-body">
                        
                                <h4 class="card-title">Tạo BOT</h4>
                                <form name="dangki" action="/admin/index.php?f=taobot" class="form pt-3" id="formlogin" method="post">
                                   
                                    
                                  <div class="form-group">
                                        <label>Tên nhân vật</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value=""  aria-label="tieude" name="id" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="form-group">
                                        <label>VIP :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="number" class="form-control" value="0"  aria-label="tieude" name="xu" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    
                                    

                                  

                                    <button name="dangki"  type="submit" class="btn btn-success mr-2">Tạo</button>
                                </form>
                                <hr>
                                <b>Ghi chú :</b>
                                <br> - Tạo BOT rất chi là ez
                                <br> - BOT đánh như người thật, VIP các kiểu sợ cak gì ?
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