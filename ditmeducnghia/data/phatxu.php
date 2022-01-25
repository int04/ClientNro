<div class="content-wrapper">
<?PHP

if(isset($_POST['list']))
{
    $danhsach = isset($_POST['list']) ? $_POST['list'] : '';
    $xu = isset($_POST['xu']) ? (int)$_POST['xu'] : '';
    $loinhan = isset($_POST['loinhan']) ? $_POST['loinhan'] : '';

    foreach (explode(",",$danhsach) as $key => $name) {
        $ngchoi = $mysqli->query("SELECT * FROM `nguoichoi` WHERE `ten` = '".$name."' LIMIT 1");
        if($ngchoi->num_rows <=0)
        {
            echo thongbao('Người chơi '.$name.' không tồn tại ','loi');
        }
        else
        {
            $nguoichoi = $ngchoi->fetch_assoc();
            $k = new users($nguoichoi['id']);
            sodu($k->id,$k->xu,$xu,$loinhan);
            $k->upxu($xu);
            echo thongbao(' Cộng tiền thành công cho '.$k->name().' (TK. '.$k->taikhoan.') với lời nhắn <code>'.$loinhan.'</code>  ','thanhcong');
        }
    }
}

?>
<div class="row">
                    <!-- Column -->
                    <div class="col-lg-8 col-xl-9 col-md-9">
                        <div class="card">
                            <div class="card-body">
                        
                                <h4 class="card-title">Nạp xu</h4>
                                <form name="dangki" action="/admin/index.php?f=phatxu" class="form pt-3" id="formlogin" method="post">
                                   
                                    
                                  <div class="form-group">
                                        <label>TÊN NHÂN VẬT (cách nhau = dấy phẩy)</label>
                                        <div class="input-group mb-3">
                    
                                            <textarea class="form-control" name="list"></textarea>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="form-group">
                                        <label>Xu :</label>
                                        <div class="input-group mb-3">
                                           
                                            <input  type="number" class="form-control" value="0"  aria-label="tieude" name="xu" aria-describedby="basic-addon11">
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label>Lời nhắn</label>
                                        <div class="input-group mb-3">
                    
                                            <textarea class="form-control" name="loinhan"></textarea>
                                        </div>
                                    </div>
                                    
                                    
                                    

                                  

                                    <button name="dangki"  type="submit" class="btn btn-success mr-2">Triển</button>
                                </form>
                                <hr>
                                <b>Ghi chú :</b>
                                <br> - Xin nhập chính xác tên nhân vật
                                <br> - Có thể nhập nhiều tên nhân vật, cách nhau bằng dấu phẩy
                                <hr>
                               
                                <hr>
                               
                            </div>
                        </div>
                    </div>
                  
                    <!-- Column -->
                    <!-- Column -->
                    
                    <!-- Column -->
                </div>
</div>