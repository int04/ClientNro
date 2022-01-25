let napxxu = function()
{
    let xu = $("#xu").val();
    let id = $("#uid").val();
    loading();
    dn.to({
        admin : {
            tool : {
                nap : {
                    xu  : xu,
                    id : id,
                }
            }
        }
    })
}
let napxu = function(data)
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
    <h5>NẠP XU</h5>
    <span>NHẬP UID VÀ SỐ XU MUỐN NẠP, KHI NẠP NGCHOI SẼ TĂNG TOP, VIP</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">UID NẠP</label>
    <div class="col-sm-10">
    <input type="text" id="uid" class="form-control" value="">
    </div>
    </div>

    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Số xu</label>
    <div class="col-sm-10">
    <input type="text" id="xu" class="form-control" value="">
    </div>
    </div>
    


   
    <button onclick="napxxu()" class="btn btn-success">NẠP NGAY</button>
    
    
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
    
    
    

}

let taobotnow = function()
{
    let name = $("#uid").val();
    if(name.length <=4)
    {
        msg('Tên lớn hơn 4 kí tự');
    }
    else
    {
        loading();
        dn.to({
            admin : {
                log : {
                    taobotnow : {
                        name : name,
                    }
                }
            }
        })
    }
}
let load_bot = function(data)
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
    <h5>TẠO BOT</h5>
    <span>Nhập tên nhân vật, admin sẽ tạo BOT cho bạn</span>
    </div>
    <div class="card-block">
    <div class="form-group row">
    <label class="col-sm-2 col-form-label">Tên nhân vật</label>
    <div class="col-sm-10">
    <input type="text" id="uid" class="form-control" value="">
    </div>
    </div>
    


   
    <button onclick="taobotnow()" class="btn btn-success">TẠO BÓT</button>
    
    
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
    <h5>Danh sách BOT đã tạo </h5>
    </div>
    <table id="crefbot" class="display table-responsive" width="100%"></table>
    </div>

    </div>

    </div>

    </div>
    
    </div>
    `;
    $("#ducnghia").html(html);
    
    
    $('#crefbot').DataTable( {
        order:[[0,"DESC"]],
        data: data.list,
        paging: true,
        destroy: true,
        columns: [
            { data: "id", title : "ID" },
            {data : "uid", title : "UID"},
            {data : "name", title : "tên hiển thị"},
            { data: "action", title : "Hành động" },

        ],
        
        
    } );

}