<?PHP
$title = 'ducnghia';
if(isset($_GET['close']))
{
    $mysqli->query("UPDATE `hotro` SET `status` ='3' WHERE `id` = '".$_GET['id']."'");
}
if(isset($_GET['success']))
{
    $mysqli->query("UPDATE `hotro` SET `status` ='2' WHERE `id` = '".$_GET['id']."'");
}
$hotro = $mysqli->query("SELECT * FROM `hotro` WHERE  `id` = '".$_GET['id']."'")->fetch_assoc();
?>
<?= json($title) ?>

<?PHP 
if(isset($_POST['noidung']))
{
    $noidung =($_POST['noidung']);
    if($hotro['status'] ==3)
    {
        echo msg('Yêu cầu đã đóng, không thể trả lời','info');
    }
    else 
    if(empty($noidung))
    {
        echo msg('Bạn chưa nhập nội dung','info');
    }
    else 
    {
        $mysqli->query("UPDATE `hotro` SET `status` = '1', `doc` = '1', `time` = '".time()."', `rep` = '".$id."' WHERE `id` = '".$_GET['id']."'");
        $mysqli->query("INSERT INTO `hotro_rep` SET `text` = '".$noidung."', `uid` = '".$id."', `post` = '".$_GET['id']."', `time` = '".time()."'");
    }
}

?>
<div class="">
<div class="container padding-bottom-3x mb-2">
    <div class="row" style="padding: 40px;">
    <section class="panel">
    <div class="panel-body">
        
        <div class="col-lg-12">
            <div class="padding-top-2x mt-2 hidden-lg-up"></div>
            <div class="table-responsive margin-bottom-2x">
                <table class="table margin-bottom-none">
                    <thead>
                        <tr>
                            <th>Yêu cầu</th>
                            <th>Cập nhật</th>
                            <th>Loại</th>
                            <th>Trả lời</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#<?=number_format($hotro['id'])?> <a href="/admin/index.php?f=view&id=<?=$_GET['id']?>&close"><button>Đóng</button></a> <a href="/hotro/index.php?f=view&id=<?=$_GET['id']?>&success"><button>Đã giải quyết</button></a></td>
                            <td><?=thoigian($hotro['time'])?></td>
                            <td><?=$hotro['danhmuc']?></td>
                            <td><span class="text-warning"><?=(new users($hotro['uid']))->name()?></span></td>
                            <td><span class="text-primary"><?=hotro($hotro['status'])?></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <?PHP if($hotro['status'] !=3) { ?>
            <form method="post" action="/admin/index.php?f=view&id=<?=$_GET['id']?>">
                <div class="form-group">
                    <textarea name="noidung" class="form-control form-control-rounded" id="review_text" rows="8" placeholder="Nhập nội dung..." required=""></textarea>
                </div>
                <div class="text-right">
                    <button class="btn btn-outline-primary" type="submit">Gửi</button>
                </div>
            </form>
            <?PHP } else { ?>
            <center><font color="red">Yêu cầu đã đóng ! Không thể phản hồi.</font></center>
            <?PHP } ?>
            <!-- Messages-->
            
            
            <?PHP 
                         $log = $mysqli->query("SELECT * FROM `hotro_rep`  WHERE `post` = '".$_GET['id']."'   ORDER by `time` DESC LIMIT $start, $kmess");
                         while($sp = $log->fetch_assoc())
                        {
                            $i = new users($sp['uid']);
                            echo'
                            <div class="comment">
                <div class="comment-author-ava"><img src="'.$i->thongtin->avatar.'" alt="Avatar"></div>
                <div class="comment-body">
                    <p class="comment-text">'.nl2br($sp['text']).'</p>
                    <div class="comment-footer"><span class="comment-meta">'.$i->name().'</span></div>
                </div>
            </div>
                            ';
                        }

                         ?>
                        </tbody>
                    </table>
                    <?PHP 
                        if($mysqli->query("SELECT * FROM `hotro_rep` WHERE `post` = '".$_GET['id']."'  ")->num_rows > $kmess)
                        {
                            echo '<center>' . trang('/admin/index.php?f=view&id='.$_GET['id'].'&', $start, $mysqli->query("SELECT * FROM `hotro_rep` WHERE `post` = '".$_GET['id']."' ")->num_rows, $kmess) . '</center>';
                        }
                        ?>
            
        </div>
    </div>
    </section>
    </div>
</div>
</div>
<style> 
.user-info-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: -1px;
    padding-top: 90px;
    padding-bottom: 30px;
    border: 1px solid #e1e7ec;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    overflow: hidden
}

.user-info-wrapper .user-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-position: center;
    background-color: #f5f5f5;
    background-repeat: no-repeat;
    background-size: cover
}

.user-info-wrapper .user-cover .tooltip .tooltip-inner {
    width: 230px;
    max-width: 100%;
    padding: 10px 15px
}

