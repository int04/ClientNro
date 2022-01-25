<div class="content-wrapper">

    <?php

    $where = '';

    $p = '';
    if (isset($_GET['id'])) {
        $where = 'WHERE `uid` = \'' . $_GET['id'] . '\' or  `phone` = \'' . $_GET['id'] . '\' or `code` = \'' . $_GET['id'] . '\' or `phone` = \'' . $_GET['id'] . '\' or `name` = \'' . $_GET['id'] . '\'  or `vnd` = \'' . $_GET['id'] . '\' or `xu` = \'' . $_GET['id'] . '\' ';
        $p = '&id=' . $_GET['id'] . '';
    }
    if (isset($_POST['id'])) {
        $where = 'WHERE `uid` = \'' . $_POST['id'] . '\' or  `phone` = \'' . $_POST['id'] . '\' or `code` = \'' . $_POST['id'] . '\' or `phone` = \'' . $_POST['id'] . '\' or `name` = \'' . $_POST['id'] . '\'  or `vnd` = \'' . $_POST['id'] . '\' or `xu` = \'' . $_POST['id'] . '\'';
        $p = '&id=' . $_POST['id'] . '';
    }
    $ng = $mysqli->query("SELECT * FROM `momo`  $where   ORDER by id DESC LIMIT $start, $kmess");
    $trang = '';

    if ($mysqli->query("SELECT * FROM `momo` $where ")->num_rows > $kmess) {
        $trang = '<center>' . trang('/admin/index.php?f=momo' . $p . '&', $start, $mysqli->query("SELECT * FROM `momo` $where ")->num_rows, $kmess) . '</center>';
    }
    $table = '';
    while ($m = $ng->fetch_assoc()) {
        $c = new users($m['uid']);
        $table .= '<tr><td>' . thoigian($m['thoigian']) . '</td> <td>' . $c->name() . '</td> <td>' . ($m['code']) . '</td>  <td>' . number_format($m['vnd']) . '</td> <td>' . ($m['phone']) . '</td> <td>' . ($m['name']) . '</td>  <td>' . number_format($m['xu']) . '</td></tr>';
    }
    ?>

    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Danh sách nạp thẻ Momo</h4>
                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=momo" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="Tìm gì cũng đc">
                    </div><button type="submit" class="btn btn-gradient-primary mb-2">Tìm kiếm</button>
                </form>
                </p>
                <div class="table-responsive">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Thời gian</th>
                                <th> Người chơi </th>
                                <th> Mã giao dịch </th>
                                <th> Số tiền </th>
                                <th> Số điện thoại </th>
                                <th> Họ tên </th>
                                <th> Xu nhận </th>
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