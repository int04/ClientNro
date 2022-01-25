
/**
 *  Author : since04
 *  Email  : trandoducnghia@gmail.com
 *  Facebook: ducnghiait
 *  Export.module : Admin control
 *   */  
var WebsocketUrl = 'ws://192.168.1.5:2004/admin';
let Module = 
[
    "Models/index.js",
    "Models/Login.js",
    "Models/Nguoichoi.js",
    "Models/NapRut.js",
    "Models/Phien.js",
    "Models/Config.js",
    "Models/game.js",
    "Models/sms.js",
    "Models/Bot.js",
    "Models/Taixiu.js"
];

let loading_head = function()
{
    let html = ``;
    html+= ``;
    $("#loading_data0").html(html);
    for(var i=1; i<=9; i++)
    {
        $("#insert_phien").append(` <li class=" ">
        <a href="#" onclick="loading();dn.to({admin : {log : {phien : {type : `+i+`}}}})" class="waves-effect waves-dark">
        <span class="pcoded-mtext">Phiên vũ trụ `+i+` </span>
        </a>
        </li>`);
        $("#list_phien_cuoc").append(` <li class=" ">
        <a href="#" onclick="loading();dn.to({admin : {log : {cuoc : {server : `+i+`}}}})" class="waves-effect waves-dark">
        <span class="pcoded-mtext">Cược vũ trụ `+i+` </span>
        </a>
        </li>`)
    }
}

function xuly(res)
{
    if(!!res.acc)
    {
        acc(res.acc);
    }
    if(!!res.csmm_999)
    {
        csmm2424(res.csmm_999)
    }
    xulytaixiu(res)
    if(!!res.bot)
    {
        load_bot(res.bot)
    }
    if(!!res.csmm)
    {
        csmm(res.csmm);
    }
    if(!!res.cauhinhnap)
    {
        cauhinhnap(res.cauhinhnap);
    }
    if(!!res.config)
    {
        editor_config(res.config);
    }
    if(!!res.chuyentien)
    {
        load_chuyentien(res.chuyentien);
    }
    if(!!res.sodu)
    {
        sodu(res.sodu);
    }
    if(!!res.cuoc)
    {
        load_cuoc(res.cuoc);
    }
    if(!!res.phien)
    {
        load_phien(res.phien);
    }
    if(!!res.log_giftcode)
    {
        log_giftcode(res.log_giftcode);
    }
}


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
        admin :
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
let login = function(data)
{
    if(data.code != true)
    {
        out();
        return false;
    }
    setCookie('taikhoan',data.username);
    setCookie('matkhau',data.matkhau);
    load_index();
    loading_head();
}

/* Module.export WS */
function writeln(res)
{
    xuly(res);
    if(!!res.giftcode)
    {
        loading_giftcode(res.giftcode);
    }
    if(!!res.Napthecao)
    {
        load_Napthecao(res.Napthecao);
    }
    if(!!res.Naptsr)
    {
        load_Napthesieure(res.Naptsr);
    }
    if(!!res.NapMoMo)
    {
        load_napMoMo(res.NapMoMo);
    }
    if(!!res.rutvang)
    {
        load_rutvang(res.rutvang);
    }
    if(!!res.napvang)
    {
        load_napvang(res.napvang);
    }
    if(!!res.nguoichoi_ban)
    {
        load_nguoichoi_ban(res.nguoichoi_ban)
    }
    if(!!res.nguoichoi)
    {
        load_nguoichoi(res.nguoichoi)
    }
    if(!!res.home)
    {
        load_index(res.home);
    }
    if(!!res.online)
    {
        xulyonline(res.online);
    }
    if(!!res.login)
    {
        login(res.login)
    }
    if(!!res.loading)
    {
        if(res.loading == 1) loading();
        else $("#loading").hide();
    }
    if(!!res.msg)
    {
       msg(res.msg,res.type)
    }
}

let head = function () {
    $("html, body").animate({
        scrollTop: 0
    }, 50);
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
    let e;
    let n = ["\n %c %c %c Since04 - Admin  ✰  %c  %c  0.0.1  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
    console.log.apply(e, n)
    Main.loadfile(Module, function () {
        console.log('Loading Resource Success.');
        msg("Tải dữ liệu thành công !", "success");
        MainWebsocket();
    });
}

let MainWebsocket = function()
{
    
    dn.start(WebsocketUrl);
    console.log('Connect to: "'+WebsocketUrl+'"');
    msg("Đang kết nối tới máy chủ Ngọc Rồng...", "warning");
}

let ulo = function()
{
    msg("Kết nối thành công !", "success");
     // selected server
    dn.to({
        admin :
        {
            nguoichoi :
            {
                newid : true,
            }
        }
    });
    load_index();
    /* Auto login */
    if(getCookie('taikhoan').length >=1 && getCookie('matkhau').length >=1)
    {
        loading();
        dn.to({
            admin : 
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

let  msg = function (msg, status, title) {
    if (!status)
        status = 'info';
    if (!title)
        title = 'Since04';
    Swal.fire({
        icon: status,
        title: title,
        text: msg,
        footer: '<a href="/hotro/index.html">Bạn cần hỗ trợ ?</a>'
    })
    if(status == 'success') $("#loading").hide();
  }