.user-info-wrapper .info-label {
    display: block;
    position: absolute;
    top: 18px;
    right: 18px;
    height: 26px;
    padding: 0 12px;
    border-radius: 13px;
    background-color: #fff;
    color: #606975;
    font-size: 12px;
    line-height: 26px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.18);
    cursor: pointer
}

.user-info-wrapper .info-label>i {
    display: inline-block;
    margin-right: 3px;
    font-size: 1.2em;
    vertical-align: middle
}

.user-info-wrapper .user-info {
    display: table;
    position: relative;
    width: 100%;
    padding: 0 18px;
    z-index: 5
}

.user-info-wrapper .user-info .user-avatar,
.user-info-wrapper .user-info .user-data {
    display: table-cell;
    vertical-align: top
}

.user-info-wrapper .user-info .user-avatar {
    position: relative;
    width: 115px
}

.user-info-wrapper .user-info .user-avatar>img {
    display: block;
    width: 100%;
    border: 5px solid #fff;
    border-radius: 50%
}

.user-info-wrapper .user-info .user-avatar .edit-avatar {
    display: block;
    position: absolute;
    top: -2px;
    right: 2px;
    width: 36px;
    height: 36px;
    transition: opacity .3s;
    border-radius: 50%;
    background-color: #fff;
    color: #606975;
    line-height: 34px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    opacity: 0;
    text-align: center;
    text-decoration: none
}

.user-info-wrapper .user-info .user-avatar .edit-avatar::before {
    font-family: feather;
    font-size: 17px;
    content: '\e058'
}

.user-info-wrapper .user-info .user-avatar:hover .edit-avatar {
    opacity: 1
}

.user-info-wrapper .user-info .user-data {
    padding-top: 48px;
    padding-left: 12px
}

.user-info-wrapper .user-info .user-data h4 {
    margin-bottom: 2px
}

.user-info-wrapper .user-info .user-data span {
    display: block;
    color: #9da9b9;
    font-size: 13px
}

.user-info-wrapper+.list-group .list-group-item:first-child {
    border-radius: 0
}

.user-info-wrapper+.list-group .list-group-item:first-child {
    border-radius: 0;
}
.list-group-item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
}
.list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}
a.list-group-item {
    padding-top: .87rem;
    padding-bottom: .87rem;
}
a.list-group-item, .list-group-item-action {
    transition: all .25s;
    color: #606975;
    font-weight: 500;
}
.with-badge {
    position: relative;
    padding-right: 3.3rem;
}
.list-group-item {
    border-color: #e1e7ec;
    background-color: #fff;
    text-decoration: none;
}
.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.125);
}

.badge.badge-primary {
    background-color: #0da9ef;
}
.with-badge .badge {
    position: absolute;
    top: 50%;
    right: 1.15rem;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.list-group-item i {
    margin-top: -4px;
    margin-right: 8px;
    font-size: 1.1em;
}



.comment {
    display: block;
    position: relative;
    margin-bottom: 30px;
    padding-left: 66px
}

.comment .comment-author-ava {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    border-radius: 50%;
    overflow: hidden
}

.comment .comment-author-ava>img {
    display: block;
    width: 100%
}

.comment .comment-body {
    position: relative;
    padding: 24px;
    border: 1px solid #e1e7ec;
    border-radius: 7px;
    background-color: #fff
}

.comment .comment-body::after,
.comment .comment-body::before {
    position: absolute;
    top: 12px;
    right: 100%;
    width: 0;
    height: 0;
    border: solid transparent;
    content: '';
    pointer-events: none
}

.comment .comment-body::after {
    border-width: 9px;
    border-color: transparent;
    border-right-color: #fff
}

.comment .comment-body::before {
    margin-top: -1px;
    border-width: 10px;
    border-color: transparent;
    border-right-color: #e1e7ec
}

.comment .comment-title {
    margin-bottom: 8px;
    color: #606975;
    font-size: 14px;
    font-weight: 500
}

.comment .comment-text {
    margin-bottom: 12px
}

.comment .comment-footer {
    display: table;
    width: 100%
}

.comment .comment-footer>.column {
    display: table-cell;
    vertical-align: middle
}

.comment .comment-footer>.column:last-child {
    text-align: right
}

.comment .comment-meta {
    color: #9da9b9;
    font-size: 13px
}

.comment .reply-link {
    transition: color .3s;
    color: #606975;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .07em;
    text-transform: uppercase;
    text-decoration: none
}

.comment .reply-link>i {
    display: inline-block;
    margin-top: -3px;
    margin-right: 4px;
    vertical-align: middle
}

.comment .reply-link:hover {
    color: #0da9ef
}

.comment.comment-reply {
    margin-top: 30px;
    margin-bottom: 0
}

@media (max-width: 576px) {
    .comment {
        padding-left: 0
    }
    .comment .comment-author-ava {
        display: none
    }
    .comment .comment-body {
        padding: 15px
    }
    .comment .comment-body::before,
    .comment .comment-body::after {
        display: none
    }
}
</style>