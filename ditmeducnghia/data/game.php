<?PHP
echo '<div class="content-wrapper">
';
echo json_encode('Danh sách game');
if(isset($_POST['name']))
{
    $name = $_POST['name'];
    $value = $_POST['value'];
    $nap = $_POST['nap'];
    $rut = $_POST['rut'];
    $img = $_POST['img'];
    $img_rut = $_POST['img_rut'];
    $img_nap = $_POST['img_nap'];
    if(empty($name) || empty($value) || empty($nap) || empty($rut))
    {
        echo thongbao('Vui lòng nhập đầy đủ thông tin','loi');
    }
    
    else
    {
        if(isset($_GET['edit']))
        {
            $mysqli->query("UPDATE `game` SET `name` = '".$name."', `value` = '".$value."', `nap` = '".$nap."', `rut` = '".$rut."', `img` = '".$img."', `img_rut` = '".$img_rut."', `img_nap` = '".$img_nap."' WHERE `id` = '".$_GET['id']."'");
            echo thongbao('Chỉnh sửa thành công','thongbao');
        }
        else
        {
            echo thongbao('Tạo dữ liệu thành công','thanhcong');
            $mysqli->query("INSERT INTO `game` SET `name` = '".$name."', `value` = '".$value."', `nap` = '".$nap."', `rut` = '".$rut."', `img` = '".$img."', `img_rut` = '".$img_rut."', `img_nap` = '".$img_nap."'");
        }
    }
}

$log = $mysqli->query("SELECT * FROM `game`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;
$table = '';
$trang = '';
while($giftcode = $log->fetch_assoc())
{
    
    $table.='<tr>
    <td>'.$giftcode['name'].'</td>
    <td>'.($giftcode['value']).'</td>
    <td>'.($giftcode['nap'] == "true" ? 'Bật' : 'Tắt').'</td>
    <td>'.($giftcode['rut'] == "true" ? 'Bật' : 'Tắt').'</td>
    <td><a href="/admin/index.php?f=game&id='.$giftcode['id'].'&edit">[Chỉnh sửa]</a></td>
    </tr>';
    
}
if($mysqli->query("SELECT * FROM `game` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('?', $start, $mysqli->query("SELECT * FROM `game` ")->num_rows, $kmess) . '</center>';
}

$mota = '';
$url = '';
$ten = '';
$name = '';
$img = '';
$img_rut = '';
$img_nap = '';
$value='';
$rut = '';
$nap = '';
if(isset($_GET['edit']))
{
    $check = $mysqli->query("SELECT * FROM `game` WHERE `id` = '".$_GET['id']."'")->fetch_assoc();
    $name = $check['name'];
    $value = $check['value'];
    $nap = $check['nap'];
    $rut = $check['rut'];
    $img = $check['img'];
    $img_rut = $check['img_rut'];
    $img_nap = $check['img_nap'];
}

?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="panel">
                            <div class="panel-body">
                              
                                <h4 class="panel-title">Danh sách game</h4>
                                
                               
                                    
                                
                                <hr>
                                <div class="table-responsive">
                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Tên hiển thị</th>
                                            <th scope="col">Tên dữ liệu</th>
                                            <th scope="col">Nạp vào</th>
                                            <th scope="col">Rút ra</th>
                                            <th scope="col">Hành động</th>
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
                               
                   
    
                    <form name="dangki" action="/admin/index.php?f=game<?=(isset($_GET['id']) ? '&edit&id='.$_GET['id'].'' : '')?>" class="form pt-3" id="formlogin" method="post">
                                   
                                    
                                  
                                    
                                    
                                    <div class="form-group">
                                        <label>Tên hiển thị (VD:Ngọc Rồng Online) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$name?>"  aria-label="tieude" name="name" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Tên dữ liệu (VD:ngocrong) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$value?>"  aria-label="tieude" name="value" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Link img :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$img?>"  aria-label="tieude" name="img" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Link img rút (nếu có rút) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$img_rut?>"  aria-label="tieude" name="img_rut" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Link img nạp (nếu có nạp) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$img_nap?>"  aria-label="tieude" name="img_nap" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    
                                     <div class="form-group">
                                        <label>Nạp vào:</label>
                                        <div class="input-group mb-3">
                                           
                                            <select class="form-control" name="nap">
                                                <option value="true" <?=($nap == "true" ? 'SELECTED' : '' )?> >Hiển thị</option>
                                                <option value="false"  <?=($nap == "false" ? 'SELECTED' : '' )?>>Không hiển thị</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Rút ra:</label>
                                        <div class="input-group mb-3">
                                           
                                            <select class="form-control" name="rut">
                                                <option value="true" <?=($rut == "true" ? 'SELECTED' : '' )?>>Hiển thị</option>
                                                <option value="false" <?=($rut == "false" ? 'SELECTED' : '' )?>>Không hiển thị</option>
                                                
                                            </select>
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