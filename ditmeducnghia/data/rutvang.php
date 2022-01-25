<div class="content-wrapper">
<?=json('Rút vàng')?>
<?php

if(isset($_GET['ok']))
{
    $k = $mysqli->query("SELECT * FROM `rutvang` WHERE `id` = '".$_GET['id']."' AND `trangthai` = '1'")->fetch_assoc();
    if($k['id'] <=0)
    {
        echo thongbao('Đơn hàng này đã bị xoá từ trước rồi hoặc đã giao dịch','thanhcong');
    }
    else
    {
        echo thongbao('XOÁ THÀNH CÔNG','xoa');
    	$vang = $mysqli->query("SELECT * FROM `rutvang` WHERE `id` = '".$_GET['id']."'")->fetch_assoc();
    	$ng = new users($vang['uid']);
    	sodu($ng->id,$ng->xu,$vang['xu'],'Huỷ đơn rút vàng');
    	$ng->upxu($vang['xu']);
        $mysqli->query("DELETE FROM `rutvang` WHERE `id` = '".$_GET['id']."'");
    }
}

if(isset($_GET['xoa']))
{
    $k = $mysqli->query("SELECT * FROM `rutvang` WHERE `id` = '".$_GET['id']."'")->fetch_assoc();
    if($k['id'] <=0)
    {
        echo thongbao('Đơn hàng này đã bị xoá từ trước rồi hoặc đã bị giao dịch','thanhcong');
    }
    else
    {
        echo thongbao('<center>XOÁ <br> bạn có chắc chắn muốn xoá đơn hàng #'.$k['id'].' <br> Người rút : '.$k['uid'].' <br> Nhân vật game : '.$k['name'].' Sv. '.$k['server'].' <br> Số vàng nhận : '.number_format($k['vang']).' <br> Số xu rút : <font color="green">'.number_format($k['xu']).'</font> ('.$k['xu'].') <br> <a href="/admin/index.php?f=rutvang&ok&id='.$k['id'].'"><font color="red">[XÁC NHẬN XOÁ]</font></a> <a href="/admin/rutvang.html"><font color="green">[HUỶ YÊU CẦU]</font></a> </center>','canhbao');
    }
}

$log = $mysqli->query("SELECT * FROM `rutvang`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;

$start0 = 0;
$end = 0;
$i = 0;
$tong = 0;
$danap = 0;
$chuanap = 0;
$table = '';
$trnag = '';
while($rutvang = $log->fetch_assoc())
{
    if($end ==0) $end = $rutvang['id'];
    $code = $rutvang;
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
    <td>'.thoigian($rutvang['thoigian']).' <a href="/admin/index.php?f=rutvang&xoa&id='.$rutvang['id'].'"><font color="blue">[XOÁ]</font></a></td>
    <td><font color="red">'.number_format($code['vang']).'</font></td>
        <td>'.number_format($code['server']).'</td>

    <td>'.($code['name']).'</td>
     <td><font color="blue">'.($code['uid']).'</font></td>
          <td><font color="green">'.number_format($code['xu']).'</font></td>

    <td>'.($code['trangthai'] == 1 ? 'Chưa giao dịch' : 'đã giao dịch').'</td>
    </tr>';
    $start0 = $rutvang['id'];
    $i++;
    
}
if($mysqli->query("SELECT * FROM `rutvang` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=rutvang&', $start, $mysqli->query("SELECT * FROM `rutvang` ")->num_rows, $kmess) . '</center>';
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
                                            <th scope="col">Số vàng rút</th>
                                            <th scope="col">Máy chủ</th>
                                            <th scope="col">Tên nhân vật</th>
                                            <th scope="col">UID rút</th>
                                            <th scope="col">xu trừ</th>
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
                   - <b>Số vàng đã giao dịch:</b> <?=number_format($danap)?> <br>
                   - <b>Số vàng chưa giao dịch</b> <?=number_format($chuanap)?>
                   
                   </center>
                         
                               
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>

</div>

