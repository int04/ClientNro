<div class="content-wrapper">
    <?PHP

    if(isset($_POST['thoigian']))
    {
        $data = json_encode($_POST);
        $mysqli->query("UPDATE `socket` SET `data` = '".$data."'");
    }

    $caidat = $mysqli->query("SELECT * FROM `socket` LIMIT 1")->fetch_assoc();
    $data = json_decode($caidat['data'], true);

    ?>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Cài đặt tỉ lệ</h4>
                    <form name="dangki" action="/admin/index.php?f=trochoi" class="form pt-3" id="formlogin" method="post">

                        <div class="form-group">
                            <label>Thời gian chạy phiên (Bầu cua, tài xỉu)</label>
                            <div class="input-group mb-3">

                                <input type="number" class="form-control" value="<?= $data['thoigian'] ?>" aria-label="tieude" name="thoigian" aria-describedby="basic-addon11">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Thời gian chờ phiên (Bầu cua, tài xỉu)</label>
                            <div class="input-group mb-3">

                                <input type="number" class="form-control" value="<?= $data['cho'] ?>" aria-label="tieude" name="cho" aria-describedby="basic-addon11">
                            </div>
                        </div>


                        <div class="form-group">
                            <label>Tiền thắng mỗi ván (nhập 0 để tắt)</label>
                            <div class="input-group mb-3">

                                <input type="number" class="form-control" value="<?= $data['win'] ?>" aria-label="tieude" name="win" aria-describedby="basic-addon11">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Tỉ lệ bot cược</label>
                            <div class="input-group mb-3">

                                <input type="number" class="form-control" value="<?= $data['tile'] ?>" aria-label="tieude" name="tile" aria-describedby="basic-addon11">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Xu bot cược</label>
                            <div class="input-group mb-3">

                                <input type="number" class="form-control" value="<?= $data['xu'] ?>" aria-label="tieude" name="xu" aria-describedby="basic-addon11">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>BOT Tài xỉu</label>
                            <select name="taixiu" class="form-control">
                                <option value="0" <?= $data['taixiu'] <= 0 ? 'selected' : '' ?>>Bật</option>
                                <option value="1" <?= $data['taixiu'] >= 1 ? 'selected' : '' ?>>Tắt</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>BOT bầu cua</label>
                            <select name="baucua" class="form-control">
                                <option value="0" <?= $data['baucua'] <= 0 ? 'selected' : '' ?>>Bật</option>
                                <option value="1" <?= $data['baucua'] >= 1 ? 'selected' : '' ?>>Tắt</option>
                            </select>
                        </div>

                        
                      

                        

                        




                        <button name="dangki" type="submit" class="btn btn-success mr-2">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>