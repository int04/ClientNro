
var tien = 0;
socket['on']('chat', function(_0x90f8x2) {
    _0x90f8x2 = JSON['parse'](decode(_0x90f8x2));
    $('#phongchat')['html'](_0x90f8x2['center'] + $('#phongchat')['html']());
    thongbao(_0x90f8x2['notice'], 'thongtin')
});

function so_khac_tx(_0x90f8x4) {
    if (_0x90f8x4 == 1) {
        $('#khung-tx .group-button div')['html']('<div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="100"></div></div><div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="500"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="1K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="5K" ></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="10K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="50K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="100K"></div> </div><div class="button"onclick="btn_money_tx($(this));" ><div class="middle" data-txt="500K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="1M"></div> </div><div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="2M" ></div> </div><div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="5M"></div> </div><div class="button"><div class="middle" data-txt="T\u1EA5t Tay" onclick="tattay_tx()"></div> </div><div class="button blue" onclick="so_khac_tx(2);"><div class="middle" data-txt="S\u1ED1 Kh\xE1c" ></div> </div><div class="button green"  onclick="dat_tx();" ><div class="middle" data-txt="\u0110\u1EB7t C\u01B0\u1EE3c"></div> </div><div class="button red" onclick="cuoc_tx(3)" ><div class="middle" data-txt="H\u1EE7y" ></div></div>')
    } else {
        $('#khung-tx .group-button div')['html']('<div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="1" ></div></div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="2" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="3" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="4" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="5" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="6" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="7" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="8" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="9" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="0" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="000" ></div> </div><div class="button"  onclick="btn_khac_tx($(this));"><div class="middle" data-txt="X\xF3a" ></div> </div><div class="button blue" ><div class="middle" data-txt="S\u1ED1 Nhanh" onclick="so_khac_tx(1);"></div> </div><div class="button green"  onclick="dat_tx();" ><div class="middle" data-txt="\u0110\u1EB7t C\u01B0\u1EE3c"></div> </div><div class="button red" ><div class="middle" data-txt="H\u1EE7y"  onclick="cuoc_tx(3)"></div></div>')
    }
}

function decode(_0x90f8x9) {
    var _0x90f8x5 = '';
    _0x90f8x9 = _0x90f8x9['replace'](/ /g, '');
    for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x9['length']; _0x90f8xa += 2) {
        _0x90f8x5 += String['fromCharCode'](parseInt(_0x90f8x9['substr'](_0x90f8xa, 2), 16))
    };
    return decodeURIComponent(escape(_0x90f8x5))
}

function encode(_0x90f8x5) {
    _0x90f8x5 = unescape(encodeURIComponent(_0x90f8x5));
    var _0x90f8x9 = '';
    for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x5['length']; _0x90f8xa++) {
        _0x90f8x9 += ' ' + _0x90f8x5['charCodeAt'](_0x90f8xa).toString(16)
    };
    return _0x90f8x9
}

function dragx(_0x90f8x4, _0x90f8xd) {
    $(function() {
        var _0x90f8xe = 0;
        _0x90f8x4['draggable']({
            axis: 'x',
            start: function() {},
            drag: function() {
                _0x90f8xe++;
                if (_0x90f8xe > 7) {
                    $('.menu_game_drag')['show']();
                    _0x90f8xe = -999999
                }
            },
            stop: function() {
                $('.menu_game_drag')['hide']();
                _0x90f8xe = 0;
                var _0x90f8xf = $(this)['position']();
                if (_0x90f8xf['left'] > 0) {
                    $(this)['animate']({
                        left: '0px'
                    }, 500)
                };
                var _0x90f8x10 = $(_0x90f8xd)['length'],
                    _0x90f8x11 = 0,
                    _0x90f8xa = 0;
                for (_0x90f8xa = 0; _0x90f8xa < _0x90f8x10; _0x90f8xa++) {
                    _0x90f8x11 += $(_0x90f8xd)['eq'](_0x90f8xa)['width']()
                };
                var _0x90f8x9 = '-' + (_0x90f8x11 - _0x90f8x4['width']() + 10);
                if (_0x90f8x11 < _0x90f8x4['width']() && _0x90f8xf['left'] < 0) {
                    _0x90f8x4['animate']({
                        left: '0px'
                    }, 200)
                };
                var _0x90f8x12 = _0x90f8x11 - $(this)['width']();
                if ((_0x90f8x12 + _0x90f8xf['left']) < 0 && _0x90f8xf['left'] < 0) {
                    $(this)['animate']({
                        left: _0x90f8x9 + 'px'
                    }, 500)
                }
            }
        })
    })
}

