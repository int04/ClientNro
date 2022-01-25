/**
 * Modules : NAP 
 * Author   : Since04
 */
 function load_nap(data)
 {
     head();
     let html = `
     <div class="row" id="ticket" style="display:block">
     <div class="col-md-12">
         <section class="panel">
             <center>
                 <h2>Nạp Xu</h2>
             </center>
             <div class="panel-body">
 
                 <div class="col-md-6" style="padding:10px">
                     <div class="form-group row">
                         <spam class="col-md-3 control-label bb ar">Chọn hình thức:</spam>
                         <div class="col-md-8">
                             <select class="form-control" data-live-search="true" id="hinhthuc">
                                 <option value="card">Chọn hình thức</option>
                                 <option value="thoinro">Nạp Thỏi Vàng</option>
                                 <option value="vangnro">Ngọc Rồng Online</option>
                                 <option value="tsr">Thẻ siêu rẻ</option>
                                 <option value="momo">Ví MoMo</option>
                                 <option value="card">Thẻ cào</option>
                             </select>
                         </div>
                     </div>
 
                     <div class="form-group row">
                                 <spam class="col-md-3 control-label bb ar"></spam>
                                 <div class="col-md-8">
                                     <a href="#" onclick="select_hinhthuc()" class="btn btn-danger col-xs-12 btn4">Chọn hình thức</a>
                                 </div>
                             </div>
                 </div>
 
             <div class="col-md-6" style="padding:10px">
             Top nạp tuần: (Chỉ tính nạp MoMo, thẻ cào, Thẻ Siêu Rẻ) <br> 
             <font color="red">TOP 1:</font> 5.000.000 xu <br>
             <font color="green">TOP 2:</font> 2.500.000 xu <br>
             <font color="blue">TOP 3:</font> 1.000.000 xu <br>
             <font color="gir">TOP 4:</font> 500.000 xu <br>
             <font color="pink">TOP 5:</font> 250.000 xu <br>
             <font color="organ">TOP 6 - 10:</font> 100.000 xu <br>
                 <div class="table-responsive">
                     <table class="table table-dark">
                         <thead class="">
                             <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Tên nhân vật</th>
                                 <th scope="col">Xu nạp</th>
                             </tr>
                         </thead>
                         <tbody class="border-primary" id="nap_index">
                              
                      </tbody>
                  </table>
     
              </div>
             </div>
             </div>
         </section>
     </div>
 </div>
 <hr>
 
 <Script>
 $("select#hinhthuc").change(function() {
  var hinhthuc = $("#hinhthuc").val();
  loading();
  if(hinhthuc == 'tsr') dn.to({ users : { pay : { thesieure : true } } });
  else if(hinhthuc == 'vangnro') dn.to({ users : { pay : { napvang : true } } });
  else if(hinhthuc == 'thoinro') dn.to({ users : { pay : { napthoi : true } } });
  else if(hinhthuc == 'card') dn.to({ users : { pay : { card : true } } });
  else if(hinhthuc == 'momo') dn.to({ users : { pay : { momo : true } } });
});</script>
 
     `;
 
     $("#ducnghia").html(html);
     let i = 0;
     data.list.forEach(element => {
         i++;
         $("#nap_index").append(`
         <tr>
         <td>`+i+`</td>
         <td>`+element.name+`</td>
         <td>`+number_format(element.xu)+`</td>
         </tr>
         `);
     });
 }

