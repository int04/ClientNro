let xulyonline = function(data)
{
    $("#TotalOnline").html((data.online + data.list.length));
    $(document).ready(function() {

    $('#example').DataTable( {
        data: data.list,
        paging: false,
        destroy: true,
        search : false,
        columns: [
            { data: "id", title : "id" },
            { data: "username", title : "Tên TK" },
            { data: "name", title : "Tên NV" },
            { data: "vang", title : "Vàng" },
        ]
    } );
});
}
let load_index  = function(data)
{
    if(!data)
    {
        dn.to({
            admin : {
                home : {
                    index : true,
                }
            }
        })
        return false
    }
    
    let html =`<div class="pcoded-inner-content">
    <div class="main-body">
    <div class="page-wrapper">
    <div class="page-body">
    
    <div class="row">
    
    <div class="col-md-12 col-xl-8">
    <div class="card sale-card">
    <div class="card-header">
    <h5>Online (<b id="TotalOnline">0</b>)</h5>
    </div>
    <div class="card-block">
    <table id="example" class="display" width="100%"></table>
    </div>
    </div>
    </div>
    <div class="col-md-12 col-xl-4">
    <div class="card comp-card">
    <div class="card-body">
    <div class="row align-items-center">
    <div class="col">
    <h6 class="m-b-25">Thẻ siêu rẻ</h6>
    <h3 class="f-w-700 text-c-blue" id="thesieure">0</h3>
    </div>
    <div class="col-auto">
    <i class="fas fa-eye bg-c-blue"></i>
    </div>
     </div>
    </div>
    </div>
    <div class="card comp-card">
    <div class="card-body">
    <div class="row align-items-center">
    <div class="col">
    <h6 class="m-b-25">Vàng nạp hôm nay</h6>
    <h3 class="f-w-700 text-c-blue" id="vang_nap">0</h3>
    </div>
    <div class="col-auto">
    <i class="fas fa-eye bg-c-blue"></i>
    </div>
     </div>
    </div>
    </div>
    <div class="card comp-card">
    <div class="card-body">
    <div class="row align-items-center">
    <div class="col">
    <h6 class="m-b-25">Thẻ cào hôm nay</h6>
    <h3 class="f-w-700 text-c-blue" id="card_nap">0</h3>
    </div>
    <div class="col-auto">
    <i class="fas fa-bullseye bg-c-green"></i>
    </div>
    </div>
    </div>
    </div>

    <div class="card comp-card">
    <div class="card-body">
    <div class="row align-items-center">
    <div class="col">
    <h6 class="m-b-25">Vàng rút</h6>
    <h3 class="f-w-700 text-c-yellow" id="vang_rut">0</h3>
    </div>
    <div class="col-auto">
    <i class="fas fa-hand-paper bg-c-yellow"></i>
    </div>
    </div>
    </div>
    </div>

    <div class="card comp-card">
    <div class="card-body">
    <div class="row align-items-center">
    <div class="col">
    <h6 class="m-b-25">Nạp MoMo</h6>
    <h3 class="f-w-700 text-c-yellow" id="momo_nap">0</h3>
    </div>
    <div class="col-auto">
    <i class="fas fa-hand-paper bg-c-yellow"></i>
    </div>
    </div>
    </div>
    </div>

    </div>
    
    
    <div class="col-xl-12">
    <div class="card proj-progress-card">
    <div class="card-block">
    <div class="row">
    <div class="col-xl-3 col-md-6">
    <h6>Vàng nạp tháng này</h6>
    <h5 class="m-b-30 f-w-700" id="vangnap_thang">532</h5>
    
    </div>
    <div class="col-xl-3 col-md-6">
    <h6>Vàng rút tháng này</h6>
    <h5 class="m-b-30 f-w-700" id="vangrut_thang">0</h5>
    </div>
    <div class="col-xl-3 col-md-6">
    <h6>Thẻ siêu rẻ tháng</h6>
    <h5 class="m-b-30 f-w-700" id="thesieure_thang">0</h5>
    </div>
    <div class="col-xl-3 col-md-6">
    <h6>MoMo tháng</h6>
    <h5 class="m-b-30 f-w-700" id="momo_thang">0</h5>
    
    </div>

    <div class="col-xl-3 col-md-6">
    <h6>Nạp card tháng</h6>
    <h5 class="m-b-30 f-w-700" id="napcard_thang">0</h5>
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    </div>
    </div>`;
    $("#ducnghia").html(html);
    numanimate_2($('#vang_nap'), data.vang_nap, 17);
    numanimate_2($('#thesieure'), data.thesieure, 17);
    numanimate_2($('#card_nap'), data.card_nap, 17);
    numanimate_2($('#vang_rut'), data.vang_rut, 17);
    numanimate_2($('#momo_nap'), data.momo_nap, 17);

    numanimate_2($('#vangnap_thang'), data.vang_napthang, 17);
    numanimate_2($('#thesieure_thang'), data.thesieurethang, 17);
    numanimate_2($('#napcard_thang'), data.card_napthang, 17);
    numanimate_2($('#vangrut_thang'), data.vang_rutthang, 17);
    numanimate_2($('#momo_thang'), data.momo_napthang, 17);
}