function dragy(_0x90f8x4, _0x90f8xd) {
    $(function() {
        function _0x90f8x14(_0x90f8x15) {
            return false;
            var _0x90f8xf = _0x90f8x4['position']();
            if (_0x90f8xf['top'] > -10 && _0x90f8x15 != 1) {
                if (_0x90f8x15 > 0) {
                    return false
                };
                _0x90f8x4['animate']({
                    top: '0px'
                }, 300)
            };
            var _0x90f8x10 = $(_0x90f8xd)['length'],
                _0x90f8x11 = 0,
                _0x90f8xa = 0;
            for (_0x90f8xa = 0; _0x90f8xa < _0x90f8x10; _0x90f8xa++) {
                _0x90f8x11 += $(_0x90f8xd)['eq'](_0x90f8xa)['height']()
            };
            var _0x90f8x9 = '-' + (_0x90f8x11 - _0x90f8x4['height']() + 10);
            if (_0x90f8x11 < _0x90f8x4['height']() && _0x90f8x15 != 2) {
                if (_0x90f8x15 > 0) {
                    return false
                };
                _0x90f8x4['animate']({
                    top: '0px'
                }, 200)
            };
            if (((_0x90f8x11 - _0x90f8x4['height']()) + _0x90f8xf['top']) < 10 && _0x90f8xf['top'] < 0 && _0x90f8x15 != 2) {
                if (_0x90f8x15 > 0) {
                    return false
                };
                _0x90f8x4['animate']({
                    top: _0x90f8x9 + 'px'
                }, 300)
            };
            return true
        }
        _0x90f8x4['on']('mousewheel', function(_0x90f8x16) {
            if (_0x90f8x16['originalEvent']['wheelDelta'] / 120 > 0) {
                if (_0x90f8x14(2) == true) {
                    _0x90f8x4['css']({
                        top: _0x90f8x4['position']()['top'] + (_0x90f8x4['height']() * 0.1) + 'px'
                    })
                }
            } else {
                if (_0x90f8x14(1) == true) {
                    _0x90f8x4['css']({
                        top: _0x90f8x4['position']()['top'] - (_0x90f8x4['height']() * 0.1) + 'px'
                    })
                }
            };
            _0x90f8x16['preventDefault']()
        });
        _0x90f8x4['draggable']({
            axis: 'y',
            stop: function() {
                _0x90f8x14()
            }
        });
        _0x90f8x14('1')
    })
}

function dragz(_0x90f8x18, _0x90f8xd, _0x90f8x19) {
    $(function() {
        function _0x90f8x14(_0x90f8x18, _0x90f8xd, _0x90f8x19, _0x90f8x15) {
            var _0x90f8x1a = Number(_0x90f8x1e['css']('left')['replace']('px', ''));
            if (_0x90f8x15 == 1) {
                var _0x90f8x1b = Math['floor'](_0x90f8x1a + _0x90f8x1e['width']()) + 10
            } else {
                var _0x90f8x1b = Math['floor'](_0x90f8x1a - _0x90f8x1e['width']()) + 10
            };
            var _0x90f8x1c = Math['floor'](_0x90f8x1b / _0x90f8x1e['width']());
            var _0x90f8x1d = Math['floor'](_0x90f8x1b - _0x90f8x1e['width']());
            _0x90f8x1e['css']({
                left: _0x90f8x1c + '' + '00%'
            });
            var _0x90f8x10 = $(_0x90f8x19)['length'],
                _0x90f8x11 = 0,
                _0x90f8xa = 0;
            for (_0x90f8xa = 0; _0x90f8xa < _0x90f8x10; _0x90f8xa++) {
                _0x90f8x11 += $(_0x90f8x19)['eq'](_0x90f8xa)['width']()
            };
            if (_0x90f8x1c > -1) {
                $(_0x90f8x18 + ' .left')['hide']()
            } else {
                $(_0x90f8x18 + ' .left')['show']()
            };
            if ('-' + _0x90f8x11 > _0x90f8x1d) {
                $(_0x90f8x18 + ' .right')['hide']()
            } else {
                $(_0x90f8x18 + ' .right')['show']()
            };
            console['log'](_0x90f8x1b);
            console['log'](_0x90f8x1c);
            console['log'](_0x90f8x1b / _0x90f8x1e['width']());
            return true
        }
        var _0x90f8x4 = $(_0x90f8x18);
        var _0x90f8x1e = $(_0x90f8xd);
        $(_0x90f8x18 + ' .left')['on']('click touchstart mousedown touchend', function() {
            if (check_click($(this)) == true) {
                _0x90f8x14(_0x90f8x18, _0x90f8xd, _0x90f8x19, 1)
            }
        })['hide']();
        $(_0x90f8x18 + ' .right')['on']('click touchstart mousedown touchend', function() {
            if (check_click($(this)) == true) {
                _0x90f8x14(_0x90f8x18, _0x90f8xd, _0x90f8x19, 2)
            }
        })
    })
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
    };
    return _0x90f8x23
}

function note_play(_0x90f8x25, _0x90f8x26, _0x90f8x11) {
    var _0x90f8x4 = Math['floor']((Math['random']() * 99999999) + 1);
    $('' + _0x90f8x25)['html']('<p class=\"note_play id' + _0x90f8x4 + '\">' + _0x90f8x26 + '</p>');
    $('.note_play.id' + _0x90f8x4)['css']({
        'color': '#' + _0x90f8x11
    })['slideDown']('slow');
    setTimeout(function() {
        $('.note_play.id' + _0x90f8x4)['animate']({
            opacity: '0.0',
            height: 'toggle'
        }, 500)['promise']()['done'](function() {
            $(this)['remove']()
        })
    }, 1500);
    return false
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}