let napthe = function()
{
    let nhamang = $("#nhamang").val();
    let menhgia = $("#menhgia").val();
    let seri = $("#seri").val();
    let mathe = $("#mathe").val();
    if(seri.length <=3 || mathe.length <=4)
    {
        msg('Vui lòng nhập đầy đủ thông tin');
    }
    else 
    {
        loading();
        dn.to({
            users :
            {
                pay :
                {
                    action_card :
                    {
                        nhamang : nhamang,
                        seri : seri,
                        menhgia : menhgia,
                        mathe : mathe
                    }
                }
            }
        });
    }
}
let load_napcard = function(data)
{
  head();
    let html = `<div class="row" id="ticket" style="">
    <div class="col-md-12">
        <section class="panel" style="padding:10px">
            <center>
                <h2>THẺ CÀO</h2>
            </center>
            <div class="panel-body">
                <div class="d-flex no-block align-items-center m-b-30"><div class="col-md-12 header-title-buy">
                - Bạn có thể <b>Nạp xu</b> từ  <b>Các loại thẻ cào</b> <br>
                - Để nạp MoMo, bạn vui lòng làm theo các bước sau : <br>
                - Nếu bạn nhập sai thông tin thẻ, bạn có thể bị mất hoàn toàn thẻ, xin vui lòng lưu ý ! <br>
                - Nếu còn điều gì thắc mắc, bạn hãy <b>tạo phiếu yêu cầu</b>.
                </div></div>
                

                <div class="col-md-6" style="padding:10px">
                <div class="card-body border-info">
             <form id="form">
             <div class="form-group">
             <label>Hình thức nạp</label>
             <select id="hinhthuc"  class="form-control">
               <option value="vangnro">Vàng Ngọc Rồng</option>
               <option value="tsr">Thẻ siêu rẻ</option>
               <option value="card" selected>Thẻ cào</option>
               <option value="momo">Ví MoMo</option>
             </select>
           </div>
 
           <div class="form-group">
             <label>Loại thẻ</label>
             <select id="nhamang"  class="form-control">
             <option value="">Chọn loại thẻ</option>
             </select>
           </div>

           <div class="form-group">
             <label>Mệnh giá</label>
             <select id="menhgia"  class="form-control">
             <option value="0">Chọn mệnh giá</option>
               <option value="10000">10.000 VNĐ</option>
               <option value="20000">20.000 VNĐ</option>
               <option value="50000">50.000 VNĐ</option>
               <option value="100000">100.000 VNĐ</option>
               <option value="200000">200.000 VNĐ</option>
               <option value="500000">500.000 VNĐ</option>
             </select>
           </div>
 
              
               <div class="form-group">
                 <label>Số Serial</label>
                 <input type="text" name="seri" id="seri" class="form-control" placeholder="Mã số Serial">
                 <small>Mã số serial trên mặt thẻ</small>
               </div>
               
               <div class="form-group">
                 <label>Mã thẻ</label>
                 <input type="text" name="mathe" id="mathe" class="form-control" placeholder="Mã số thẻ">
                 <small>Mã thẻ bên dưới lớp phủ bạc</small>
               </div>
 
               <div class="form-group">
                 <label>Số vàng web</label>
                 <input type="text" name="vang" id="vangweb" class="form-control" placeholder="" readonly value="0">
                 <small>Số tiền bạn nhận được khi nạp hoàn tất</small>
               </div>

               
               
              
               <div id="alert"></div>
               <div class="form-group">
                 <button class="form-control btn btn-info font-weight-bold text-uppercase" type="button" id="btn" onclick="napthe()"> Nạp ngay</button>
               </div>
             </form>
           </div>
                   
                </div>

                <div class="col-md-6" style="padding:10px">
                <h2>LỊCH SỬ NẠP THẺ</h2>
                
                <div class="table-responsive">
         <table class="table table-bordered table-response text-center">
           <thead class="thead-light">
             <tr>
               <th scope="col">#</th>
               <th scope="col">Thời gian</th>
               <th scope="col">Loại thẻ</th>
               <th scope="col">Serial</th>
               <th scope="col">Mã thẻ</th>
               <th scope="col">Mệnh giá</th>
               <th scope="col">Vàng nhận</th>
               <th scope="col">Theo dõi</th>
             </tr>
           </thead>
           <tbody id="lichsugd">
                    </tbody>
         </table>
       </div>
                
                </div>

                <!-- Lịch sử nạp -->
                
            </div>
        </section>
    </div>
</div>
<hr>`;

    $("#ducnghia").html(html);
    data.npc.forEach(e => {
      $("#nhamang").append(`
      <option value="`+e.value+`">`+e.name+`</option>
      `);
      $("#listserver").append(`
      <tr>
          <td>`+e.name+`</td>
          <td>`+e.tile+`</td>
          
      </tr>
      `);
  });
  data.list.forEach(e => {
      $("#lichsugd").append(`
          <tr>
              <td>`+e.id+`</td>
              <td>`+e.thoigian+`</td>
              <td>`+e.nhamang+`</td>
              <td>`+e.seri+`</td>
              <td>`+e.mathe+`</td>
              <td>`+number_format(e.menhgia)+`</td>
              <td>`+number_format(e.vang)+`</td>
              <td>`+(e.status == 0 ? '<button class="btn btn-info">Đang Nạp</button>' : (e.status == 1 ? '<button class="btn btn-success">Thành công</button>' : (e.status == 2 ? '<button class="btn btn-dark">Sai mệnh giá</button>' : '<button class="btn btn-warn">Sai thẻ</button>') ))+`</td>
          </tr>
      `);
  });
  let tile = data.npc[0].tile;
  input = 0;
  $("select#nhamang").change(function() {
      var getmaychu = $("#nhamang").val();
      console.log(data.npc.find(element => element.value == getmaychu));
      tile = data.tile;
      tinhtien();
  });

  $("select#menhgia").change(function() {
     var getmaychu = $("#menhgia").val();
     input = getmaychu;
     tinhtien();
 });
  
  let tinhtien = function()
  {
      $("#vangweb").val(number_format(Math.round(input*tile)));
  }

  $("select#hinhthuc").change(function() {
      var hinhthuc = $("#hinhthuc").val();
      loading();
      if(hinhthuc == 'tsr') dn.to({ users : { pay : { thesieure : true } } });
      else if(hinhthuc == 'vangnro') dn.to({ users : { pay : { napvang : true } } });
      else if(hinhthuc == 'card') dn.to({ users : { pay : { card : true } } });
      else if(hinhthuc == 'momo') dn.to({ users : { pay : { momo : true } } });
  });
}


