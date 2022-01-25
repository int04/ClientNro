<div class="content-wrapper">
<?=json('Rút vàng')?>
<?php

$log = $mysqli->query("SELECT * FROM `napvang`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;

$start0 = 0;
$end = 0;
$i = 0;
$tong = 0;
$danap = 0;
$chuanap = 0;
$trang = '';
$table = '';
while($napvang = $log->fetch_assoc())
{
    if($end ==0) $end = $napvang['id'];
    $code = $napvang;
    $tong+=$code['vang'];
    if($code['trangthai'] == 1)
    {
        $chuanap +=$code['vang'];
    }
    else
    {
        $danap +=$code['vang'];
    }
    $table.='<tr>
    <td>'.thoigian($napvang['thoigian']).'</td>
    <td><font color="red">'.number_format($code['vang']).'</font></td>
        <td>'.number_format($code['server']).'</td>

    <td>'.($code['name']).'</td>
     <td><font color="blue">'.($code['uid']).'</font></td>
          <td><font color="green">'.number_format($code['xu']).'</font></td>

    <td>'.($code['trangthai'] == 1 ? 'Chưa nạp' : 'Đã nạp').'</td>
    </tr>';
    $start0 = $napvang['id'];
    $i++;
    
}
if($mysqli->query("SELECT * FROM `napvang` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=napvang&', $start, $mysqli->query("SELECT * FROM `napvang` ")->num_rows, $kmess) . '</center>';
}

?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="panel">
                            <div class="panel-body">
                              
                                <hr>
                             
                                <hr>
                                                                <div class="table-responsive">

                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Thời gian</th>
                                            <th scope="col">Số vàng</th>
                                            <th scope="col">Máy chủ</th>
                                            <th scope="col">Tên nhân vật</th>
                                            <th scope="col">UID nhận</th>
                                            <th scope="col">xu nhận</th>
                                            <th scope="col">Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?=$table?>
                                       
                                    </tbody>
                                </table>
                            </div>
                                <?=$trang?>
                               
                            </div>
                        </div>
                    </div>
                  
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-4 col-xl-3 col-md-3">
                        <div class="panel">
                           
                            <div class="panel-body">
                               
                            
                   <center><font color="Red"><b>Thống kê chung (<font color="red"><?=$start0?> - <?=$end?> </font>)</b></font>
                   <br>
                   - <B>Số GD :</B> <?=$i?>  <br>
                   - <b>Tổng vàng :</b> <?=number_format($tong)?> <br>
                   - <b>Số vàng đã nạp:</b> <?=number_format($danap)?> <br>
                   - <b>Số vàng chưa nạp</b> <?=number_format($chuanap)?>
                   
                   </center>
                         
                               
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>

</div>


