let csmm2424 = function(data)
{
    numanimate_2($('#csmm_time'), data.time, 17);
    numanimate_2($('#ketqua_csmm'), data.ketqua, 17);
    numanimate_2($('#cuoc_chan'), data.chan, 17);
    numanimate_2($('#cuoc_le'), data.le, 17);
    numanimate_2($('#cuoc_tai'), data.tai, 17);
    numanimate_2($('#cuoc_xiu'), data.xiu, 17);
    numanimate_2($('#ketqua_csmm'), data.ketqua, 17);
    let u = JSON.parse(data.users);
    $("#cuoc_csmm").html('')
    u.sort(function(a,b){
        return b.vangcuoc - a.vangcuoc;
    })
    u.forEach(e => {
        let font = 'black';
        if(e.cuoc == "chan" && data.ketqua%2 ==0) font = 'red';
        if(e.cuoc == "le" && data.ketqua%2 !=0) font = 'red';
        if(e.cuoc == "tai" && data.ketqua >=50) font = 'red';
        if(e.cuoc == "xiu" && data.ketqua <=49) font = 'red';
        $("#cuoc_csmm").append(`  <font color="`+font+`">`+e.name+`</font> (`+(e.cuoc == "chan" ? "Chẵn" : (e.cuoc == "le" ? "lẻ" : (e.cuoc == "tai" ? "tài" : "xỉu")))+`) - `+(e.vangcuoc)+` <br>  `);
    });
    
}

let chon  = function(id, type)
{
    dn.to({
        admin : {
            log : {
                chon : {
                    id : id,
                    type : type,
                }
            }
        }
    })
}
let kq = function()
{
    loading();
    dn.to({
        admin : {
            log : {
                input : {
                    value : $("#input").val()
                }
            }
        }
    })
}
let csmm = function(data)
{
    /*  */
    $("#tab_cuoc").html('');
    data.sort(function(a,b) {
        return b.server - a.server;
    })
    data.forEach(e => {
        $("#tab_cuoc").append(`
        <div class="col-sm-6">
         <div class="card"> 
            <div class="card-header"> 
                <h5>Máy chủ  `+e.server+`</h5> <br>
                - Phiên : <font color="#dc3545">`+e.id+`</font> <br>
                - Thời gian : <font color="#dc3545">`+e.time+`</font> <br>
                - Kết quả : <font color="#dc3545">`+e.ketqua+`</font> <br>
                - Chẵn : <font color="#dc3545">`+number_format(e.chan)+`</font> - Lẻ : <font color="#007bff">`+number_format(e.le)+`</font>  <br>
                - Tài : <font color="#dc3545">`+number_format(e.tai)+`</font> - Xỉu : <font color="#007bff">`+number_format(e.xiu)+`</font>

                <button onclick="chon(`+e.id+`,'tai')" class="btn btn-success">Tài</button> <button onclick="chon(`+e.id+`,'xiu')" class="btn btn-info">Xỉu</button> <button onclick="chon(`+e.id+`,'chan')" class="btn btn-danger">Chẵn</button>  <br>
                - 
            </div> 
            
            
            
            <div class="card-block table-border-style"> 
            <table id="cuoc_`+e.id+`" class="display table-responsive" width="100%"></table>

            </div> 
            </div> 
            </div>
        `);
        let u = JSON.parse(e.users);
        $('#cuoc_'+e.id+'').DataTable( {
            data: u.length > 0 ? u[0] : [],
            paging: false,
            destroy: true,
            columns: [
                { data: "name", title : "Tên NV" },
                { data: "vang", title : "Vàng có" },
                { data: "vangcuoc", title : "Vàng cược" },
                { data: "cuoc", title : "Của chọn" },
            ]
        } );
    });
}
let load_game = function()
{
    let html = ``;
    html+=`<div class="pcoded-inner-content">

    <div class="main-body">
    <div class="page-wrapper">
    
    <div class="page-body">
    Chọn KQ : <input type="number" id="input" class="form-control" value=""> <button class="btn btn-success" onclick="kq()">OK</button>
     <div class="row" id="tab_cuoc">

    

    
    
    
    
    </div>
    </div>
    </div>
    
    </div>
    </div>`;
    
    $("#ducnghia").html(html);
    
  

    
    
    
    

}