let momo = function()
{
    let magiaodich = $("#magiaodich").val();
    if(magiaodich.length <=4)
    {
        msg('Vui lòng nhập mã giao dịch để tiếp tục')
    }
    else 
    {
        loading();
        dn.to({
            users : 
            {
                pay : 
                {
                    action_momo :
                    {
                        magiaodich : magiaodich
                    }
                }
            }
        });
    }
}

let load_momo = function(data)
{
  head();
    let html = `
    <div class="row" id="ticket" style="">
    <div class="col-md-12">
        <section class="panel" style="padding:10px">
            <center>
                <h2>NẠP VÍ MOMO</h2>
            </center>
            <div class="panel-body">
                <div class="d-flex no-block align-items-center m-b-30"><div class="col-md-12 header-title-buy">
                - Bạn có thể <b>Nạp xu</b> từ ví điện tử <b>MoMo</b> <br>
                - Để nạp MoMo, bạn vui lòng làm theo các bước sau : <br>
                + 1, Đăng nhập vào ví Momo   <br>
                + 2, Chọn chức năng <b>Chuyển tiền</b> <br>
                + 3, Nhập ô <b>Tài khoản nhận</b> <code>`+data.taikhoan+`</code>, nhập <b>số tiền cần chuyển</b>. <br>
                + 4, Nhìn xuống <b>Lịch sử chuyển tiền</b>, coppy <b>MÃ GIAO DỊCH</b> sau đó điền vào ô phía dưới <br>
                - Nếu còn điều gì thắc mắc, bạn hãy <b>tạo phiếu yêu cầu</b>.
                </div></div>
                

                <div class="row" style="padding-top: 25px">
                <div class="col-lg-5">
                  <div class="card border-info">
                    
                    <div class="card-body border-info">
                      <form id="form">
                      <div class="form-group">
                      <label>Hình thức nạp</label>
                      <select id="hinhthuc"  class="form-control">
                        <option value="vangnro">Vàng Ngọc Rồng</option>
                        <option value="tsr">Thẻ siêu rẻ</option>
                        <option value="card">Thẻ cào</option>
                        <option value="momo" selected>Ví MoMo</option>
                      </select>
                    </div>
          
                   
          
                       
                      
                        
                        <div class="form-group">
                          <label>Mã giao dịch</label>
                          <input type="text" name="magiaodich" id="magiaodich" class="form-control" placeholder="Mã GD MOMO">
                          <small>Mã giao dịch chuyển tiền</small>
                        </div>
          
                       
                        
                       
                        <div id="alert"></div>
                        <div class="form-group">
                          <button class="form-control btn btn-info font-weight-bold text-uppercase" type="button" id="btn" onclick="momo()"> Nạp ngay</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7" id="vitri">
                  <div class="form-group">
                    <a class="btn btn-info form-control font-weight-bold text-white readonly">THÔNG TIN NICK CHUYỂN TIỀN</a>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-bordered table-response text-center table-striped">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Tài khoản</th>
                          <th scope="col">Tỉ lệ nạp</th>
                          
                        </tr>
                      </thead>
                      <tbody id="listserver">
                         <tr><td>`+data.taikhoan+`</td> <td>`+data.tile+`</td></tr>
                              </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="alert alert-info col" style="margin-top: 25px; margin-bottom: 5px">
                  <h5>Lịch sử giao dịch</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-response text-center">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Mã giao dịch</th>
                        <th scope="col">Số tiền</th>
                        <th scope="col">Số vàng</th>
                      </tr>
                    </thead>
                    <tbody id="lichsugd">
                             </tbody>
                  </table>
                </div>
              
                    
                </div>

              
                <!-- Lịch sử nạp -->
                
            </div>
        </section>
    </div>
</div>
<hr>
    `;
    $("#ducnghia").html(html);
    data.list.forEach(e => {
      $("#lichsugd").append(`
          <tr>
              <td>`+e.id+`</td>
              <td>`+e.thoigian+`</td>
              <td>`+e.magiaodich+`</td>
              <td>`+number_format(e.vnd)+`</td>
              <td>`+number_format(e.vang)+`</td>
          </tr>
      `);
  });
  
  $("select#hinhthuc").change(function() {
      var hinhthuc = $("#hinhthuc").val();
      loading();
      if(hinhthuc == 'tsr') dn.to({ users : { pay : { thesieure : true } } });
      else if(hinhthuc == 'vangnro') dn.to({ users : { pay : { napvang : true } } });
      else if(hinhthuc == 'card') dn.to({ users : { pay : { card : true } } });
      else if(hinhthuc == 'momo') dn.to({ users : { pay : { momo : true } } });
  });
}


