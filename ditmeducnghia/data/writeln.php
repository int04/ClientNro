<div class="content-wrapper">

<?PHP
if(isset($_POST['tieude']))
{
    $title = isset($_POST['tieude']) ? $_POST['tieude'] : '';
    $noidung = isset($_POST['noidung']) ? $_POST['noidung'] : '';
    $img = isset($_POST['img']) ? $_POST['img'] : '';
    $url = isset($_POST['url']) ? $_POST['url']: '';

    if(strlen($url) <=0)
    {
        echo thongbao('Vui lòng nhập địa chỉ','loi');
    }
    else
    if(strlen($noidung) <=0)
    {
        echo thongbao('vui lòng nhập nội dung','loi');
    }
    else
    {
        if(strlen($img) <=3) $img = '/lib/avatar/banner-vxx.gif';
        if(isset($_GET['id']))
        {
            $mysqli->query("UPDATE `blog` SET `title` = '".$title."', `noidung` = '".$noidung."', `img` = '".$img."', `url` = '".$url."' WHERE `id` = '".$_GET['id']."' ");
            echo thongbao('Chính sửa thành công','thanhcong');
        }
        else
        {
            $mysqli->query("INSERT INTO `blog` SET `title` = '".$title."', `noidung` = '".$noidung."', `img` = '".$img."', `url` = '".$url."', `thoigian` = '".$thoigian."', `uid` = '".$id."'");
            echo thongbao('Viết bài thành công','thanhcong');
        }
    }
}

$title = '';
$noidung = '';
$img = '';
$url = '';
if(isset($_GET['id']))
{
    $k = $mysqli->query("SELECT * FROM `blog` WHERE `id` = '".$_GET['id']."'");
    if($k->num_rows <=0)
    {
        echo thongbao('Bài viết không tồn tại','loi');
    }
    else
    {
        $c = $k->fetch_assoc();
        $title = $c['title'];
        $noidung = $c['noidung'];
        $img = $c['img'];
        $url  = $c['url'];
    }
}
?>

    <!-- Css -->
    <script src="/admin/assets/libs/tinymce/tinymce.min.js"></script>


    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Trổ tài làm nhà báo :v</h4>
                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=writeln<?=(isset($_GET['id']) ? '&id='.$_GET['id'].'' : '' )?>" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Tiêu đề bài viêt</div>
                        </div>
                        <input type="text" class="form-control" name="tieude" value="<?=$title?>" id="inlineFormInputGroupUsername2" placeholder="Tiêu đề bài viết">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">URL (abc-ddd)</div>
                        </div>
                        <input type="text" class="form-control" name="url" value="<?=$url?>" id="inlineFormInputGroupUsername2" placeholder="Link bài viết">
                    </div>
                    <br>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Hình ảnh thu nhỏ</div>
                        </div>
                        <input type="text" class="form-control" name="img" value="<?=$img?>" id="inlineFormInputGroupUsername2" placeholder="Hình ảnh thu nhỏ">
                    </div>
                    <br>
                       
                        <textarea name="noidung" id="huongdan_chanle" class="ckeditor"><?=$noidung?></textarea>

                    <br>

                    <button type="submit" class="btn btn-gradient-primary mb-2">Đăng bài</button>
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