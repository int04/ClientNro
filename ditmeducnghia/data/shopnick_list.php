<div class="content-wrapper">
<?php

function status($k)
{
    if($k ==0) return '<font color="blue">Đang bán</font>';
    else if($k ==1) return '<font color="green">Đã mua</font>';
    else return '<font color="red">Đã gỡ</font>';
}


?>
<?PHP

/*Sử lý dữ liệu phân trang*/

$f = '';
$where = 'WHERE `id` >= \'0\'';
if(isset($_GET['chuaban']))
{
    $f.='&chuaban';
    $where.= 'AND `code` = \'0\'';
}
else
if(isset($_GET['daban']))
{
    $f.='&chuaban';
    $where.= 'AND `code` = \'1\'';
}
else
if(isset($_GET['dago']))
{
    $f.='&dago';
    $where.= 'AND `code` = \'2\'';
}
else
{
    $f = '';
    
}

if(isset($_GET['xoa']))
{
    if($mysqli->query("SELECT * FROM `shopnick_nick` WHERE `id` = '".$_GET['id']."'")->num_rows <=0)
    {
        echo thongbao('Không tồn tại nick này.','loi');
    }
    else
    {
        echo thongbao('Bạn có chắc chắn muốn xóa nick này không ? <button><a href="/admin/index.php?f=shopnick_list&del&id='.$_GET['id'].'">Đồng ý</a></button> <button> <a href="/admin/index.php?f=shopnick_list">HỦY BỎ</a></button>','canhbao');
    }
}
if(isset($_GET['del']))
{
    $mysqli->query("DELETE FROM `shopnick_nick` WHERE `id` = '".$_GET['id']."'");
    echo thongbao('Yêu cầu đã được thực hiện','thanhcong');
}

$ng = $mysqli->query("SELECT * FROM `shopnick_nick` $where  ORDER by id DESC LIMIT $start, $kmess");
if($mysqli->query("SELECT * FROM `shopnick_nick` $where ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=shopnick_list&', $start, $mysqli->query("SELECT * FROM `shopnick_nick` $where ")->num_rows, $kmess) . '</center>';
}
$tongvnd = 0;
$tongxu = 0;
$tongnick = 0;
$table = '';
$trang = '';
while($m = $ng->fetch_assoc())
{
    if($m['tien'] == "xu") $tongxu+= $m['gia'];
    else $tongvnd+= $m['gia'];
    $tongnick+=1;
    $table.='<tr><td>'.$m['id'].' <img src="'.$m['img'].'" width="100"></td><td>'.(new users($m['uid']))->name().'</td> <td></td>  <td>'.$m['info'].'</td> <td>'.($m['detu'] == 1 ?'Có đệ' : '').''.($m['bongtai'] == 1 ?',Có bông tai' : '').'</td> <td>'.number_format($m['gia']).' '.$m['tien'].'</td> <td>'.$m['mota'].'</td> <td>'.status($m['code']).'</td> <td><a href="/admin/index.php?f=shopnick_list&xoa&id='.$m['id'].'">[XÓA]</a> <a href="/admin/index.php?f=shopnick_edit&id='.$m['id'].'">[CHỈNH SỬA]</a></td></tr>';
}
?>

<!------->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                Thống kê :
                                <br>
                                <code>
                                    Giá trị xu : <?=number_format($tongxu)?> <br>
                                    Giá trị VNĐ : <?=number_format($tongvnd)?><br>
                                    Số nick  : <?=number_format($tongnick)?>
                                </code>
                                <h4 class="card-title">Danh sách nick trong kho</h4>
                                <a href="/admin/index.php?f=shopnick_list&chuaban">[CHƯA BÁN]</a> <a href="/admin/index.php?f=shopnick_list&daban">[ĐÃ BÁN]</a> <a href="/admin/index.php?f=shopnick_list&dago">[ĐÃ GỠ]</a>
                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">#ID</th>
                                            <th scope="col">CTV</th>
                                            <th scope="col">Danh mục</th>
                                            <th scope="col">Info</th>
                                            <th scope="col">Phụ kiện</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Mô tả</th>
                                            <th scope="col">Trạng thái</th>
                                            <th scope="col">Hành động</th>
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