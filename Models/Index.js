let demmang = 0;
let youtuber = ['Lã Long','View6sao','Hồng Ân gaming','Văn Quỳnh Vlog','Bestxayd4 TV','Cần Broly'];
setInterval(function(){ 
  $("#content").html(youtuber[demmang])
  demmang++;
  if(demmang >= youtuber.length) demmang = 0;
 }, 500);

function load_index(data) {
  if(!data)
  {
      dn.to({
          users : {
            home : true
          }
        })
      return false;
  }
  head();
  head_menu('index')
  let chuaserver= ``;
  if(data.server == -1)
  {
      chuaserver = `<div class="alert alert-primary" role="alert">Tài khoản của bạn chưa chọn Máy chủ game. Vui lòng chọn máy chủ để tiếp tục (Nếu còn xu cũ vui lòng liên hệ fanpage để quy đổi ra xu mới):
    <select class="form-control" id="void_server">
    
    </select> <button class="btn btn-success" onclick="btn_server()">Xác nhận</button>
    
</div>`;
  }
  let html = `
  <div class="container">
  <h5 class="text-center mt-4 text-dark" style="margin: 0px;" id="darkMode1">HỆ THỐNG MINI GAME</h5>
  <p class="text-center text-dark" style="margin-bottom: 5px;" id="darkMode2">Được đảm bảo uy tín từ <br><span class="font-weight-bold">Youtuber <span id="content"></span></span> </p>
  <hr style="width: 15%; height: 1px" class="bg-danger">
  <div class="text-center" style="margin-top: 20px">
    <div class="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="fas fa-chevron-circle-down"></i> Chức năng <b id="mail_pc"></b>
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a class="dropdown-item" href="#" onclick="loading();dn.to({ users : { pay : { index : true } } });head_menu('naptien')"><i class="fas fa-money-bill"></i> Nạp vàng</a>
        <a class="dropdown-item" href="#" onclick="loading();dn.to({ users : { pay : { rutvang : true } } });"><i class="fas fa-coins"></i> Rút vàng</a>
        <a class="dropdown-item" href="#" onclick="loading();dn.to({users : {giftcode : {index : {trang : 0}}}})"><i class="fas fa-gifts"></i> Nhập Gift Code</a>
        <a class="dropdown-item"  href="#" onclick="loading();dn.to({users : {qua : {vq : true}}})"><i class="fas fa-cog"></i> Vòng quay</a>
       <a href="#" class="dropdown-item" onclick="loading();dn.to({users : {top : {topxu : true}}})"><i class="fas fa-dice"></i> BXH</a>
       <a href="#" class="dropdown-item" onclick="loading();dn.to({users : {qua : {quavip : {trang : 0}}}})"><i class="fas fa-hand-holding-usd"></i> <span> Quà V.I.P</span>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#" onclick="loading();dn.to({users : {nguoichoi : { info : true}}})"><i class="fas fa-id-badge"></i> Thông tin cá nhân</a>
        <a class="dropdown-item" href="#" onclick="loading();dn.to( { chuyentien : {index : { trang : 0 } }  } );head_menu('chuyentien')"><i class="fa fa-comment-dollar" aria-hidden="true"></i> Chuyển vàng</a>
        <a href="#" class="dropdown-item" onclick="loading();dn.to({users: {mail : {index :  { trang : 0}}}})"><i class="fas fa-mail-bulk"></i> Hộp thư</a>
        

      </div>
    </div>
    <a class="btn btn-primary" id="link-group-facebook" href="https://www.facebook.com/groups/nro.club.9" target="_blank"><i class="fab fa-facebook"></i> Group Facebook</a>
  </div>
  </div>
  <Br>
  <div class="row">
            
            
  <div class="col-md-6">
     `+chuaserver+`
  <div class="card border-info">
      <div class="card-header bg-info text-light border-seccond text-center font-weight-bold">
          DANH MỤC GAME
          </div>
              <div class="panel-body" style="display: inline-flex;
              justify-content: space-around;
              flex-wrap: nowrap;
              width: 100%;
              align-content: center;">


<div style="width: 30%;"><a href="#" onclick="TaiXiuGame()"><img width="100%" src="/vendor/icon/tx.png"></a></div>

<div style="width: 30%;"><a href="#" onclick="load_index2()"><img width="100%" src="/vendor/icon/csmm.png"></a></div>


</div>
                 </div>
<br>
      <div class="card border-info" style="">
  <div class="card-header bg-info text-light border-seccond text-center font-weight-bold">
  THÔNG BÁO
  </div>
              <div class="box-body" id="content_thongbao" style="padding-top: 10px;
              padding-left: 10px;
              overflow-y: auto;
              display: block;
              height: calc(87.5vh - 190px);
              padding-right: 10px;">
                 `+thongbaotext+`
                 </div>
                 </div>
                 <br>
                 </div> 
                 
                 `+chat_function()+`
                  
                  
           
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  <!-- column -->
                  
                  
                  </div>
                  

                  
                  
                  
                  
              </div>
              <script>
                 
              
              scrollSmoothToBottom("chathuht");
            
              </script>



              <div class="row">
    <div class="text-center font-weight-bold" style="margin-top: 50px; margin-bottom: 3px; width: 100%">
      <h5 id="darkMode8" class="text-dark">ĐUA TOP BANG HỘI </h5>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover text-center">
        <thead class="bg bg-warning text-white">
          <tr>
            <th scope="col" style="white-space:nowrap;">Biểu tưởng</th>
            <th scope="col" style="white-space:nowrap;">Bang hội</th>
            <th scope="col" style="white-space:nowrap;">Thành viên</th>
            <th scope="col" style="white-space:nowrap;">Điểm</th>
            <th scope="col" style="white-space:nowrap;">Giải thưởng</th>
          </tr>
        </thead>
        <tbody class="text-dark" id="bodyRankPt">
          
        </tbody>
        
      </table>
      <center><b colspan="10" style="color: red" class="font-weight-bold">Hệ thống tự động cộng vàng vào tài khoản lúc 23h59p59s</b></center>
    </div>
  </div>
  <style>
  #top1 td {
    font-size: 21px !important;
    color: #ff0000;

  }

  #top2 td {
    font-size: 17px !important;
    color: #ff4000;

  }

  #top3 td {
    font-size: 15px !important;
    color: #ff5000;

  }

  </style>
  `;
  $("#ducnghia").html(html);
  let topid = 0;
  data.bang.forEach(e => {
    topid++;
    $("#bodyRankPt").append(`<tr id="top`+topid+`"><td><img src="/vendor/bang/`+e.icon+`.png" style=" max-width: 40px; height: auto; padding-top: 5px" ;="" padding:="" 0;="" margin-bottom:="" 10px"="" alt=""></td> <td>`+e.name+`</td> <td>`+e.MIN+`/`+e.MAX+`</td> <td>`+number_format(e.xu)+`</td> <td>`+number_format(e.thuong)+`/1 người</td> </tr>`);
  });
  if(data.chat.length >=1)
  {
   data.chat.sort(function(a, b) {
     return a.id - b.id;
   });
   data.chat.forEach(c => {
     chatbox(c.name,c.noidung,c.avatar,c.admin);
     
 });
}
  scrollSmoothToBottom("chathuht");
  for(var i = 1; i<=9; i++)
  {
      $("#void_server").append(`<option class="" value="`+i+`">Vũ trụ `+i+`</option>`);
  }
 
}
function btn_server()
{
    let newid = $("#void_server").val();
    loading();
    dn.to({
        users : {
            nguoichoi : {
                chonserver : newid
            }
        }
    })
}