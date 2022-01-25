let log_giftcode = function(data)
{
    let html = ``;
    html+= `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách sử dụng giftcode</h5>
    </div>
    <table id="giftcode" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#giftcode').DataTable( {
        order:[[0,"DESC"]],
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            {data : "thoigian", title : "Thời gian"},
            {data : "uid", title : "Người dùng"},
            { data: "text", title : "Mã" },
            { data: "value", title : "Trị giá" },
        ],
        
        
    } );

}





let xoa_giftcode = function(id)
{
    loading();
    dn.to({
        admin : {
            log : {
                DELTEGIFT :
                {
                    id : id,
                }
            }
        }
    })
}
let taogift_code = function()
{
    let value = $("#value_giftcode").val();
    let soluong = $("#value_soluong").val();
    if(value <=0)
    {
        msg('Không hợp lệ');
    }
    else 
    if(soluong <=0)
    {
        msg('Số lượng không hợp lệ')
    }
    else 
    {
        loading();
        dn.to({
            admin : {
                log : {
                    taogfit : {
                        value : value,
                        soluong : soluong,
                    }
                }
            }
        })
    }
}
let loading_giftcode = function(data)
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
    <h5>Tạo mã quà tặng</h5>
    <span>Kéo xuống để xem danh sách giftcode</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Số lượng</label>
    <div class="col-sm-10">
    <input type="number" id="value_soluong" class="form-control" value="1">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Giá trị</label>
    <div class="col-sm-10">
    <input type="number" id="value_giftcode" class="form-control" value="0">
    </div>
    </div>
   
    <button onclick="taogift_code()" class="btn btn-success">Tạo</button>
    
    
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
    html+= `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách giftcode</h5>
    </div>
    <table id="giftcode" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#giftcode').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            { data: "text", title : "Mã" },
            { data: "value", title : "Trị giá" },
            { data: "action", title : "Hành động" },
        ],
        
        
    } );

}


let load_Napthecao = function(data)
{
    
    let html = `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách nạp thẻ cào</h5>
    </div>
    <table id="thesieurepay" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#thesieurepay').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            { data: "thoigian", title : "Thời gian" },
            { data: "code", title : "Mã yêu cầu" },
            { data: "uid", title : "UID" },
            { data: "code", title : "Mã thẻ" },
            { data: "seri", title : "Serial" },
            { data: "menhgia", title : "Mệnh giá" },
            { data: "vang", title : "Vàng nhận" },
            { data: "stt", title : "Trạng thái" },
        ],
        
        
    } );

}

let load_Napthesieure = function(data)
{
    
    let html = `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách nạp TSR</h5>
    </div>
    <table id="thesieurepay" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#thesieurepay').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            { data: "thoigian", title : "Thời gian" },
            { data: "magiaodich", title : "Mã giao dịch" },
            { data: "uid", title : "UID" },
            { data: "vnd", title : "Số tiền" },
            { data: "vang", title : "Vàng nhận" },
        ],
        
        
    } );

}

let load_napMoMo = function(data)
{
    
    let html = `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách nạp MOMo</h5>
    </div>
    <table id="paypaumomo" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#paypaumomo').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            { data: "thoigian", title : "Thời gian" },
            { data: "magiaodich", title : "Mã giao dịch" },
            { data: "uid", title : "UID" },
            { data: "vnd", title : "Số tiền" },
            { data: "vang", title : "Vàng nhận" },
        ],
        
        
    } );

}

let huydon_vang = function(id)
{
    loading();
    dn.to({
        admin : {
            log : {
                huyrutvang : {
                    id : id,
                }
            }
        }
    })
}
let load_rutvang = function(data)
{
    if(!data)
    {
        loading();
        dn.to({
            admin : 
            {
                log : {
                    rutvang : true,
                }
            }
        })
        return false;
    }
    let html = `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách rút vàng</h5>
    </div>
    <table id="rutvang" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#rutvang').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            { data: "thoigian", title : "Thời gian" },
            { data: "uid", title : "UID" },
            { data: "name", title : "Tên NV GD" },
            { data: "server", title : "Vũ trụ" },
            { data: "vangnhan", title : "Vàng GD" },
            { data: "vangrut", title : "Vàng web" },
            { data: "trangthai", title : "Hành động" },
        ],
        
        
    } );

}

let load_napvang = function(data)
{
    if(!data)
    {
        loading();
        dn.to({
            admin : 
            {
                log : {
                    napvang : true,
                }
            }
        })
        return false;
    }
    let html = `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách nạp vàng</h5>
    </div>
    <table id="napvang" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#napvang').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            { data: "thoigian", title : "Thời gian" },
            { data: "name_gd", title : "Tên GD" },
            { data: "vang_gd", title : "Vàng GD" },
            { data: "vangnhan", title : "Vàng Web" },
            { data: "server", title : "Vũ trụ" },
            { data: "UID", title : "UID nạp" },
            {data : "status" , title : "Trạng thái"},
            {data : "date" , title : "Ngày nạp"}
        ],
        
        
    } );

}

let tao_bot = function()
{
    loading();
    dn.to({
        admin : {
            log : {
                taobot : 
                {
                    name : $("#bot_name").val(),
                    server : $("#bot_server").val(),
                    khu : $("#bot_khu").val(),
                    type : $("#bot_type").val(),
                }
            }
        }
    })
}
let xoa_ac = function(id)
{
    loading();
    dn.to({
        admin : {
            log : {
                xoaac : {
                    id : id,
                }
            }
        }
    })

}
let acc = function(data)
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
    <h5>Tạo bot mới</h5>
    <span>Thêm bot vào mỗi server</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Tên</label>
    <div class="col-sm-10">
    <input type="text" id="bot_name" class="form-control" value="">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Khu</label>
    <div class="col-sm-10">
    <input type="number" id="bot_khu" class="form-control" value="1">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Máy chủ</label>
    <div class="col-sm-10">
    <input type="number" id="bot_server" class="form-control" value="0">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Loại</label>
    <div class="col-sm-10">
    <select id="bot_type" class="form-control"><option value="0">Nạp</option> <option value="1">Rút</option></select>
    </div>
    </div>
   
    <button onclick="tao_bot()" class="btn btn-success">Tạo</button>
    
    
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
    html+= `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách giftcode</h5>
    </div>
    <table id="giftcode" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#giftcode').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "name", title : "ID" },
            { data: "server", title : "Vũ trụ" },
            { data: "khu", title : "Khu" },
            { data: "type", title : "Loại" },
            { data: "action", title : "Hành động" },
        ],
        
        
    } );

}