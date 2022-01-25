let BODYGAME = function()
{
    let html = `<div class="modal fade" id="modalHuongDan" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Hướng dẫn</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <strong>Hệ thống chẳn lẻ Game Ngọc Rồng Online</br>
            Lấy chức năng "Con số may mắn" trong game làm kết quả</br>
            Bạn đều có thể đặt cược, lấy kết quả ở Server tùy thích
          </strong></br>
          <strong style="color: red">Thể lệ gồm các trò chơi:</strong></br>
          - <strong style="color: red">Dữ đoán chẵn lẻ</strong>: kết quả <strong>số chẵn</strong> hoặc <strong>số lẻ</strong></br>
          <strong style="color: green">Tỷ lệ: x1.95 (đặt 10tr được 19.5tr vàng)</strong></br>
          <strong>Ví dụ</strong> con số may mắn là 1 số chẵn như <strong style="color: blue">0, 2, 4, 6, 8, 10, 12</strong>... thì đặt bên <strong style="color: blue">Chẵn thắng</strong>, ngược lại con số may mắn là số lẻ như <strong style="color: blue">1, 3, 5, 7, 9, 11...</strong> thì đặt bên <strong style="color: blue">Lẻ thắng</strong></br>
          - <strong style="color: red">Dữ đoán tài xỉu</strong>: kết quả <strong> từ 50-99 là tài</strong> còn <strong>từ 0-49 là xỉu</strong></br>
          <strong style="color: green">Tỷ lệ: x1.95 (đặt 10tr được 19.5tr vàng)</strong></br>
          <strong>Ví dụ</strong> con số may mắn là 1 số từ 0-49 như <strong style="color: blue">0, 1, 2, 35, 48, 49</strong>... thì đặt bên <strong style="color: blue">Xỉu thắng</strong>, ngược lại con số may mắn là 1 số từ 50-99 như <strong style="color: blue">50, 51, 52, 67, 87, 98, 99</strong> thì đặt bên <strong style="color: blue">Tài thắng</strong></br>
          </br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>`;
    
 
    html+=`
   <div class="modal fade" id="thongtin_box" role="dialog">
     <div class="modal-dialog" id="">
     
       <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="">THÔNG TIN</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body" style="overflow-y: auto;
         display: block;
         height: calc(80vh - 190px);" id="">
           <div class="table-responsive">
             <table class="table">
                 <thead class="">
                     <tr id="head_table_index">
                         
                     </tr>
                 </thead>
                 <tbody class="border-primary" id="body_tablue_index">
                     
                 </tbody>
             </table>
 
         </div>
         </div>
         <div class="modal-footer">
           <center id="button_them"></center>
         </div>
       </div>
       
     </div>
   </div>`;

    
    html+= ` <!--  log cược -->
    <div class="modal fade" id="Tx_Log_cuoc" role="dialog">
     <div class="modal-dialog" id="with_cuoctx">
     
       <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="">LỊCH SỬ CƯỢC</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body" style="overflow-y: auto;
         display: block;
         height: calc(100vh - 190px);" id="">
           <div class="table-responsive">
             <table class="table table-dark">
                 <thead class="">
                     <tr>
                         <th scope="col">Thời gian</th>
                         <th scope="col">Phiên</th>
                         <th scope="col">Cửa chọn</th>
                         <th scope="col">Hoàn trả</th>
                         <th scope="col">Xu thắng</th>
                         <th scope="col">trạng thái</th>
                     </tr>
                 </thead>
                 <tbody class="border-primary" id="log_cuoc_tx">
                     
                 </tbody>
             </table>
 
         </div>
         </div>
         <div class="modal-footer">
           <center id="trang_tx"></center>
         </div>
       </div>
       
     </div>
   </div>`;

   html+=`
   <div class="modal fade" id="Tx_Log_cuoc_phien" role="dialog">
     <div class="modal-dialog" id="with_cuoctxphien">
     
       <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="">LỊCH PHIÊN</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body" style="overflow-y: auto;
         display: block;
         height: calc(80vh - 190px);" id="">
           <div class="table-responsive">
             <table class="table table-dark">
                 <thead class="">
                     <tr>
                         <th scope="col">Thời gian</th>
                         <th scope="col">Phiên</th>
                         <th scope="col">Kết Quả</th>
                         <th scope="col">Xúc Sắc</th>
                     </tr>
                 </thead>
                 <tbody class="border-primary" id="log_cuoc_tx_phien">
                     
                 </tbody>
             </table>
 
         </div>
         </div>
         <div class="modal-footer">
           <center id="trang_tx_phien"></center>
         </div>
       </div>
       
     </div>
   </div>`;

   html+=`<div class="modal fade" id="Modal_thongbao" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="">THÔNG BÁO</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body" id="data_thongbao">
         
       </div>
       
     </div>
   </div>
 </div>`;
 html+=`<div class="modal fade" id="modal_hopthu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog" role="document">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title" id="title_hopthu">HỘP THƯ</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body" id="data_hopthu">
       
     </div>
     <div class="modal-footer" id="trang_hopthu">
       
     </div>
   </div>
 </div>
</div>`;
html+=` <div id="loading" style="background: rgba(0, 0, 0, 0.4);
top: 0px;
position: fixed;
width: 100%;
height: 100%;
z-index: 1000;">
  <div style="width: 100%;height: 100%;z-index: 440000;position: fixed;">
  <div class="lds-roller" style=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
</div>`;





  
html+=`  <div class="container-fluid" style="padding: 0;padding: 0;
position: fixed;
z-index: 300;
top: 0;">
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container">
      <a class="navbar-brand" href="#" onclick="loading();load_index()" style="margin-top: 0px">
        <img src="/vendor/logo-web.png" alt="Logo" style="width:140px;">
      </a>
      <button onclick="clickbutton()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto" id="since04_menu">
         
          
        </ul>
                    <ul class="navbar-nav ml-auto" id="guest">
            <li class="nav-item li-login">
              <a class="nav-link text-uppercase font-weight-bold btn btn-outline-light btn-login" href="#" onclick="load_login()" style="color: white"><i class="fas fa-sign-in-alt"></i> ĐĂNG NHẬP</a>
            </li>
            <li class="nav-item">
              <a onclick="load_reg()" class="nav-link text-uppercase font-weight-bold btn btn-outline-light btn-register" href="#" style="color: white"><i class="fas fa-user-plus"></i> ĐĂNG KÍ</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" id="users" style="display: none;">
            <li class="nav-item li-login">
              <a class="nav-link text-uppercase font-weight-bold btn btn-outline-light btn-login" href="#" style="color: white" onclick="loading();dn.to({users : {nguoichoi : { info : true}}})"><i class="fas fa-user"></i> xu, <b id="vang" class="mymoney">0</b>$</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase font-weight-bold btn btn-outline-light btn-register" href="#" onclick="out()" style="color: white"><i class="fas fa-sign-out-alt"></i> THOÁT</a>
            </li>
          </ul>
                  <div id="bottomHeader"></div>
      </div>
    </div>
  </nav>
</div>`;




html+=`<nav class="menu" id="menubebe" style="left: 96%;">
 

</nav><div class="main-game" id="cvs_ga"></div>
`;



 html+= `<div class="container" id="ducnghia" style="">
  

 </div>`;


 
 html+= `<style>`;
html+=`.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}
 
.text-info {
  color: #5d2700!important;
}

.card-header:first-child {
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
.card-header {
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
.border-info {
  border-color: #17a2b8!important;
}

.panel-title {
    font-family: 'SVN-Quadrat';
    color: #1d1c18;
    font-weight: bold;
    font-size: 25px;
    text-align: center!important;
    text-transform: uppercase;
}
.panel-heading {
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #3c8dbc;
    border: 1px solid #3c8dbc!important;
    color: red;
}


.text-danger {
  color: #dc3545!important;
}
.text-primary {
  color: #007bff!important;
}

.bg-warning {
  background-color: #ffc107!important;
}
.bg-danger {
  background-color: #dc3545!important;
}
.bg-success {
  background-color: #28a745!important;
}
.text-white {
  color: #fff!important;
}
.bg-info {
  background-color: green;
}
@-webkit-keyframes hue
{
100% { -webkit-filter:hue-rotate(360deg); }
} 
`;
 html+=`</style>`;


 /* BANG HỘI */

 html+=`<style>
 #divBangHoi {
  display: block;
  position: fixed;
  bottom: 15px;
  left: 5px;
  z-index: 1000;
  cursor: pointer;
}
 #ptItemBieuTuong {
   overflow-y: auto;
   height: 195px;
   overflow-x: hidden;
 }
 #ptItemBieuTuong2 {
  overflow-y: auto;
  height: 195px;
  overflow-x: hidden;
}

 #ptHeader {
   padding: 7px 0;
   text-align: center;
 }

 .ptBtnHeader {
   background-color: #EEEBE6;
   border: none;
   width: 70px;
   padding: 0;
 }

 #ptTitle {
   font-weight: bold;
   text-align: center;
   padding-top: 10px;
   padding-bottom: 10px;
   color: #501c04;
   margin: 0;
 }

 .ptIcon {
   background-color: rgb(133, 70, 7);
   text-align: center;
   padding: 0;
 }

 .ptItem {
   display: inline-block;
   width: 100%;
   border-top: 1px solid #D9C8B4;
   background-color: #EEEBE6;
   cursor: pointer;
 }

 .ptName {
   padding: 0;
   margin: 0;
   font-weight: bold;
   color: rgb(46, 43, 38);
 }

 .ptPoint {
   color: royalblue;
 }

 .ptAlert {
   padding-top: 5px;
   text-align: center;
   background-color: #FEE4C6;
   width: 96%;
   border-radius: 7px;
   border: 1px black solid;
   z-index: 999;
   position: absolute;
   top: 130px;
   left: 2%;
 }

 .ptAlertTitle {
   font-weight: bold;
   padding-top: 15px;
 }

 .ptAlertInput {
   border: none;
   border-radius: 5px;
   padding: 3px 10px;
   width: 85%;
 }

 .ptAlertFooter {
   margin-top: 10px;
   padding-bottom: 15px;
 }

 .ptAlertBtn {
   border-radius: 7px;
   border: 1px black solid;
   background-color: #E17B3A;
   font-weight: bold;
   color: #532905;
   width: 75px;
 }

 .ptBieuTuongGold {
   padding-top: 15px;
   cursor: pointer;
 }

 .ptBieuTuongGold:hover {
   color: red;
 }

 .alertInfoContent {
   background-color: white;
   border: 1px solid black;
   border-radius: 7px;

 }

 .alertInfo {
   z-index: 999;
   position: absolute;
   width: 80%;
   left: 2%;
   top: 20%;
 }

 .ptScreenName {
   padding: 0;
   margin: 0;
   font-weight: bold;
 }

 .ptScrenText {
   color: black;
 }

 .ptItemBtn {
   border-radius: 5px;
   background-color: #cc7e49;
   color: #532905;
   font-weight: bold;
   padding: 3px 7px;
   border: 1px solid #532905;
 }
</style>
`;
 html+=`
 <div class="modal fade" id="modalBangHoi" tabindex="-1" role="dialog" aria-labelledby="modalBangHoi" aria-hidden="true">
 <div class="modal-dialog" role="document">
   <div class="modal-content">
     <div class="modal-body" style="padding: 0; max-height: 565px; height: 565px; overflow-y: auto; background-color: #D9C8B4; overflow-x: hidden;" id="banghoiContent">
       <div style="padding-top: 3px; background-color: rgb(235, 226, 214);">
         <div class="row" style="position: relative;" id="ptInfo"></div>
       </div>
       <div id="ptHeader"></div>
       <div style="background-color: #eeeae3">
         <p id="ptTitle"></p>
       </div>
       <div class="ptList" style="position: relative;" id="ptList">
       </div>
       <div id="alertMain">
       
       <div class="ptAlert" id="nhiemvu0" style="display: none;">
       
       </div>

       <div class="ptAlert" id="ptdoiten" style="display: none;">
    <div class="ptAlertTitle">
      <p>Nhập tên bang mới</p>
    </div>
    <div id="">
      <input type="text" class="ptAlertInput" id="tenbangmoi" placeholder="Tên bang mới" autocomplete="off">
    </div>
    <div class="ptAlertFooter">
      <button class="ptAlertBtn" onclick="doitenbang();">OK</button>
      <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
    </div>
    </div>

    <div class="ptAlert" id="ptxacnhandoiten" style="display: none;">
    <div class="ptAlertTitle" style="padding-left: 5px; padding-right: 5px">
      <p>bạn có chắc chắn muốn đổi tên bang mới là <span id="checknewten"></span> Không ? Phí 1 tỷ vàng ?</p>
    </div>
    <div class="ptAlertFooter">
      <button class="ptAlertBtn" onclick="xacnhandoiten();">OK</button>
      <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
    </div>
    </div>

       <div class="ptAlert" id="phongchubang" style="display: none;">
    <div class="ptAlertTitle" style="padding-left: 5px; padding-right: 5px">
      <p>Bạn có chắc muốn chọn <span id="phongchu_new"></span> làm chủ bang không  ?</p>
    </div>
    <div class="ptAlertFooter">
      <button class="ptAlertBtn" onclick="xacnhanphongchu();">OK</button>
      <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
    </div>
    </div>
       
       <div class="ptAlert" id="ptAlertKickMember" style="display: none;">
    <div class="ptAlertTitle" style="padding-left: 5px; padding-right: 5px">
      <p>Bạn có chắc chắn muốn kick <span id="ptAlertKickMemberName"></span> khỏi bang hội không ? Điểm thành tích sẽ bị trừ ?</p>
    </div>
    <div class="ptAlertFooter">
      <button class="ptAlertBtn" onclick="confirmKickMember();">OK</button>
      <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
    </div>
    </div>

    <div class="ptAlert" id="ptAlertRoiBang" style="display: none;">
    <div class="ptAlertTitle">
      <p>Bạn có chắc chắn muốn rời bang không?</p>
    </div>
    <div class="ptAlertFooter">
      <button class="ptAlertBtn" onclick="ptOut()">OK</button>
      <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
    </div>
    </div>

    <div class="ptAlert" id="ptAlertChatBang" style="display: none;">
    <div class="ptAlertTitle">
      <p>Nhập nội dung cần chat</p>
    </div>
    <div id="">
      <input type="text" class="ptAlertInput" id="ptAlertChatBangInput" placeholder="Nội dung chat" autocomplete="off">
    </div>
    <div class="ptAlertFooter">
      <button class="ptAlertBtn" onclick="chatBang();">OK</button>
      <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
    </div>
    </div>

    <div class="ptAlert" id="ptAlertThongBao_Div" style="display: none;">
    <div class="ptAlertTitle">
      <p id="ptAlertThongBao_Title"></p>
    </div>
    <div class="ptAlertFooter">
      <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
    </div>
    </div>
    <div class="ptAlert" id="ptAlertKhauHieu" style="display: none;">
      <div class="ptAlertTitle">
        <p>Nhập khẩu hiệu</p>
      </div>
      <div id="">
        <input type="text" class="ptAlertInput" placeholder="Nhập khẩu hiệu" id="ptAlertInputKhauHieu">
      </div>
      <div class="ptAlertFooter">
        <button class="ptAlertBtn" onclick="submitKhauHieu()">OK</button>
        <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
      </div>
    </div>
       
    <div class="ptAlert" id="ptthaydoibieutuong" style="display: none;">
       <div class="ptAlertTitle">
         <p>Chọn biểu tượng muốn đổi</p>
       </div>
       <div id="">
         <div class="ptItemBieuTuong;" id="ptItemBieuTuong2">
               


               


            

             
             </div>
             
       </div>
       <div class="ptAlertFooter">
         <button class="ptAlertBtn" onclick="xacnhanthaydoi(); $(this).parent().parent().hide();">OK</button>
         <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
       </div>
       </div>
       
       <div class="ptAlert" id="ptAlertLapBang" style="display: none;">
       <div class="ptAlertTitle">
         <p>Chọn biểu tượng bang hội</p>
       </div>
       <div id="">
         <div class="ptItemBieuTuong;" id="ptItemBieuTuong">
               


               


            

             
             </div>
             
       </div>
       <div class="ptAlertFooter">
         <button class="ptAlertBtn" onclick="$('#ptAlertTaoBang').show(); $(this).parent().parent().hide();">OK</button>
         <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
       </div>
       </div>
   
       <div class="ptAlert" id="ptAlertTimBang" style="display: none;">
       <!----------->

       <!---------->
       <div class="ptAlertTitle">
         <p>Nhập tên bang hội cần tìm</p>
       </div>
       <div id="">
         <input type="text" class="ptAlertInput" placeholder="Tên bang" id="ptAlertInput_TimBang" autocomplete="off">
       </div>
       <div class="ptAlertFooter">
         <button class="ptAlertBtn" onclick="timbang_submit()">OK</button>
         <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
       </div>
       </div>
   
       <div class="ptAlert" id="ptAlertTaoBang" style="display: none;">
       <div class="ptAlertTitle">
         <p>Nhập tên bang hội cần tạo</p>
       </div>
       <div id="">
         <input type="text" class="ptAlertInput" placeholder="Tên bang" id="ptAlertInput_TaoBang" autocomplete="off">
       </div>
       <div class="ptAlertFooter">
         <button class="ptAlertBtn" onclick="taobang_submit();">OK</button>
         <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
       </div>
       </div>
   
       <div class="ptAlert" id="ptAlertThongBao_Div" style="display: none;">
       <div class="ptAlertTitle">
         <p id="ptAlertThongBao_Title"></p>
       </div>
       <div class="ptAlertFooter">
         <button class="ptAlertBtn" onclick="$(this).parent().parent().hide();">Đóng</button>
       </div>
       </div>
   
       <div class="alertInfo" id="alertInfoPt" style="display: none;">
       
       </div>
       </div>
     </div>
   </div>
 </div>
</div>

 `;

 /* since2004 */
html+=`<div id="divBangHoi">
<a class="btn btn-danger font-weight-bold text-uppercase" type="button" onclick="loading();dn.to({users : {bang : {index : true}}})" href="#" style="padding-right: 5px"><img src="" alt="" style="width: auto; height: 22px; display: inline-block"> Bang hội <span class="badge badge-primary badge-pill" id="messageCount">0</span></a>
</div>`;
 html+= `
 <footer class="container-fluid bg-dark text-left text-lg-start text-white" style="margin-top: 50px;">
  <div class="container">
    <div class="row" id="row-footer">
      <div class="col-lg-6">
        <div class="mb-4 mb-md-0">
          <h5 class="text-uppercase">VỀ NRO.CLUB</h5>
          <p>
            Hệ thông thử vận may dựa trên kết quả con số may mắn của trò chơi Game Ngọc Rồng Online.
            <br> Minh bạch công khai, tự động an toàn bảo mật tuyệt đối 24/24<br>
             <a href="#" onclick="qquydinhsudung()"><b>Điều Khoản & Quy định</b></a> | <a href="https://www.facebook.com/Nro.Club/" style=""><b>Page: Hỗ trợ khách hàng Nro.Club</b></a>
          </p>

        </div>
      </div>
      <div class="col-lg-6">
        <div class="mb-4 mb-md-0">
          <h5 class="text-uppercase">NRO.CLUB ĐƯỢC</h5>
          <p style="margin-bottom: 0;">
            Review đảm bảo uy tín bởi các youtuber nổi tiếng như
          </p>
          <ul style="padding-left: 18px">
            <li> <a href="https://www.youtube.com/c/View6saoTV" style="color: white">View6sao - 228.1k người đăng kí</a></li>
            <li> <a href="https://www.youtube.com/channel/UCPMuMDbOBxeYmU1LNVsnNcw" style="color: white">Lã Long - hơn 100k người đăng kí</a></li>
            <li> <a href="https://www.youtube.com/watch?v=2KgryAMakOk" style="color: white">
           Cần Broly  - hơn 20k người đăng kí</a></li>
            <li> <a href="https://www.youtube.com/watch?v=WOstvnljNd8" style="color: white">
            Hồng Ân Gaming  - hơn 56k người đăng kí</a></li>
            <li> <a href="https://www.youtube.com/watch?v=9GN3meWrgdU" style="color: white">
            Văn Quỳnh Vlog  - hơn 15k người đăng kí</a></li>
            <li> <a href="https://www.youtube.com/watch?v=9BUk9CPk5bQ" style="color: white">
            Bestxayd4 TV  - hơn 43.3k người đăng kí</a></li>
            
           
           
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center"><small>Nro.Club V2.0.1 <b>official</b> - <font color="red">NodeJS</font> - <b>V. 14.2</b></small></div>
  </div>
</footer>`;




$("body").html(html + $("body").html());
}