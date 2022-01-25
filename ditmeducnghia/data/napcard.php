<div class="content-wrapper">
<?php
echo json('Nạp thẻ cào');
$log = $mysqli->query("SELECT * FROM `thecao`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;

$start0 = 0;
$end = 0;
$i = 0;
$tong = 0;
$thanhcong = 0;
$saithe = 0;
$saimenhgia = 0;
$table = '';
$trang ='';
while($thecao = $log->fetch_assoc())
{
    if($end ==0) $end = $thecao['id'];
    $code = $thecao;
    if($code['stt'] == 1)
    {
        $thanhcong +=$code['menhgia'];
    }
    else
    if($code['stt'] ==2)
    {
        $saimenhgia+=$code['menhgia'];
    }
    else
    {
        $saithe+=$code['menhgia'];
    }
    $table.='<tr>
    <td>'.thoigian($thecao['thoigian']).'</td>
    <td>'.($code['uid']).'</td>
    <td>'.($code['mathe']).'</td>
    <td>'.($code['seri']).'</td>
    <td><font color="red">'.number_format($code['menhgia']).'</font></td>
    <td>'.($code['nhamang']).'</td>
        <td>'.number_format($code['xu']).'</td>


    <td>'.($code['stt'] == 1 ? 'Thành công' : '').' '.($code['stt'] == 2 ? 'Sai mệnh giá' : '').' '.($code['stt'] == 3 ? 'Sai thẻ' : '').'</td>
    </tr>';
    $start0 = $thecao['id'];
    $i++;
    
}
if($mysqli->query("SELECT * FROM `thecao` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=napcard', $start, $mysqli->query("SELECT * FROM `thecao` ")->num_rows, $kmess) . '</center>';
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
                                            <th scope="col">Người chơi</th>
                                            <th scope="col">Mã thẻ</th>
                                            <th scope="col">Serial</th>
                                            <th scope="col">Mệnh giá</th>
                                            <th scope="col">Nhà mạng</th>
                                            <th scope="col">xu nhận</th>
                                            <th scope="col">Trạng thái</th>
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
                               
                            
                   <center><font color="Red"><b>Thống kê chung (<font color="red"><?=$start0?> - <?=$end?> </font>)</b></font>
                   <br>
                   - <B>Số GD :</B> <?=$i?>  <br>
                   - <b>Tổng tiền :</b> <?=number_format($thanhcong+$saimenhgia+$saithe)?> <br>
                   - <b>Số tiền thành công:</b> <?=number_format($thanhcong)?> <br>
                   - <b>Số tiền sai mệnh giá</b> <?=number_format($saimenhgia)?>
                   <br>
                   - <b>Số tiền sai thẻ</b> <?=number_format($saithe)?>
                   
                   </center>
                         
                               
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>
</div>