function check_all(_0x90f8x25) {
    return false;
   
}

function check_win(_0x90f8x25, _0x90f8x26) {
    if (_0x90f8x25 == 'tai-xiu') {
        if (_0x90f8x26 == 'tai-wrap') {
            var _0x90f8x11 = njs(Math['floor']($('.khung-tx .cuoc-tai')['html']()['replace'](/\./g, '')) * 1.95)
        } else {
            if (_0x90f8x26 == 'xiu-wrap') {
                var _0x90f8x11 = njs(Math['floor']($('.khung-tx .cuoc-xiu')['html']()['replace'](/\./g, '')) * 1.95)
            }
        };
        check_all(1);
        if (_0x90f8x11 != '0') {
            setTimeout(function() {
                note_play('#khung-tx .move-here .note_here', 'Bạn thắng, vào lịch sử để xem.', '04b904');
                $('.khung-tx .cuoc-xiu')['html']('0');
                $('.khung-tx .cuoc-tai')['html']('0')
            }, 2500)
        }
    };
    if (_0x90f8x25 == 'blade-soul') {
        if (_0x90f8x26 == 'red') {
            var _0x90f8x11 = njs(Math['floor']($('#khung_id8 .money-red-play div')['html']()['replace'](/\./g, '')) * 1.95)
        } else {
            if (_0x90f8x26 == 'blu') {
                var _0x90f8x11 = njs(Math['floor']($('#khung_id8 .money-blu-play div')['html']()['replace'](/\./g, '')) * 1.95)
            }
        };
        if (_0x90f8x11 != '0') {
            setTimeout(function() {
                note_play('#khung_id8 .move-here .note_here', 'Bạn Vừa Thắng ' + _0x90f8x11, '04b904')
            }, 2500)
        };
        check_all(8)
    };
    return false
}

function Load_Game(x, y, h) {
    if (khunggame[0] == 1 && khunggame[y] == 1) {
        $('#' + y).show('fade', {}, 500)
    } else if (khunggame[0] == 1) {


        console.log(1);

        khunggame[y] = 1;
        $.ajax({
            type: 'post',
            url: '/html5/' + h + '/index.html',
            data: {
                load_game: true,
                game_load: x,
            },
            success: function(s) {
                $('#cvs_ga').append(s);
                $('#' + y).hide();



                $('#' + y).show();
                setCookie(y, '1', 0.1);
            }
        });
    }
}

function hideHis() {
    $('.main-his')['removeClass']('show-main');
    $('.main-his .show-main')['removeClass']('show-main')
}

function set_img(_0x90f8x4, _0x90f8x2a, _0x90f8x11) {
    _0x90f8x4 = (100 / Math['floor'](_0x90f8x2a)) * Math['floor'](_0x90f8x4);
    if (_0x90f8x11) {
        _0x90f8x4 = _0x90f8x4 + _0x90f8x11
    };
    return _0x90f8x4
}


