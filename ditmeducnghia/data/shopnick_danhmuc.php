<div class="content-wrapper">

<?php
if(isset($_POST['ten']))
{
    $ten = $_POST['ten'];
    $url = $_POST['url'];
    $mota = $_POST['mota'];
    if(strlen($ten) <=4)
    {
        echo thongbao('Tên chuyên mục quá ngắn','loi');
    }
    else
    if(empty($url))
    {
        echo thongbao('Bạn chưa nhập URL','loi');
    }
    else
    {
        if($_GET['id'] >=1)
        {
            echo thongbao('Chỉnh sửa thành công','thanhcong');
            $mysqli->query("UPDATE `shopnick_danhmuc` SET `url` = '".$url."', `ten` = '".$ten."', `mota` = '".$mota."' WHERE `id` = '".$_GET['id']."'");
        }
        else
        {
            echo thongbao('Tạo thành công'.$_GET['id'],'thanhcong');
            $mysqli->query("INSERT INTO `shopnick_danhmuc` SET `url` = '".$url."', `ten` = '".$ten."', `mota` = '".$mota."'");
        }
    }
}


$log = $mysqli->query("SELECT * FROM `shopnick_danhmuc`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;
$table = '';
$trang = '';
while($giftcode = $log->fetch_assoc())
{
    
    $table.='<tr>
    <td>'.$giftcode['url'].'</td>
    <td>'.($giftcode['ten']).'</td>
    <td>'.($giftcode['mota']).'</td>
    <td></td>
    <td><a href="/admin/index.php?f=shopnick_danhmuc&id='.$giftcode['id'].'&edit">[Chỉnh sửa]</a></td>
    </tr>';
    
}
if($mysqli->query("SELECT * FROM `shopnick_danhmuc` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=shopnick_danhmuc&', $start, $mysqli->query("SELECT * FROM `giftcode` ")->num_rows, $kmess) . '</center>';
}

$mota = '';
$url = '';
$ten = '';
if(isset($_GET['edit']))
{
    $check = $mysqli->query("SELECT * FROM `shopnick_danhmuc` WHERE `id` = '".$_GET['id']."'")->fetch_assoc();
    $mota = $check['mota'];
    $url = $check['url'];
    $ten = $check['ten'];
}

?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="card">
                            <div class="card-body">
                              
                                <h4 class="card-title">Danh mục</h4>
                                
                               
                                    
                                
                                <hr>
                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Url</th>
                                            <th scope="col">Tên</th>
                                            <th scope="col">Mô tả</th>
                                            <th scope="col">Thống kê</th>
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
                  
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-4 col-xl-3 col-md-3">
                        <div class="card">
                           
                            <div class="card-body">
                               
                   
    
                    <form name="dangki" action="/admin/index.php?f=shopnick_danhmuc<?=(isset($_GET['id']) ? '&edit&id='.$_GET['id'].'' : '')?>" class="form pt-3" id="formlogin" method="post">
                                   
                                    
                                  
                                    
                                    
                                    <div class="form-group">
                                        <label>Tên danh mục :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$ten?>"  aria-label="tieude" name="ten" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Địa chỉ danh mục (url-abc) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$url?>"  aria-label="tieude" name="url" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Mô tả :</label>
                                        <div class="input-group mb-3">
                                           
                                            <textarea class="form-control" name="mota"><?=$mota?></textarea>
                                        </div>
                                    </div>
                                    
                                    
                                    

                                  

                                    <button name="dangki"  type="submit" class="btn btn-success mr-2">Lưu</button>
                                </form>

                         
                               
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>
</div>