let load_nap_tien = function(data)
{
    let html = `
    <h2 class="text-center" style="margin-top: 50px;">NẠP TIỀN</h2>
    <hr style="width: 15%; height: 1px" class="bg-danger">
    <div class="alert alert-info" style="margin-top: 40px">
      <strong>Bạn có thể nạp tiền từ Vàng NRO, thẻ siêu rẻ, thẻ cào, momo</strong><br>
      
      
      
    </div>
    <div class="row" style="padding-top: 25px">
      <div class="col-lg-5">
        <div class="card border-info">
         
          <div class="card-body border-info">
            <form id="form">
            <div class="form-group">
            <label>Hình thức nạp</label>
            <select id="hinhthuc"  class="form-control">
            <option value="tsr">Chọn hình thức</option>
            <option value="thoinro">Nạp Thỏi Vàng</option>
              <option value="vangnro">Vàng Ngọc Rồng</option>
              <option value="tsr">Thẻ siêu rẻ</option>
              <option value="card">Thẻ cào</option>
              <option value="momo">Ví MoMo</option>
            </select>
          </div>

         
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-7" id="vitri">
        <div class="form-group">
          <a class="btn btn-info form-control font-weight-bold text-white readonly">TOP NẠP TUẦN</a>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-response text-center table-striped">
            <thead class="thead-light">
              <tr>
                <th scope="col">Người chơi</th>
                <th scope="col">Xu nạp</th>
                
              </tr>
            </thead>
            <tbody id="topnap">
               
                    </tbody>
          </table>
        </div>
      </div>
    </div>
    
  `;

    $("#ducnghia").html(html);
    
    data.list.forEach(e => {
        $("#topnap").append(`
            <tr>
                <td>`+e.name+`</td>
                <td>`+number_format(e.xu)+`</td>
            </tr>
        `);
    });
    
    $("select#hinhthuc").change(function() {
        var hinhthuc = $("#hinhthuc").val();
        loading();
        if(hinhthuc == 'tsr') dn.to({ users : { pay : { thesieure : true } } });
        else if(hinhthuc == 'thoinro') dn.to({ users : { pay : { napthoi : true } } });
        else if(hinhthuc == 'vangnro') dn.to({ users : { pay : { napvang : true } } });
        else if(hinhthuc == 'card') dn.to({ users : { pay : { card : true } } });
        else if(hinhthuc == 'momo') dn.to({ users : { pay : { momo : true } } });
    });
}

 let load_thesieure = function(data)
 {
     let html = `
     <h2 class="text-center" style="margin-top: 50px;">NẠP VÀNG THẺ SIÊU RẺ</h2>
     <hr style="width: 15%; height: 1px" class="bg-danger">
     <div class="alert alert-info" style="margin-top: 40px">
       <strong>Hệ thống nạp thẻ siêu rẻ tự động</strong><br>
       <strong>Bước 1: </strong><strong>Xem trong thông tin tài khoản thẻ siêu rẻ</strong> trên website<br>
       <strong>Bước 2: </strong>Vào <strong>thesieure.com</strong> -> <strong>Chuyển tiền</trong> -> nhập số tiền cần chuyển <br>
       <b>Bước 3:</b> Coppy mã giao dịch trong <b>Lịch sử</b> rồi nhập vào phía dưới.
       
       <strong style="color: red">Mọi hình thức gian lận đều bị khóa nick vĩnh viễn</strong><br>
       
       
     </div>
     <div class="row" style="padding-top: 25px">
       <div class="col-lg-5">
         <div class="card border-info">
           <div class="card-header bg-info text-light border-info text-center font-weight-bold">
             <span id="sodu">Vàng hiện có: `+number_format(data.vang)+`</span>
           </div>
           <div class="card-body border-info">
             <form id="form">
             <div class="form-group">
             <label>Hình thức nạp</label>
             <select id="hinhthuc"  class="form-control">
               <option value="vangnro">Vàng Ngọc Rồng</option>
               <option value="tsr" selected>Thẻ siêu rẻ</option>
               <option value="card">Thẻ cào</option>
               <option value="momo">Ví MoMo</option>
             </select>
           </div>
 
          
 
              
             
               
               <div class="form-group">
                 <label>Mã giao dịch</label>
                 <input type="text" name="magiaodich" id="magiaodich" class="form-control" placeholder="Mã GD TSR">
                 <small>Mã giao dịch chuyển tiền</small>
               </div>
 
              
               
              
               <div id="alert"></div>
               <div class="form-group">
                 <button class="form-control btn btn-info font-weight-bold text-uppercase" type="button" id="btn" onclick="thesieure()"> Nạp ngay</button>
               </div>
             </form>
           </div>
         </div>
       </div>
       <div class="col-lg-7" id="vitri">
         <div class="form-group">
           <a class="btn btn-info form-control font-weight-bold text-white readonly">THÔNG TIN NICK CHUYỂN TIỀN</a>
         </div>
         <div class="table-responsive">
           <table class="table table-bordered table-response text-center table-striped">
             <thead class="thead-light">
               <tr>
                 <th scope="col">Tài khoản</th>
                 <th scope="col">Tỉ lệ nạp</th>
                 
               </tr>
             </thead>
             <tbody id="listserver">
                <tr><td>`+data.account+`</td> <td>`+data.value+`</td></tr>
                     </tbody>
           </table>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="alert alert-info col" style="margin-top: 25px; margin-bottom: 5px">
         <h5>Lịch sử giao dịch</h5>
       </div>
       <div class="table-responsive">
         <table class="table table-bordered table-response text-center">
           <thead class="thead-light">
             <tr>
               <th scope="col">#</th>
               <th scope="col">Thời gian</th>
               <th scope="col">Mã giao dịch</th>
               <th scope="col">Số tiền</th>
               <th scope="col">Số vàng</th>
             </tr>
           </thead>
           <tbody id="lichsugd">
                    </tbody>
         </table>
       </div>
     </div>
   `;
 
     $("#ducnghia").html(html);
     
     data.list.forEach(e => {
         $("#lichsugd").append(`
             <tr>
                 <td>`+e.id+`</td>
                 <td>`+e.thoigian+`</td>
                 <td>`+e.magiaodich+`</td>
                 <td>`+number_format(e.vnd)+`</td>
                 <td>`+number_format(e.vang)+`</td>
             </tr>
         `);
     });
     
     $("select#hinhthuc").change(function() {
         var hinhthuc = $("#hinhthuc").val();
         loading();
         if(hinhthuc == 'tsr') dn.to({ users : { pay : { thesieure : true } } });
         else if(hinhthuc == 'vangnro') dn.to({ users : { pay : { napvang : true } } });
         else if(hinhthuc == 'card') dn.to({ users : { pay : { card : true } } });
         else if(hinhthuc == 'momo') dn.to({ users : { pay : { momo : true } } });
     });
 }

