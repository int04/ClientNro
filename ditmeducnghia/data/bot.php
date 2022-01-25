<div class="content-wrapper">

    <?php

    if(isset($_GET['xoa']))
    {
        if($mysqli->query("SELECT * FROM `bot` WHERE `id` = '".$_GET['xoa']."'")->num_rows <=0)
        {
            echo thongbao('Không tồn tại BOT này.','loi');
        }
        else
        {
            $mysqli->query("DELETE FROM `bot` WHERE `id` = '".$_GET['xoa']."'");
            echo thongbao('Xoá bot thành công','thanhcong');
        }
    }

    if(isset($_POST['id']))
    {
        if($mysqli->query("SELECT * FROM `nguoichoi` WHERE `id` = '".$_POST['id']."' or `taikhoan` = '".$_POST['id']."'")->num_rows <=0)
        {
            echo thongbao('không tồn tại tài khoản này. Vui lòng kiểm tra lại ID or tên tài khoản.','loi');
        }
        else
        {
            $k = $mysqli->query("SELECT * FROM `nguoichoi` WHERE `id` = '".$_POST['id']."' or `taikhoan` = '".$_POST['id']."'")->fetch_assoc();
            if($mysqli->query("SELECT * FROM `bot` WHERE `uid` = '".$k['id']."'")->num_rows >=1)
            {
                echo thongbao('Tài khoản BOT này đã tồn tại rùi','loi');
            }
            else
            {
                $mysqli->query("INSERT INTO `bot` SET `uid` = '".$k['id']."'");
            }
        }
    }

    $where = '';

    $p = '';
 
    $ng = $mysqli->query("SELECT * FROM `bot`    ORDER by id DESC LIMIT $start, $kmess");
    $trang = '';

    if ($mysqli->query("SELECT * FROM `bot`  ")->num_rows > $kmess) {
        $trang = '<center>' . trang('/admin/index.php?f=bot' . $p . '&', $start, $mysqli->query("SELECT * FROM `bot`  ")->num_rows, $kmess) . '</center>';
    }
    $table = '';
    while ($m = $ng->fetch_assoc()) {
        $c = new users($m['uid']);
        $table .= '<tr><td>' . $c->id . '</td> <td>' . $c->name() . '</td>   <td>' . number_format($c->xu) . '</td> <td>' . number_format($c->lailo()) . '</td> <td><a href="/admin/index.php?f=bot&xoa='.$m['id'].'">XOÁ</a></td>  </tr>';
    }
    ?>

    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Danh sách BOT</h4>
                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=bot" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="Nhập id hoặc tên TK">
                    </div><button type="submit" class="btn btn-gradient-primary mb-2">Thêm</button>
                </form>
                </p>
                <div class="table-responsive">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID BOT</th>
                                <th> Người chơi </th>
                                <th> Xu có </th>
                                <th> Lãi lỗ </th>
                                <th> Hành động </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?= $table ?>
                        </tbody>
                    </table>
                    <?= $trang ?>
                </div>
            </div>
        </div>
    </div>
</div>