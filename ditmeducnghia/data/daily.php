<div class="content-wrapper">

  <?php
  if(isset($_GET['xoa']))
  {
      $mysqli->query("DELETE FROM `daily` WHERE `id` = '".$_GET['xoa']."'");
      $mysqli->query("UPDATE `nguoichoi` SET `admin` = '0' WHERE `id` = '".$_GET['uid']."'");
      echo thongbao('Xoá đại lý thành công','thanhcong');
  }
  $where = '';

  $p = '';
  
  $ta = $mysqli->query("SHOW COLUMNS FROM daily");
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
  $ng = $mysqli->query("SELECT * FROM `daily`  $where   ORDER by id DESC LIMIT $start, $kmess");
  $trang = '';

  if ($mysqli->query("SELECT * FROM `daily` $where ")->num_rows > $kmess) {
    $trang = '<center>' . trang('/admin/index.php?f=daily' . $p . '&', $start, $mysqli->query("SELECT * FROM `daily` $where ")->num_rows, $kmess) . '</center>';
  }
  $table = '';
  while ($m = $ng->fetch_assoc()) {
    $c = new users($m['uid']);
    $table .= '<tr><td>' . $c->name() . ' - '.$c->id.'</td> <td>' . number_format($m['max']) . '</td> <td>'.$m['hoten'].'</td> <td>'.$m['facebook'].'</td> <td>'.$m['phone'].'</td> <td>'.$m['mota'].'</td>  <td><a href="/admin/index.php?f=daily&xoa='.$m['id'].'&uid='.$m['uid'].'"><button>Xoá</button></a> <a href="/admin/index.php?f=addnew&id='.$m['id'].'"><button>Sửa</button></a></td>   </tr>';
  }
  ?>

  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">DANH SÁCH ĐẠI LÝ</h4>
        <p class="card-description">
        <form class="form-inline" action="/admin/index.php?f=daily" method="post">

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
                <th> Tên&id đại lý </th>
                <th> Giao dịch max </th>

                <th> Họ tên </th>
                <th> Facebook </th>
                <th> Số điện thoại </th>
                <th> Mô tả </th>
                <th> Hành động</th>
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