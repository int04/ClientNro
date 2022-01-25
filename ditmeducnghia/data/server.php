<div class="content-wrapper">

<?Php
echo json('Danh sách máy chủ');
if(isset($_POST['name']))
{
    $name = $_POST['name'];
    $value = $_POST['value'];
    $nap = $_POST['nap'];
    $rut = $_POST['rut'];
    $server = $_POST['server'];
    $trochoi = $_POST['trochoi'];
    $khu = $_POST['khu'];
    $npc = $_POST['npc'];
    if(empty($name) || empty($value) || empty($nap) || empty($rut))
    {
        echo thongbao('Vui lòng nhập đầy đủ thông tin','loi');
    }
    
    else
    {
        if(isset($_GET['edit']))
        {
            $mysqli->query("UPDATE `server` SET `name` = '".$name."', `value` = '".$value."', `nap` = '".$nap."', `rut` = '".$rut."', `server` = '".$server."', `trochoi` = '".$trochoi."', `khu` = '".$khu."', `npc` = '".$npc."' WHERE `id` = '".$_GET['id']."'");
            echo thongbao('Chỉnh sửa thành công','thanhcong');
        }
        else
        {
            echo thongbao('Tạo dữ liệu thành công','thanhcong');
            $mysqli->query("INSERT INTO `server` SET `name` = '".$name."', `value` = '".$value."', `nap` = '".$nap."', `rut` = '".$rut."', `server` = '".$server."', `trochoi` = '".$trochoi."', `khu` = '".$khu."', `npc` = '".$npc."'");
        }
    }
}

$log = $mysqli->query("SELECT * FROM `server`    ORDER by id DESC LIMIT $start, $kmess");
$hethan = 0;
$hetdung = 0;
$table = '';
while($giftcode = $log->fetch_assoc())
{
    $game = $mysqli->query("SELECT * FROM `game` WHERE `id` = '".$giftcode['trochoi']."'")->fetch_assoc();
    $table.='<tr>
    <td>'.$game['name'].' '.($game['nap'] == "true" ? '(CÓ NẠP)' : '').' '.($game['rut'] == "true" ? '(CÓ RÚT)' : '').'</td>
    <td>'.$giftcode['khu'].'</td>
    <td>'.$giftcode['npc'].'</td>
    <td>'.$giftcode['name'].'</td>
    <td>'.($giftcode['value']).'</td>
        <td>'.($giftcode['server']).'</td>

    <td>'.($giftcode['nap'] == "true" ? 'Bật' : 'Tắt').'</td>
    <td>'.($giftcode['rut'] == "true" ? 'Bật' : 'Tắt').'</td>
    <td><a href="/admin/index.php?f=server&id='.$giftcode['id'].'&edit">[Chỉnh sửa]</a></td>
    </tr>';
    
}
if($mysqli->query("SELECT * FROM `server` ")->num_rows > $kmess)
{
    $trang = '<center>' . trang('/admin/index.php?f=server&', $start, $mysqli->query("SELECT * FROM `server` ")->num_rows, $kmess) . '</center>';
}

$name = '';
$value = '';
$nap = '';
$rut = '';
$server = '';
$trochoi = 0;
$khu = 0;
$npc = '';
if(isset($_GET['edit']))
{
    $check = $mysqli->query("SELECT * FROM `server` WHERE `id` = '".$_GET['id']."'")->fetch_assoc();
    $name = $check['name'];
    $value = $check['value'];
    $nap = $check['nap'];
    $rut = $check['rut'];
    $server = $check['server'];
    $trochoi = $check['trochoi'];
    $khu = $check['khu'];
    $npc = $check['npc'];

}

?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="panel">
                            <div class="panel-body">
                              
                                <h4 class="panel-title">Danh sách server</h4>
                                
                               
                                    
                                
                                <hr>
                                                                <div class="table-responsive">

                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Tên trò chơi</th>
                                            <th scope="col">Khu đứng</th>
                                            <th scope="col">Tên NPC</th>
                                            <th scope="col">Tên máy chủ</th>
                                            <th scope="col">Tỉ lệ nạp</th>
                                            <th scope="col">ID MÁY CHỦ</th>
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
                               
                   
    
                    <form name="dangki" action="/admin/index.php?f=server<?=( isset($_GET['id']) ? '&edit&id='.$_GET['id'].'' : '')?>" class="form pt-3" id="formlogin" method="post">
                                   
                                    
                                  
                                    
                                    
                                    <div class="form-group">
                                        <label>Tên hiển thị (VD : Server 1) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$name?>"  aria-label="tieude" name="name" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Tên NPC giao dịch (vd : ducnghia) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$npc?>"  aria-label="tieude" name="npc" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Số ID máy chủ (VD: 1) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$server?>"  aria-label="tieude" name="server" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Tỉ lệ (VD: x1000 thì nhập 1000) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$value?>"  aria-label="tieude" name="value" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Khu đứng (VD: khu 55 thì nhập 55) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$khu?>"  aria-label="tieude" name="khu" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Trò chơi:</label>
                                        <div class="input-group mb-3">
                                           
                                            <select class="form-control" name="trochoi">
                                                
                                                <?PHP
                                                $g = $mysqli->query("SELECT * FROM `game`");
                                                while($b = $g->fetch_assoc())
                                                {
                                                    echo '<option value="'.$b['id'].'" '.($trochoi == $b['id'] ? 'SELECTED' : '' ).' >'.$b['name'].' '.($b['nap'] == "true" ? '(CÓ NẠP)' : '').' '.($b['rut'] == "true" ? '(CÓ RÚT)' : '').' </b></option>';
                                                }
                                                
                                                ?>
                                               
                                                
                                            </select>
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