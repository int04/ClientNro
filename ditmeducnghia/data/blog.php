<div class="content-wrapper">

    <?php
    $trang = '';
    $ng = $mysqli->query("SELECT * FROM `blog`    ORDER by id DESC LIMIT $start, $kmess");
    if ($mysqli->query("SELECT * FROM `blog`  ")->num_rows > $kmess) {
        $trang = '<center>' . trang('/admin/index.php?f=blog&', $start, $mysqli->query("SELECT * FROM `blog`  ")->num_rows, $kmess) . '</center>';
    }
    $table = '';
    while ($m = $ng->fetch_assoc()) {
        $c = new users($m['uid']);
        $table .= '<tr><td>' . $m['url'] . '</td> <td>' . $m['title'] . '</td> <td><img src="' . $c->thongtin->avatar . '" width="30">' . $c->name() . '</td> <td><img src="' . $m['img'] . '"></td> <td><a href="/admin/index.php?f=writeln&id=' . $m['id'] . '">Chỉnh sửa</a></td> </tr>';
    }
    ?>

    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Danh sách người chơi</h4>
                <p class="card-description">
                <form class="form-inline" action="/admin/index.php?f=users" method="post">

                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="ID, tên, tài khoản">
                    </div><button type="submit" class="btn btn-gradient-primary mb-2">Tìm kiếm</button>
                </form>
                </p>
                <div class="table-responsive">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th> URL </th>
                                <th> Tiêu đề </th>
                                <th> Người Up </th>
                                <th> Img </th>
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