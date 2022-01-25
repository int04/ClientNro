<div class="content-wrapper">

<?php

if(isset($_GET['ban']))
{
	if($mysqli->query("SELECT * FROM `nguoichoi` where `id` = '".$_GET['id']."'")->num_rows <=0)
	{
		echo thongbao('Không tìm thấy ID này','loi');
	}
	else
	{
		echo thongbao('Khoá tài khoản này thành công.','thanhcong');
		$mysqli->query("UPDATE `nguoichoi` SET `ban` = '1' WHERE `id` = '".$_GET['id']."'");
	}
}

if(isset($_GET['unban']))
{
	if($mysqli->query("SELECT * FROM `nguoichoi` where `id` = '".$_GET['id']."'")->num_rows <=0)
	{
		echo thongbao('Không tìm thấy ID này','loi');
	}
	else
	{
		echo thongbao('Đã mở Khoá tài khoản này thành công.','thanhcong');
		$mysqli->query("UPDATE `nguoichoi` SET `ban` = '0' WHERE `id` = '".$_GET['id']."'");
	}
}

$where = '';
if(isset($_POST['id']))
{
	$where = 'WHERE `id` = \''.$_POST['id'].'\' or  `ten` = \''.$_POST['id'].'\' or `taikhoan` = \''.$_POST['id'].'\' ';
}
$trang = '';

$ng = $mysqli->query("SELECT * FROM `nguoichoi`  $where   ORDER by id DESC LIMIT $start, $kmess");
if($mysqli->query("SELECT * FROM `nguoichoi` $where ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=users&', $start, $mysqli->query("SELECT * FROM `nguoichoi` $where ")->num_rows, $kmess) . '</center>';
}
$table = '';
while($m = $ng->fetch_assoc())
{
    $c = new users($m['id']);
    $table.='<tr><td>'.$c->id.'</td><td><img src="'.$c->thongtin->avatar.'" width="30">'.$c->name().'</td><td>'.$c->taikhoan.'</td><td>'.number_format($c->xu).'</td> <td>'.(strlen($c->sdt) <= 3 ? 'Chưa xác minh' : 'Đã xác minh').'</td><td><font color="'.($c->lailo() >=0 ? 'green' : 'red').'">'.number_format($c->lailo()).'</font></td> <td>'.($c->ban == 1 ? '<a href="/admin/index.php?f=users&id='.$c->id.'&unban"><font color="green">Mở khoá</font></a>' : '<a href="/admin/index.php?f=users&id='.$c->id.'&ban"><font color="red">Khoá lại</font></a>').'</td> </tr>';
}
?>

<div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Danh sách người chơi</h4>
                    <p class="card-description"> 
                    	<form class="form-inline" action="/admin/index.php?f=users" method="post">
                     
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="ID, tên, tài khoản">
                      </div><button type="submit" class="btn btn-gradient-primary mb-2">Tìm kiếm</button>
                    </form>
                    </p>
                                                                                                                    <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th> ID </th>
                          <th> Avatar </th>
                          <th> Tài khoản </th>
                          <th> Xu có </th>
                          <th> OTP </th>
                          <th> Lãi lỗ </th>
                          <th> Hành động </th>
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
              </div>
</div>