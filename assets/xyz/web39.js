function load_napthe() {
    if (bangnt == 0) {
        bangnt = 1;
        $.post("./ajax", {
                load_napthe: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
                $("#napthenhanh").show().draggable({
                    handle: "div"
                }).on("mousedown", function() {
                    set_show($("#napthenhanh"));
                });
                set_show($("#napthenhanh"));
            })

    } else {
        $('#napthenhanh').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#napthenhanh'));
    }

    return false;
}

function load_muathe() {
    if (bangmt == 0) {
        bangmt = 1;
        $.post("./ajax", {
                load_muathe: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
                $("#muathenhanh").show().draggable({
                    handle: "div"
                }).on("mousedown", function() {
                    set_show($("#muathenhanh"));
                });
                set_show($("#muathenhanh"));
            })

    } else {
        $('#muathenhanh').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#muathenhanh'));
    }

    return false;
}

function load_muagosu() {
    if (bangnap == 0) {
        bangnap = 1;
        $.post("./ajax", {
                load_muagosu: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
                $("#muagosunhanh").show().draggable({
                    handle: "div"
                }).on("mousedown", function() {
                    set_show($("#muagosunhanh"));
                });
                set_show($("#muagosunhanh"));
            })

    } else {
        $('#muagosunhanh').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#muagosunhanh'));
    }

    return false;
}

function load_muavnd() {
    if (bangrut == 0) {
        bangrut = 1;
        $.post("./ajax", {
                load_muavnd: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
                $("#muavndnhanh").show().draggable({
                    handle: "div"
                }).on("mousedown", function() {
                    set_show($("#muavndnhanh"));
                });
                set_show($("#muavndnhanh"));
            })

    } else {
        $('#muavndnhanh').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#muavndnhanh'));
    }

    return false;
}

function load_check_send_mail() {

    $.post("./ajax", {
            checkmailsms: 1,
        },
        function(data) {
            var json = JSON.parse(data);
            $('.messages-menu').html(json.sms);
            $('#smsp3').html(json.plus);
        });
    return false;
}

function check_send_mail(data) {
    if (data == 'all') {
        load_check_send_mail();
    } else {
        var checksms, i, fLen;
        var getdata = data.split(",");
        fLen = getdata.length;

        for (i = 0; i < fLen; i++) {
            if (getdata[i] == user_id) {
                load_check_send_mail();
                return false;
            }
        }
    }
}

function xep_so(x) {
    if (x == '0') {
        return 10;
    }
    if (x == '1') {
        return 20;
    }
    if (x == '2') {
        return 30;
    }
    if (x == '3') {
        return 40;
    }
    if (x == '4') {
        return 50;
    }
    if (x == '5') {
        return 60;
    }
    if (x == '6') {
        return 70;
    }
    if (x == '7') {
        return 80;
    }
    if (x == '8') {
        return 90;
    }
    if (x == '9') {
        return 100;
    }
    if (x == '.') {
        return 0;
    }
}

function xep_xn(x) {
    if (x == '1') {
        return 0.5;
    }
    if (x == '2') {
        return 20.5;
    }
    if (x == '3') {
        return 39.5;
    }
    if (x == '4') {
        return 59;
    }
    if (x == '5') {
        return 78.5;
    }
    if (x == '6') {
        return 98;
    }
}

function themgold2(x, y) {
    if (y == 1)
        $('#datcuatai').val(Math.floor($('#datcuatai').val()) + x);
    if (y == 2)
        $('#datcuaxiu').val(Math.floor($('#datcuaxiu').val()) + x);
}




function set_chat(s) {
    $('#chat-' + chatid).remove();
    if ($('#message-ms').html()) {
        $('#message-ms').html($('#message-ms').html() + '<div id="chat-' + chatid + '"class="msg" style="font-size: 15px;color:#ffffff;margin: 0px 0 -8px;" ><p><b style="color:#FFEB3B">' + s.name + ' : </b><span style="font-weight: 600;"> ' + websitehelp(myIcon(s.text)) + ' </span></p></div>');
        $('#scollDiv').animate({
            scrollTop: $('#scollDiv')[0].scrollHeight
        }, 0);
    }
    if ($('#chathuht').html()) {
        chatsend = '<tr><td style="font-weight: bold;"><img class="img-responsive img-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAATSURBVHjaYvj//z8DAAAA//8DAAj8Av7TpXVhAAAAAElFTkSuQmCC" style="float:left;height: 40px;width: 40px;margin-right: 5px;background: url(https://img.hatrongcasino.com/user/' + s.img + ') 0 0 / cover;background-position: center;"><span style="font-size: 16px;color:0">' + s.name + '</span><br>' + websitehelp(myIcon(s.text)) + '</td></tr>';
        $('#chathuht tr:last').after(chatsend);
        $('#chathuht').animate({
            scrollTop: $('#chathuht')[0].scrollHeight
        }, 0);
    }
    chatid += 1;
    if (chatid >= 15)
        chatid = 1;
}

function userlogin2() {
    swal({
        text: "Đăng Nhập Hoặc Đăng Ký",
        buttons: {
            2: "Đăng Nhập",
            1: "Đăng Ký",
            cancel: "Thoát",
        },
    }).then((value) => {
        if (value == '1' || value == '2' || value == '3') loaduserlogin(value);
    });
}

function set_userchat(s) {
    if (!name) {
        userlogin2();
        return false;
    }
    txt = $('#txtText').val();
    if (txt && name) {
        whatchat = {
            name: name,
            text: txt,
            color: user_color,
            img: '21536377680.png',
            id: user_id
        };
        //socket2.emit("chater",whatchat);
        /*if( Math.floor($(".money2").html().replace(/\./g, "") ) > 100 )*/
        socketchat.emit("chater", whatchat);

        $('#txtText').val('');
        set_chat(whatchat);
    } else {
        $("#errorr").html('<div class="alert alert-danger"><strong>Thông Báo : Vui Lòng Nhập Nội Dung Chát! </strong></div>');
    }
}

