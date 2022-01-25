<!DOCTYPE html>
<html lang="vi">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
<title>Admin - Control Admin</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="description" content="Control admin From since04." />
<meta name="keywords" content="flat ui, admin Admin , Responsive, Landing, Bootstrap, App, Template, Mobile, iOS, Android, apple, creative app">
<meta name="author" content="ducnghia" />

<link rel="icon" href="https://colorlib.com/polygon/admindek/files/assets/images/favicon.ico" type="image/x-icon">

<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Quicksand:500,700" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

<link rel="stylesheet" href="css/waves.min.css" type="text/css" media="all">

<link rel="stylesheet" type="text/css" href="css/feather.css">

<link rel="stylesheet" type="text/css" href="css/font-awesome-n.min.css">

<link rel="stylesheet" href="css/chartist.css" type="text/css" media="all">

<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/widget.css">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">
</head>
<body>

    <style>
        .lds-roller {
        position: relative;
        width: 80px;
        height: 80px;
        display: flex;
        z-index: 1000;
        margin: auto;
        top: 50%;
          right: 0;
          bottom: 0;
          left: 0;
      }
      .lds-roller div {
        animation: lds-roller 1.0s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 40px 40px;
      }
      .lds-roller div:after {
        content: " ";
        display: block;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #ec0a0a;
        margin: -4px 0 0 -4px;
      }
      .lds-roller div:nth-child(1) {
        animation-delay: -0.036s;
      }
      .lds-roller div:nth-child(1):after {
        top: 63px;
        left: 63px;
      }
      .lds-roller div:nth-child(2) {
        animation-delay: -0.072s;
      }
      .lds-roller div:nth-child(2):after {
        top: 68px;
        left: 56px;
      }
      .lds-roller div:nth-child(3) {
        animation-delay: -0.108s;
      }
      .lds-roller div:nth-child(3):after {
        top: 71px;
        left: 48px;
      }
      .lds-roller div:nth-child(4) {
        animation-delay: -0.144s;
      }
      .lds-roller div:nth-child(4):after {
        top: 72px;
        left: 40px;
      }
      .lds-roller div:nth-child(5) {
        animation-delay: -0.18s;
      }
      .lds-roller div:nth-child(5):after {
        top: 71px;
        left: 32px;
      }
      .lds-roller div:nth-child(6) {
        animation-delay: -0.216s;
      }
      .lds-roller div:nth-child(6):after {
        top: 68px;
        left: 24px;
      }
      .lds-roller div:nth-child(7) {
        animation-delay: -0.252s;
      }
      .lds-roller div:nth-child(7):after {
        top: 63px;
        left: 17px;
      }
      .lds-roller div:nth-child(8) {
        animation-delay: -0.288s;
      }
      .lds-roller div:nth-child(8):after {
        top: 56px;
        left: 12px;
      }
      @keyframes lds-roller {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      .chathtml {
        border: 2px solid #dedede;
        background-color: #fff0f0;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
      }
      
      
      .chathtml::after {
        content: "";
        clear: both;
        display: table;
      }
      
      .chathtml img {
        float: left;
        max-width: 60px;
        width: 100%;
        margin-right: 2px;
        border-radius: 50%;
      }
      
      </style>

<div id="loading" style="background: rgba(0, 0, 0, 0.4);
top: 0px;
position: fixed;
width: 100%;
height: 100%;
z-index: 1000;">
  <div style="width: 100%;height: 100%;z-index: 440000;position: fixed;">
  <div class="lds-roller" style=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
</div>

<div class="loader-bg">
<div class="loader-bar"></div>
</div>

<div id="pcoded" class="pcoded">
<div class="pcoded-overlay-box"></div>
<div class="pcoded-container navbar-wrapper">

<nav class="navbar header-navbar pcoded-header">
<div class="navbar-wrapper">
<div class="navbar-logo">
<a href="#" onclick="load_index()">
Since04
</a>
<a class="mobile-menu" id="mobile-collapse" href="#!">
<i class="feather icon-menu icon-toggle-right"></i>
</a>
<a class="mobile-options waves-effect waves-light">
<i class="feather icon-more-horizontal"></i>
</a>
</div>

</div>
</nav>






<div class="pcoded-main-container">
<div class="pcoded-wrapper">

<nav class="pcoded-navbar">
<div class="nav-list">
<div class="pcoded-inner-navbar main-menu" id="loading_data">
  <ul class="pcoded-item pcoded-left-item">
    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
    <span class="pcoded-mtext">Quản lý người dùng</span>
    </a>
    <ul class="pcoded-submenu">
    
    <li class=" ">
    <a href="#" onclick="load_nguoichoi()" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Danh sách người chơi</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="load_nguoichoi_ban()" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Người chơi bị khoá</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {lsgd : {uid : 1}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Kiểm tra lịch sử</span>
    </a>
    </li>


    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : { taobot : true }} })" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Quản lý BOT</span>
    </a>
    </li>

    <li class=" ">
      <a href="#" onclick="napxu()" class="waves-effect waves-dark">
      <span class="pcoded-mtext">Nạp Xu</span>
      </a>
      </li>

    </ul>
    </li>


    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Quản lý Nạp Vàng</span>
    </a>
    <ul class="pcoded-submenu">
    
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {napvang : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Tất cả</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {napvang : {type : 1}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Đơn chưa nạp</span>
    </a>
    </li>

    </ul>
    </li>

    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Quản lý Rút vàng</span>
    </a>
    <ul class="pcoded-submenu">
    
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {rutvang : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Tất cả</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {rutvang : {type : 1}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Đơn chưa rút</span>
    </a>
    </li>

    </ul>
    </li>

    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Cổng nạp khác</span>
    </a>
    <ul class="pcoded-submenu">
    
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {momo : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Ví MoMo</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {thesieure : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Thẻ siêu rẻ</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {thecao : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Thẻ thẻ cào</span>
    </a>
    </li>

    </ul>
    </li>


    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Quản lý Giftcode</span>
    </a>
    <ul class="pcoded-submenu">
    
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {giftcode : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Danh sách giftcode</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {log_giftcode : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Code đã sử dụng</span>
    </a>
    </li>

    </ul>
    </li>

    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Thống kê phiên</span>
    </a>
    <ul class="pcoded-submenu" id="insert_phien">
    
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {phien : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Tất cả phiên</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {phien : {type : 999}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Phiên 24/24</span>
    </a>
    </li>
    
    

    </ul>
    </li>

    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Thống kê cược</span>
    </a>
    <ul class="pcoded-submenu" id="list_phien_cuoc">
    
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {cuoc : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Tất cả</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {cuoc : {uid : 1}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Tìm kiếm UID/Server/Phiên</span>
    </a>
    </li>
    
    

    </ul>
    </li>


    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Chuyển tiền</span>
    </a>
    <ul class="pcoded-submenu" id="list_phien_cuoc">
    
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {chuyentien : {ducnghia : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Tất cả</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {chuyentien : {uid : 1}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Tìm kiếm theo ID</span>
    </a>
    </li>
    
    

    </ul>
    </li>

    <li class="pcoded-hasmenu">
    <a href="javascript:void(0)" class="waves-effect waves-dark">
    <span class="pcoded-micon">
    <i class="feather icon-box"></i>
    </span>
<span class="pcoded-mtext">Cài đặt</span>
    </a>
    <ul class="pcoded-submenu" id="list_phien_cuoc">
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {acc : {type : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Danh sách Acc</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {cauhinhnap : {ducnghia : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cấu hình nạp từng máy chủ</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {configbot : {ducnghia : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cài đặt BOT nạp</span>
    </a>
    </li>
    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {configrut : {ducnghia : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cài đặt BOT rút</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {atm : {atm : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cài đặt ATM</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {thecaox : {atm : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cài đặt thẻ cào</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {configchuyentien : {atm : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cài đặt chuyển tiền</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {notice : {atm : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cài đặt thông báo</span>
    </a>
    </li>

    <li class=" ">
    <a href="#" onclick="loading();dn.to({admin : {log : {settingbot : {atm : 0}}}})" class="waves-effect waves-dark">
    <span class="pcoded-mtext">Cài đặt BOT</span>
    </a>
    </li>
    
    
    

    </ul>
    </li>

   

<li class="pcoded-hasmenu">
  <a href="javascript:void(0)" class="waves-effect waves-dark">
  <span class="pcoded-micon">
  <i class="feather icon-box"></i>
  </span>
<span class="pcoded-mtext">CÔNG CỤ</span>
  </a>
  <ul class="pcoded-submenu" id="">
  
    <li class=" ">
      <a href="#" onclick="tool_taixiu()" class="waves-effect waves-dark">
      <span class="pcoded-mtext">Tài xỉu - VXMM</span>
      </a>
      </li>
  <li class=" ">
  <a href="#" onclick="load_game()" class="waves-effect waves-dark">
  <span class="pcoded-mtext">Chẵn lẻ</span>
  </a>
  </li>
  
  

  </ul>
  </li>

<li class="">
<a href="#" onclick="load_sms()" class="waves-effect waves-dark">
<span class="pcoded-micon">
<i class="feather icon-upload-cloud"></i>
</span>
<span class="pcoded-mtext">Gửi tin nhắn</span>
</a>
</li>


    </ul>
<ul class="pcoded-item pcoded-left-item">
<li class="pcoded-hasmenu">
<a href="javascript:void(0)" class="waves-effect waves-dark">
<span class="pcoded-micon">
<i class="feather icon-box"></i>
</span>
<span class="pcoded-mtext">Admin</span>
</a>
<ul class="pcoded-submenu">

<li class=" ">
<a href="#" onclick="index_login()" class="waves-effect waves-dark">
<span class="pcoded-mtext">Đăng nhập</span>
</a>
</li>
</ul>
</li>




</ul>

</div>
</div>
</nav>

<div class="pcoded-content" id="ducnghia">






</div>



</div>
</div>
</div>
</div>

<script src="/vendor/jquery/jquery.min.js"></script>
<script data-cfasync="false" src="js/email-decode.min.js"></script>
<script type="d2d1d6e2f87cbebdf4013b26-text/javascript" src="js/jquery.min.js"></script>
<script type="d2d1d6e2f87cbebdf4013b26-text/javascript" src="js/jquery-ui.min.js"></script>
<script type="d2d1d6e2f87cbebdf4013b26-text/javascript" src="js/popper.min.js"></script>
<script type="d2d1d6e2f87cbebdf4013b26-text/javascript" src="js/bootstrap.min.js"></script>

<script src="js/waves.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>

<script type="d2d1d6e2f87cbebdf4013b26-text/javascript" src="js/jquery.slimscroll.js"></script>

<script src="js/jquery.flot.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="js/jquery.flot.categories.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="js/curvedlines.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="js/jquery.flot.tooltip.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>

<script src="js/chartist.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>

<script src="js/amcharts.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="js/serial.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="js/light.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>

<script src="js/pcoded.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="js/vertical-layout.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script type="d2d1d6e2f87cbebdf4013b26-text/javascript" src="js/custom-dashboard.min.js"></script>
<script type="d2d1d6e2f87cbebdf4013b26-text/javascript" src="js/script.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js" integrity="sha512-efUTj3HdSPwWJ9gjfGR71X9cvsrthIA78/Fvd/IN+fttQVy7XWkOAXb295j8B3cmm/kFKVxjiNYzKw9IQJHIuQ==" crossorigin="anonymous"></script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>

<script src="js/rocket-loader.min.js" data-cf-settings="d2d1d6e2f87cbebdf4013b26-|49" defer=""></script></body>

<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="https://cdn.datatables.net/buttons/1.7.0/js/dataTables.buttons.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="https://cdn.datatables.net/datetime/1.0.3/js/dataTables.dateTime.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="https://cdn.datatables.net/select/1.3.3/js/dataTables.select.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>
<script src="https://editor.datatables.net/extensions/Editor/js/dataTables.editor.min.js" type="d2d1d6e2f87cbebdf4013b26-text/javascript"></script>

  <!-- Websocket -->
<script src="Models/Websocket.js?tyxccccx" data-admin="ducnghia"></script>
<!-- With from Since04 -->
</html>