function set_time(_0x90f8x5) {
    $("#khung_id10 .cuoc_khung1 .all_b").attr('data-txt', _0x90f8x5.cuocxd[0]);
    $("#khung_id10 .cuoc_khung2 .all_b").attr('data-txt', _0x90f8x5.cuocxd[1]);
    $("#khung_id10 .cuoc_khung3 .all_b").attr('data-txt', _0x90f8x5.cuocxd[2]);
    $("#khung_id10 .cuoc_khung4 .all_b").attr('data-txt', _0x90f8x5.cuocxd[3]);
    $("#khung_id10 .cuoc_khung5 .all_b").attr('data-txt', _0x90f8x5.cuocxd[4]);
    $("#khung_id10 .cuoc_khung6 .all_b").attr('data-txt', _0x90f8x5.cuocxd[5]);
    $("#khung_baucua .cuadat .item:nth-child(1) div .c-cuoc").html(mcccc(_0x90f8x5.var1));
    $("#khung_baucua .cuadat .item:nth-child(2) div .c-cuoc").html(mcccc(_0x90f8x5.var2));
    $("#khung_baucua .cuadat .item:nth-child(3) div .c-cuoc").html(mcccc(_0x90f8x5.var3));
    $("#khung_baucua .cuadat .item:nth-child(4) div .c-cuoc").html(mcccc(_0x90f8x5.var4));
    $("#khung_baucua .cuadat .item:nth-child(5) div .c-cuoc").html(mcccc(_0x90f8x5.var5));
    $("#khung_baucua .cuadat .item:nth-child(6) div .c-cuoc").html(mcccc(_0x90f8x5.var6));
    $('#clphien')['html'](njs(_0x90f8x5['r']));
    /*Duc Nghia*/
    if (_0x90f8x5['b'] >= 1) {
        var khkrt = '<font color="green">' + _0x90f8x5['b'] + 's</font>';
    } else {
        var khkrt = '<font color="red">' + _0x90f8x5['a'] + 's</font>';
    }
    $("#id_taixiu").html(khkrt);
    $("#id_baucua").html(khkrt);
    $("#id_chanle").html(khkrt);
    /*DucNghia IT*/
    $('.khung-tx .cuoc-xiu')['html'](njs(_0x90f8x5['cx']));
    $('.khung-tx .cuoc-tai')['html'](njs(_0x90f8x5['ct']))
    if (tien <= 0) {
        numanimate_2($('.khung-tx .money-tai,.game-item-2 .money-tai .middle'), _0x90f8x5['t'], 17);
        numanimate_2($('.khung-tx .money-xiu,.game-item-2 .money-xiu .middle'), _0x90f8x5['x'], 17);
        $('.khung-tx .user-tai')['html'](njs(_0x90f8x5['at']));
        $('.khung-tx .user-xiu')['html'](njs(_0x90f8x5['ax']));
        $('.khung-tx .roll-play span')['html'](_0x90f8x5['r'])
    } else {
        if (tien == 1) {
            numanimate_2($('.khung-tx .money-tai,.game-item-2 .money-tai .middle'), _0x90f8x5['t2'], 17);
            numanimate_2($('.khung-tx .money-xiu,.game-item-2 .money-xiu .middle'), _0x90f8x5['x2'], 17);
            $('.khung-tx .user-tai')['html'](njs(_0x90f8x5['at2']));
            $('.khung-tx .user-xiu')['html'](njs(_0x90f8x5['ax2']));
            $('.khung-tx .roll-play span')['html'](_0x90f8x5['r'] + ' thử')
        }
    };
    $('#khung_id8 .money-red-user div')['html'](njs(_0x90f8x5['bs1']));
    $('#khung_id8 .money-blu-user div')['html'](njs(_0x90f8x5['bs2']));
    $('#khung_id8 .money-red div font')['html'](njs(_0x90f8x5['abs1']));
    $('#khung_id8 .money-blu div font')['html'](njs(_0x90f8x5['abs2']));
    $('#khung_baucua .phien span')['html'](_0x90f8x5['r']);
    $('#khung_baucua .cuadat .item:nth-child(1) div .b-cuoc')['html'](_0x90f8x5['bc1']);
    $('#khung_baucua .cuadat .item:nth-child(2) div .b-cuoc')['html'](_0x90f8x5['bc2']);
    $('#khung_baucua .cuadat .item:nth-child(3) div .b-cuoc')['html'](_0x90f8x5['bc3']);
    $('#khung_baucua .cuadat .item:nth-child(4) div .b-cuoc')['html'](_0x90f8x5['bc4']);
    $('#khung_baucua .cuadat .item:nth-child(5) div .b-cuoc')['html'](_0x90f8x5['bc5']);
    $('#khung_baucua .cuadat .item:nth-child(6) div .b-cuoc')['html'](_0x90f8x5['bc6']);
    if (gid[10] == '#khung_id10 ') {
        chip_roll_id10('cuoc_khung1', _0x90f8x5['xocdia'][0]);
        chip_roll_id10('cuoc_khung2', _0x90f8x5['xocdia'][1]);
        chip_roll_id10('cuoc_khung3', _0x90f8x5['xocdia'][2]);
        chip_roll_id10('cuoc_khung4', _0x90f8x5['xocdia'][3]);
        chip_roll_id10('cuoc_khung5', _0x90f8x5['xocdia'][4]);
        chip_roll_id10('cuoc_khung6', _0x90f8x5['xocdia'][5])
    };
    capnhathured = 23 - Math['floor'](_0x90f8x5['a']);
    if (Math['floor'](_0x90f8x5['b']) > 0) {
        if (Math['floor'](_0x90f8x5['b']) > 38) {
            $('#khung_id10 .cuoc_khbox .all_s')['removeClass']('active');
            $('#khung_id10 .animation')['css']({
                'top': '0px',
                'left': '0px'
            })['addClass']('id10_laccaidia');
            $('#khung_id10 .all_chip')['remove']()
        } else {
            $('#khung_id10 .animation')['removeClass']('id10_laccaidia')['css']({
                'top': '0px',
                'left': '0px'
            })
        };
        if ($('#game-taixiu2')['hasClass']('time') == false) {
            $('#game-taixiu2')['addClass']('time')
        };
        $('#game_id_8_mini div,#game_id_2_mini div,#game_id_1_mini div, #ducnghia_timetaixiu')['html'](_0x90f8x5['b']);
        $('#khung_baucua .dia')['removeClass']('ef');
        $('#khung_baucua .active')['removeClass']('active');
        $('.clock-big')['html'](_0x90f8x5['b'])['html'](_0x90f8x5['b'])['show']();
        $('#khung_id10 .chechen')['show']();
        $('.clock img,#khung_id10 .clock-small')['hide']();
        timeclock = 0
    } else {
        if (_0x90f8x5['a'] > 16) {
            $('#game-taixiu2 .clock img')['css']({
                'opacity': 1
            })
        } else {};
        $('.clock img,#khung_id10 .clock-small')['show']();
        $('#game-taixiu2')['removeClass']('time');
        $('.clock-big')['hide']();
        $('.clock-small')['html'](_0x90f8x5['a']);
        $('#game_id_8_mini div.showwin')['html']('<font color=\"red\">' + _0x90f8x5['a'] + '</font>');
        $('#game_id_1_mini div.showwin,#ducnghia_timetaixiu')['html']('<font color=\"red\">' + _0x90f8x5['a'] + '</font>');
        $('#game_id_2_mini div')['html']('<font color=\"red\">' + _0x90f8x5['a'] + '</font>');
        if (_0x90f8x5['a'] > 5) {
            $('#game-taixiu .vung_number span')['html'](Math['floor'](_0x90f8x5['a']) - 5);
            if ($('#khung_id10 .nangame')['val']() == 1) {
                $('#khung_id10 .clock-small')['html'](Math['floor'](_0x90f8x5['a']) - 5)
            }
        } else {
            if (ketquatxvung != false) {
                kq_taixiu(ketquatxvung, true)
            };
            if (kq_xocdia && kq_xocdia != null) {
                kq_roll_id10(kq_xocdia)
            }
        };
        timeclock = Math['floor'](_0x90f8x5['a']) * 1000
    }
}

