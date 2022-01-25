<div class="content-wrapper">
<?=json('Nạp thẻ siêu rẻ.')?>
<?php
$log = $mysqli->query("SELECT * FROM `thesieure`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;
$tong_tien = 0;
$tong_xu = 0;
$start = 0;
$end = 0;
$i = 0;
$table = '';
$trang = '';
while($thesieure = $log->fetch_assoc())
{
    if($end ==0) $end = $thesieure['id'];
    $code = json_decode($thesieure['data'],true);
    $tong_tien+=$code['vnd'];
    $tong_xu+=$code['xu'];
    $table.='<tr>
    <td>'.$thesieure['code'].'</td>
    <td>'.number_format($code['vnd']).'</td>
    <td>'.thoigian($code['thoigian']).'</td>
    <td>'.number_format($code['xu']).'</td>
    <td>'.$thesieure['uid'].'</td>
    </tr>';
    $start = $thesieure['id'];
    $i++;
    
}
if($mysqli->query("SELECT * FROM `thesieure` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=naptsr&', $start, $mysqli->query("SELECT * FROM `thesieure` ")->num_rows, $kmess) . '</center>';
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
                                            <th scope="col">Mã Giao dịch</th>
                                            <th scope="col">Số tiền</th>
                                            <th scope="col">Thời gian</th>
                                            <th scope="col">Xu nhận</th>
                                            <th scope="col">UID nhận</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?=$table?>
                                       
                                    </tbody>
                                </table></div>
                                <?=$trang?>
                               
                            </div>
                        </div>
                    </div>
                  
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-4 col-xl-3 col-md-3">
                        <div class="panel">
                           
                            <div class="panel-body">
                               
                            
                   <center><font color="Red"><b>Thống kê chung (<font color="red"><?=$start?> - <?=$end?> </font>)</b></font>
                   <br>
                   - <B>Số GD :</B> <?=$i?>  <br>
                   - <b>Vnđ :</b> <?=number_format($tong_tien)?> <br>
                   - <b>Tổng xu:</b> <?=number_format($tong_xu)?>
                   
                   </center>
                         
                               
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>

            </div>