function thesieure() {
    let magiaodich = $("#magiaodich").val();
    if(magiaodich.length <=4)
    {
        msg('Vui lòng nhập mã giao dịch để tiếp tục');
    }
    else 
    {
        loading();
        dn.to({
            users :
            {
                pay :
                {
                    action_thesieure :
                    {
                        magiaodich : magiaodich
                    }
                }
            }
        });
    }
}


let load_thoivang = function(data)
{
    head();
    let html = `
    <h2 class="text-center" style="margin-top: 50px;">NẠP THỎI VÀNG</h2>
    <hr style="width: 15%; height: 1px" class="bg-danger">
    <div class="alert alert-info" style="margin-top: 40px">
      <strong>HỆ THỐNG NẠP THỎI VÀNG TỰ ĐỘNG</strong><br>
      <strong>Bước 1: </strong><strong>Điền đầy đủ tên nhân vật, máy chủ, số thỏi muốn giao dịch</strong> trên website<br>
      <strong>Bước 2: Bấm <b>Tạo đơn</b> sau đó hãy vào game giao dịch với NPC, sau khi giao dịch hoàn tất sẽ tự động cộng tiền vào tài khoản cho bạn.
      
      <strong style="color: red">Nếu bạn nhập sai thông tin, vui lòng <B>Tạo lại đơn</B>, đơn cũ sẽ tự động <b>HỦY</b></strong><br>
      
      <b><font color="red">Chú ý 2</font>: Do BOT tự động hoàn toàn 100%, khi đầy vàng ở hành trang sẽ tự động về nhà cất vàng hoặc tự động đổi acc khi nick đầy vàng. Nếu bạn vào game mà vẫn chưa thấy BOT thì lên web xem lại thông tin BOT nhé.</b>
      <br>
      <font color="green">Quy đổi: <b>1 thỏi vàng</b> = <b>36.500.000 vàng web</b></font>
    </div>
    <div class="row" style="padding-top: 25px">
      <div class="col-lg-5">
        <div class="card border-info">
          
          <div class="card-body border-info">
            <form id="form">
           

          <div class="form-group">
            <label>Chọn máy chủ</label>
            <select id="option_server"  class="form-control">
              <option value="0">Chọn máy chủ</option>
            </select>
          </div>

             
              <div class="form-group">
                <label>Nhân vật</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Nhập tên nhân vật">
                <small>Tên nhân vật muốn giao dịch vs NPC</small>
              </div>
              
              <div class="form-group">
                <label>Số thỏi giao dịch</label>
                <input type="text" name="vangnap" id="vangnap" class="form-control" placeholder="Số vàng">
                <small>Số thỏi muốn nạp</small>
              </div>

            
              
            
              <div id="alert"></div>
              <div class="form-group">
                <button class="form-control btn btn-info font-weight-bold text-uppercase" type="button" id="btn" onclick="napthoi()"> Tạo đơn</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-7" id="vitri">
        <div class="form-group">
          <a class="btn btn-info form-control font-weight-bold text-white readonly">Ví trí nhân vật nhận vàng</a>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-response text-center table-striped">
            <thead class="thead-light">
              <tr>
                <th scope="col">Máy chủ</th>
                <th scope="col">Nhân vật</th>
                <th scope="col">Địa điểm</th>
                <th scope="col">Khu vực</th>
                <th scope="col">Thỏi có</th>
                <th scope="col">Có thể nhận</th>
              </tr>
            </thead>
            <tbody id="listserver">
                    </tbody>
          </table>
         
        </div>
      </div>
    </div>
    <div class="row">
      <div class="alert alert-info col" style="margin-top: 25px; margin-bottom: 5px">
        <h5>Lịch sử giao dịch</h5>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered table-response text-center">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Server</th>
              <th scope="col">Nhân vật</th>
              <th scope="col">Số thỏi </th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody id="lichsugd">
                   </tbody>
        </table>
        
      </div>
    </div>
  `;

    $("#ducnghia").html(html);
    data.npc.forEach(e => {
      e.thoivang = e.thoivang < 0 ? 0 : e.thoivang;
     
        $("#option_server").append(`
        <option value="`+e.server+`">Vũ trụ `+e.server+`</option>
        `);
        $("#listserver").append(`
        <tr>
            <td>`+e.server+`</td>
            <td>`+e.name+`</td>
            <td>`+e.map+`</td>
            <td> `+e.khu+`</td>
            <td>`+((e.thoivang))+`/99</td>
            <td>`+((99-e.thoivang))+`</td>
        </tr>
        `);
      
    });
    
    data.data.forEach(e => {
        $("#lichsugd").append(`
            <tr>
                <td>`+e.id+`</td>
                <td>`+e.thoigian+`</td>
                <td>`+e.server+`</td>
                <td>`+e.name+`</td>
                <td>`+number_format(e.thoivang)+`</td>
                <td>`+(e.trangthai == 0 ? '<button class="btn btn-info">Chưa GD</button>':'<button class="btn btn-success">Đã GD</button>')+`</td>
               
            </tr>
        `);
    });
   
}