function tron_k(_0x90f8x5) {
    _0x90f8x5 = Math['floor'](_0x90f8x5);
    return njs(Math['floor'](_0x90f8x5 / 1000))
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

function check_click2(_0x90f8x4) {
    if (_0x90f8x4['data']('click') != 'click') {
        _0x90f8x4['data']('click', 'click');
        setTimeout(function() {
            _0x90f8x4['removeData']('click')
        }, 100);
        return true
    };
    return false
}

function check_click(_0x90f8x4) {
    if (_0x90f8x4['data']('click') != 'click') {
        _0x90f8x4['data']('click', 'click');
        setTimeout(function() {
            _0x90f8x4['removeData']('click')
        }, 300);
        return true
    };
    return false
}
$(document)['ready'](function() {});

function numanimate(_0x90f8x4, _0x90f8x2a) {
    var _0x90f8x39 = Math['floor'](_0x90f8x4['val']());
    var _0x90f8x3a = (Math['floor'](_0x90f8x2a) - Math['floor'](_0x90f8x4['val']())) / 10;
    (function _0x90f8x2c(_0x90f8xa) {
        setTimeout(function() {
            _0x90f8x4['html'](njs(Math['floor'](_0x90f8x39 + (11 - _0x90f8xa) * _0x90f8x3a)));
            if (--_0x90f8xa) {
                _0x90f8x2c(_0x90f8xa)
            } else {
                _0x90f8x4['val'](_0x90f8x2a)
            }
        }, 30)
    })(10)
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
    })(_0x90f8x3c)
}

function getCookie(_0x90f8x3e) {
    var _0x90f8x3f = _0x90f8x3e + '=';
    var _0x90f8x40 = document['cookie']['split'](';');
    for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x40['length']; _0x90f8xa++) {
        var _0x90f8x11 = _0x90f8x40[_0x90f8xa];
        while (_0x90f8x11['charAt'](0) == ' ') {
            _0x90f8x11 = _0x90f8x11['substring'](1)
        };
        if (_0x90f8x11['indexOf'](_0x90f8x3f) == 0) {
            return _0x90f8x11['substring'](_0x90f8x3f['length'], _0x90f8x11['length'])
        }
    };
    return ''
}

function checkCookie(_0x90f8x3e) {
    var _0x90f8x42 = getCookie(_0x90f8x3e);
    if (_0x90f8x42 != '') {
        return true
    } else {
        return false
    }
}
$(document)['ready'](function() {
    var newhttpgame = new XMLHttpRequest();
    newhttpgame['onreadystatechange'] = function() {
        if (this['readyState'] == 4 && this['status'] == 200) {
            newhttpdata = JSON.parse(this['responseText']);
            $("body").html(newhttpdata.head+newhttpdata.end);
            getContent((window.location.pathname.length <= 5 ? '/home/index.html' : window.location.pathname));
            chaychu(newhttpdata.http_notice);

        }
    };
    newhttpgame['open']('POST', '/new', true);
    newhttpgame['send']('t=1&load=1');
    /// DUC NGHIA
    check_all(0);
    dragz('#wesite_game_lr', '.menu-game .swiper-wrapper', '.menu-game .swiper-wrapper');
    dragy($('#lsscroll'), '#lsscroll .showhe');
    dragy($('#show_hu_number'), '#show_hu_number .body_1');
    khunggame[0] = 1;
    //  Load_Game(1,'game-taixiu','ngocrong');
    // Load_Game(10,'khung_id10','chanle');
    // Load_Game(2, 'khung_baucua', 'baucua')
    // Load_Game(5,'khung_id5','phucsinh');
});
$(document)['on']('click', 'a', function(_0x90f8x43) {
    _0x90f8x43['preventDefault']();
    var _0x90f8x44 = $(this)['attr']('href');
    var _0x90f8x14 = _0x90f8x44['split']('//');
    if (_0x90f8x14[1]) {
        window.open('http://' + _0x90f8x14[1], '_blank');
        return false;

    }
    if (_0x90f8x44.split('#')[1]) {
        return false;
    }
    if (_0x90f8x44.split(':')[0] == "javascript") {
        return false;
    }
    if (!_0x90f8x14[1]) {
        if (_0x90f8x44 != '#menu' && _0x90f8x44 != '#ducnghia' && _0x90f8x44 != '#' && _0x90f8x44 != '#home') {
            getContent(_0x90f8x44)
        }
    } else {
        getContent(_0x90f8x44)
    }
});
window['addEventListener']('popstate', function(_0x90f8x16) {
    getContent(location['pathname'], false)
});

