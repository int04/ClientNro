/**
 * Author   : Since04
 * Type     : Express
 *  */ 
 var khongload = false;
 let server = 1;
 var uid = 0;
 var debug = 1;
 var version = (debug == 1) ? Date.now() : 'nexxwx18x6xxxx';
 var WebsocketUrl = 'ws://192.168.1.5:2004/ws';
 let Module = [
     "/Models/body.js?"+version+"",
     "/Models/Index.js?"+version+"",
     "/Models/Reg.js?"+version+"",
     "/Models/Login.js?"+version+"",
     "/Models/Profile.js?"+version+"",
     "/Models/Nap.js?"+version+"",
     "/Models/Chuyentien.js?"+version+"",
     "/Models/Mail.js?"+version+"",
     "/Models/Vongquay.js?"+version+"",
     "/Models/oantuti.js?"+version+"",
     "/Models/Bacay.js?"+version+"",
     "/Models/function.js?"+version+"",
     "/Models/TaiXiu.js?"+version+"",
     "/Models/Index2.js?"+version+"",
     "/Models/Sodu.js?"+version+"",
     "/Models/everday.js?"+version+"",
     "/Models/quydinh.js?"+version+"",
     "/Models/lixi.js?"+version+"",
     "/Models/top.js?"+version+"",
     "/Models/Banghoi.js?"+version+"",
 ];
 
 let chat_function = function()
{
    let html =``;
    /*
    html += `<div class="col-lg-6">
    <div class="card border-info">
      <div class="card-header bg-info text-light border-seccond text-center font-weight-bold"><span class="fas fa-comments"></span> BOX CHAT</div>
      <div id="">
      <div class="card-body text-seccond bg-light text-dark chat-list" id="chathuht">
      
                </div> </div>
      <div class="card-footer  border-seccond bg-light text-dark" style="padding: 0">
      <div class="row">
            <div class="col" style="padding-right: 0">
              <div class="text-left">
                <button class="btn btn-sm btn-primary font-weight-bold" style="margin-right: 0;" id="btnChatBox"><i class="fas fa-box"></i> Box</button>
                <button class="btn btn-sm btn-success font-weight-bold" id="btnChatAll" style="opacity: 0.5;"><i class="fas fa-globe-americas"></i> All</button>
              </div>
            </div>
            <div class="col" style="padding-left: 0">
              <div class="text-right" style="border: none">
                <button class="btn btn-danger btn-sm font-weight-bold text-uppercase" type="button" data-toggle="modal" data-target="#modalKeoBuaBao" id="btnThachDau" style="display: none;">Thách đấu <img src="https://nrocltx.com/image/keobuabao.gif" alt="" style="width:20px;"></button>
              </div>
            </div>
          </div>
        <input type="text" id="noidung_chung" onkeydown="if (event.keyCode == 13) chat_chung()" class="form-control" style="margin-bottom: 0px;" placeholder="Nhập nội dung chat">
        <button class="btn btn-info form-control font-weight-bold" onclick="chat_chung()" id="chatButton" style="">Gửi</button>
      </div>
    </div>
    <div class=""> <input onclick="doichat()" class="" type="checkbox" `+(giaodienchat == 1 ? 'checked' : '')+`> Chát đầy đủ <br>
    <input onclick="click_chat()" class="" type="checkbox" id="gridCheck1" `+(blockchat == 1 ? 'checked' : '')+`> Cố Định

    </div>
    `;
    */
   html+=`<div class="col-lg-6" style="padding: 0px 5px !important">
   <div class="card border-info">
     <div class="card-header bg-info text-light border-seccond text-center font-weight-bold"><span class="fas fa-comments"></span> BOX CHAT</div>
     <div class="card-body text-seccond bg-light text-dark chat-list " id="chathuht" style="height: 539px;
     overflow: auto;">
     <div class=""></div>
     </div>
     <div class="card-footer border-seccond bg-light text-dark " style="padding: 0; border: none" id="darkBoxChat">
       <div class="row">
         <div class="col" style="padding-right: 0">
           <div class="text-left">
             <button class="btn btn-sm btn-primary font-weight-bold" style="margin-right: 0;" id="btnChatBox"><i class="fas fa-box"></i> Box</button>
             <button class="btn btn-sm btn-success font-weight-bold" id="btnChatAll" style="opacity: 0.5;"><i class="fas fa-globe-americas"></i> All</button>
           </div>
         </div>
         <div class="col" style="padding-left: 0">
           <div class="text-right" style="border: none">
             <button class="btn btn-danger btn-sm font-weight-bold text-uppercase" type="button" data-toggle="modal" data-target="#modalKeoBuaBao" id="btnThachDau" style="">Thách đấu <img src="https://nrocltx.com/image/keobuabao.gif" alt="" style="width:20px;"></button>
           </div>
         </div>
       </div>
       <input type="text" id="noidung_chung" onkeydown="if (event.keyCode == 13) chat_chung()" class="form-control" style="margin-bottom: 0px;" placeholder="Nhập nội dung chat">
       <button class="btn btn-info form-control font-weight-bold" id="chatButton" onclick="chat_chung()">Gửi</button>
     </div>
   </div>
 </div>`;
    return html;
}
 
 let load_dangki = function()
 {
 	load_reg();
 }
 
 let head_menu = function(data)
 {
     $("#since04_menu").html('');
     let array = [
       
        
         {
             name : 'NẠP VÀNG',
             value : 'naptien',
             data : 'loading();dn.to({ users : { pay : { index : true } } });head_menu(\'naptien\')',
             icon : '<i class="fas fa-money-bill"></i>'
         },
         {
            name : 'RÚT VÀNG',
            value : 'naptien',
            data : 'loading();dn.to({ users : { pay : { rutvang : true } } });',
            icon : '<i class="fas fa-coins"></i>'
        },
        
     ];
     $("#since04_menu").append(`<li class="nav-item text-uppercase font-weight-bold li-item">
     <a class="nav-link a-item" href="#" onclick="loading();load_index()"> TRANG CHỦ</li>`);
     
     array.forEach(e => {
         $("#since04_menu").append(`<li class="nav-item text-uppercase font-weight-bold li-item">
         <a class="nav-link a-item" href="#" onclick="`+e.data+`">`+(e.icon  ? e.icon : '')+` `+(data == e.value ? '<font color="">'+e.name+'</font>' : e.name)+`</a>
       </li>`);
     });
    
 
 }
 
 
 var admin = 0;
 
 
 
 
 let togame  = function(RunRun)
 {
     dn.binary(RunRun);
 }
 
 let out = function()
{
    outlogin();
    $("#users").hide();
    $("#guest").show();
    load_index();
    dn.to({
        users :
        {
            nguoichoi :
            {
                newid : true,
            }
        }
    });

}
 let outlogin = function()
 {
   setCookie('taikhoan','');
   setCookie('matkhau','');
 }
 
 function login(data)
 {
     if(data.status == false)
     {
         setCookie('taikhoan',0);
         setCookie('matkhau',0);
         return false;
     }
     /* Set password & username html */
     admin = data.admin;
     uid = data.id;
     setCookie('taikhoan',data.username);
     setCookie('matkhau',data.password);
     $("#users").show();
     $("#guest").hide();
     numanimate_2($('#vang'), data.vang, 17);
     $("#users_name").html(data.name);
     load_index();
     /* xx */
     $("#guest_1").hide();
   $("#guest_2").hide();
   $("#guest_3").hide();
   $("#guest_4").hide();
   
   let menu_users = ["user_1","user_3","user_4"];
   menu_users.forEach(element => {
     $("#"+element+"").show();
   });
 
   $("#app_users").html(`<div class="user-panel" style="min-height: 70px;"><div class="pull-left image"><img id="avatar_profile" src="`+data.avatar+`" alt="User Image" class="img-circle"></div> <div class="pull-left info"><p><code>`+data.name+`</code></p> <p style="color: aqua;">UID: `+data.id+`</p></div></div></a> <div class="user-cash"><b style="color: green;">VIP`+data.vip+`</b> <progress id="file" value="`+Math.round(data.vip_pre/data.vip_next*100)+`" max="100" style="margin-left: 1rem; margin-right: 1rem; width: 110px;"> 0 / 5000000 </progress> <b style="color: red;">VIP`+Math.round(data.vip+1)+`</b><br> <span style="color: white;">
   Số Dư: <small id="mymoney" color="white">0</small> Xu
 </span></div>`+$("#app_users").html());
 
 let menu_u = [
     `<li><a href="#" onclick="loading();dn.to({users : {nguoichoi : { info : true}}})"><i class="fas fa-female"></i> <span> Thông tin cá nhân</span></a></li>`,
     `<li><a href="#" onclick="loading();dn.to({ users : { pay : { index : true } } });head_menu('naptien')"><i class="fas fa-donate"></i> <span> Nạp xu</span></a>`,
     `<li><a href="#" onclick="loading();dn.to({ users : { pay : { rutvang : true } } });"><i class="fas fa-donate"></i> <span> Rút xu</span></a>`,
         `<li><a href="#" onclick="loading();dn.to( { chuyentien : {index : { trang : 0 } }  } );head_menu('chuyentien')"><i class="fa fa-comment-dollar" aria-hidden="true"></i> <span> Chuyển xu</span></a>`,
         `<li><a href="#" onclick="loading();dn.to({ users : { lichsu : {sodu : { trang : 0 } }  } });"><i class="fas fa-history"></i> <span> Lịch sử</span></a>`,
         `<li><a href="#" onclick="loading();dn.to({users : {giftcode : {index : {trang : 0}}}})"><i class="fas fa-gifts"></i> <span> Mã quà tặng</span></a>`,
         `<li><a href="#" onclick="loading();dn.to({users : {qua : {quavip : {trang : 0}}}})"><i class="fas fa-hand-holding-usd"></i> <span> Quà V.I.P</span></a>`,
         ``,
         `<li><a href="/hotro.html" target="_blank"><i class="fas fa-question-circle"></i> Hỗ trợ Online</span></a>`,
     `<li><a href="#" onclick="out()"><i class="fas fa-sign-out-alt"></i> Đăng xuất</span></a></li>`
   ];
 
   menu_u.forEach(element => {
     $("#menu_users").html($("#menu_users").html()+element);
   });
 
   if(admin != 0)
   {
       $("#menu_users").append(`<li><a href="#" onclick="loading();dn.to({ users : { lichsu : {check : { trang : 0, id : 1 } }  } });"><i class="fas fa-sign-out-alt"></i> Check LSGD</span></a></li>`);
   }
 }
 
 
 
 let  msg = function (msg, status, title) {
     if (!status)
         status = 'info';
     if (!title)
         title = 'Nro.club';
         /*
     Swal.fire({
         icon: status,
         title: title,
         text: msg,
         footer: '<a href="#">Bạn cần hỗ trợ ?</a>'
     })
     */
     $.notify(msg,status)
 
     if(status == 'success') $("#loading").hide();
   }
   let giaodienchat = 1;
   let doichat = function()
   {
       if(giaodienchat == 1) 
       {
        giaodienchat = 0;
        msg('Chuyển sang chát ngắn gọn','success');
       }
       else 
       {
           giaodienchat = 1;
           msg('Chuyển sang chát đầy đủ','success')
       }
   }
   function chatbox(name,msg,avatar,admin = 3)
   {
       if(giaodienchat == 1)
       {
     $(".chat-list").append(`
           <div class="chathtml">
       <img src="`+avatar+`" alt="ducnghiait" style="float: left; height: 40px; width: 40px; margin-right: 5px; background: url("") center center / cover;"> `+name+`
       <p>`+msg+`</p>
     </div> `);
       }
       else 
       {
     $(".chat-list").append(`<div><p data-id="x" style="display: inline-block;word-break: break-word; background-color: #E4E6EB; padding: 5px 10px; border-radius: 10px; margin-bottom: 3px; margin-top: 3px" class="text-dark"><span class="`+(admin == -1 ? 'fas fa-user' : (admin == 1 ? 'fas fa-user-tag' : (admin == 3 ? 'fas fa-users-cog' : 'fas fa-user-shield')))+`"></span><span class="text-primary font-weight-bold"> `+name+`</span><br>`+msg+` </p></div>`);
       }
   }
 
 var blockchat = 0;
 function scrollSmoothToBottom(id) {
     var div = document.getElementById("chathuht");
     let dapan = (div.scrollHeight - div.scrollTop - div.clientHeight);
     console.log(dapan)
     if(dapan< 200)
     {
        $('#' + id).animate({
            scrollTop: div.scrollHeight - div.clientHeight + 30
        }, 500);
     }
     else 
     {
        
     }
 }
 let chatmsg_cu = "";
 function chat_chung() {
     let noidung = $("#noidung_chung").val();
     if(noidung.length <3)
     {
       msg('Nội dung phải lớn hơn 3 kí tự');
     }
     else 
     if(noidung == chatmsg_cu)
     {
        msg('Không được spam.');
        $("#noidung_chung").val('');
     }
     else 
     {
       dn.to({
         chat : {
           text : noidung
         }
       });
       chatmsg_cu = noidung;
       $("#noidung_chung").val('');
     }
   }
 var thongbaotext = '';
 let writeln = function(res)
 {
     if(!!res.napthoi)
     {
        load_thoivang(res.napthoi)
     }
     if(!!res.captcha)
     {
         $("#img_napvang").attr('src',res.captcha.img);
     }
     if(!!res.bang)
     {
        xuli_bang(res.bang);
     }
     if(!!res.topcsmm)
     {
         let html = ``;
         let i = 0;
        res.topcsmm.data.forEach(e => {
            i++;
            html+= `<tr id="top`+i+`"><td>`+i+`</td> <td>`+e.name+`</td> <td>`+e.player+`</td></tr>`;
         });
         $("#log_play").html(html+$("#log_play").html())
     }
     if(!!res.top)
     {
         xulytop(res.top)
     }
     if(!!res.everday)
     {
         everday_data(res.everday);
     }
    if(!!res.vongquayngay)
    {
        vongquayngay(res.vongquayngay);
    }
     if(!!res.reloadphien)
     {
         if(server == res.reloadphien)
         {
             dn.to({
                 users : {
                     csmm : {
                         phien : {
                             server : server
                         }
                     }
                 }
             })
         }
     }
     if(!!res.doc)
     {
         lichsu(res.doc);
     }
     if(!!res.phien_taixiu)
     {
         getphien_tx(res.phien_taixiu);
     }
     if(!!res.cuoc_taixiu)
     {
         getlog_tx(res.cuoc_taixiu)
     }
     if(!!res.nguoichoi_taixiu)
   {
     $('.khung-tx .cuoc-xiu')['html'](njs(res.nguoichoi_taixiu.cx));
     $('.khung-tx .cuoc-tai')['html'](njs(res.nguoichoi_taixiu.ct));
   
   }
     if(!!res.msgtx)
     {
         note_play('#khung-tx .move-here .note_here', res.msgtx, 'f5f244');
     }
     if(!!res.phientruoc)
     {
         xulyphientruoc(res.phientruoc)
     }
     if (res.ducnghia == 'realtime') {
         set_time(res);
       }
       if (res.ducnghia == 'char') {
         closephien(res);
       }
     if(!!res.nap)
     {
         load_nap_tien(res.nap)
     }
     if(!!res.chatroom)
     {
       chatboxroom(res.chatroom.name,res.chatroom.msg,res.chatroom.avatar);
       scrollSmoothToBottom("chat_room_list");
     }
     if(!!res.loadbacay)
     {
         load_bacay();
     }
     if(!!res.BaCay)
     {
         BaCayGame(res.BaCay);
     }
     if(!!res.TaoPhong)
     {
         room();
     }
     if(!!res.BaCayRoom)
     {
         BaCayRoom(res.BaCayRoom);
     }
     if(!!res.OTT)
     {
         DoithuOTT(res.OTT);
     }
     if(!!res.updateVXMM)
     {
         win(res.updateVXMM);
     }
     if(!!res.VXMM)
     {
         load_vongquay(res.VXMM);
     }
     if(!!res.vongquay)
     {
         vongquay(res.vongquay)
     }
     if(!!res.notice)
     {
         //$("#Modal_thongbao").modal();
         thongbaotext = res.notice.text;
     }
     if(!!res.getphien)
     {
         resdocphien(res.getphien);
     }
     if(!!res.read)
     {
         res_read(res.read);
     }
     if(!!res.hopthu)
     {
         load_mail(res.hopthu);
     }
     if(!!res.newsms)
     {
         $("#mail_pc").html(`(+`+res.newsms+`)`);
         $("#mail_mobile").html(`(+`+res.newsms+`)`);
     }
     if(!!res.newcuoc)
     {
         $("#gold").val('');
     }
     if(!!res.newchuyen)
     {
         $("#vangchuyen").val(0)
     }
     if(!!res.msgchuyentien)
     {
         if(res.msgchuyentien.id == uid)
         {
             msg('Bạn nhận được '+number_format(res.msgchuyentien.vang)+' từ '+res.msgchuyentien.from+' với nội dung :  '+res.msgchuyentien.noidung+' ')
             dn.to({
                 users : 
                 {
                     nguoichoi : 
                     {
                         update : true
                     }
                 }
             });
         }
     }
     if(!!res.findchuyentien)
     {
         $("#findusers").val(res.findchuyentien.text);
     }
     if(!!res.chuyentien)
     {
         load_chuyentien(res.chuyentien);
     }
     if(!!res.UPDATE)
     {
         $.notify(""+res.UPDATE.game+": "+res.UPDATE.name+" thắng "+number_format(res.UPDATE.vang)+" vàng.", "success");
         if(res.UPDATE.id == uid) {
             dn.to({
                 users : 
                 {
                     nguoichoi : 
                     {
                         update : true
                     }
                 }
             });
         }
     }
     if(!!res.logcuoc)
     {
         logcuoc(res.logcuoc);
     }
     if(!!res.ketqua)
     {
         let result = 0;
         if(res.ketqua.find(e => e.server == server) != undefined)
         {
             result = res.ketqua.find(e => e.server == server).ketqua;
         }
         $("#result").html(number_format(result));
     }
     if(!!res.loadserver)
     {
         status(res.loadserver)
     }
     if(!!res.server)
     {
         xulyserver(res.server)
     }
     if(!!res.chatbox)
     {
       chatbox(res.chatbox.name,res.chatbox.msg,res.chatbox.avatar,res.chatbox.admin);
       scrollSmoothToBottom("chathuht");
     }
     if(!!res.home)
     {
         load_index(res.home);
     }
     if(!!res.reg)
     {
         setCookie('taikhoan',res.reg.taikhoan);
         setCookie('matkhau',res.reg.matkhau);
         ulo();
     }
     if(!!res.f5)
     {
         let o = res.f5;
         if(o == 'rutvang') {
             loading();dn.to({ users : { pay : { rutvang : true } } });
         }
     }
     if(!!res.checksd)
     {
         checksd(res.checksd)
     }
     if(!!res.logcsmm)
     {
         load_csmm(res.logcsmm)
     }
     if(!!res.sodu)
     {
         load_sodu(res.sodu)
     }
     if(!!res.giftcode)
     {
         load_giftcode(res.giftcode);
     }
     if(!!res.rutvang)
     {
         load_rutvang(res.rutvang)
     }
     if(!!res.napcard)
     {
         load_napcard(res.napcard);
     }
     if(!!res.momo)
     {
         load_momo(res.momo);
     }
     if(!!res.thesieure)
     {
         load_thesieure(res.thesieure)
     }
     if(!!res.vang)
     {
         if(!khongload)
         {
            numanimate_2($('#vang'), res.vang, 17);
            numanimate_2($('#mymoney'), res.vang, 17);
            $("#goldUser").val('Vàng hiện có: '+number_format(res.vang)+'');
         }
     }
     if(!!res.napvang)
     {
         load_napvang(res.napvang)
     }
     if(!!res.profile)
     {
         load_profile(res.profile);
     }
     if(!!res.login)
     {
         login(res.login);
     }
     if(!!res.loading)
     {
         if(res.loading == 1) loading();
         else $("#loading").hide();
     }
     if(!!res.checkname)
     {
         if(res.checkname == 'success')
         {
             $("#check_name_reg").html('<font color="green">Chúc mừng ! Bạn có thể sử dụng tên này.</font>');
         }
         else 
         {
             $("#check_name_reg").html('<font color="red">Tên hiển thị này đã có người sử dụng</font>');
         }
     }
     if(!!res.msg)
     {
         msg(res.msg,res.type);
     }
 }
 
 
 
 let loading = function()
 {
     $("#loading").show();
 }
 
 function numanimate_2(_0x90f8x4, _0x90f8x2a, _0x90f8x19) {
     var _0x90f8x3c = Math['floor'](_0x90f8x19);
     var _0x90f8x39 = Math['floor'](_0x90f8x4['val']());
     var _0x90f8x3a = (Math['floor'](_0x90f8x2a) - Math['floor'](_0x90f8x4['val']())) / _0x90f8x3c;
     (function _0x90f8x2c(_0x90f8xa) {
         setTimeout(function() {
             _0x90f8x4['html'](njs(Math['floor'](_0x90f8x39 + (_0x90f8x3c + 1 - _0x90f8xa) * _0x90f8x3a)));
             if (--_0x90f8xa) {
                 _0x90f8x2c(_0x90f8xa)
             } else {
                 _0x90f8x4['val'](_0x90f8x2a)
             }
         }, 40)
     }
     )(_0x90f8x3c)
   }
 
   function njs(_0x90f8x4) {
     var _0x90f8x20 = String(_0x90f8x4);
     var _0x90f8x21 = _0x90f8x20['length'];
     var _0x90f8x22 = 0;
     var _0x90f8x23 = '';
     var _0x90f8xa;
     for (_0x90f8xa = _0x90f8x21 - 1; _0x90f8xa >= 0; _0x90f8xa--) {
         _0x90f8x22 += 1;
         aa = _0x90f8x20[_0x90f8xa];
         if (_0x90f8x22 % 3 == 0 && _0x90f8x22 != 0 && _0x90f8x22 != _0x90f8x21) {
             _0x90f8x23 = '.' + aa + _0x90f8x23
         } else {
             _0x90f8x23 = aa + _0x90f8x23
         }
     }
     ;return _0x90f8x23
   }
 
 let StartMain = function () 
 {
     //$.notify("Đang tải dữ liệu Javascript...", "info");
     let e;
     let n = ["\n %c %c %c Since04  ✰  %c  %c  0.0.1  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
     console.log.apply(e, n)
     Main.loadfile(Module, function () {
         console.log('Loading Resource Success.');
         //$.notify("Tải dữ liệu thành công !", "success");
         MainWebsocket();
         BODYGAME()
     });
 }
 
 let clickbutton = function()
 {
     if($("#navbarCollapse").css('display') == 'none')
     {
         $("#navbarCollapse").show();
     }
     else 
     {
         $("#navbarCollapse").hide();
     }
 }
 
 let head = function () {
     $("html, body").animate({
         scrollTop: 0
     }, 50);
     $("#navbarCollapse").hide();
     $("body").removeClass("sidebar-open");
 }
 
 let MainWebsocket = function()
 {
     dn.start(WebsocketUrl);
     console.log('Connect to: "'+WebsocketUrl+'"');
     //$.notify("Đang kết nối tới máy chủ Ngọc Rồng...", "warn");
 }
 
 let ulo = function()
 {
     //$.notify("Kết nối thành công !", "success");
     console.warn('Connect to server success !');
     TaiXiuGame();
      // selected server
     $.ajax({
         url : '/websocket.php',
         success : function(data){
            dn.to({
                users :
                {
                    nguoichoi :
                    {
                        newid : true,
                        resource : data,
                    }
                }
            });
            if(getCookie('taikhoan').length >=1 && getCookie('matkhau').length >=1)
     {
         loading();
         dn.to({
             users : 
             {
                 nguoichoi : {
                     login : {
                         username : getCookie('taikhoan'),
                         password : getCookie('matkhau')
                     }
                 }
             }
         });
     }
         }
     })
     load_index();
     /* Auto login */
     
 }
 
 $(document)['ready'](function() {
     console.log('Welcome To Game');
     StartMain();
 });
 
 function number_format(_0x90f8x4) {
     var _0x90f8x20 = String(_0x90f8x4);
     var _0x90f8x21 = _0x90f8x20['length'];
     var _0x90f8x22 = 0;
     var _0x90f8x23 = '';
     var _0x90f8xa;
     for (_0x90f8xa = _0x90f8x21 - 1; _0x90f8xa >= 0; _0x90f8xa--) {
         _0x90f8x22 += 1;
         aa = _0x90f8x20[_0x90f8xa];
         if (_0x90f8x22 % 3 == 0 && _0x90f8x22 != 0 && _0x90f8x22 != _0x90f8x21) {
             _0x90f8x23 = '.' + aa + _0x90f8x23
         } else {
             _0x90f8x23 = aa + _0x90f8x23
         }
     }
     ; return _0x90f8x23
 }
 
 function setCookie(_0x90f8x32, _0x90f8x33, _0x90f8x34) {
     var _0x90f8x35 = new Date();
     if (_0x90f8x34) {
         _0x90f8x35['setTime'](_0x90f8x35['getTime']() + (_0x90f8x34 * 24 * 60 * 60 * 1000));
         document['cookie'] = _0x90f8x32 + '=' + _0x90f8x33 + ';expires=' + _0x90f8x35['toUTCString']()
     } else {
         document['cookie'] = _0x90f8x32 + '=' + _0x90f8x33 + ';expires=Fri, 30 Dec 9999 23:59:59 GMT;'
     }
 }
 
 function strtr(s, p, r) {
     return !!s && {
         2: function () {
             for (var i in p) {
                 s = strtr(s, i, p[i]);
             }
             return s;
         },
         3: function () {
             return s.replace(RegExp(p, 'g'), r);
         },
         0: function () {
             return;
         }
     }[arguments.length]();
 }
 function sprintf(str) {
     var args = arguments, i = 1;
 
     return str.replace(/%(s|d|0\d+d)/g, function (x, type) {
         var value = args[i++];
         switch (type) {
             case 's': return value;
             case 'd': return parseInt(value, 10);
             default:
                 value = String(parseInt(value, 10));
                 var n = Number(type.slice(1, -1));
                 return '0'.repeat(n).slice(value.length) + value;
         }
     });
 }
 function getCookie(_0x90f8x3e) {
     var _0x90f8x3f = _0x90f8x3e + '=';
     var _0x90f8x40 = document['cookie']['split'](';');
     for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x40['length']; _0x90f8xa++) {
         var _0x90f8x11 = _0x90f8x40[_0x90f8xa];
         while (_0x90f8x11['charAt'](0) == ' ') {
             _0x90f8x11 = _0x90f8x11['substring'](1)
         }
         ; if (_0x90f8x11['indexOf'](_0x90f8x3f) == 0) {
             return _0x90f8x11['substring'](_0x90f8x3f['length'], _0x90f8x11['length'])
         }
     }
     ; return ''
 }

 function rand(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }