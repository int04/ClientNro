<div class="content-wrapper">
<?PHP
    if(isset($_POST['thongbao']))
{
    foreach($_POST as $id => $data)
    {
        #
        $system->set($id,$data);
        
    }
    echo thongbao('Dữ liệu đã được lưu','thanhcong');
    $system = new hethong;
}

?>
                <script src="/admin/assets/libs/tinymce/tinymce.min.js"></script>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Cài đặt trang</h4>
                                <form name="dangki" action="/admin/index.php?f=trang" class="form pt-3" id="formlogin" method="post">
                                   
                                <div class="form-group">
                                        <label>Thông báo tải trang</label>
                                        <div class="input-group mb-3">
                                           
                                           <textarea name="thongbaopup" id="thongbaopop" class="ckeditor"><?=$system->data->thongbaopup?></textarea>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Thông báo trang chủ</label>
                                        <div class="input-group mb-3">
                                           
                                           <textarea name="thongbao" id="edit_thongbao" class="ckeditor"><?=$system->data->thongbao?></textarea>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Hưỡng dẫn Ngọc rồng</label>
                                        <div class="input-group mb-3">
                                           
                                           <textarea name="huongdan_ngocrong" id="huongdan_ngocrong" class="ckeditor"><?=$system->data->huongdan_ngocrong?></textarea>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Hưỡng dẫn Bầu cua</label>
                                        <div class="input-group mb-3">
                                           
                                           <textarea name="huongdan_baucua" id="huongdan_baucua" class="ckeditor"><?=$system->data->huongdan_baucua?></textarea>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Hưỡng dẫn Chẵn Lẻ</label>
                                        <div class="input-group mb-3">
                                           
                                           <textarea name="huongdan_chanle" id="huongdan_chanle" class="ckeditor"><?=$system->data->huongdan_chanle?></textarea>
                                        </div>
                                        
                                    </div>
                                    

<script>
                                           
            tinymce.init({
                selector: "textarea#edit_thongbao,textarea#huongdan_ngocrong,textarea#huongdan_baucua,textarea#huongdan_chanle,textarea#thongbaopop",
                theme: "modern",
                height: 50,
                width : 'auto',
                plugins: [
                    "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                    "save table contextmenu directionality emoticons template paste textcolor"
                ],
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",

            });
        
                                        </script>
                                  

                                    <button name="dangki"  type="submit" class="btn btn-success mr-2">Lưu</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
</div>