function getContent(_0x90f8x46, _0x90f8x47) {
    loadingView = false;
    if (!_0x90f8x47) {};
    var _0x90f8x48 = new XMLHttpRequest();
    _0x90f8x48['onreadystatechange'] = function() {
        if (this['readyState'] == 4 && this['status'] == 200) {
            $('#ducnghia')['html'](this['responseText']);
            $(".preloader").fadeOut();
            $("html, body").animate({ scrollTop: 0 }, 50);
        }
    };
    _0x90f8x48['open']('POST', '/html5'+_0x90f8x46, true);
    _0x90f8x48['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
    _0x90f8x48['send']('t=1&load=1');
    history['pushState']('object or string representing the state of the page', 'Xin Chao', _0x90f8x46)
    $(".preloader").show();
}






function mcccc(a) {
    if (+a <= 999) {
        return a;
    }

    if (+a >= 1000 && +a <= 999999) {
        return Math.floor(a / 1000) + 'K';
    }
    if (+a >= 1000000) {
        return Math.floor(a / 1000000) + 'M';
    }
}







function uploadavatar() {
    $(".preloader").show();
    var formData = new FormData($('#formid')[0]);


    $.ajax({

        url: '/html5/profile/profile.html?up',
        type: 'POST',
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function(result) {
            getContent('/profile/profile.html');
        }
    });
}

function dangnhap() {
    $['ajax']({
        url: '/html5/guest/dangnhap.html?ducnghia',
        type: 'POST',
        data: $('#form_login')['find']('select, textarea, input')['serialize'](),
        success: function(log) {
            if (log.code <= 0) {
                $("#log_login").html(log.text);
            } else {
                window.location.replace('/index.php');
            }



        }
    })
}

function check_attributes(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].name == "ducnghia") {
            return data[i].value;
        }
    }
    return false;
}

function thoigian(time) {
    var now = Math.round(Date.now() / 1000);
    var giay = +now - +time;
    if (giay <= 60) {
        return giay + ' giây trước';
    }

    if (giay >= 60 && giay <= 3600) {
        return Math.round(giay / 60) + ' Phút trước';
    }

    if (giay >= 3600 && giay < 86400) {
        return Math.round(giay / 60 / 60) + ' Giờ trước';
    }
    if (giay >= 86400) {
        return Math.round(giay / 60 / 60 / 24) + ' Ngày trước';
    }
}




//  sử lý dữ liệu socket.io


//Game Ngọc Rồng
function json(data) {
        return encode(JSON.stringify(data));
    }
    //note_play('#khung-tx .move-here .note_here', _0x90f8x6['ms'], 'f5f244')
    //note_play('.move-here .note_here', _0x90f8x6['ms'], _0x90f8x6['color']);
