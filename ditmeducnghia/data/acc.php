<div class="content-wrapper">

    <?php
 	if(isset($_GET['error']))
    {
    	if($mysqli->query("SELECT * FROM `nhapnick` WHERE `id` = '".$_GET['error']."' AND `trangthai` = '0'")->num_rows <=0)
        {
        	echo thongbao('Không tìm thấy nick này, có thể nick đã hoàn thành','loi');
        }
    	else 
        {
        	$mysqli->query("UPDATE `nhapnick` SET `trangthai` = '2' WHERE `id` = '".$_GET['error']."'");
        	echo thongbao('Huỷ nick thành công','thanhcong');
        }
    }


if(isset($_GET['success']))
    {
    	if($mysqli->query("SELECT * FROM `nhapnick` WHERE `id` = '".$_GET['success']."' AND `trangthai` = '0'")->num_rows <=0)
        {
        	echo thongbao('Không tìm thấy nick này, có thể nick đã hoàn thành','loi');
        }
    	else 
        {
        	$nick =$mysqli->query("SELECT `uid` FROM `nhapnick` WHERE `id` = '".$_GET['success']."' AND `trangthai` = '0'")->fetch_assoc(); 
        	$sell = new users($nick['uid']);
        	sodu($sell->id,$sell->xu,30000,'Bán nick sơ sinh','nhapnick',$_GET['success']);
        	$sell->upxu(30000);
        	$mysqli->query("UPDATE `nhapnick` SET `trangthai` = '1' WHERE `id` = '".$_GET['success']."'");
        	echo thongbao('Duyệt nick thành công, đã cộng tiền cho người chơi','thanhcong');
        }
    }
    $ng = $mysqli->query("SELECT * FROM `nhapnick`     ORDER by id DESC LIMIT $start, $kmess");
    $trang = '';

    if ($mysqli->query("SELECT * FROM `nhapnick`")->num_rows > $kmess) {
        $trang = '<center>' . trang('/admin/index.php?f=acc' . $p . '&', $start, $mysqli->query("SELECT * FROM `nhapnick` ")->num_rows, $kmess) . '</center>';
    }
    $table = '';
    while ($m = $ng->fetch_assoc()) {
        $c = new users($m['uid']);
        $table .= '<tr><td>' . thoigian($m['thoigian']) . '</td> <td>' . $c->name() . '</td>  <td>' . ($m['taikhoan']) . '</td> <td>' . ($m['matkhau']) . '</td> <td>' . ($m['maychu']) . '</td> <td>' . ($m['trangthai'] == 0 ? 'Đang chờ' : '') . ' ' . ($m['trangthai'] == 1 ? 'thành công' : '') . ' ' . ($m['trangthai'] == 2 ? 'lỗi' : '') . '</td> <td> <a href="/admin/index.php?f=acc&success='.$m['id'].'"><button type="button" class="btn btn-success">Đồng ý</button></a> <a href="/admin/index.php?f=acc&error='.$m['id'].'"><button type="button" class="btn btn-danger">Ácc lỗi</button></a>  </td>   </tr>';
    }
    ?>

    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Yêu cầu nhập nick</h4>
                
                <div class="table-responsive">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Thời gian</th>
                            <th>Người bán</th>
                                <th> tài khoản </th>
                                <th> mật khẩu </th>
                                <th> server </th>
                            	<th> Trạng thái </th>
                            <th>  </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?= $table ?>
                        </tbody>
                    </table>
                    <?= $trang ?>
                </div>
            </div>
        </div>
    </div>
</div>