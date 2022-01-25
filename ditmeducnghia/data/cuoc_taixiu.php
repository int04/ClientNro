<div class="content-wrapper">

<?php

$where = '';

$p = '';
if(isset($_GET['id']))
{
  $where = 'WHERE `uid` = \''.$_GET['id'].'\' or  `phien` = \''.$_GET['id'].'\'';
  $p= '&id='.$_GET['id'].'';
}
if(isset($_POST['id']))
{
  $where = 'WHERE `uid` = \''.$_POST['id'].'\' or  `phien` = \''.$_POST['id'].'\'';
  $p= '&id='.$_POST['id'].'';
}
$ng = $mysqli->query("SELECT * FROM `cuoc_taixiu`  $where   ORDER by id DESC LIMIT $start, $kmess");
$trang = '';

if($mysqli->query("SELECT * FROM `cuoc_taixiu` $where ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=cuoc_taixiu'.$p.'&', $start, $mysqli->query("SELECT * FROM `cuoc_taixiu` $where ")->num_rows, $kmess) . '</center>';
}
$table = '';
while($m = $ng->fetch_assoc())
{
    $c = new users($m['uid']);
    $table.='<tr><td>'.thoigian($m['thoigian']).'</td> <td>'.number_format($m['phien']).'</td> <td>'.$c->name().'</td> <td>'.number_format($m['xu']).'</td>  <td>'.number_format($m['xuhoantra']).'</td> <td>'.number_format($m['xunhan']).'</td></tr>';
}
?>

<div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Danh sách cược tài xỉu</h4>
                    <p class="card-description"> 
                    	<form class="form-inline" action="/admin/index.php?f=cuoc_taixiu" method="post">
                     
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="ID nick hoặc ID phiên">
                      </div><button type="submit" class="btn btn-gradient-primary mb-2">Tìm kiếm</button>
                    </form>
                    </p>
                                                                                                                    <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Thời gian</th>
                          <th> Phiên </th>
                          <th> Người chơi </th>
                          <th> Xu cược </th>
                          <th> Xu trả </th>
                          <th> Xu nhận </th>
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