let load_napvang = function(data)
{
    head();
    let html = `
    <h2 class="text-center" style="margin-top: 50px;">NẠP VÀNG</h2>
    <hr style="width: 15%; height: 1px" class="bg-danger">
    <div class="alert alert-info" style="margin-top: 40px">
      <strong>Hệ thống nạp vàng tự động</strong><br>
      <strong>Bước 1: </strong><strong>Xem thông tin BOT</strong> trên website<br>
      <strong>Bước 2: </strong>Vào <strong>đúng địa điểm</strong> gặp nhân vật nhận hàng để giao dịch <br>
      Sau khi <strong>giao dịch thành công</strong> bạn vui lòng nhập đầy đủ thông tin <b>Tên nhân vật</b> <b>Vũ trụ</b> <b>số vàng GD</b> sau đó ấn NẠP<br>
      
      <strong style="color: red">Mọi hình thức gian lận đều bị khóa nick vĩnh viễn</strong><br>
      - Tỷ lệ nạp <strong>100%</strong>, <strong>nạp 100tr được 100tr</strong><br>
      
    </div>
    <div class="row" style="padding-top: 25px">
      <div class="col-lg-5">
        <div class="card border-info">
          <div class="card-header bg-info text-light border-info text-center font-weight-bold">
            <span id="sodu">Vàng hiện có: `+number_format(data.vang)+`</span>
          </div>
          <div class="card-body border-info">
            <form id="form">
            <div class="form-group">
            <label>Hình thức nạp</label>
            <select id="hinhthuc"  class="form-control">
              <option value="vangnro" selected>Vàng Ngọc Rồng</option>
              <option value="tsr">Thẻ siêu rẻ</option>
              <option value="card">Thẻ cào</option>
              <option value="momo">Ví MoMo</option>
            </select>
          </div>

          <div class="form-group">
            <label>Chọn máy chủ</label>
            <select id="option_server"  class="form-control">
              
            </select>
          </div>

             
              <div class="form-group">
                <label>Nhân vật</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Nhập tên nhân vật">
                <small>Tên nhân vật bạn đã giao dịch</small>
              </div>
              
              <div class="form-group">
                <label>Số vàng cần nạp</label>
                <input type="text" name="vangnap" id="vangnap" class="form-control" placeholder="Số vàng">
                <small>Số vàng bạn đã giao dịch với NPC</small>
              </div>

              <div class="form-group">
                <label>Số vàng web</label>
                <input type="text" name="vang" id="vangweb" class="form-control" placeholder="" readonly value="0">
                <small>Số vàng trên web nhận được sau khi nạp</small>
              </div>
              
              <div class="form-group ">
              <label for="">Mã captcha: </label>
              <img id="img_napvang" src="" width="140" height="30" alt="captcha" class="img-thumbnail mb-1" onclick="dn.to({users : {captcha : {true : 2}}})">
              <input type="captcha" class="form-control" id="captcha_napvang" name="captcha" placeholder="Nhập mã captcha">
            </div>

              <div id="alert"></div>
              <div class="form-group">
                <button class="form-control btn btn-info font-weight-bold text-uppercase" type="button" id="btn" onclick="napvang()"> Nạp ngay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-7" id="vitri">
        <div class="form-group">
          <a class="btn btn-info form-control font-weight-bold text-white readonly">Ví trí nhân vật nhận vàng</a>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-response text-center table-striped">
            <thead class="thead-light">
              <tr>
                <th scope="col">Máy chủ</th>
                <th scope="col">Nhân vật</th>
                <th scope="col">Địa điểm</th>
                <th scope="col">Khu vực</th>
                <th scope="col">Quy đổi</th>
              </tr>
            </thead>
            <tbody id="listserver">
                    </tbody>
          </table>
         
        </div>
      </div>
    </div>
    <div class="row">
      <div class="alert alert-info col" style="margin-top: 25px; margin-bottom: 5px">
        <h5>Lịch sử giao dịch</h5>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered table-response text-center">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Server</th>
              <th scope="col">Nhân vật</th>
              <th scope="col">Số vàng</th>
              <th scope="col">Vàng web</th>
            </tr>
          </thead>
          <tbody id="lichsugd">
                   </tbody>
        </table>
        
      </div>
    </div>
  `;

    $("#ducnghia").html(html);
    data.npc.forEach(e => {
      if(e.server == data.server)
      {
        $("#option_server").append(`
        <option value="`+e.server+`">Vũ trụ `+e.server+`</option>
        `);
        $("#listserver").append(`
        <tr>
            <td>`+e.server+`</td>
            <td>`+e.name+`</td>
            <td>Vách núi KaKarot</td>
            <td> `+e.khu+`</td>
            <td>x`+e.value+`</td>
        </tr>
        `);
      }
    });
    data.list.forEach(e => {
        $("#lichsugd").append(`
            <tr>
                <td>`+e.id+`</td>
                <td>`+e.thoigian+`</td>
                <td>`+e.server+`</td>
                <td>`+e.name+`</td>
                <td>`+number_format(e.vang_game)+`</td>
                <td>`+number_format(e.vang)+`</td>
            </tr>
        `);
    });
    let tile = data.npc[0].value;
    input = 0;
    $("select#option_server").change(function() {
        var getmaychu = $("#option_server").val();
        tile = data.npc.find(element => element.server == getmaychu).value;
        tinhtien();
    });
    $('#vangnap').keyup(function() {
        input = $("#vangnap").val();
        if (input > 500000000) {
            $("#vangnap").val(500000000);
            input = $("#vangnap").val();
        }
        tinhtien();
    });
    let tinhtien = function()
    {
        $("#vangweb").val(number_format(Math.round(input*tile)));
    }

    $("select#hinhthuc").change(function() {
        var hinhthuc = $("#hinhthuc").val();
        loading();
        if(hinhthuc == 'tsr') dn.to({ users : { pay : { thesieure : true } } });
        else if(hinhthuc == 'vangnro') dn.to({ users : { pay : { napvang : true } } });
        else if(hinhthuc == 'card') dn.to({ users : { pay : { card : true } } });
        else if(hinhthuc == 'momo') dn.to({ users : { pay : { momo : true } } });
    });
}


function napvang()
{
    let vang = $("#vangnap").val() >> 0;
    let name = $("#name").val();
    let server = $("#option_server").val();
    let code = $("#captcha_napvang").val();
    if(name.length <=3 || vang <=0)
    {
        msg('Vui lòng nhập đầy đủ thông tin')
    }
    else 
    {
        loading();
        dn.to({
            users :
            {
                pay :
                {
                    actionvang :
                    {
                        vang : vang,
                        name : name, 
                        server : server,
                        code : code,
                    }
                }
            }
        });
    }

};


let napthoi = function()
{
    let selectserver = $("#option_server").val();
    let name = $("#name").val();
    let vangnap = $("#vangnap").val();
    if(selectserver <=0 || selectserver > 9)
    {
      msg('Máy chủ không hợp lệ')
    }
    else 
    if(name.length <=3 || name.length >=15)
    {
      msg('tên nhân vật không hợp lệ')
    }
    else 
    if(vangnap <1)
    {
      msg('Số thỏi vàng không hợp lệ')
    }
    else 
    {
      loading();
      dn.to({
        users : {
          pay : {
            action_napthoi : {
              server : selectserver,
              name : name,
              thoi : vangnap,
            }
          }
        }
      })
    }
}