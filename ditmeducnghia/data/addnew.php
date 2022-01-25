<div class="content-wrapper">

<?PHP
if(isset($_POST['uid']))
{
    $uid = $_POST['uid'];
    $max = $_POST['max'];
    $hoten = $_POST['hoten'];
    $facebook = $_POST['facebook'];
    $phone = $_POST['phone'];
    $mota = $_POST['mota'];
    if(empty($uid) or empty($max) or empty($hoten) or empty($facebook) or empty($phone) or empty($mota))
    {
        echo thongbao('Vui lòng nhập đầy đủ thông tin','loi');
    }
    else
    {
        if(isset($_GET['id']))
        {
           if($mysqli->query("SELECT `id` FROM `daily` WHERE `id` = '".$_GET['id']."'")->num_rows <=0)
           {
               echo thongbao('Không tồn tại đại lý này','loi');
           }
           else 
           {
               $mysqli->query("UPDATE `daily` SET `uid` = '".$uid."', `max` = '".$max."', `hoten` = '".$hoten."', `facebook` = '".$facebook."', `phone` = '".$phone."', `mota` = '".$mota."' WHERE `id` = '".$_GET['id']."' ");
               echo thongbao('Chính sửa thành công','thanhcong');
           }
        }
        else
        {
            if($mysqli->query("SELECT `id` FROM `nguoichoi` WHERE `id` = '".$uid."' LIMIT 1")->num_rows <=0)
            {
                echo thongbao('Không tồn tại ID này, vui lòng nhập chính xác số ID','loi');
            }
            else 
            if($mysqli->query("SELECT `id` FROM `daily` WHERE `uid` = '".$uid."' LIMIT 1")->num_rows >=1)
            {
                echo thongbao('Người chơi này đang là đại lý','loi');
            }
            else 
            {
                $mysqli->query("INSERT INTO `daily` SET `uid` = '".$uid."', `max` = '".$max."', `hoten` = '".$hoten."', `facebook` = '".$facebook."', `phone` = '".$phone."', `mota` = '".$mota."'");
                $mysqli->query("UPDATE `nguoichoi` SET `admin` = '2' WHERE `id` = '".$uid."'");
                echo thongbao('Thêm đại lý thành công','thanhcong');
            }
        }
    }
}

$uid = '';
$max = '';
$hoten = '';
$facebook = '';
$phone = '';
$mota = '';
if(isset($_GET['id']))
{
    $k = $mysqli->query("SELECT * FROM `daily` WHERE `id` = '".$_GET['id']."'");
    if($k->num_rows <=0)
    {
        echo thongbao('Không tồn tại đại lý này','loi');
    }
    else
    {
        $c = $k->fetch_assoc();
        $uid = $c['uid'];
        $max = $c['max'];
        $hoten = $c['hoten'];
        $facebook = $c['facebook'];
        $mota  = $c['mota'];
        $phone = $c['phone'];
    }
}
?>

    <!-- Css -->


    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Thêm đại lý mới</h4>
                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=addnew<?=(isset($_GET['id']) ? '&id='.$_GET['id'].'' : '' )?>" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">ID tài khoản (SỐ)</div>
                        </div>
                        <input type="text" class="form-control" name="uid" value="<?=$uid?>" id="inlineFormInputGroupUsername2" placeholder="ID TÀI KHOẢN">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Giao dịch MAX (xu)</div>
                        </div>
                        <input type="number" class="form-control" name="max" value="<?=$max?>" id="inlineFormInputGroupUsername2" placeholder="max 1 lần giao dịch">
                    </div>
                    <br>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Họ tên</div>
                        </div>
                        <input type="text" class="form-control" name="hoten" value="<?=$hoten?>" id="inlineFormInputGroupUsername2" placeholder="">
                    </div>
                    <br>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Facebook</div>
                        </div>
                        <input type="text" class="form-control" name="facebook" value="<?=$facebook?>" id="inlineFormInputGroupUsername2" placeholder="">
                    </div>
                    <br>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Phone</div>
                        </div>
                        <input type="text" class="form-control" name="phone" value="<?=$phone?>" id="inlineFormInputGroupUsername2" placeholder="">
                    </div>
                    <br>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Mô tả</div>
                        </div>
                        <input type="text" class="form-control" name="mota" value="<?=$mota?>" id="inlineFormInputGroupUsername2" placeholder="">
                    </div>
                    <br>
                       

                    <br>

                    <button type="submit" class="btn btn-gradient-primary mb-2">Thêm/sửa</button>
                </form>
                </p>

            </div>
        </div>
    </div>
</div>

<script>
    tinymce.init({
        selector: "textarea#edit_thongbao,textarea#huongdan_ngocrong,textarea#huongdan_baucua,textarea#huongdan_chanle",
        theme: "modern",
        height: 50,
        width: 'auto',
        plugins: [
            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "save table contextmenu directionality emoticons template paste textcolor"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",

    });
</script>