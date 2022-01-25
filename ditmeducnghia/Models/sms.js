
let load_sms = function(data)
{
    let html = ``;
    html+=`<script src="js/tinymce/tinymce.min.js" crossorigin="anonymous" referrerpolicy="no-referrer" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script><div class="pcoded-inner-content">

    <div class="main-body">
    <div class="page-wrapper">
    
    <div class="page-body">
     <div class="row">
    <div class="col-sm-12">
    
    <div class="card">
    <div class="card-header">
    <h5>Gửi tin nhắn</h5>
    <span>Nhập tin nhắn bạn muốn gửi tới các thành viên</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">UID (mỗi UID là 1 dấy, nhập 0 để gửi all)</label>
    <div class="col-sm-10">
    <input type="text" id="uid" class="form-control" value="">
    </div>
    </div>
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Tiêu đề</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="tieude">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Nội dung</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="noidung_sms">
    </div>
    </div>
   
    <button onclick="send_sms()" class="btn btn-success">Gửi</button>
    
    
    </div>
    </div>
    
    
    
    
    </div>
    </div>
    </div>
    
    </div>
    </div>
    
    <div id="styleSelector">
    </div>
    </div>`;
    
    $("#ducnghia").html(html);

    $("#ducnghia").append(`<script>
                                           
    tinymce.init({
        selector: "input#noidung_sms,textarea#huongdan_ngocrong,textarea#huongdan_baucua,textarea#huongdan_chanle,textarea#thongbaopop",
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

                                </script>`);
    
    
    
    
}

let send_sms = function()
{
    let tieude = $("#tieude").val();
    let uid = $("#uid").val();
    var myContent = tinymce.activeEditor.getContent();
    data = myContent;
    loading();
    dn.to({
        admin : {
            log : {
                sendsms : {
                    tieude : tieude,
                    noidung : data,
                    uid : uid,
                }
            }
        }
    })
}