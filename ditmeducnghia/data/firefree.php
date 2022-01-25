<div class="content-wrapper">

  <?php
  function coderut($e)
  {
    if ($e == 0) return '<font color="blue">ĐANG CHỜ</font>';
    else if ($e == 1) return '<font color="green">ĐÃ NẠP</font>';
    else  return '<font color="red">ĐÃ HUỶ</font>';
  }
  $where = '';

  $p = '';
  if (isset($_GET['action'])) {
    $action = isset($_GET['action']) ? $_GET['action'] : 0;
    $ma = isset($_GET['ma']) ? $_GET['ma'] : 0;

    if ($mysqli->query("SELECT * FROM `rutkimcuong` WHERE `id` = '" . $ma . "' AND `code` = '0'")->num_rows <= 0) {
      echo thongbao('Không tìm thấy đơn hàng này, có thể đơn hàng đã bị huỷ hoặc hoàn thành', 'loi');
    } else {
      if($action == 1)
      {
        echo thongbao('Hoàn tất đơn hàng thành công.', 'thanhcong');
        $mysqli->query("UPDATE `rutkimcuong` SET `code` = '1' WHERE `id` = '" . $ma . "'");
      }
      else
      {
        echo thongbao('Huỷ đơn hàng thành công.', 'thanhcong');
        $mysqli->query("UPDATE `rutkimcuong` SET `code` = '2' WHERE `id` = '" . $ma . "'");
      }
    }
  }
  $ta = $mysqli->query("SHOW COLUMNS FROM rutkimcuong");
  $select = '';
  $select2 = '';
  while($show = $ta->fetch_assoc())
  {
    if($show['Field'] != 'id')
    {
      $select.='or `'.$show['Field'].'` = \'' . $_GET['id'] . '\' ';
      $select2.='or `'.$show['Field'].'` = \'' . $_POST['id'] . '\' ';
    }
  }
  if (isset($_GET['id'])) {
    $where = 'WHERE `uid` = \'' . $_GET['id'] . '\' '.$select.' ';
    $p = '&id=' . $_GET['id'] . '';
  }
  if (isset($_POST['id'])) {
    $where = 'WHERE `uid` = \'' . $_POST['id'] . '\' '.$select2.'';
    $p = '&id=' . $_POST['id'] . '';
  }
  $ng = $mysqli->query("SELECT * FROM `rutkimcuong`  $where   ORDER by id DESC LIMIT $start, $kmess");
  $trang = '';

  if ($mysqli->query("SELECT * FROM `rutkimcuong` $where ")->num_rows > $kmess) {
    $trang = '<center>' . trang('/admin/index.php?f=firefree' . $p . '&', $start, $mysqli->query("SELECT * FROM `rutkimcuong` $where ")->num_rows, $kmess) . '</center>';
  }
  $table = '';
  while ($m = $ng->fetch_assoc()) {
    $c = new users($m['uid']);
    $table .= '<tr><td>' . $m['thoigian'] . '</td> <td>' . $c->name() . '</td> <td>' . $m['name'] . '</td> <td>' . number_format($m['xu']) . '</td>  <td>' . number_format($m['kimcuong']) . '</td> <td>' . coderut($m['code']) . '</td> <td><a href="/admin/index.php?f=firefree&action=1&ma=' . $m['id'] . '">[<font color="green">HOÀN THÀNH</font></a>] ||| <a href="/admin/index.php?f=firefree&action=0&ma=' . $m['id'] . '">[<font color="red">HUỶ ĐƠN</font></a>]</td> </tr>';
  }
  ?>

  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">DANH SÁCH RÚT FIREFREE</h4>
        <p class="card-description">
        <form class="form-inline" action="/admin/index.php?f=firefree" method="post">

          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input type="text" class="form-control" name="id" id="inlineFormInputGroupUsername2" placeholder="Tìm gì cũng được">
          </div><button type="submit" class="btn btn-gradient-primary mb-2">Tìm kiếm</button>
        </form>
        </p>
        <div class="table-responsive">

          <table class="table table-striped">
            <thead>
              <tr>
                <th>Thời gian</th>
                <th> Người rút </th>
                <th> ID </th>

                <th> xu rút </th>
                <th> Kim cương </th>
                <th> Trạng thái </th>
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