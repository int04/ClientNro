<div class="content-wrapper">

    <?php
    if (isset($_POST['serial'])) {
        $serial = isset($_POST['serial']) ? $_POST['serial'] : '';
        $mathe = isset($_POST['mathe']) ? $_POST['mathe'] : '';
        $menhgia = isset($_POST['menhgia']) ? $_POST['menhgia'] : '';
        $nhamang = isset($_POST['nhamang']) ? $_POST['nhamang'] : '';
        $mysqli->query("INSERT INTO `thegame` SET `serial` = '" . $serial . "', `nhamang` = '" . $nhamang . "', `mathe` = '" . $mathe . "', `menhgia` = '" . $_POST['menhgia'] . "' ");
        echo thongbao('Thêm thẻ cào thành công', 'thanhcong');
    }

    if(isset($_GET['xoa']))
    {
        $mysqli->query("DELETE FROM `thegame` WHERE `id` = '".$_GET['xoa']."'");
        echo thongbao('Xoá thành công','thanhcong');
    }
    $where = '';

    $p = '';
    if (isset($_GET['id'])) {
        $where = ' AND `mathe` = \'' . $_GET['id'] . '\' or `serial` = \'' . $_GET['id'] . '\' or `menhgia` = \'' . $_GET['id'] . '\' or `nhamang` = \'' . $_GET['id'] . '\' ';
    }
    if (isset($_POST['id'])) {
        $where = 'AND  `mathe` = \'' . $_POST['id'] . '\' or `serial` = \'' . $_POST['id'] . '\' or `menhgia` = \'' . $_POST['id'] . '\' or `nhamang` = \'' . $_POST['id'] . '\'';
    }
    $ng = $mysqli->query("SELECT * FROM `thegame`  WHERE `uid` <=0 $where   ORDER by id DESC LIMIT $start, $kmess");
    $trang = '';

    if ($mysqli->query("SELECT * FROM `thegame` WHERE `uid` <= 0 $where ")->num_rows > $kmess) {
        $trang = '<center>' . trang('/admin/index.php?f=thechuadung' . $p . '&', $start, $mysqli->query("SELECT * FROM `thegame` $where ")->num_rows, $kmess) . '</center>';
    }
    $table = '';
    while ($m = $ng->fetch_assoc()) {
        $c = new users($m['uid']);
        $table .= '<tr><td>' . $m['serial'] . '</td> <td>' . $m['mathe'] . '</td> <td>' . $m['nhamang'] . '</td> <td>' . $m['menhgia'] . '</td> <td><a href="/admin/index.php?f=thechuadung&xoa=' . $m['id'] . '">XOÁ THẺ</a></td></tr>';
    }
    ?>
   
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Danh sách thẻ cào chưa dùng</h4>
                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=thechuadung" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="Tìm gì cũng đc">
                    </div><button type="submit" class="btn btn-gradient-primary mb-2">Tìm kiếm</button>
                </form>
                </p>

                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=thechuadung" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Serial thẻ</div>
                        </div>
                        <input type="text" class="form-control" name="serial" id="inlineFormInputGroupUsername2" placeholder="">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Mã</div>
                        </div>
                        <input type="text" class="form-control" name="mathe" id="inlineFormInputGroupUsername2" placeholder="">
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Nhà mạng</div>
                        </div>
                        <select lass="form-control" name="nhamang">
                            <option value="garena">Garena</option>
                            <option value="carot">Carot</option>
                        </select>
                    </div>

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Mệnh giá</div>
                        </div>
                        <select lass="form-control" name="menhgia">
                            <option value="10000">10k</option>
                            <option value="20000">20k</option>
                            <option value="50000">50k</option>
                            <option value="100000">100k</option>
                            <option value="200000">500k</option>
                        </select>
                    </div>


                    <button type="submit" class="btn btn-gradient-primary mb-2">Thêm thẻ</button>
                </form>
                </p>

                <div class="table-responsive">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Serial thẻ</th>
                                <th> Mã thẻ </th>
                                <th> Nhà mạng </th>
                                <th> Mệnh giá </th>
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