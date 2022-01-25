let canvas_menu = function(menu)
{
    let array = [
        {
            name : 'Thông tin tài khoản',
            value : 'profile',
            onclick : 'loading();dn.to({users : {nguoichoi : { info : true}}})'
        },
        {
            name : 'Nạp xu',
            value : 'napvang',
            onclick : 'loading();dn.to({ users : { pay : { napvang : true } } });'
        },
        {
          name : 'Rút xu',
          value : 'rutvang',
          onclick : 'loading();dn.to({ users : { pay : { rutvang : true } } });'
      },
      {
        name : 'Lịch sử số dư',
        value : 'lichsu',
        onclick : 'loading();dn.to({ users : { lichsu : {sodu : { trang : 0 } }  } });'
    },
    {
      name : 'Lịch sử CSMM',
      value : 'csmm',
      onclick : 'loading();dn.to({ users : { lichsu : {csmm : { trang : 0 } }  } });'
  },
    {
      name : 'Check LSGD',
      value : 'lsgd',
      onclick : 'loading();dn.to({ users : { lichsu : {check : { trang : 0, id : 1 } }  } });'
  },
    {
      name : 'Mã quà tặng',
      value : 'giftcode',
      onclick : 'loading();dn.to({users : {giftcode : {index : {trang : 0}}}})'
    }
    ];
    let html = ``;
    array.forEach(c => {
        if(c.value == "lsgd")
        {
          if(admin >=1)
          {
            html+= `<a href="#" onclick="`+c.onclick+`" class="list-group-item list-group-item-action `+(menu == c.value ? 'active' : '')+`">`+c.name+`</a>`;
          }
        }
        else 
        {
          html+= `<a href="#" onclick="`+c.onclick+`" class="list-group-item list-group-item-action `+(menu == c.value ? 'active' : '')+`">`+c.name+`</a>`;
        }
        
    });
    return html;
}
let checksd = function(data)
{
    let html =  `
    <div class="row">
      <div class="col-lg-3">
        
  <style>
    @media (min-width: 1199.98px) { 
      .col-lg-3{
        padding-right: 0px;
      }
      .col-lg-9{
        padding-left: 10px;
      }
    }
  
    @media (max-width: 1199.98px) {
      .col-lg-9{
        margin-top: 25px; 
      }
    }
  
  </style><div class="list-group"> `+canvas_menu('lsgd')+` </div>    </div>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-header">
            <h5>LỊCH SỬ SỐ DƯ</h5>
          </div>
          <div class="card-body">
            <div class="row">
            <input class="form-control" id="uidcheck" value="`+data.uid+`"> <button class="btn btn-success" onclick="loading();dn.to({users : { lichsu : {check : {id : $('#uidcheck').val(),trang : 0}}}})">kiêm tra</button>
            <div class="table-responsive">
            <table class="table table-bordered table-response text-center table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Trước</th>
                  <th scope="col">Sau</th>
                  <th scope="col">Thay đổi</th>
                  <th scope="col">Ghi chú</th>
                  <th scope="col">Chi tiết</th>
                </tr>
              </thead>
              <tbody id="listserver">
                      </tbody>
            </table>
            <center id="phantrang"> </center>
          </div>
        </div>
  
            
          </div>
        </div>
      </div>
    </div>
    
    </div>
  `;
    $("#ducnghia").html(html);
    data.dulieu.forEach(e => {
      $("#listserver").append(`
        <tr>
          <td>`+e.thoigian+`</td>
          <td>`+number_format(e.truoc)+`</td>
          <td>`+number_format(e.sau)+`</td>
          <td><font color="`+(e.vang <= 0 ? 'red' : 'green')+`"> `+(e.vang <= 0 ? '' : '+')+` `+number_format(e.vang)+`</font></td>
          <td>`+(e.noidung)+`</td>
          <td>`+(e.key >= 1 ? '<button class="btn btn-success" onclick="doc(\''+e.nguon+'\','+e.key+')">Đọc</button>' : '<button class="btn btn-info">Trống</button>')+`</td>
        </tr>
      `);
    });
    $("#phantrang").html(trang('abc',data.page,data.TOTAL,data.kmess,data.uid));
    function trang(url, start, total,kmess, uid) {
      let out = '';
      out += '<nav aria-label="Page navigation example"><ul ul class="pagination">';
      neighbors = 2;
      if (start >= total) start = Math.max(0, total - ((total % kmess) == 0 ? kmess : (total % kmess)));
      else start = Math.max(0, +start - (+start % +kmess));
      base_link = '<li class="page-item"><a class="page-link" href="#" onclick="loading();dn.to({users : { lichsu : {check : {id : '+uid+',trang : ' + '%d' + '}}}})">%s</a></li>';
      out += start == 0 ? '' : sprintf(base_link, start / kmess, '&lt;&lt;');
      if (start > kmess * neighbors) out += sprintf(base_link, 1, '1');
      if (start > kmess * (neighbors + 1)) out += '<li class="page-item"><a class="page-item" href="#">...</a></li>';
      for (nCont = neighbors; nCont >= 1; nCont--) if (start >= kmess * nCont) {
          tmpStart = start - kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      out += '<li class="page-item active"><a class="page-link" href="#">' + (start / kmess + 1) + '</a></li>';
      tmpMaxPages = +((total - 1) / kmess) * kmess;
      for (nCont = 1; nCont <= neighbors; nCont++) if (start + kmess * nCont <= tmpMaxPages) {
          tmpStart = start + kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      if (start + kmess * (neighbors + 1) < tmpMaxPages) out += '<li class="page-item "><a class="page-link" href="#">...</a></li>';
      if (start + kmess * neighbors < tmpMaxPages) out += sprintf(base_link, Math.round(tmpMaxPages / kmess + 1), Math.round(tmpMaxPages / kmess + 1));
      if (start + kmess < total) {
          display_page = (start + kmess) > total ? total : (start / kmess + 2);
          out += sprintf(base_link, display_page, '&gt;&gt;');
      }
      out += '</ul></nav>';
      return out;
  }
  head();
    
}

let load_sodu = function(data)
{
    let html =  `
    <div class="row">
      <div class="col-lg-3">
        
  <style>
    @media (min-width: 1199.98px) { 
      .col-lg-3{
        padding-right: 0px;
      }
      .col-lg-9{
        padding-left: 10px;
      }
    }
  
    @media (max-width: 1199.98px) {
      .col-lg-9{
        margin-top: 25px; 
      }
    }
  
  </style><div class="list-group"> `+canvas_menu('lichsu')+` </div>    </div>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-header">
            <h5>LỊCH SỬ SỐ DƯ</h5>
          </div>
          <div class="card-body">
            <div class="row">
            <div class="table-responsive">
            <table class="table table-bordered table-response text-center table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Trước</th>
                  <th scope="col">Sau</th>
                  <th scope="col">Thay đổi</th>
                  <th scope="col">Ghi chú</th>
                  <th scope="col">Chi tiết</th>
                </tr>
              </thead>
              <tbody id="listserver">
                      </tbody>
            </table>
            <center id="phantrang"> </center>
          </div>
        </div>
  
            
          </div>
        </div>
      </div>
    </div>
    
    </div>
  `;
    $("#ducnghia").html(html);
    data.dulieu.forEach(e => {
      $("#listserver").append(`
        <tr>
          <td>`+e.thoigian+`</td>
          <td>`+number_format(e.truoc)+`</td>
          <td>`+number_format(e.sau)+`</td>
          <td><font color="`+(e.vang <= 0 ? 'red' : 'green')+`"> `+(e.vang <= 0 ? '' : '+')+` `+number_format(e.vang)+`</font></td>
          <td>`+(e.noidung)+`</td>
          <td>`+(e.key >= 1 ? '<button class="btn btn-success" onclick="doc(\''+e.nguon+'\','+e.key+')">Đọc</button>' : '<button class="btn btn-info">Trống</button>')+`</td>
        </tr>
      `);
    });
    $("#phantrang").html(trang('abc',data.page,data.TOTAL));
    function trang(url, start, total) {
      kmess = 25;
      let out = '';
      out += '<nav aria-label="Page navigation example"><ul ul class="pagination">';
      neighbors = 2;
      if (start >= total) start = Math.max(0, total - ((total % kmess) == 0 ? kmess : (total % kmess)));
      else start = Math.max(0, +start - (+start % +kmess));
      base_link = '<li class="page-item"><a class="page-link" href="#" onclick="dn.to({users : { lichsu : {sodu : {trang : ' + '%d' + '}}}})">%s</a></li>';
      out += start == 0 ? '' : sprintf(base_link, start / kmess, '&lt;&lt;');
      if (start > kmess * neighbors) out += sprintf(base_link, 1, '1');
      if (start > kmess * (neighbors + 1)) out += '<li class="page-item"><a class="page-item" href="#">...</a></li>';
      for (nCont = neighbors; nCont >= 1; nCont--) if (start >= kmess * nCont) {
          tmpStart = start - kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      out += '<li class="page-item active"><a class="page-link" href="#">' + (start / kmess + 1) + '</a></li>';
      tmpMaxPages = +((total - 1) / kmess) * kmess;
      for (nCont = 1; nCont <= neighbors; nCont++) if (start + kmess * nCont <= tmpMaxPages) {
          tmpStart = start + kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      if (start + kmess * (neighbors + 1) < tmpMaxPages) out += '<li class="page-item "><a class="page-link" href="#">...</a></li>';
      if (start + kmess * neighbors < tmpMaxPages) out += sprintf(base_link, Math.round(tmpMaxPages / kmess + 1), Math.round(tmpMaxPages / kmess + 1));
      if (start + kmess < total) {
          display_page = (start + kmess) > total ? total : (start / kmess + 2);
          out += sprintf(base_link, display_page, '&gt;&gt;');
      }
      out += '</ul></nav>';
      return out;
  }
  head();
    
}

let rutvang = function()
{
  let name = $("#name").val();
  let server = $("#rutvang_otpino").val();
  let vang = $("#vanginput").val() >> 0;
  let code = $("#captcha_napvang").val();
  if(vang <0)
  {
    msg('xu không hợp lệ');
  }
  else
  if(name.length <=3)
  {
    msg('Tên nhân vật không hợp lệ');
  }
  else 
  {
    loading();
    dn.to({
      users : {
        pay : {
          action_rutvang : 
          {
            name : name,
            server : server,
            vang : vang,
            code : code,
          }
        }
      }
    });
  }

}

/* Loading giftcode */

let load_giftcode = function(data)
{
    let html =  `
    <div class="row">
      <div class="col-lg-3">
        
  <style>
    @media (min-width: 1199.98px) { 
      .col-lg-3{
        padding-right: 0px;
      }
      .col-lg-9{
        padding-left: 10px;
      }
    }
  
    @media (max-width: 1199.98px) {
      .col-lg-9{
        margin-top: 25px; 
      }
    }
  
  </style><div class="list-group"> `+canvas_menu('giftcode')+` </div>    </div>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-header">
            <h5>Mã quà tặng</h5>
          </div>
          <div class="card-body">
            
            <form id="form">
              <div class="form-group row">
                <div class="col-lg-1"></div>
                <label class="col-form-label col-lg-2">Mã Quà Tặng:</label>
                <div class="col-lg-8">
                  <input class="form-control" style="color: red" type="text" value="" id="inputma">
                </div>
                <div class="col-lg-1"></div>
              </div>

              <div class="form-group row">
                <div class="col-lg-1"></div>
                <label class="col-form-label col-lg-2"><img id="img_napvang" src="" width="140" height="30" alt="captcha" class="img-thumbnail mb-1" onclick="dn.to({users : {captcha : {true : 2}}})"></label>
                <div class="col-lg-8">
                  <input class="form-control" id="captcha_napvang" type="text" value="">
                  <small>Mã xác nhận.</small>
                </div>
                <div class="col-lg-1"></div>
              </div>

              
             
              <div class="form-group row">
              <div class="col-lg-3"></div>
              <div class="col-lg-8">
                <button type="button" class="btn btn-info form-control" id="btn" onclick="input_giftcode()"><b>NHẬN THƯỞNG</b></button>
              </div>
              <div class="col-lg-1"></div> <br>

              - Mã quà tặng là một chuỗi mã có kí tự dài từ 10 - 16 kí tự. <Br>
              - Mỗi mã quà tặng có một giá trị phần thưởng (xu) khác nhau. <Br>
              - Để có mã quà tặng hãy tức cực tham gia các sự kiện do admin tổ chức. 
            </div>
         

            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="lichSuRutTien" style="margin-top: 30px">
      <div class="col">
        
        <table class="table table-hover table-responsive-sm text-center" id="tableCard">
          <thead class="thead-light">
            <tr>
            <th scope="col">Thời gian</th>
              <th scope="col">Mã quà tặng</th>
              <th scope="col">Giá trị</th>
            </tr>
          </thead>
          <tbody id="lognapgift"></tbody>
        </table>
      </div>
    </div>
  `;
    $("#ducnghia").html(html);
    data.list.forEach(e => {
      $("#lognapgift").append(`
      <tr>
        <td>`+e.thoigian+`</td>
        <td>`+(e.text)+`</td>
        <td>`+number_format(e.vang)+`</td>
      </tr>
      `);
    })
    

  
}


let load_rutvang = function(data)
{
    let html =  `
    <div class="row">
      <div class="col-lg-3">
        
  <style>
    @media (min-width: 1199.98px) { 
      .col-lg-3{
        padding-right: 0px;
      }
      .col-lg-9{
        padding-left: 10px;
      }
    }
  
    @media (max-width: 1199.98px) {
      .col-lg-9{
        margin-top: 25px; 
      }
    }
  
  </style><div class="list-group"> `+canvas_menu('rutvang')+` </div>    </div>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-header">
            <h5>RÚT xu</h5>
          </div>
          <div class="card-body">
            <div class="row">
            <div class="table-responsive">
            <table class="table table-bordered table-response text-center table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Máy chủ</th>
                  <th scope="col">Tên nhân vật</th>
                  <th scope="col">Tỉ lệ</th>
                  <th scope="col">Khu vực</th>
                  <th scope="col">Bản đồ</th>
                </tr>
              </thead>
              <tbody id="listserver">
                      </tbody>
            </table>
            
          </div>
        </div>
  
            <form id="form">
              <div class="form-group row">
                <div class="col-lg-1"></div>
                <label class="col-form-label col-lg-2">Tên nhân vật nhận:</label>
                <div class="col-lg-8">
                  <input class="form-control" style="color: red" type="text" value="" id="name">
                </div>
                <div class="col-lg-1"></div>
              </div>
              <div class="form-group row">
                <div class="col-lg-1"></div>
                <label class="col-form-label col-lg-2">Vũ trụ:</label>
                <div class="col-lg-8">
                  <select id="rutvang_otpino" class="form-control">
                   
                  </select>
                </div>
                <div class="col-lg-1"></div>
              </div>
             
              <div class="form-group row">
                <div class="col-lg-1"></div>
                <label class="col-form-label col-lg-2">Số xu rút:</label>
                <div class="col-lg-8">
                  <input class="form-control" id="vanginput" type="number" value="">
                </div>
                <div class="col-lg-1"></div>
              </div>
              <div class="form-group row">
                <div class="col-lg-1"></div>
                <label class="col-form-label col-lg-2">Số xu nhận:</label>
                <div class="col-lg-8">
                  <input class="form-control" id="vangnhan" type="text" value="" readonly>
                  <small>Số xu bạn nhận được khi giao dịch với BOT.</small>
                </div>
                <div class="col-lg-1"></div>
              </div>

              

              <div class="form-group row">
                <div class="col-lg-1"></div>
                <label class="col-form-label col-lg-2"><img id="img_napvang" src="" width="140" height="30" alt="captcha" class="img-thumbnail mb-1" onclick="dn.to({users : {captcha : {true : 2}}})"></label>
                <div class="col-lg-8">
                  <input class="form-control" id="captcha_napvang" type="text" value="">
                  <small>Mã xác nhận.</small>
                </div>
                <div class="col-lg-1"></div>
              </div>

             

              <div class="form-group row">
                <div class="col-lg-3"></div>
                <div class="col-lg-8">
                  <button type="button" class="btn btn-info form-control" id="btn" onclick="rutvang()"><b>Rút xu</b></button>
                </div>
                <div class="col-lg-1"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="lichSuRutTien" style="margin-top: 30px">
      <div class="col">
        <div class="alert alert-primary" role="alert" style="color: Brown; margin-bottom: 3px;">
          <strong>CHÚ Ý: <span style="color: blue;">SAI TÊN NHÂN VẬT, VŨ TRỤ</span>, LIÊN HỆ ADMIN ĐỂ ĐƯỢC HỦY.<br></strong>
        </div>
        <table class="table table-hover table-responsive-sm text-center" id="tableCard">
          <thead class="thead-light">
            <tr>
            <th scope="col">Mã đơn</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Vũ trụ</th>
              <th scope="col">Tên nhân vật</th>
              <th scope="col">Số xu rút</th>
              <th scope="col">Số xu nhận</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody id="logrut"></tbody>
        </table>
      </div>
    </div>
  `;
    $("#ducnghia").html(html);
    data.list.forEach(e => {
      $("#logrut").append(`
      <tr>
        <td>`+e.id+`</td>
        <td>`+e.thoigian+`</td>
        <td>`+e.server+`</td>
        <td>`+e.name+`</td>
        <td>`+number_format(e.vangrut)+`</td>
        <td>`+number_format(e.vangnhan)+`</td>
        <td>`+(e.trangthai == 1 ? '<button class="btn btn-info">Chưa GD</button>' : '<button class="btn btn-success">Đã GD</button>')+`</td>
      </tr>
      `);
    })
    if(data.admin >=1)
    {
      for(var i = 1; i<=9;i-=-1)
      {
        $("#rutvang_otpino").append(`
        <option value="`+ i + `">Vũ trụ ` + i + `</option>
      `);
      }
    }
    data.npc.forEach(e => {
      if (e.server == data.server) {
        $("#rutvang_otpino").append(`
        <option value="`+ e.server + `">Vũ trụ ` + e.server + `</option>
      `);
        $("#listserver").append(`
      <tr>
        <td>Vũ trụ `+ e.server + `</td>
        <td> `+ e.name + `</td>
        <td> `+ e.value + `</td>
        <td> `+e.khu+`</td>
        <td> Vách núi Kakarot</td>
      </tr>
      `);
      }
    });

    let tile = data.npc[0].value;
    input = 0;
    $("select#rutvang_otpino").change(function() {
      var getmaychu = $("#rutvang_otpino").val();
      tile = data.npc.find(element => element.server == getmaychu).value;
      tinhtien();
  });
  $('#vanginput').keyup(function() {
      input = $("#vanginput").val();
      if (input > 500000000) {
          $("#vanginput").val(500000000);
          input = $("#vanginput").val();
      }
      tinhtien();
  });
  let tinhtien = function()
  {
      $("#vangnhan").val(number_format(Math.round(input*tile)));
  }
}


let load_profile = function(data)
{
    let html = `
    <div class="row" style="margin-top: 30px;">
    <div class="col-lg-3">
      
<style>
  @media (min-width: 1199.98px) { 
    .col-lg-3{
      padding-right: 0px;
    }
    .col-lg-9{
      padding-left: 10px;
    }
  }

  @media (max-width: 1199.98px) {
    .col-lg-9{
      margin-top: 25px; 
    }
  }

</style>
<div class="list-group">`+canvas_menu('profile')+`</div>    </div>

    <div class="col-lg-9">
      <div class="card">
        <div class="card-header">
          <h5>Thông tin tài khoản</h5>
        </div>
        <div class="card-body">
          <p>Uid: <strong>#`+data.id+`</strong><br>
            Tham gia: <strong>`+data.time+`</strong><br>
            Tài khoản: <strong>`+data.username+`</strong><br>
            Tên hiển thị: <strong>`+data.name+`</strong><br>
            Số xu: <strong>`+number_format(data.vang)+`$</strong><br>
          </p>
          <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal">Đổi mật khẩu</button>
          <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#doiavatar">Cập nhật ảnh đại diện</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="doiavatar" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="doiavatar">Cập nhật ảnh đại diện</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="alert"></div>
          <form id="form">
            <div class="form-group">
              <label>Tài khoản:</label>
              <input type="text" class="form-control" value="`+data.username+`" readonly>
            </div>
            
            <div class="form-group">
              <label>Chọn avatar:</label>
              <input style="width: 50%;"  class="form-control form-control-lg" id="inputFileToLoad" type="file">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-primary" id="btn" onclick="encodeImageFileAsURL()">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</div>

  <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal">Đổi mật khẩu</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="alert"></div>
          <form id="form">
            <div class="form-group">
              <label>Tài khoản:</label>
              <input type="text" class="form-control" value="`+data.username+`" readonly>
            </div>
            <div class="form-group">
              <label>Mật khẩu cũ:</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="form-group">
              <label>Mật khẩu mới:</label>
              <input type="password" class="form-control" id="npassword">
            </div>
            <div class="form-group">
              <label>Xác nhận mật khẩu mới:</label>
              <input type="password" class="form-control" id="rpassword">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-primary" id="btn" onclick="ChangePassword()">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    $("#ducnghia").html(html)
}

function ChangePassword()
{
    let password = $("#password").val();
    let p1 = $("#npassword").val();
    let p2 = $("#rpassword").val();
    if(password.length <=3)
    {
        msg('Vui lòng nhập mật khẩu cũ')
    }
    else 
    if(p1.length <=3)
    {
        msg('Mật khẩu mới phải lớn hơn 3 kí tự')
    }
    else
    if(p1 != p2)
    {
        msg('Mật khẩu xác nhận chưa chính xác')
    }
    else 
    if(p1 == password)
    {
        msg('Mật khẩu mới không được trùng với mật khẩu cũ');
    }
    else 
    {
        loading();
        dn.to({
            users : 
            {
                nguoichoi : 
                {
                    changepass :
                    {
                        password : password,
                        p1 : p1,
                        p2 : p2,
                    }
                }
            }
        });
    }
}

function input_giftcode()
{
  let input = $("#inputma").val();
  let code = $("#captcha_napvang").val();
  if(input.length <=5)
  {
    msg('mã không hợp lệ, vui lòng nhập lại');
  }
  else 
  {
    loading();
    dn.to({
      users : 
      {
        giftcode : {
          submit : 
          {
            value : input,
            code : code,
          }
        }
      }
    })
  }
}

function encodeImageFileAsURL() {
  $("#doiavatar").modal('hide')

  var filesSelected = document.getElementById("inputFileToLoad").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      var newImage = document.createElement('img');
      newImage.src = srcData;
      loading()
      dn.to({
          users :
          {
              nguoichoi :
              {
                  avatar : 
                  {
                      img : srcData
                  }
              }
          }
      });
      
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}


let load_csmm = function(data)
{
    let html =  `
    <div class="row">
      <div class="col-lg-3">
        
  <style>
    @media (min-width: 1199.98px) { 
      .col-lg-3{
        padding-right: 0px;
      }
      .col-lg-9{
        padding-left: 10px;
      }
    }
  
    @media (max-width: 1199.98px) {
      .col-lg-9{
        margin-top: 25px; 
      }
    }
  
  </style><div class="list-group"> `+canvas_menu('csmm')+` </div>    </div>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-header">
            <h5>LỊCH SỬ CƯỢC CSMM</h5>
          </div>
          <div class="card-body">
            <div class="row">
            <div class="table-responsive">
            <table class="table table-bordered table-response text-center table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Vũ trụ</th>
                  <th scope="col">Phiên</th>
                  <th scope="col">Trò chơi</th>
                  <th scope="col">Cửa cược</th>
                  <th scope="col">Vàng cược</th>
                  <th scope="col">Vàng thắng</th>
                  <th scope="col">Trạng thái</th>
                </tr>
              </thead>
              <tbody id="listserver">
                      </tbody>
            </table>
            <center id="phantrang"> </center>
          </div>
        </div>
  
            
          </div>
        </div>
      </div>
    </div>
    
    </div>
  `;
    $("#ducnghia").html(html);
    data.dulieu.forEach(e => {
      $("#listserver").append(`
        <tr>
          <td>`+e.thoigian+`</td>
          <td>`+e.server+`</td>
          <td>`+e.phien+`</td>
          <td>`+e.game+`</td>
          <td>`+e.cuoc+`</td>
          <td>`+number_format(e.vangcuoc)+`</td>
          <td>`+number_format(e.vangnhan)+`</td>
          <td>`+(e.trangthai == 0 ? '<button class="btn btn-info" onclick="huycuoc('+e.id+')">Hủy cược</button>' : (e.trangthai == 1 ? '<button class="btn btn-success">Xong</button>' : '<button class="btn btn-danger">Hoàn trả</button>' ))+`</td>
        </tr>
      `);
    });
    $("#phantrang").html(trang('abc',data.page,data.TOTAL));
    function trang(url, start, total) {
      kmess = 25;
      let out = '';
      out += '<nav aria-label="Page navigation example"><ul ul class="pagination">';
      neighbors = 2;
      if (start >= total) start = Math.max(0, total - ((total % kmess) == 0 ? kmess : (total % kmess)));
      else start = Math.max(0, +start - (+start % +kmess));
      base_link = '<li class="page-item"><a class="page-link" href="#" onclick="dn.to({users : { lichsu : {csmm : {trang : ' + '%d' + '}}}})">%s</a></li>';
      out += start == 0 ? '' : sprintf(base_link, start / kmess, '&lt;&lt;');
      if (start > kmess * neighbors) out += sprintf(base_link, 1, '1');
      if (start > kmess * (neighbors + 1)) out += '<li class="page-item"><a class="page-item" href="#">...</a></li>';
      for (nCont = neighbors; nCont >= 1; nCont--) if (start >= kmess * nCont) {
          tmpStart = start - kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      out += '<li class="page-item active"><a class="page-link" href="#">' + (start / kmess + 1) + '</a></li>';
      tmpMaxPages = +((total - 1) / kmess) * kmess;
      for (nCont = 1; nCont <= neighbors; nCont++) if (start + kmess * nCont <= tmpMaxPages) {
          tmpStart = start + kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      if (start + kmess * (neighbors + 1) < tmpMaxPages) out += '<li class="page-item "><a class="page-link" href="#">...</a></li>';
      if (start + kmess * neighbors < tmpMaxPages) out += sprintf(base_link, Math.round(tmpMaxPages / kmess + 1), Math.round(tmpMaxPages / kmess + 1));
      if (start + kmess < total) {
          display_page = (start + kmess) > total ? total : (start / kmess + 2);
          out += sprintf(base_link, display_page, '&gt;&gt;');
      }
      out += '</ul></nav>';
      return out;
  }
  head();
    
}


let huycuoc = function(id)
{
  loading();dn.to({ users : { lichsu : {huycsmm : { id : id } }  } });
}