socket.on("ducnghia", function(gamehtml5) {

    gamehtml5 = JSON.parse(decode(gamehtml5));
    //console.log(io);
    /// chat the gioi
    if(gamehtml5.ducnghia == "noticews")
    {
        chaychu(gamehtml5.text);
    }
    // BẦU CUA
    if (gamehtml5.ducnghia == "return_baucua") {
        if (gamehtml5.code <= 0) {
            note_play('#khung_baucua .note_here', 'Vui lòng đợi phiên sau', 'f5f244');
            return false;
        }
        $.ajax({
            url: '/html5/baucua/data.html',
            type: 'POST',
            data: {
                play_chon1: gamehtml5.play_chon1,
                play_chon2: gamehtml5.play_chon2,
                play_chon3: gamehtml5.play_chon3,
                play_chon4: gamehtml5.play_chon4,
                play_chon5: gamehtml5.play_chon5,
                play_chon6: gamehtml5.play_chon6,
                keycode: gamehtml5.keycode,
                phien: gamehtml5.phien,
            },
            success: function(d) {
                if (d.error >= 1) {
                    socket.emit("ducnghia", json({
                        ducnghia: 'cuoc_baucua',
                        keycode: d.keycode,
                        az: d.az,
                        id: d.id,
                        cuoc1: d.cuoc1,
                        cuoc2: d.cuoc2,
                        cuoc3: d.cuoc3,
                        cuoc4: d.cuoc4,
                        cuoc5: d.cuoc5,
                        cuoc6: d.cuoc6,
                        name: d.ten,
                    }));
                    note_play('#khung_baucua .note_here', d.ms, '');
                } else {
                    note_play('#khung_baucua .note_here', d.ms, 'f5f244')
                }
            }
        });

    }
    //
    // CHẴN LẺ
    if (gamehtml5.ducnghia == "ketquachanle") {
        $("#khung_id10 .chechen").hide();
        $("#khung_id10 .dia div").eq(0).attr('data-txt', gamehtml5.cau[1])
        $("#khung_id10 .dia div").eq(1).attr('data-txt', gamehtml5.cau[2])
        $("#khung_id10 .dia div").eq(2).attr('data-txt', gamehtml5.cau[3])
        $("#khung_id10 .dia div").eq(3).attr('data-txt', gamehtml5.cau[4])
        if ($("#khung_id10 .nangame").val() == 1) {
            kq_xocdia = io;
        } else {
            kq_roll_id10(gamehtml5);
        }
    }
    if (gamehtml5.ducnghia == "checkchanle") {
        if (gamehtml5.code <= 0) {
            note_play('#khung_id10 .note_here', 'Vui lòng chờ phiên tiếp theo...', 'faaf55');
            return false;
        }
        $.ajax({
            url: '/html5/chanle/data.html',
            type: 'POST',
            data: {
                play_dat: gamehtml5.data,
                keycode: gamehtml5.keycode,
                phien: gamehtml5.phien
            },
            success: function(d) {
                if (d.error >= 1) {
                    note_play('#khung_id10 .note_here', d.ms, 'faaf55');
                    return false;
                }
                socket.emit("ducnghia", json({
                    keycode: d.keycode,
                    az: d.az,
                    id: d.id,
                    data: d.c,
                    ducnghia: 'cuoc_chanle',
                    name: d.name,
                }));
                GameManagerID_10.retun_money(1);
            }
        });
    }

    //
    if (gamehtml5.ducnghia == "char") {
        if (gamehtml5.color == 'xiu-wrap') {
            $('#game_id_1_mini div,#ducnghia_timetaixiu')['html']('<img src=\"/lib/img/tx/xiu_on.png\" style=\"width: 100%;height: auto;\">');
        } else {
            $('#game_id_1_mini div,#ducnghia_timetaixiu')['html']('<img src=\"/lib/img/tx/tai_on.png\" style=\"width: 100%;height: auto;\">');
        }
        $('#vung-taixiu')['hide']();
        kq_taixiu(gamehtml5, false);
        set_roll_tx(1, gamehtml5);
        set_roll_bc(1, gamehtml5);
        $('#game_id_1_mini div,#ducnghia_timetaixiu')['removeClass']('showwin');
        if ($('#game-taixiu')['css']('display') == 'block') {
           // return false
        };

    }

    if (gamehtml5.ducnghia == "realtime") {
        set_time(gamehtml5);
    }

    if (gamehtml5.ducnghia == "chat") {
        if (gamehtml5.to == id) {
            playSFX("chat"); // ÂM THANH CHÁT
            //  ## NẾU ĐANG BẬT BOX CHÁT ##
            if ($(".chat-windows #user-chat" + gamehtml5.from).length >= 1) {
                $(".chat-windows #user-chat" + gamehtml5.from).removeClass("mini-chat").show();
                $("#list_chat_" + gamehtml5.from).append('<li class="msg_receive"><div class="chat-content"><div class="box bg-light-info">' + gamehtml5.text + '</div></div><div class="chat-time" ducnghia="' + gamehtml5.time + '">Vừa song</div></li>');
                document.getElementById("list_chat_" + gamehtml5.from + "").scrollIntoView({
                    behavior: "auto",
                    block: "end",
                    inline: "nearest"
                });
            } else {
                window_chat(gamehtml5.from);
            }

        }
    }
    /*##########BOX CHAT#########*/
    if (gamehtml5.ducnghia == "chat_room") {
        if ($("#chat").length >= 1) {
            $(".chat-list").append(gamehtml5.code);
            scrollSmoothToBottom("chathuht");


            playSFX("chat");

        }
    }

    /*###############################*/
    /*Game NRO*/
    if (gamehtml5.ducnghia == "thongbao") {
        alert(gamehtml5.msg);
    }
    if (gamehtml5.game == "ngocrong") {
        if (gamehtml5.code <= 0) {
            note_play('#khung-tx .move-here .note_here', 'Đã hết thời gian cược, xin chờ tới phiên sau.', 'f5f244');
            return false;
        }
        $.ajax({
            url: '/html5/ngocrong/data.html',
            type: 'POST',
            data: {
                keycode: gamehtml5.keycode,
                xu: gamehtml5.xu,
                cuoc: gamehtml5.cuoc,
                id: gamehtml5.id
            },
            success: function(c) {
                if (c.error == 1) {
                    note_play('#khung-tx .move-here .note_here', c.msg, 'f5f244');
                } else {
                    note_play('.move-here .note_here', c.msg, 'f5f244');
                    socket.emit("ducnghia", json({
                        ducnghia: 'cuoc_ngocrong',
                        xu: c.xu,
                        keycode: c.keycode,
                        az: c.az,
                        cuoc: c.cuoc,
                        uid: c.uid,
                        taikhoan: c.taikhoan,
                        ten: c.ten
                    }));
                }
            }
        });
    }

});


