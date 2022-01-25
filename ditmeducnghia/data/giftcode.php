<div class="content-wrapper">

    <?php
    if(isset($_GET['xoa']))
    {
        $mysqli->query("DELETE FROM `giftcode` WHERE `id` = '".$_GET['xoa']."'");
    }
    if(isset($_POST['xu']))
    {
        $xu = (int) $_POST['xu'];
        $sl = (int) $_POST['soluong'];

        $i = 0;
        while($i < $sl)
        {
            $code = random(3).'D-'.random(2).'UC-'.random(4).'-'.random(1);
            $mysqli->query("INSERT INTO `giftcode` SET `uid` = '".$id."', `xu` = '".$xu."', `thoigian` = '".$thoigian."', `text` = '".$code."'");
            $i++;
        }
        echo thongbao('Tạo thành công '.$sl.' mã code ','thanhcong');
    }
    $ng = $mysqli->query("SELECT * FROM `giftcode`     ORDER by id DESC LIMIT $start, $kmess");
    $trang = '';

    if ($mysqli->query("SELECT * FROM `giftcode`")->num_rows > $kmess) {
        $trang = '<center>' . trang('/admin/index.php?f=giftcode' . $p . '&', $start, $mysqli->query("SELECT * FROM `giftcode` ")->num_rows, $kmess) . '</center>';
    }
    $table = '';
    while ($m = $ng->fetch_assoc()) {
        $c = new users($m['uid']);
        $table .= '<tr><td>' . thoigian($m['thoigian']) . '</td>  <td>' . ($m['text']) . '  </td> <td>' . number_format($m['xu']) . '</td>  <td>' . $c->name() . ' <a href="/admin/index.php?f=giftcode&xoa='.$m['id'].'"><button class="btn btn-success">Xoá</button></a></td>  </tr>';
    }
    ?>

    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Mã quà tặng</h4>
                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=giftcode" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">xu</div>
                        </div>
                        <input type="number" value="0" class="form-control" name="xu" id="inlineFormInputGroupUsername2" placeholder="Nhập xu">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Số lượng</div>
                        </div>
                        <input type="number" value="1" class="form-control" name="soluong" id="inlineFormInputGroupUsername2" placeholder="Nhập số lượng tạo">
                    </div>
                    
                    <button type="submit" class="btn btn-gradient-primary mb-2">Tạo ngay</button>
                </form>
                </p>
                <div class="table-responsive">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Thời gian</th>
                                <th> Mã </th>
                                <th> Giá trị </th>
                                <th> Người tạo </th>
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