function set_show(x) {
    showindex += 1;
    x.css('z-index', showindex);

}

function set_reollxn(x) {

    setTimeout(function() {
        $("#rollxn").css('background-position-x', 0 + x * 2.94105 + '%').css('display', 'block');;
        if (x != 34) {
            set_reollxn(x + 1)
        } else {
            $("#rollxn").css('display', 'none');
            $('#xingaur1').css({
                'opacity': '20'
            });
            $('#xingaur2').css({
                'opacity': '20'
            });
            $('#xingaur3').css({
                'opacity': '20'
            });
            $('#soketqua').css({
                'opacity': '1'
            });
        }
    }, 35);

}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0,
        rate = 0;

    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;


    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        scrollTop = $("#myketquabaucua2").scrollTop() + pos2;
        $("#myketquabaucua2").scrollTop(scrollTop);
        if (scrollTop <= 0)
            rate += 5;
        elmnt.style.WebkitTransform = "translate3d(0px, " + rate + "px, 0px)";
    }

    function closeDragElement() {
        if (rate > 0) {
            var id = setInterval(
                function() {
                    if (rate <= 0) {
                        rate = 0;
                        clearInterval(id);
                    } else {
                        rate -= 5;
                        elmnt.style.WebkitTransform = "translate3d(0px, " + rate + "px, 0px)";
                    }
                }, 5);
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

function set_ketqua3(data) {

    var htmlw = '';
    if (data.color == 'red') {
        if (name != '') {
            goldwin = Math.floor(Math.floor(goldt.replace(/\./g, "")) * 1.95);
        }
        htmlw = '<div class="ketquatx"  style="background-position-y: bottom;" id="wintx' + kqwin + '"   title="Roll ' + data.roll + ' - ' + data.xn1 + ' - ' + data.xn2 + ' - ' + data.xn3 + ' - Tài"><img src="https://caytien.net/img/tx.png" style="height: 100%;"></div>';
    } else if (data.color == 'aqua') {
        if (name != '') {
            goldwin = Math.floor(Math.floor(goldx.replace(/\./g, "")) * 1.95);
        }
        htmlw = '<div class="ketquatx"  style="background-position-y: top;" 	id="wintx' + kqwin + '" title="Roll ' + data.roll + ' - ' + data.xn1 + ' - ' + data.xn2 + ' - ' + data.xn3 + ' - Xỉu"><img src="https://caytien.net/img/tx.png" style="height: 100%;"></div>';
    }

    chotkq = 1;
    $("#chotkeoroll").css({
        "opacity": "0"
    });
    set_reollxn(0);
    cauran1 = xep_xn(data.xn1);
    cauran2 = xep_xn(data.xn2);
    cauran3 = xep_xn(data.xn3);
    $('#xingaur1').css('background-position-x', cauran1 + '%');
    $('#xingaur2').css('background-position-x', cauran2 + '%');
    $('#xingaur3').css('background-position-x', cauran3 + '%');
    $('#soketqua').css({
        'background': ' url(./img/s/' + data.xn4 + '.png)  0% 0% / cover no-repeat'
    });
    setTimeout(function() {
        //$('#wintx'+kqwin).remove();
        $('.ketquatx').first().remove();
        $('#bangketquatx').append(htmlw);




        $('.roll' + data.color).animate({
            opacity: '1'
        });
        $('#roll' + data.color).animate({
            opacity: '1'
        });



        $('.roll2' + data.color).addClass("choptat" + data.color);

        if (goldwin > 0 && name != '') {
            gosuup('Win ' + numberjs(goldwin), '01bb66');
        }
        setTimeout(function() {
            $('.roll' + data.color).animate({
                opacity: '0'
            });;
            $('#roll' + data.color).animate({
                opacity: '0'
            });;
            $('.roll2' + data.color).removeClass("choptat" + data.color);
            $('#soketqua').css({
                'opacity': '0'
            });
            Check_all(2);
        }, 5000);

    }, 1850);



}

function set_ketqua2(data) {

    var htmlw = '';
    if (data.color == 'red') {
        if (name != '') {
            goldwin = Math.floor(Math.floor(goldt.replace(/\./g, "")) * 1.95);
        }
        htmlw = '<div class="ketquatx"  style="background-position-y: bottom;" id="wintx' + kqwin + '"   title="Roll ' + data.roll + ' - ' + data.xn1 + ' - ' + data.xn2 + ' - ' + data.xn3 + ' - Tài"><img src="https://caytien.net/img/tx.png" style="height: 100%;"></div>';
    } else if (data.color == 'aqua') {
        if (name != '') {
            goldwin = Math.floor(Math.floor(goldx.replace(/\./g, "")) * 1.95);
        }
        htmlw = '<div class="ketquatx"  style="background-position-y: top;" 	id="wintx' + kqwin + '" title="Roll ' + data.roll + ' - ' + data.xn1 + ' - ' + data.xn2 + ' - ' + data.xn3 + ' - Xỉu"><img src="https://caytien.net/img/tx.png" style="height: 100%;"></div>';
    }

    chotkq = 1;
    $("#chotkeoroll").css({
        "opacity": "0"
    });
    //set_reollxn(0);
    cauran1 = xep_xn(data.xn1);
    cauran2 = xep_xn(data.xn2);
    cauran3 = xep_xn(data.xn3);
    $('#xingaur1').css('background-position-x', cauran1 + '%');
    $('#xingaur2').css('background-position-x', cauran2 + '%');
    $('#xingaur3').css('background-position-x', cauran3 + '%');
    $('#soketqua').css({
        'background': ' url(./img/s/' + data.xn4 + '.png)  0% 0% / cover no-repeat'
    });

    //$('#wintx'+kqwin).remove();
    $('.ketquatx').first().remove();
    $('#bangketquatx').append(htmlw);




    $('.roll' + data.color).animate({
        opacity: '1'
    });
    $('#roll' + data.color).animate({
        opacity: '1'
    });



    $('.roll2' + data.color).addClass("choptat" + data.color);

    if (goldwin > 0 && name != '') {
        gosuup('Win ' + numberjs(goldwin), '01bb66');
    }
    setTimeout(function() {
        $('.roll' + data.color).animate({
            opacity: '0'
        });;
        $('#roll' + data.color).animate({
            opacity: '0'
        });;
        $('.roll2' + data.color).removeClass("choptat" + data.color);
        $('#soketqua').css({
            'opacity': '0'
        });
        Check_all(2);
    }, 5000);





}

function set_ketqua5(data) {


    cauran1 = xep_xn(data.xn1);
    cauran2 = xep_xn(data.xn2);
    cauran3 = xep_xn(data.xn3);
    chotkq = 1;
    $("#chotkeoroll").css({
        "opacity": "0"
    });
    $("#rollxn").css('display', 'none');
    $('#xingaur1').css({
        'background-position-x': cauran1 + '%',
        'opacity': '1'
    });
    $('#xingaur2').css({
        'background-position-x': cauran2 + '%',
        'opacity': '1'
    });
    $('#xingaur3').css({
        'background-position-x': cauran3 + '%',
        'opacity': '1'
    });




}

var set_ketqua = function(data) {
    if (Math.floor(data.roll) >= rollweb1) {
        $('#rollplay').html(rollweb1);

        if (bangbctc == 1) {
            $('#phienbaucua').html(moneyred2('#' + rollweb1, 'font-color-white'));
            ketquabaucuara(data);
        }
        rollweb1 = Math.floor(data.roll) + 1;
        var htmlw = '';
        if (data.color == 'red') {
            if (name != '') {
                goldwin = Math.floor(Math.floor(goldt.replace(/\./g, "")) * 1.95);
            }
            htmlw = '<div class="ketquatx"  style="background-position-y: bottom;" id="wintx' + kqwin + '"   title="Roll ' + data.roll + ' - ' + data.xn1 + ' - ' + data.xn2 + ' - ' + data.xn3 + ' - Tài"><img src="https://caytien.net/img/tx.png" style="height: 100%;"></div>';
        } else if (data.color == 'aqua') {
            if (name != '') {
                goldwin = Math.floor(Math.floor(goldx.replace(/\./g, "")) * 1.95);
            }
            htmlw = '<div class="ketquatx"  style="background-position-y: top;" 	id="wintx' + kqwin + '" title="Roll ' + data.roll + ' - ' + data.xn1 + ' - ' + data.xn2 + ' - ' + data.xn3 + ' - Xỉu"><img src="https://caytien.net/img/tx.png" style="height: 100%;"></div>';
        }

        chotkq = 1;
        $("#chotkeoroll").css({
            "opacity": "0"
        });
        set_reollxn(0);
        cauran1 = xep_xn(data.xn1);
        cauran2 = xep_xn(data.xn2);
        cauran3 = xep_xn(data.xn3);
        $('#xingaur1').css('background-position-x', cauran1 + '%');
        $('#xingaur2').css('background-position-x', cauran2 + '%');
        $('#xingaur3').css('background-position-x', cauran3 + '%');
        $('#soketqua').css({
            'background': ' url(./img/s/' + data.xn4 + '.png)  0% 0% / cover no-repeat'
        });
        setTimeout(function() {
            $('#wintx' + kqwin).remove();
            $('#bangketquatx').append(htmlw);
            kqwin += 1;
            if (kqwin >= 12) {
                kqwin = 1;
            }



            $('.roll' + data.color).animate({
                opacity: '1'
            });
            $('#roll' + data.color).animate({
                opacity: '1'
            });



            $('.roll2' + data.color).addClass("choptat" + data.color);

            if (goldwin > 0 && name != '') {
                gosuup('Win ' + numberjs(goldwin), '01bb66');
            }
            setTimeout(function() {
                $('.roll' + data.color).animate({
                    opacity: '0'
                });;
                $('#roll' + data.color).animate({
                    opacity: '0'
                });;
                $('.roll2' + data.color).removeClass("choptat" + data.color);
                $('#soketqua').css({
                    'opacity': '0'
                });
                Check_all(2);
            }, 5000);

        }, 1850);


    }
}

function gosuup(a, b) {
    var x = Math.floor((Math.random() * 999999) + 1);
    $('#gosuup').before('<p class="gosushow gosu' + x + '">' + a + '</p>');
    $(".gosu" + x).css({
        'color': '#' + b
    }).slideDown("slow");
    setTimeout(function() {
        $(".gosu" + x).animate({
            opacity: '0.1',
            height: 'toggle'
        })
    }, 1500); //.toggle('');
    return false;
}

function moneyred(x) {
    var str = '';
    str += x;
    str = str.toString();
    var n = str.length;
    var m = 0,
        text = '',
        demso = 0;
    for (i = 0; i < n; i++) {
        demso += 2;
        text += '<div style="background-position-x: ' + xep_so(str[i]) + '%;"><img src="/caytien.net/img/sodo.png" style="height: 100%;"></div>' + "";
    }
    var demso2 = (22 - demso) / 2;

    return '<div style="width: ' + demso2 + '%;"></div>' + text + '<div style="width: ' + demso2 + '%;" ></div>';
}

function userplayroll(n, m) {
    if (!name) {
        userlogin2();
        return false;
    }
    $.post('./ajaxupdate', {
            Play: true,
            carlist: n,
            gold: m,
        },
        function(data) {
            var json = JSON.parse(data);

            $("#errorr").html('<div class="alert ' + json.cl + ' alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h4><i class="icon fa ' + json.er + '"></i>' + json.ms + ' </h4></div>');
            if (json.er == "fa-check") {
                gosuup('Đặt ' + numberjs(m) + ' Vào ' + n.replace("tai", "Tài").replace("xiu", "Xỉu"), 'f57c0d');
                Check_all(2);
            } else if (json.ms == "Thông Báo : Số Dư Của Bạn Hiện Tại Không Đủ") {
                gosuup('Không Đủ Số Dư Đặt', 'f00');
            } else {
                gosuup('Hiện Tại Ngưng Nhận', 'ffd531');
            }
        });

}

function guicodecheck() {
    $.post("./ajaxupdate", {
            code_send: $('#textcode').val(),
            code_user_send: 1,

        },
        function(data) {
            $('#card_user_buy').prop("disabled", false).html('Xác Nhận').css('color', 'white');
            var json = JSON.parse(data);
            $(".money2").html(json.gold);
            $("#moneyh").html(json.gold);
            $("#vongquayfree").html(moneyred(json.free)).val(json.free);



            swal({
                title: "Thông Báo",
                text: json.Message,
                icon: json.icon
            });
        })

}

function loaduserlogin(x) {
    aa = '';
    bb = '';
    removee = "$('#formuser').remove();return false;";
    removee1 = "$(this).remove();return false;";
    var html = '<div class="swal-overlay swal-overlay--show-modal" tabindex="1" id="formuser"><div class="swal-modal" role="dialog" aria-modal="true"><form id="form2" method="post" enctype="multipart/form-data" ><div class="swal-content">Tên Đăng Nhập<input class="swal-content__input form-control" name="email"  id="emailx" placeholder="Tên Đăng Nhập"></div>';
    if (x == "1") {
        gg = '<div class="swal-content" >Tên Hiển Thị<input class="swal-content__input form-control form-control" name="ingame"  id="ingamex" placeholder="Tên Hiển Thị"></div> ';
        bb = '<div class="swal-content">Nhập Lại Mật Khẩu<input type="password" name="repassword"  id="repasswordx" class="swal-content__input form-control" placeholder="Nhập Lại Mật Khẩu Đăng Nhập"></div>';
        html += '<div class="swal-content"  style="display: none;" >Server<select class="swal-content__input form-control" id="server" name="server"><option value="1">S1 - Biển Lục Lam</option><option value="2">S2 - Đại Mạc</option><option value="3">S3 - Đồng Thủy Nguyệt</option><option value="4">S4 - Núí Sương Bạc</option><option value="5">S5 - Thiên Đỉnh</option><option value="6">S6 - Trường Hồng Môn</option></select></div> ';
        xxx = 'dangky';
        zzz = 'Đăng Ký';
    } else if (x == "2") {
        xxx = 'dangnhap';
        zzz = 'Đăng Nhập';
    } else if (x == "3") {
        xxx = 'quenmk';
        zzz = 'Láy Lại Mật Khẩu';
        aa = 'Mới';
        bb = '<div class="swal-content"><Center><div class="g-recaptcha" data-sitekey="6LcCMz4UAAAAABg3R4OUcSz7XZhBPPvQ6PTxVWD6"></div></Center></div>';
        html += '<div class="swal-content" >Mật Khẩu Cấp 2<input type="password" id="password2" class="swal-content__input form-control" name="password2" placeholder="Mật Khẩu Cấp 2"></div> ';
        $('#errorr').html('<scr' + 'ipt type="text/javascript" src="//www.google.com/recaptcha/api.js"><' + '/script>')
    }
    html += '<div class="swal-content">Mật Khẩu<input type="password" name="password"  id="passwordx" class="swal-content__input form-control" placeholder="Mật Khẩu Đăng Nhập ' + aa + '"></div> ' + bb + '<div class="swal-footer"><div class="swal-button-container">  <button class="swal-button swal-button--confirm" name="' + xxx + '" id="' + xxx + '"  onclick="xxx' + xxx + '();' + removee + '"  value="1" >' + zzz + '</button></div>      </form><div class="swal-button-container"><button class="swal-button swal-button--cancel" onclick="' + removee + '">Thoát</button></div></div></div></div>';
    $('#userxyz').html(html);
}

function userlogin() {
    $.ajax({
        type: 'post',
        url: './ajax',
        data: 'email=' + $('#email').val() + '&password=' + $('#password').val() + '&dangnhap=dangnhap',
        success: function(data) {
            if (data == 1) {
                window.location.href = "/";
            } else {
                swal({
                    title: "Thông Báo",
                    text: data,
                    icon: 'error',
                });
            }
        }
    })
    return false;
}

function Logout() {
    $.ajax({
        type: 'post',
        url: './ajax',
        data: 'Logout=true',
        success: function(s) {
            location.reload();
        }
    });
    return false;
}

function xxxdangky() {
    $.ajax({
        type: 'post',
        url: './ajax',
        data: 'dangky=1&email=' + $('#emailx').val() + '&repassword=' + $('#repasswordx').val() + '&password=' + $('#passwordx').val() + '&server=1',
        success: function(s) {
            if (s == 1) {
                swal({
                    title: "Thông Báo",
                    text: 'Đăng Ký Thành Công Tự Đăng Nhạp Sau 3s'
                });
                setTimeout(function() {
                    location.reload();
                }, 2000);
            } else {
                swal({
                    title: "Thông Báo",
                    text: s,
                    icon: 'error'
                });
            }
        }
    });
    return false;
}

function numberjs(x) {
    var str = String(x);
    var nii = str.length;
    var text = 0;
    var bb = '';
    var i;
    for (i = nii - 1; i >= 0; i--) {
        text += 1;
        aa = str[i];
        if (text % 3 == 0 && text != 0 && text != nii) {
            bb = '.' + aa + bb;
        } else {
            bb = aa + bb;
        }
    }
    return bb;
}

function setCookie(cname, cvalue, seconds) {
    var d = new Date();
    d.setTime(d.getTime() + (seconds * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(x) {
    var c = getCookie(x);
    if (c != "") {
        return true;
    } else {
        return false;
    }
}




function xep_ky_tu(x) {
    if (x == 'a') {
        return 0.03;
    }
    if (x == 'á') {
        return 0.445;
    }
    if (x == 'à') {
        return 0.866;
    }
    if (x == 'ạ') {
        return 1.282;
    }
    if (x == 'ã') {
        return 1.6985;
    }
    if (x == 'ả') {
        return 2.123;
    }
    if (x == 'ă') {
        return 2.538;
    }
    if (x == 'ắ') {
        return 2.955;
    }
    if (x == 'ằ') {
        return 3.374;
    }
    if (x == 'ặ') {
        return 3.795;
    }
    if (x == 'ẵ') {
        return 4.2098;
    }
    if (x == 'ẳ') {
        return 4.627;
    }
    if (x == 'â') {
        return 5.0485;
    }
    if (x == 'ấ') {
        return 5.47;
    }
    if (x == 'ầ') {
        return 5.884;
    }
    if (x == 'ậ') {
        return 6.305;
    }
    if (x == 'ẫ') {
        return 6.724;
    }
    if (x == 'ẩ') {
        return 7.14;
    }
    if (x == 'o') { //o
        return 7.565;
    }
    if (x == 'ó') {
        return 7.99;
    }
    if (x == 'ò') {
        return 8.415;
    }
    if (x == 'ọ') {
        return 8.845;
    }
    if (x == 'õ') {
        return 9.27;
    }
    if (x == 'ỏ') {
        return 9.7;
    }
    if (x == 'ơ') {
        return 10.135;
    }
    if (x == 'ớ') {
        return 10.56;
    }
    if (x == 'ờ') {
        return 11.0;
    }
    if (x == 'ợ') {
        return 11.423;
    }
    if (x == 'ỡ') {
        return 11.858;
    }
    if (x == 'ở') {
        return 12.292;
    }
    if (x == 'ô') {
        return 12.72;
    }
    if (x == 'ố') {
        return 13.145;
    }
    if (x == 'ồ') {
        return 13.575;
    }
    if (x == 'ộ') {
        return 14;
    }
    if (x == 'ỗ') {
        return 14.427;
    }
    if (x == 'ổ') {
        return 14.85;
    }
    if (x == 'e') { //a
        return 15.285;
    }
    if (x == 'é') {
        return 15.7;
    }
    if (x == 'è') {
        return 16.118;
    }
    if (x == 'ẹ') {
        return 16.53;
    }
    if (x == 'ẽ') {
        return 16.95;
    }
    if (x == 'ẻ') {
        return 17.368;
    }
    if (x == 'ê') {
        return 17.785;
    }
    if (x == 'ế') {
        return 18.205;
    }
    if (x == 'ề') {
        return 18.615;
    }
    if (x == 'ệ') {
        return 19.03;
    }
    if (x == 'ễ') {
        return 19.442;
    }
    if (x == 'ể') {
        return 19.863;
    }
    if (x == 'i') { //i
        return 20.255;
    }
    if (x == 'í') {
        return 20.535;
    }
    if (x == 'ì') {
        return 20.81;
    }
    if (x == 'ị') {
        return 21.09;
    }
    if (x == 'ĩ') {
        return 21.375;
    }
    if (x == 'ỉ') {
        return 21.656;
    }
    if (x == 'u') { //a
        return 21.965;
    }
    if (x == 'ú') {
        return 22.398;
    }
    if (x == 'ù') {
        return 22.8368;
    }
    if (x == 'ụ') {
        return 23.2768;
    }
    if (x == 'ũ') {
        return 23.715;
    }
    if (x == 'ủ') {
        return 24.154;
    }
    if (x == 'ư') { //u
        return 24.615;
    }
    if (x == 'ứ') {
        return 25.085;
    }
    if (x == 'ừ') {
        return 25.558;
    }
    if (x == 'ự') {
        return 26.028;
    }
    if (x == 'ữ') {
        return 26.505;
    }
    if (x == 'ử') {
        return 26.9725;
    }
    if (x == 'y') {
        return 27.405;
    }
    if (x == 'ý') {
        return 27.813;
    }
    if (x == 'ỳ') {
        return 28.224;
    }
    if (x == 'ỵ') {
        return 28.629;
    }
    if (x == 'ỹ') {
        return 29.0385;
    }
    if (x == 'ỷ') { // o
        return 29.4385;
    }
    if (x == 'd') {
        return 46.595;
    }
    if (x == 'đ') {
        return 47.045;
    }
    if (x == 'q') { //a
        return 29.86;
    }
    if (x == 'w') { //w
        return 30.33;
    }
    if (x == 'r') { //r
        return 30.84;
    }
    if (x == 't') { //r
        return 31.163;
    }
    if (x == 'p') { //a
        return 31.54;
    }
    if (x == 's') {
        return 31.942;
    }
    if (x == 'f') { //r
        return 32.3;
    }
    if (x == 'g') { //a
        return 32.65;
    }
    if (x == 'h') {
        return 33.095;
    }
    if (x == 'j') { //r
        return 33.46;
    }
    if (x == 'k') { //o
        return 33.85;
    }
    if (x == 'l') { //i
        return 34.21;
    }
    if (x == 'z') { //a
        return 34.511;
    }
    if (x == 'x') { //o
        return 34.914;
    }
    if (x == 'c') { //a
        return 35.324;
    }
    if (x == 'v') {
        return 35.72;
    }
    if (x == 'b') {
        return 36.148;
    }
    if (x == 'n') {
        return 36.575;
    }
    if (x == 'm') { //w
        return 37.067;
    }
    if (x == '#') { // o
        return 39.86;
    }
    if (x == '$') {
        return 40.344;
    }
    if (x == '%') { //w
        return 40.905;
    }
    if (x == '|') { //i
        return 41.487;
    }
    if (x == '`') { // r
        return 37.579;
    }
    if (x == '~') { //o
        return 38.047;
    }
    if (x == '!') { //i
        return 38.459;
    }
    if (x == '@') { //w
        return 38.859;
    }
    if (x == '*') { //a
        return 39.37;
    }
    if (x == '^') {
        return 41.965;
    }
    if (x == '&') {
        return 42.466;
    }
    if (x == '(') { //r
        return 42.905;
    }
    if (x == ')') {
        return 43.247;
    }
    if (x == '[') {
        return 43.6;
    }
    if (x == ']') {
        return 43.95;
    }
    if (x == '?') {
        return 44.348;
    }
    if (x == ',') {
        return 44.659;
    }
    if (x == '.') {
        return 44.959;
    }
    if (x == '_') { //o
        return 45.3;
    }
    if (x == '{') {
        return 45.735;
    }
    if (x == '}') {
        return 46.185;
    }
    if (x == '-') { //r
        return 47.42;
    }
    if (x == '+') {
        return 48.37;
    }
    if (x == '=') { //o
        return 47.85;
    }
    if (x == "\\") { //r
        return 49.126;
    }
    if (x == '/') {
        return 49.126;
    }
    if (x == ';') {
        return 49.6;
    }
    if (x == ':') {
        return 49.92;
    }
    if (x == "'") {
        return 50.2;
    }
    if (x == '"') {
        return 50.52;
    }
    if (x == '<') { //o
        return 50.959;
    }
    if (x == '>') {
        return 51.494;
    }
    if (x == '1') { //a
        return 51.975;
    }
    if (x == '2') {
        return 52.415;
    }
    if (x == '3') {
        return 52.845;
    }
    if (x == '4') {
        return 53.28;
    }
    if (x == '5') {
        return 53.715;
    }
    if (x == '6') {
        return 54.154;
    }
    if (x == '7') {
        return 54.588;
    }
    if (x == '8') {
        return 55.025;
    }
    if (x == '9') {
        return 55.458;
    }
    if (x == '0') {
        return 55.894;
    }

    if (x == 'A') { //a
        return 56.62;
    }
    if (x == 'Á') {
        return 57.08;
    }
    if (x == 'À') {
        return 57.545;
    }
    if (x == 'Ạ') {
        return 57.998;
    }
    if (x == 'Ã') {
        return 58.456;
    }
    if (x == 'Ả') {
        return 58.925;
    }
    if (x == 'Ă') {
        return 59.375;
    }
    if (x == 'Ắ') {
        return 59.835;
    }
    if (x == 'Ằ') {
        return 60.29;
    }
    if (x == 'Ặ') {
        return 60.752;
    }
    if (x == 'Ẵ') {
        return 61.22;
    }
    if (x == 'Ẳ') {
        return 61.67;
    }
    if (x == 'Â') {
        return 62.135;
    }
    if (x == 'Ấ') {
        return 62.584;
    }
    if (x == 'Ầ') {
        return 63.048;
    }
    if (x == 'Ậ') {
        return 63.51;
    }
    if (x == 'Ẫ') {
        return 63.97;
    }
    if (x == 'Ẩ') {
        return 64.43;
    }
    if (x == 'O') {
        return 64.905; //	o2
    }
    if (x == 'Ó') {
        return 65.405;
    }
    if (x == 'Ò') {
        return 65.905;
    }
    if (x == 'Ọ') {
        return 66.405;
    }
    if (x == 'Õ') {
        return 66.905;
    }
    if (x == 'Ỏ') {
        return 67.405;
    }
    if (x == 'Ơ') {
        return 67.925;
    }
    if (x == 'Ớ') {
        return 68.458;
    }
    if (x == 'Ờ') {
        return 68.99;
    }
    if (x == 'Ợ') {
        return 70.058;
    }
    if (x == 'Ỡ') {
        return 70.595;
    }
    if (x == 'Ở') {
        return 71.133;
    }
    if (x == 'Ô') {
        return 71.635;
    }
    if (x == 'Ố') {
        return 72.135;
    }
    if (x == 'Ồ') {
        return 72.635;
    }
    if (x == 'Ộ') {
        return 73.135;
    }
    if (x == 'Ỗ') {
        return 73.635;
    }
    if (x == 'Ổ') {
        return 74.135;
    }
    if (x == 'E') { //a1
        return 74.58;
    }
    if (x == 'É') {
        return 75.005;
    }
    if (x == 'È') {
        return 75.43;
    }
    if (x == 'Ẹ') {
        return 75.86;
    }
    if (x == 'Ẽ') {
        return 76.285;
    }
    if (x == 'Ẻ') {
        return 76.709;
    }
    if (x == 'Ê') {
        return 77.135;
    }
    if (x == 'Ế') {
        return 77.569;
    }
    if (x == 'Ề') {
        return 77.98;
    }
    if (x == 'Ệ') {
        return 78.415;
    }
    if (x == 'Ễ') {
        return 78.839;
    }
    if (x == 'Ể') {
        return 79.29;
    }
    if (x == 'I') { //r
        return 79.637;
    }
    if (x == 'Í') {
        return 80.005;
    }
    if (x == 'Ì') {
        return 80.365;
    }
    if (x == 'Ị') {
        return 80.73;
    }
    if (x == 'Ĩ') {
        return 81.095;
    }
    if (x == 'Ỉ') {
        return 81.456;
    }
    if (x == 'D') { //o2
        return 81.945;
    }
    if (x == 'Đ') {
        return 82.445;
    }
    if (x == 'U') { //a2
        return 82.915;
    }
    if (x == 'Ú') {
        return 83.4;
    }
    if (x == 'Ù') {
        return 83.889;
    }
    if (x == 'Ụ') {
        return 84.368;
    }
    if (x == 'Ũ') {
        return 84.856;
    }
    if (x == 'Ủ') {
        return 85.34;
    }
    if (x == 'Ư') { //o2
        return 85.865;
    }
    if (x == 'Ứ') {
        return 86.37;
    }
    if (x == 'Ừ') {
        return 86.882;
    }
    if (x == 'Ự') {
        return 87.393;
    }
    if (x == 'Ữ') {
        return 87.905;
    }
    if (x == 'Ử') {
        return 88.41;
    }
    if (x == 'Y') {
        return 88.86;
    }
    if (x == 'Ý') {
        return 89.315;
    }
    if (x == 'Ỳ') {
        return 89.768;
    }
    if (x == 'Ỵ') {
        return 90.22;
    }
    if (x == 'Ỹ') {
        return 90.67;
    }
    if (x == 'Ỷ') {
        return 91.12;
    }
    if (x == 'Q') {
        return 91.605;
    }
    if (x == 'W') { //w
        return 92.20;
    }
    if (x == 'R') { //a2
        return 92.72;
    }
    if (x == 'T') {
        return 93.15;
    }
    if (x == 'P') { // o
        return 93.585;
    }
    if (x == 'S') {
        return 94.015;
    }
    if (x == 'F') {
        return 94.45;
    }
    if (x == 'G') {
        return 94.90; //a2
    }
    if (x == 'H') {
        return 95.40;
    }
    if (x == 'J') { //r
        return 95.76;
    }
    if (x == 'K') { //a2
        return 96.67;
    }
    if (x == 'L') { //a
        return 96.204;
    }
    /*
    if(x == ';'){
    return  96.68 ;	
    }*/
    if (x == 'Z') { //a2
        return 97.1;
    }
    if (x == 'X') {
        return 97.55;
    }
    if (x == 'C') {
        return 98.0;
    }
    if (x == 'V') {
        return 98.455;
    }
    if (x == 'B') { //o
        return 98.903;
    }
    if (x == 'N') {
        return 99.368;
    }
    if (x == 'M') {
        return 99.928;
    }
    if (x == ' ') {
        return 105;
    }
    return 105;
}

function change_alias2(alias) {
    var str = alias.toString();
    str = str.replace(/ + /g, " ");
    str = str.replace(/\^|\*|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ù|ú|ụ|ủ|ũ|q|p|s|g|h|z|c|v|b|n|1|2|3|4|5|6|7|8|9|0|đ|d|E|Ê|Ế|Ề|Ể|Ễ|Ệ|É|È|Ẻ|Ẽ|Ẹ|L/g, "a");
    str = str.replace(/e|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "a");
    str = str.replace(/ |\r|\n|!|ì|í|ị|ỉ|ĩ|l|\|/g, "i");
    str = str.replace(/B|P|S|F|\"|\&|\#|\<|\>|\=|{|}|_|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ỳ|ý|ỵ|y|ỷ|ỹ|k|x|\$|~/g, "o");
    str = str.replace(/ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/@|W|m|%/g, "w");
    str = str.replace(/I|Í|Ì|Ị|Ỉ|Ĩ|\:|\;|\'|\\|\/|\+|-|,|\.|\?|\[|\]|\)|\(|r|t|f|j|`/g, "J");
    str = str.replace(/X|Y|Ý|Ỳ|Ỷ|Ỹ|Ỵ|C|V|Z|N|M|Ạ|G|H|R|T|U|Ú|Ù|Ủ|Ũ|Ụ|Á|À|A|Ã|Ả|Â|Ấ|Ầ|Ậ|Ẫ|Ẩ|Ă|Ắ|Ằ|Ặ|Ẵ|Ẳ/g, "D");
    str = str.replace(/Ư|Q|Ứ|Ừ|Ự|Ử|Ữ|Đ|O|Ó|Ò|Ọ|Ỏ|Õ|Ô|Ố|Ồ|Ộ|Ổ|Ỗ|Ơ|Ớ|Ờ|Ợ|Ở|Ỡ/g, "K");
    str = str.trim();
    if (str == 'a' || str == 'i' || str == 'o' || str == 'u' || str == 'w' || str == 'J' || str == 'K' || str == 'D') {
        return str
    } else {
        return 'a';
    }
}

function moneyred2(x, y = 'font-color-by', c = '') {
    var str = '';
    str += x;
    str = str.toString();
    var n = str.length;
    var m = 0,
        text = '';
    for (i = 0; i < n; i++) {

        text += '<img class="' + y + '"src="../font5/' + change_alias2(str[i]) + '.png" style="background-position-x: ' + xep_ky_tu(str[i]) + '%;' + c + '">' + "";

    }

    return text;
}


function loadketqua(a) {
    $.post("https://hatrongcasino.com/ketquaapi.php", {
            ketqua: true,
            ketquaid: Math.floor($("#ketquaroll").val()),
        },
        function(data) {
            $("#ketquaroll").val(Math.floor($("#ketquaroll").val()) + 5).append(data);
        })
}

function traodoiht(xa) {
    gold = Math.floor($('#gold_charing_gold').val());
    change = Math.floor($('#gold_charing_sell').val());
    if (change == 1) {
        $('#gold_charing_g').html('Bạn Muốn Mua ' + numberjs(gold) + ' GOLD Bằng ' + numberjs(gold * xa) + ' G ');
    } else {
        $('#gold_charing_g').html('Bạn Muốn Bán  ' + numberjs(gold) + ' GOLD Nhận' + numberjs(gold * xa) + ' G ');
    }

}

function fontreup(a, b, c) {
    $('#' + c).html('<p class="font_re_up" style="color:#' + b + '">' + a + '</p>');
    return false;
}

function thuht_x_d(a) {
    if (a == 1) {
        $('#frmdatdo button').hide()
        $('#frmdatdo #thugolddo').val('');
        $('#frmdatxanh button').show();
    } else {
        $('#frmdatdo button').show();
        $('#frmdatxanh button').hide();
        $('#frmdatxanh #thugoldxanh').val('');
    }
}

function bang_vong_quay_show() {
    if (bangvq == 0) {
        bangvq = 1;
        $.post("./ajax", {
                load_vong_quay_show: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
            })

    } else {
        $('#bang_vong_quay').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#bang_vong_quay'));
    }

    return false;

}

function load_nap_cham() {
    if (bangnc == 0) {
        bangnc = 1;
        $.post("./ajax", {
                load_nap_cham: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
                $("#napthecham").show().draggable({
                    handle: "div"
                })
                set_show($("#napthecham"));
            })

    } else {
        $('#napthecham').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#napthecham'));
    }

    return false;
}

function load_taixiu() {
    if (bangtx == 0) {
        bangtx = 1;
        $.post("./ajax", {
                load_tai_xiu: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
                $("#movetaixiu").show().draggable({
                    handle: "div"
                })
                set_show($("#movetaixiu"));
            })

    } else {
        $('#movetaixiu').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#movetaixiu'));
    }

    return false;
}

function load_nap_momo() {
    $("#muamomonhanh").remove();
    $.post("./ajax", {
            load_muamomo: 1,
        },
        function(data) {
            $("#loaddulieu").prepend(data);
        })



    return false;
}

function load_nap_zalo() {
    $("#muamomonhanh").remove();
    $.post("./ajax", {
            load_muazalo: 1,
        },
        function(data) {
            $("#loaddulieu").prepend(data);
        })
    return false;
}

function lich_su_mini(x) {
    $("#mini_lich_su_roll").remove();
    $.post("./ajax", {
            lich_su_mini: x,
        },
        function(data) {
            $("#loaddulieu").prepend(data);
        })
    return false;
}

function load_bau_cua() {
    if (bangbctc == 0) {
        bangbctc = 1;
        $.post("./ajax", {
                load_bau_cua_tom_ca: 1,
            },
            function(data) {
                $("#loaddulieu").prepend(data);
            });

    } else {
        $('#baucuatomca').show().animate({
            'left': '5',
            'top': '0'
        });
        set_show($('#baucuatomca'));
    }

    return false;
}

function set_ketquaht(data) {
    offopenht = 0;
    $('#timeroll').html('Đang Nhận');
    if (data.chot == 3) {
        $("#youtubestream").attr("src", data.color);
    } else if (data.roll >= rollwebht) {
        rollwebht = Math.floor(data.roll) + 1;
        fontreup('#' + rollwebht, 'ffff', 'phienthuht');
        var html =
            '<div class="info-box bg-' + data.color + '">' +
            '<span class="info-box-icon"><img src="../icon/' + data.thu + '.gif"></span>' +
            '<div class="info-box-content">' +
            '<span class="info-box-text"> Tổng Tiền Cược : ' + numberjs(data.gold) + ' G</span>' +
            '<span class="info-box-number"> Roll : ' + data.roll + '</span>' +
            '<div class="progress">' +
            '<div class="progress-bar" style="width: 100%"></div>' +
            '</div>	' +
            '<span class="progress-description">Quay Lúc : ' + data.time + '</span>' +
            '</div></div>';
        $('#ketquaroll').prepend(html);
        $('#ketquaroll .info-box').last().remove();
        var boxshadow = false;
        var tid = setInterval(function() {
            if (boxshadow == false) {
                $('.roll' + data.color).css('box-shadow', '0 0 80px ' + data.color);
                boxshadow = true;
            } else {
                $('.roll' + data.color).css('box-shadow', 'none');
                boxshadow = false;
            }
        }, 1000);
        setTimeout(function() {
            clearInterval(tid);
            $('.roll' + data.color).css('box-shadow', 'none');
        }, 20000);
        $.ajax({
            type: 'post',
            url: '../ajax',
            data: {
                checkthuht: 1,
            },
            success: function(data) {
                var json = JSON.parse(data);
                if (json.thuhtw != 0) {
                    upthongbao('Bạn Vừa Win ' + json.thuhtw, '00a65a', 'thudattb');
                }
                fontreup('GOLD : ' + json.thuhtg, 'ffff', 'thuhtgold');
                $("#thudatgolddo").html(0);
                $("#thudatgoldxanh").html(0);
            }
        });
        fontreup('Đang Nhận', '00a65a', 'onoffthuht');
    }
}