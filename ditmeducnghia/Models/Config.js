let editor_config = function(data)
{
    let html = `<script src="js/tinymce/tinymce.min.js" crossorigin="anonymous" referrerpolicy="no-referrer" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>`;
    html+=`<div class="pcoded-inner-content">

    <div class="main-body">
    <div class="page-wrapper">
    
    <div class="page-body">
     <div class="row">
    <div class="col-sm-12">
    
    <div class="card">
    <div class="card-header">
    <h5>`+data.title+`</h5>
    </div>
    <span id="ghichu">`+data.ghichu+`</span>


    <div class="card-block table-border-style">
<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>Tên</th>
<th>Tên hiển thị</th>
<th>Giá trị</th>
</tr>
</thead>
<tbody id="bot">

</tbody>
</table>
</div>
</div>
    
    
   
    
    
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
    
    data.list.forEach(e => {
        $("#bot").append(`
        <tr> <td>`+e.display+`</td> <td><input type="text" name="name_`+e.id+`" id="name_`+e.id+`" class="form-control" value="`+e.name+`"></td> <td>`+(e.id == 31 ? `<textarea name="data_`+e.id+`" id="data_`+e.id+`" class="form-control">`+e.data+`</textarea>` : `<input type="text" name="data_`+e.id+`" id="data_`+e.id+`" class="form-control" value="`+e.data+`">`)+` </td>  <td><button class="btn btn-success" onclick="edit_edit(`+e.id+`)">Chỉnh sửa</button></td> </tr>
        `);
        
    });

    $("#ducnghia").append(`<script>
                                           
    tinymce.init({
        selector: "textarea#data_31,textarea#huongdan_ngocrong,textarea#huongdan_baucua,textarea#huongdan_chanle,textarea#thongbaopop",
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

let edit_edit = function(id)
{
    let name = $("#name_"+id).val();
    let data = $("#data_"+id).val();
    if(id == 31) {
        var myContent = tinymce.activeEditor.getContent();
        data = myContent;
        
    }
    loading();
    dn.to({
        admin : {
            log : {
                edit : {
                    id : id,
                    name : name,
                    data : data,
                }
            }
        }
    })
}


let cauhinhnap = function(data)
{
    let html = ``;
    html+=`<div class="pcoded-inner-content">

    <div class="main-body">
    <div class="page-wrapper">
    
    <div class="page-body">
     <div class="row">
    <div class="col-sm-12">
    
    <div class="card">
    <div class="card-header">
    <h5>Cấu hình nạp</h5>
    </div>
    <span id="ghichu">Cấu hình nạp mỗi máy chủ</span>


    <div class="card-block table-border-style">
<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>Server</th>
<th>Giá card</th>
<th>Giá ATM</th>

</tr>
</thead>
<tbody id="bot">

</tbody>
</table>
</div>
</div>
    
    
   
    
    
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
    
    data.list.forEach(e => {
        $("#bot").append(`
        <tr> <td>`+e.server+`</td> <td><input type="text" name="card_`+e.id+`" id="card_`+e.id+`" class="form-control" value="`+e.card+`"></td> <td><input type="text" name="atm_`+e.id+`" id="atm_`+e.id+`" class="form-control" value="`+e.atm+`"></td>  <td><button class="btn btn-success" onclick="editgame(`+e.id+`)">Chỉnh sửa</button></td> </tr>
        `);
        
    });

    $("#ducnghia").append(`<script>
                                           
    tinymce.init({
        selector: "textarea#data_31,textarea#huongdan_ngocrong,textarea#huongdan_baucua,textarea#huongdan_chanle,textarea#thongbaopop",
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

let editgame = function(id)
{
    let card = $("#card_"+id).val();
    let atm = $("#atm_"+id).val();
    loading();
    dn.to({
        admin : {
            log : {
                confgi_gia : {
                    id : id,
                    card : card,
                    atm : atm,
                }
            }
        }
    })
}