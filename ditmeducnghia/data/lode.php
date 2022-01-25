<div class="content-wrapper">

<?php

$where = '';

$p = '';
if(isset($_GET['id']))
{
  $ngaythangnam = $_GET['id'];
  $n = explode("-",$ngaythangnam);
  $ngaythangnam = ''.$n[2].'-'.$n[1].'-'.$n[0].'';
  $p= '&id='.$_GET['id'].'';
}
if(isset($_POST['id']))
{
  $ngaythangnam = $_POST['id'];
  $p= '&id='.$_POST['id'].'';
  $n = explode("-",$ngaythangnam);
  $ngaythangnam = ''.$n[2].'-'.$n[1].'-'.$n[0].'';
}
;

?>
<div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Chọn nghày</h4>
                    <p class="card-description"> 
                    	<form class="form-inline" action="/admin/index.php?f=lode" method="post">
                     
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                        </div>
                        <input type="date" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="ID nick hoặc ID phiên">
                      </div><button type="submit" class="btn btn-gradient-primary mb-2">Tìm kiếm</button>
                    </form>
                    </p>
                                                                                                                    <div class="table-responsive">

                </div>
                  </div>
                </div>
              </div>
         <div class="row">     
<?PHP 
$i = 0;
$g = $mysqli->query("SELECT * FROM `tile` ORDER BY `id` ASC");
while($game = $g->fetch_assoc())
{
?>
<div class="col-lg-6 ">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Danh sách cược <?=$game['name']?></h4>
                   
                    <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Thời gian</th>
                          <th> người chơi </th>
                          <th> thành phố </th>
                          <th> hoàn trả </th>
                          <th> tổng cược </th>
                          <th> cửa cược </th>
                        </tr>
                      </thead>
                      <tbody>
                       <?PHP 
                        $c= $mysqli->query("SELECT * FROM `cuoc` WHERE `type` = '".$game['type']."' AND `date` = '".$ngaythangnam."'");
                        while($cuoc = $c->fetch_assoc())
                        {
                            echo '<tr>
                            <td>'.thoigian($cuoc['thoigian']).'</td>
                            <td>'.(new users($cuoc['uid']))->name().'</td>
                            <td>'.$mysqli->query("SELECT `ten` FROM `thanhpho` WHERE `id` = '".$cuoc['city']."'")->fetch_assoc()['ten'].'</td>
                            <td>'.$cuoc['hoantra'].'</td>
                            <td>'.number_format($cuoc['value']).'</td>
                            <td>'.$cuoc['cuoc'].'</td>
                            </tr>';
                        }

                        ?>
                      </tbody>
                    </table>
                </div>
                  </div>
                </div>
              </div>

<?PHP }?>

         </div>
</div>