//  CHÁT ###############
var effectResources = new Array();
var EffectResourceTotalCount = 0;

function loadedEffectResource() {
    EffectResourceLoadedCount++;
}
var EffectResourceLoadedCount = 0;

function ResourceEffect(src, key) {
    this.audio = new Audio();
    this.audio.src = src;
    this.audio.oncanplaythrough = loadedEffectResource;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        this.audio.load();
    }
    this.audio.volume = 0.5;
    this.key = key;
    EffectResourceTotalCount++;
    return this;
}

function effectResourceByKey(key) {
    for (var i = 0; i < effectResources.length; i++) {
        if (effectResources[i].key == key)
            return effectResources[i].audio;
    }
    return null;
}

function playSFX(key) {

    var audio = effectResourceByKey(key);
    if (audio) {
        audio.play();
    }
}

effectResources.push(new ResourceEffect("/lib/chat.wav", "chat"));

function chat_chung() {
    var noidung = $("#noidung_chung").val();
    $.ajax({
        url: '/html5/chat/websocket.html',
        type: 'POST',
        data: {
            noidung: noidung
        },
        success: function(d) {
            if (d.error == 1) {
                alert(d.msg);
            } else {
                $(".chat-list").append(d.profile);
                socket.emit("ducnghia", json({
                    ducnghia: 'chat_room',
                    code: d.ws
                }));
                $("#noidung_chung").val('');
                scrollSmoothToBottom("chathuht");

            }
        }
    });
}


var upimg = 0;
$(document).on('click', function(event) {

    var button = event.target;
    var ducnghia_n = button.id;
    if (ducnghia_n == "msg" || ducnghia_n == "autoztextarea" || event.target.name == "msg") {
        upimg = 1;
    } else {
        upimg = 0;
    }

});

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {
        type: contentType
    });
    return blob;
}
var dangpload = 0;

function appendFileAndSubmit(getf) {
    if (upimg != 1) {
        return false;
    }

    if (dangpload >= 1) {
        $("#thongbao").html('Đang upload ảnh xin chờ...');
        return false;
    }
    dangpload = 1;

    var ImageURL = getf;

    $("#thongbao").html('Đang upload ảnh...');
    $.ajax({
        url: "/html5/true/coppy.html",
        data: {
            img: ImageURL
        },
        type: "POST",

        success: function(n) {
            if (n.error == "true") {

                $("#thongbao").html('Uload thất bại, vui lòng thử lại.');

            } else {
                $("#thongbao").html('Upload thành công. <br> <code>URL : <font color="red">' + n.url + '</font> <img src="' + n.url + '"></code>');
                console.log(n);
            }

            dangpload = 0;
        }

    });
}



document.onpaste = function(event) {
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function(event) {
                appendFileAndSubmit(event.target.result);
            };
            reader.readAsDataURL(blob);
        }
    }
}


function upanh1() {
    $("#thongbao").html('dag up... xin cho');


    var formData = new FormData($('#formid')[0]);


    $.ajax({

        url: '/html5/true/img.html',
        type: 'POST',
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function(result) {
            $('#uploadf').html('Upload');

            var n = $.parseJSON(result);
            if (n.error == "true") {

                $("#thongbao").html('that bai');

            } else {
                $('#formid').each(function() {
                    this.reset();
                });
                $("#thongbao").html('Upload thành công. <br> <code>URL : <font color="red">' + n.url + '</font> <img src="' + n.url + '"></code>');
            }

        }
    });
}

function ajax() {
    $.ajax({
            url: '/html5/true/load.html',
            success: function(d) {
                $('.mymoney')['html'](njs(d.xu));
                $('#load_xu')['html'](njs(d.xu));
            }
        }

    );
}

var checkchat = 1;

function outgame() {
    $.ajax({
        url: '/html5/true/out.html',
        type: 'GET',
        success: function(d) {
            window.location.replace('/index.php');
        }
    });
}
setInterval(function() {
    ajax()
}, 5000);



function scrollSmoothToBottom(id) {
    var div = document.getElementById(id);
    $('#' + id).animate({
        scrollTop: div.scrollHeight - div.clientHeight + 30
    }, 500);
}

countmenu = [];
function showmenu(name) {
    if($("#"+name+"").css("display") == "block")
    {
        $("#"+name+"").hide();
        return false;
    }
    for(var i=0; i< countmenu.length;i++)
    {
        $("#"+countmenu[i]+"").hide();
    }
    countmenu = [];
    $("#"+name+"").show();
}


function chaychu(msg)
{
    let xxx = Math.floor((Math.random() * 99999999) + 1);
    $("#idtrunghu").addClass('marquee')
    $("#idtrunghu p").append('<span class="idtrunghu_'+xxx+'"> '+msg+'.</span>');
    setTimeout($.proxy(function() {
		$("#idtrunghu").removeClass('marquee')
        $(".idtrunghu_"+xxx).remove()   // Now "this" is again our element
    }, xxx), 20000);
}