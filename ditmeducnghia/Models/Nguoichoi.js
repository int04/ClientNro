let load_nguoichoi_ban = function(data)
{
    if(!data)
    {
        dn.to({
            admin : 
            {
                home : {
                    nguoichoi_ban : true,
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
    <h5>Danh sách nick bị khoá</h5>
    </div>
    <table id="nguoichoi" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#nguoichoi').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "id" },
            { data: "username", title : "Tài khoản" },
            { data: "name", title : "Nhân vật" },
            { data: "thamgia", title : "Ngày ĐK" },
            { data: "vang2", title : "Vàng" },
            { data: "vang", title : "Vàng FORMAT" },
            {data : 'action', title : 'Hành động'}
        ],
        
        
    } );

}

let findusers = function()
{
    loading();
    let search = $("#tukhoa").val();
    dn.to({
        admin : {
            home : {
                nguoichoi : {
                    text : search,
                }
            }
        }
    })
}
let load_nguoichoi = function(data)
{
    if(!data)
    {
        dn.to({
            admin : 
            {
                home : {
                    nguoichoi : true,
                }
            }
        })
        return false;
    }
    let html = ``;
    html+=`<div class="pcoded-inner-content">

    <div class="main-body">
    <div class="page-wrapper">
    
    <div class="page-body">
     <div class="row">
    <div class="col-sm-12">
    
    <div class="card">
    <div class="card-header">
    <h5>Tìm kiếm người chơi</h5>
    <span>Bạn có thể nhập ID, tài khoản, name, để tìm kiếm người chơi</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Từ khóa</label>
    <div class="col-sm-10">
    <input type="text" id="tukhoa" class="form-control" value="1">
    </div>
    </div>

    <button onclick="findusers()" class="btn btn-success">Search</button>
    
    
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
    html += `<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    <div class="card">
    <div class="card-header">
    <h5>Danh sách người chơi</h5>
    </div>
    <table id="nguoichoi" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#nguoichoi').DataTable( {
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "id" },
            { data: "username", title : "Tài khoản" },
            { data: "name", title : "Nhân vật" },
            { data: "vang", title : "Vàng" },
            { data: "taixiu_thang", title : "Tx thắng" },
            { data: "taixiu_thua", title : "Tx thua" },
            { data: "cltx_thang", title : "CL thắng" },
            { data: "cltx_thua", title : "CL thua" },
            {data : 'action', title : 'Hành động'}
        ],
        
        
    } );

}

function ban(id)
{
    loading();
    dn.to({
        admin : {
            home : {
                ban : {
                    id : id
                }
            }
        }
    })
}