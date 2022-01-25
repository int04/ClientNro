<div class="content-wrapper">
<?php
// action
$where = 'WHERE `type` =  \'3\'';

$p = '';
if(isset($_GET['id']))
{
  $select = $mysqli->query("SELECT * FROM `nguoichoi` WHERE `id` = '".$_GET['id']."' or `ten` = '".$_GET['id']."' LIMIT 1");
  if($select->num_rows >=1)
  {
    $doituong = $select->fetch_assoc()['id'];
  }
  else
  {
    $doituong = $_GET['id'];
  }
  $where.= 'AND `uid` = \''.$doituong.'\'';
  $p= '&id='.$doituong.'';
}
else
if(isset($_POST['id']))
{
  $select = $mysqli->query("SELECT * FROM `nguoichoi` WHERE `id` = '".$_POST['id']."' or `ten` = '".$_POST['id']."' LIMIT 1");
  if($select->num_rows >=1)
  {
    $doituong = $select->fetch_assoc()['id'];
  }
  else
  {
    $doituong = $_POST['id'];
  }
  $where.= 'AND `uid` = \''.$doituong.'\'';
  $p= '&id='.$doituong.'';
}


$action = isset($_POST['action']) ? $_POST['action'] : NULL;
if($action == "block")
{
  if($mysqli->query("SELECT * FROM `block` WHERE `uid` = '".$doituong."' AND `type` = '3'")->num_rows >=1)
  {
    echo thongbao('Người chơi này hiện tại đã bị chặn rồi.','loi');
  }
  else
  {
    $mysqli->query("INSERT INTO `block` SET `uid` = '".$doituong."', `type` = '3', `admin` = '".$id."'");
    echo thongbao('Chặn đối tượng này thành công.','thanhcong');
  }
}

if($action == "unblock")
{
  if($mysqli->query("SELECT * FROM `block` WHERE `uid` = '".$doituong."' AND `type` = '3'")->num_rows <=0)
  {
    echo thongbao('Người chơi này chưa bị chặn.','loi');
  }
  else
  {
    $mysqli->query("DELETE FROM `block` WHERE `uid` = '".$doituong."' AND `type` ='3'");
    echo thongbao('Bỏ chặn thành công..','thanhcong');
  }
}

$ng = $mysqli->query("SELECT * FROM `block`  $where   ORDER by id DESC LIMIT $start, $kmess");
$trang = '';

if($mysqli->query("SELECT * FROM `block` $where ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=block_chanle'.$p.'&', $start, $mysqli->query("SELECT * FROM `block` $where ")->num_rows, $kmess) . '</center>';
}
$table = '';
while($m = $ng->fetch_assoc())
{
    $c = new users($m['uid']);
    $ad = new users($m['admin']);
    $table.='<tr>   <td>'.$c->id.'</td>  <td>'.$c->taikhoan.'</td> <td>'.$c->name().'</td>  <td>'.$ad->name().'</td> </tr>';
}
?>

<div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Danh sách bị chặn chẵn lẻ</h4>
                    <p class="card-description"> 
                    	<form class="form-inline" action="/admin/index.php?f=block_chanle" method="post">
                     
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="ID nick tên tài khoản">
                        <select name="action" class="form-control"><option value="search">Tìm kiếm</option> <option value="block">Chặn</option> <option value="unblock">Gỡ chặn</option></select>
                      </div><button type="submit" class="btn btn-gradient-primary mb-2">Thực thi</button>
                    </form>
                    </p>
                                                                                                                    <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>UID</th>
                          <th>Tài khoản</th>
                          <th>Tên nhân vật</th>
                          <th> Người chặn </th>
                         
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