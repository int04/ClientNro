<div class="content-wrapper">
<?=json('edit nick')?>
<?PHP
if(isset($_POST['danhmuc']))
{
    $danhmuc = $_POST['danhmuc'];
    $server = $_POST['server'];
    $info = $_POST['info'];
    $bongtai = $_POST['bongtai'];
    $detu = $_POST['detu'];
    $gia = $_POST['gia'];
    $tien = $_POST['tien'];
    $mota = $_POST['mota'];
    $img = $_POST['img'];
    $hinhanh = $_POST['hinhanh'];
    $hanhtinh = $_POST['hanhtinh'];
    $code = $_POST['code'];
    
    if(empty($danhmuc) or empty($server) or empty($info) or empty($gia) or empty($tien) or empty($mota) or empty($img) or empty($hinhanh) or empty($hanhtinh))
    {
        echo thongbao('Cộng tác viên vui lòng nhập đầy đủ thông tin','loi');
    }
    else
    if($gia <=0)
    {
        echo thongbao('Cộng tác viên vui lòng nhập giá hợp lệ');
    }
    else
    {
        echo thongbao('Chỉnh sửa thành công..','thanhcong');
        $mysqli->query("UPDATE `shopnick_nick` SET `danhmuc` = '".$danhmuc."', `server` = '".$server."', `info` = '".$info."', `bongtai` = '".$bongtai."', `detu` = '".$detu."', `gia` = '".$gia."', `tien` = '".$tien."', `mota` = '".$mota."', `img` = '".$img."', `hinhanh` = '".$hinhanh."', `hanhtinh` = '".$hanhtinh."', `uid` = '".$id."', `code` = '".$code."' WHERE `id` = '".$_GET['id']."'");
    }
}
$nick = $mysqli->query("SELECT * FROM `shopnick_nick` WHERE `id` = '".$_GET['id']."'")->fetch_assoc();
if($nick['id'] <=0)
{
    echo thongbao('không tồn tại ID nick này','loi');
}

?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="card">
                            <div class="card-body">
                              
                                <h4 class="card-title">Chỉnh sửa nick <a href="/admin/index.php?f=shopnick_edit&id=<?=$_GET['id']?>">#<?=$_GET['id']?></a></h4>
                                <form name="dangki" action="/admin/index.php?f=shopnick_edit&id=<?=$_GET['id']?>" class="form pt-3" id="formlogin" method="post">
                                    <img src="<?=$nick['img']?>" width="100%">
                              <div class="form-group">
                                        <label>Danh mục nick</label>
                                        <div class="input-group mb-3">
                                           
                                            <select name="danhmuc" class="form-control">
                                                <?PHP
                                                $danhmuc = $mysqli->query("SELECT * FROM `shopnick_danhmuc`");
                                                while($data  =$danhmuc->fetch_assoc())
                                                {
                                                    echo'<option value="'.$data['id'].'" '.($nick['danhmuc'] == $data['id'] ? 'selected' : '').'>'.$data['ten'].'</option>';
                                                }
                                                
                                                ?>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Máy chủ</label>
                                        <div class="input-group mb-3">
                                            <select name="server" class="form-control">
                                                <?PHP
                                                $i = 1;
                                                while($i<=9)
                                                {
                                                    echo '<option value="'.$i.'"'.($nick['server'] == $i ? 'selected' : '').'>Vũ trụ '.$i.'</option>';
                                                    $i++;
                                                }
                                                ?>
                                            </select>
                                            </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Nick (tài khoản, mật khẩu) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$nick['info']?>"  aria-label="tieude" name="info" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Bông tai</label>
                                        <div class="input-group mb-3">
                                            <select name="bongtai" class="form-control">
                                            <option value="0" <?=($nick['bongtai'] == 0 ? 'selected' : '')?>>Không có</option>
                                            <option value="1" <?=($nick['bongtai'] == 1 ? 'selected' : '')?>>có</option>
                                            </select>
                                            </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Đệ tử</label>
                                        <div class="input-group mb-3">
                                            <select name="detu" class="form-control">
                                            <option value="1" <?=($nick['detu'] == 1 ? 'selected' : '')?>>có</option>
                                            <option value="0" <?=($nick['detu'] == 0 ? 'selected' : '')?>>Không có</option>
                                            </select>
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Hành tinh</label>
                                        <div class="input-group mb-3">
                                            <select name="hanhtinh" class="form-control">
                                            <option value="traidat" <?=($nick['hanhtinh'] == 'traidat' ? 'selected' : '')?>>Trái đất</option>
                                            <option value="xayda" <?=($nick['hanhtinh'] == 'xayda' ? 'selected' : '')?>>Xayda</option>
                                            <option value="namek" <?=($nick['hanhtinh'] == 'namek' ? 'selected' : '')?>>Namek</option>
                                            </select>
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Loại tiền</label>
                                        <div class="input-group mb-3">
                                            <select name="tien" class="form-control">
                                            <option value="xu" <?=($nick['tien'] == 'xu' ? 'selected' : '')?>>Xu</option>
                                            <option value="vnd" <?=($nick['tien'] == 'vnd' ? 'selected' : '')?>>VNĐ</option>
                                            </select>
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Giá :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="number" class="form-control" value="<?=$nick['gia']?>"  aria-label="tieude" name="gia" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Ảnh đại diện :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="text" class="form-control" value="<?=$nick['img']?>"  aria-label="tieude" name="img" aria-describedby="basic-addon11">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Ảnh mô tả (cách nhau dấu phẩy) :</label>
                                        <div class="input-group mb-3">
                                           
                                            <textarea class="form-control" name="hinhanh"><?=$nick['hinhanh']?></textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Mô tả :</label>
                                        <div class="input-group mb-3">
                                           
                                            <textarea class="form-control" name="mota"><?=$nick['mota']?></textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Trạng thái</label>
                                        <div class="input-group mb-3">
                                            <select name="code" class="form-control">
                                            <option value="0" <?=($nick['code'] == 0 ? 'selected' : '')?>>Đăng bán</option>
                                            <option value="1" <?=($nick['code'] == 1 ? 'selected' : '')?>>Đã bán</option>
                                             <option value="2" <?=($nick['code'] == 2 ? 'selected' : '')?>>Gỡ bán</option>
                                            </select>
                                            </div>
                                    </div>
                                    
                                    

                                  

                                    <button name="dangki"  type="submit" class="btn btn-success mr-2">Sửa</button>
                                </form>
                            </div>
                        </div>
                    </div>
                  
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-4 col-xl-3 col-md-3">
                        <div class="card">
                           
                            <div class="card-body">
                               
                   
                    <div id="form-upload-ducnghia" style="display:none;"></div>
                    <form name="dangki" id="formid"  class="form pt-3" id="formlogin">
                                   
                                    
                                    <div class="form-group">
                                        <label>Ảnh màn hình :</label>
                                        <div class="input-group mb-3">
                                           
                                            <textarea id="msg" class="form-control" name="mota">Dán vô đây để up ảnh :v</textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <input type="file" class="form-control" style="width: 20%;" placeholder="PG Image" name="files[]" id="files[]">
                                    </div>
                                    
                                    <b onclick="upanh1()">[UP ẢNH]</b>
                                    
                                   <div id="thongbao"></div> 

                                  

                                </form>

                         
                               
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>

</div>