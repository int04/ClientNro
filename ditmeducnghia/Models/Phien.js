let search_load = function()
{
    let value = $("#tukhoa").val();
    let type = $("#type").val();
    if(type == "uid") 
    {
        loading();dn.to({admin : {log : {cuoc : {uid : value}}}});
    }
    else 
    if(type == "server")
    {
        loading();dn.to({admin : {log : {cuoc : {server : value}}}});
    }
    else 
    if(type == "phien")
    {
        loading();dn.to({admin : {log : {cuoc : {id : value}}}});
    }
    else 
    {
        loading();dn.to({admin : {log : {cuoc : {type : 0}}}});
    }

}
//$("#ducnghia_form").find("select, textarea, input").serialize()

let search_sodu = function()
{
    let start = $("#start").val();
    let end = $("#end").val();
    let uid = $("#uid").val();
    loading();
    dn.to({
        admin : {
            log : {
                lsgd : 
                {
                    uid : uid,
                    begin : start,
                    end : end,
                }
            }
        }
    })
}

let search_chuyentien = function()
{
    let start = $("#start").val();
    let end = $("#end").val();
    let uid = $("#uid").val();
    loading();
    dn.to({
        admin : {
            log : {
                chuyentien : 
                {
                    uid : uid,
                    begin : start,
                    end : end,
                }
            }
        }
    })
}

let load_chuyentien = function(data)
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
    <h5>Tìm kiếm</h5>
    <span>Nhập giá trị bạn muốn tìm kiếm</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">UID</label>
    <div class="col-sm-10">
    <input type="text" id="uid" class="form-control" value="">
    </div>
    </div>
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Bắt đầu</label>
    <div class="col-sm-10">
    <input type="date" class="form-control" id="start">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Kết thúc</label>
    <div class="col-sm-10">
    <input type="date" class="form-control" id="end">
    </div>
    </div>
   
    <button onclick="search_chuyentien()" class="btn btn-success">Tìm kiếm</button>
    
    
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
    <h5>Thông tin số dư UID <font color="red">`+data.uid+`</font> (từ `+data.start+` đến `+data.end+`) </h5>
    </div>
    <table id="phien_game" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#phien_game').DataTable( {
        order:[[0,"DESC"]],
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            {data : "thoigian", title : "Thời gian"},
            { data: "from", title : "UID gửi" },
            { data: "to", title : "UID nhận" },
            { data: "value", title : "Số tiền" },
            { data: "noidung", title : "Ghi chú" },
            {data : "tophi", title : "Phí chuyển"},
            {data : "phi",title :"%"}

        ],
        
        
    } );

}

let sodu = function(data)
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
    <h5>Tìm kiếm</h5>
    <span>Nhập giá trị bạn muốn tìm kiếm</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">UID</label>
    <div class="col-sm-10">
    <input type="text" id="uid" class="form-control" value="">
    </div>
    </div>
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Bắt đầu</label>
    <div class="col-sm-10">
    <input type="date" class="form-control" id="start">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Kết thúc</label>
    <div class="col-sm-10">
    <input type="date" class="form-control" id="end">
    </div>
    </div>
   
    <button onclick="search_sodu()" class="btn btn-success">Tìm kiếm</button>
    
    
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
    <h5>Thông tin số dư UID <font color="red">`+data.uid+`</font> (từ `+data.start+` đến `+data.end+`) </h5>
    </div>
    <table id="phien_game" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#phien_game').DataTable( {
        order:[[0,"DESC"]],
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            {data : "thoigian", title : "Thời gian"},
            { data: "uid", title : "UID" },
            { data: "xu", title : "Xu GD" },
            { data: "truoc", title : "Trước" },
            { data: "sau", title : "Sau" },
            {data : "noidung", title : "Ghi chú"},
            {data : "info",title :"Hành động"}

        ],
        
        
    } );

}

let load_cuoc = function(data)
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
    <h5>Tìm kiếm</h5>
    <span>Nhập giá trị bạn muốn tìm kiếm</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Từ khoá</label>
    <div class="col-sm-10">
    <input type="text" id="tukhoa" class="form-control" value="">
    </div>
    </div>
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Loại</label>
    <div class="col-sm-10">
    <select class="form-control" id="type">
        <option value="">Tất cả</option>
        <option value="server">Máy chủ</option>
        <option value="uid">UID</option>
        <option value="phien">Phiên</option>
    </select>
    </div>
    </div>
   
    <button onclick="search_load()" class="btn btn-success">Tìm kiếm</button>
    
    
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
    <h5>Danh sách cược <font color="red">`+data.type+`</font> </h5>
    </div>
    <table id="phien_game" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#phien_game').DataTable( {
        order:[[0,"DESC"]],
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            {data : "thoigian", title : "Thời gian"},
            { data: "phien", title : "Phiên" },
            { data: "uid", title : "UID cược" },
            {data : "server", title : "Máy chủ"},
            {data : "game", title : "Trò chơi"},
            {data : "dat", title : "Cửa chọn"},
            {data : "cuoc", title : "Tiền cược"},
            {data : "win", title : "Tiền thắng"},
            {data : "trangthai",title :"Trạng thái"}

        ],
        
        
    } );

}

let load_phien = function(data)
{
    let html = ``;
    html+= `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách phiên </h5>
    </div>
    <table id="phien_game" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#phien_game').DataTable( {
        order:[[0,"DESC"]],
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "phien", title : "Phiên" },
            {data : "thoigian", title : "Thời gian"},
            {data : "status", title : "Trạng thái"},
            { data: "ketqua", title : "Kết quả" },
            { data: "server", title : "máy chủ" },
            {data : "tienchoi", title : "Tiền cược"},
            {data : "tienthang", title : "tiền thắng"},
            {data : "chanle_cuoc", title  : "Tổng CL cược"},
            {data : "chanle_thang", title : "Tổng CL thắng"},
            {data : "chancuoc", title : "Chẵn Cược"},
            {data : "chanthang", title : "Chẵn thắng"},
            {data : "lecuoc", title : "Lẻ Cược"},
            {data : "lethang", title : "Lẻ thắng"},
            {data : "taixiu_cuoc", title : "Tổng TX cược"},
            {data : "taixiu_thang", title : "tổng TX Thắng"},
            {data : "taicuoc", title : "Tài Cược"},
            {data : "taithang", title : "Tài thắng"},
            {data : "xiucuoc", title : "Xỉu Cược"},
            {data : "xiuthang", title : "Xỉu thắng"},
        ],
        
        
    } );

}