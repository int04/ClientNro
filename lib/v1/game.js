function so_khac_tx(_0x90f8x4) {
    if (_0x90f8x4 == 1) {
        $('#khung-tx .group-button div')['html']('<div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="100"></div></div><div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="500"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="1K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="5K" ></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="10K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="50K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="100K"></div> </div><div class="button"onclick="btn_money_tx($(this));" ><div class="middle" data-txt="500K"></div> </div><div class="button"onclick="btn_money_tx($(this));"><div class="middle" data-txt="1M"></div> </div><div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="2M" ></div> </div><div class="button" onclick="btn_money_tx($(this));"><div class="middle" data-txt="5M"></div> </div><div class="button"><div class="middle" data-txt="T\u1EA5t Tay" onclick="tattay_tx()"></div> </div><div class="button blue" onclick="so_khac_tx(2);"><div class="middle" data-txt="S\u1ED1 Kh\xE1c" ></div> </div><div class="button green"  onclick="dat_tx();" ><div class="middle" data-txt="\u0110\u1EB7t C\u01B0\u1EE3c"></div> </div><div class="button red" onclick="cuoc_tx(3)" ><div class="middle" data-txt="H\u1EE7y" ></div></div>')
    } else {
        $('#khung-tx .group-button div')['html']('<div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="1" ></div></div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="2" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="3" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="4" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="5" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="6" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="7" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="8" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="9" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="0" ></div> </div><div class="button" onclick="btn_khac_tx($(this));"><div class="middle" data-txt="000" ></div> </div><div class="button"  onclick="btn_khac_tx($(this));"><div class="middle" data-txt="X\xF3a" ></div> </div><div class="button blue" ><div class="middle" data-txt="S\u1ED1 Nhanh" onclick="so_khac_tx(1);"></div> </div><div class="button green"  onclick="dat_tx();" ><div class="middle" data-txt="\u0110\u1EB7t C\u01B0\u1EE3c"></div> </div><div class="button red" ><div class="middle" data-txt="H\u1EE7y"  onclick="cuoc_tx(3)"></div></div>')
    }
}
var authound = false;
function decode(_0x90f8x9) {
    var _0x90f8x5 = '';
    _0x90f8x9 = _0x90f8x9['replace'](/ /g, '');
    for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x9['length']; _0x90f8xa += 2) {
        _0x90f8x5 += String['fromCharCode'](parseInt(_0x90f8x9['substr'](_0x90f8xa, 2), 16))
    }
    ;return decodeURIComponent(escape(_0x90f8x5))
}

function encode(_0x90f8x5) {
    _0x90f8x5 = unescape(encodeURIComponent(_0x90f8x5));
    var _0x90f8x9 = '';
    for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x5['length']; _0x90f8xa++) {
        _0x90f8x9 += ' ' + _0x90f8x5['charCodeAt'](_0x90f8xa).toString(16)
    }
    ;return _0x90f8x9
}

function dragx(_0x90f8x4, _0x90f8xd) {
    return false;
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
                }
                ;var _0x90f8x10 = $(_0x90f8xd)['length']
                  , _0x90f8x11 = 0
                  , _0x90f8xa = 0;
                for (_0x90f8xa = 0; _0x90f8xa < _0x90f8x10; _0x90f8xa++) {
                    _0x90f8x11 += $(_0x90f8xd)['eq'](_0x90f8xa)['width']()
                }
                ;var _0x90f8x9 = '-' + (_0x90f8x11 - _0x90f8x4['width']() + 10);
                if (_0x90f8x11 < _0x90f8x4['width']() && _0x90f8xf['left'] < 0) {
                    _0x90f8x4['animate']({
                        left: '0px'
                    }, 200)
                }
                ;var _0x90f8x12 = _0x90f8x11 - $(this)['width']();
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
                }
                ;_0x90f8x4['animate']({
                    top: '0px'
                }, 300)
            }
            ;var _0x90f8x10 = $(_0x90f8xd)['length']
              , _0x90f8x11 = 0
              , _0x90f8xa = 0;
            for (_0x90f8xa = 0; _0x90f8xa < _0x90f8x10; _0x90f8xa++) {
                _0x90f8x11 += $(_0x90f8xd)['eq'](_0x90f8xa)['height']()
            }
            ;var _0x90f8x9 = '-' + (_0x90f8x11 - _0x90f8x4['height']() + 10);
            if (_0x90f8x11 < _0x90f8x4['height']() && _0x90f8x15 != 2) {
                if (_0x90f8x15 > 0) {
                    return false
                }
                ;_0x90f8x4['animate']({
                    top: '0px'
                }, 200)
            }
            ;if (((_0x90f8x11 - _0x90f8x4['height']()) + _0x90f8xf['top']) < 10 && _0x90f8xf['top'] < 0 && _0x90f8x15 != 2) {
                if (_0x90f8x15 > 0) {
                    return false
                }
                ;_0x90f8x4['animate']({
                    top: _0x90f8x9 + 'px'
                }, 300)
            }
            ;return true
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
            }
            ;_0x90f8x16['preventDefault']()
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
            }
            ;var _0x90f8x1c = Math['floor'](_0x90f8x1b / _0x90f8x1e['width']());
            var _0x90f8x1d = Math['floor'](_0x90f8x1b - _0x90f8x1e['width']());
            _0x90f8x1e['css']({
                left: _0x90f8x1c + '' + '00%'
            });
            var _0x90f8x10 = $(_0x90f8x19)['length']
              , _0x90f8x11 = 0
              , _0x90f8xa = 0;
            for (_0x90f8xa = 0; _0x90f8xa < _0x90f8x10; _0x90f8xa++) {
                _0x90f8x11 += $(_0x90f8x19)['eq'](_0x90f8xa)['width']()
            }
            ;if (_0x90f8x1c > -1) {
                $(_0x90f8x18 + ' .left')['hide']()
            } else {
                $(_0x90f8x18 + ' .left')['show']()
            }
            ;if ('-' + _0x90f8x11 > _0x90f8x1d) {
                $(_0x90f8x18 + ' .right')['hide']()
            } else {
                $(_0x90f8x18 + ' .right')['show']()
            }
            ;console['log'](_0x90f8x1b);
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
    }
    ;return _0x90f8x23
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
            var tiencuocne = $('.khung-tx .cuoc-tai')['html']();
            var _0x90f8x11 = tiencuocne.replaceAll('.', '') * 1.95;
        } else {
            if (_0x90f8x26 == 'xiu-wrap') {
                var tiencuocne = $('.khung-tx .cuoc-xiu')['html']();

                var _0x90f8x11 = tiencuocne.replaceAll('.', '') * 1.95;

            }
        }
        ;if (_0x90f8x11 != '0') {
            setTimeout(function() {
                console.log(true);
                note_play('#khung-tx .move-here .note_here', 'Bạn Vừa Thắng ' + _0x90f8x11, 'f5f244');
                $('.khung-tx .cuoc-xiu')['html']('0');
                $('.khung-tx .cuoc-tai')['html']('0')
            }, 3500)
        }
    }
    ;if (_0x90f8x25 == 'blade-soul') {
        if (_0x90f8x26 == 'red') {
            var _0x90f8x11 = njs(Math['floor']($('#khung_id8 .money-red-play div')['html']()['replace'](/\./g, '')) * 1.95)
        } else {
            if (_0x90f8x26 == 'blu') {
                var _0x90f8x11 = njs(Math['floor']($('#khung_id8 .money-blu-play div')['html']()['replace'](/\./g, '')) * 1.95)
            }
        }
        ;if (_0x90f8x11 != '0') {
            setTimeout(function() {
                note_play('#khung_id8 .move-here .note_here', 'Bạn Vừa Thắng ' + _0x90f8x11, '04b904')
            }, 2500)
        }
        ;check_all(8)
    }
    ;return false
}

function Load_Game(x, y, h) {
    if (khunggame[0] == 1 && khunggame[y] == 1) {
        $('#' + y).show('fade', {}, 500)
    } else if (khunggame[0] == 1) {

        khunggame[y] = 1;
        $.ajax({
            type: 'post',
            url: '/' + h + '/index.html',
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

function hideHis() {
    $('.main-his')['removeClass']('show-main');
    $('.main-his .show-main')['removeClass']('show-main')
}

function set_img(_0x90f8x4, _0x90f8x2a, _0x90f8x11) {
    _0x90f8x4 = (100 / Math['floor'](_0x90f8x2a)) * Math['floor'](_0x90f8x4);
    if (_0x90f8x11) {
        _0x90f8x4 = _0x90f8x4 + _0x90f8x11
    }
    ;return _0x90f8x4
}

function set_time(_0x90f8x5) {
    if (_0x90f8x5['b'] <= 0) {
        $("#hetphiencmnr").hide();
        $("#vongquaydep").removeClass('active');
        $("#conrongoccho").attr("src", "/lib/avatar/rong-than2.png");
        if (che == 1) {
            khongload = true;
        }
    } else {
        $("#hetphiencmnr").show();
        $("#vongquaydep").addClass('active');
        $("#conrongoccho").attr("src", "/lib/avatar/rong-than.png");
        khongload = false;
    }
    if (+_0x90f8x5['b'] < 10) {
        _0x90f8x5['b'] = '0' + _0x90f8x5['b'];
    }
    if (+_0x90f8x5['a'] < 10) {
        _0x90f8x5['a'] = '0' + _0x90f8x5['a'];
    }
    /*
	$("#khung_id10 .cuoc_khung1 .all_b").attr('data-txt', _0x90f8x5.cuocxd[0]);
	$("#khung_id10 .cuoc_khung2 .all_b").attr('data-txt', _0x90f8x5.cuocxd[1]);
	$("#khung_id10 .cuoc_khung3 .all_b").attr('data-txt', _0x90f8x5.cuocxd[2]);
	$("#khung_id10 .cuoc_khung4 .all_b").attr('data-txt', _0x90f8x5.cuocxd[3]);
	$("#khung_id10 .cuoc_khung5 .all_b").attr('data-txt', _0x90f8x5.cuocxd[4]);
	$("#khung_id10 .cuoc_khung6 .all_b").attr('data-txt', _0x90f8x5.cuocxd[5]);
	*/
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

    numanimate_2($('.khung-tx .money-tai,.game-item-2 .money-tai .middle'), _0x90f8x5['t'], 17);
    numanimate_2($('.khung-tx .money-xiu,.game-item-2 .money-xiu .middle'), _0x90f8x5['x'], 17);
    $('.khung-tx .user-tai')['html'](njs(_0x90f8x5['at']));
    $('.khung-tx .user-xiu')['html'](njs(_0x90f8x5['ax']));
    $('.khung-tx .roll-play span')['html'](_0x90f8x5['r'])

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
    }
    ;capnhathured = 23 - Math['floor'](_0x90f8x5['a']);
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
        }
        ;if ($('#game-taixiu2')['hasClass']('time') == false) {
            $('#game-taixiu2')['addClass']('time')
        }
        ;$('#game_id_8_mini div,#game_id_2_mini div,#game_id_1_mini div, #c_time_run')['html'](_0x90f8x5['b']);
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
        } else {}
        ;$('.clock img,#khung_id10 .clock-small')['show']();
        $('#game-taixiu2')['removeClass']('time');
        //$('.clock-big')['hide']();
        $(".clock-big").html('<font color=\"red\">' + _0x90f8x5['a'] + '</font>');
        $('.clock-small')['html'](_0x90f8x5['a']);
        $('#game_id_8_mini div.showwin')['html']('<font color=\"red\">' + _0x90f8x5['a'] + '</font>');
        $('#game_id_1_mini div.showwin,#c_time_run')['html']('<font color=\"red\">' + _0x90f8x5['a'] + '</font>');
        $('#game_id_2_mini div')['html']('<font color=\"red\">' + _0x90f8x5['a'] + '</font>');
        if (_0x90f8x5['a'] > 5) {
            $('#game-taixiu .vung_number span')['html'](Math['floor'](_0x90f8x5['a']) - 5);
            if ($('#khung_id10 .nangame')['val']() == 1) {
                $('#khung_id10 .clock-small')['html'](Math['floor'](_0x90f8x5['a']) - 5)
            }
        } else {
            if (ketquatxvung != false) {
                kq_taixiu(ketquatxvung, true)
            }
            ;if (kq_xocdia && kq_xocdia != null) {
                kq_roll_id10(kq_xocdia)
            }
        }
        ;timeclock = Math['floor'](_0x90f8x5['a']) * 1000
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
    }
    ;return false
}

function check_click(_0x90f8x4) {
    if (_0x90f8x4['data']('click') != 'click') {
        _0x90f8x4['data']('click', 'click');
        setTimeout(function() {
            _0x90f8x4['removeData']('click');
            console.log('xoa');
        }, 500);
        return true
    }
    ;return false
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
    }
    )(10)
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

function getCookie(_0x90f8x3e) {
    var _0x90f8x3f = _0x90f8x3e + '=';
    var _0x90f8x40 = document['cookie']['split'](';');
    for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x40['length']; _0x90f8xa++) {
        var _0x90f8x11 = _0x90f8x40[_0x90f8xa];
        while (_0x90f8x11['charAt'](0) == ' ') {
            _0x90f8x11 = _0x90f8x11['substring'](1)
        }
        ;if (_0x90f8x11['indexOf'](_0x90f8x3f) == 0) {
            return _0x90f8x11['substring'](_0x90f8x3f['length'], _0x90f8x11['length'])
        }
    }
    ;return ''
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
    /// DUC NGHIA
    check_all(0);
    dragz('#wesite_game_lr', '.menu-game .swiper-wrapper', '.menu-game .swiper-wrapper');
    dragy($('#lsscroll'), '#lsscroll .showhe');
    dragy($('#show_hu_number'), '#show_hu_number .body_1');
    khunggame[0] = 1;
    chaygame();
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
    $("body").removeClass("sidebar-open");
    loadingView = false;
    if (!_0x90f8x47) {}
    ;var _0x90f8x48 = new XMLHttpRequest();
    _0x90f8x48['onreadystatechange'] = function() {
        if (this['readyState'] == 4 && this['status'] == 200) {
            $('.ducnghia')['html']('');
            $('.ducnghia')['html'](this['responseText']);
            //$(".preloader").fadeOut();
            $("html, body").animate({
                scrollTop: 0
            }, 50);
            data = JSON.parse($(this['responseText']).filter('#ducnghia_json_game').val());
            $('meta[name=title]').attr('content', data.title);
            $('title').text(data.title);
            document.title = decodeHtml(data.title);
            window.title = decodeHtml(data.title);
            document.getElementsByTagName('title')[0].innerHTML = decodeHtml(data.title);
            $('#dn_loading').animate({
                width: "100%"
            }, 300).delay(50).fadeOut(10, function() {
                $(this).width("0px");
            });
            /* Hide */
            $('#game-taixiu')['hide']('fade', {}, 500);
            $('#khung_baucua')['hide']('fade', {}, 500);
        }
    }
    ;
    _0x90f8x48['open']('POST', '' + _0x90f8x46, true);
    _0x90f8x48['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
    _0x90f8x48['send']('t=1&load=1');
    history['pushState']('object or string representing the state of the page', 'Xin Chao', _0x90f8x46)
    //$(".preloader").show();
    $('#dn_loading').show().animate({
        width: 20 + 80 * Math.random() + "%"
    }, 500);
}

function modal(value) {
    UIkit.modal("#" + value).show();

}

function msg(msg, status, title) {
    if (!status)
        status = 'info';
    if (!title)
        title = 'Nro.Club';
    Swal.fire({
        icon: status,
        title: title,
        text: msg,
        footer: '<a href="/hotro/index.html">Bạn cần hỗ trợ ?</a>'
    })
}

function dangnhap() {
    let taikhoan = $("#login_tentaikhoan").val();
    let matkhau = $("#login_matkhau").val();
    if (taikhoan.length <= 0 || matkhau.length <= 0) {
        msg('Vui lòng nhập đầy đủ thông tin.');
        return false;
    }
    $.ajax({
        url: '/user/user.html',
        type: 'POST',
        data: {
            taikhoan: taikhoan,
            matkhau: matkhau,
            dangnhap: 1
        },
        success: function(data) {
            if (data.error <= 0) {
                if (+data.rename == 1) {
                    rename();
                    return false;
                }
                window.location.href = '/index.php';
                return false;
            }
            msg(data.msg);
        }
    });
}

function dangky() {
    let taikhoan = $("#dangki_tentaikhoan").val();
    let matkhau = $("#dangki_matkhau").val();
    let matkhau2 = $("#dangki_matkhau2").val();
    let gioithieu = $("#dangki_gioithieu").val();
    if (taikhoan.length <= 3) {
        msg('Tên tài khoản phải lớn hơn 3 kí tự.');
        return false;
    }
    if (taikhoan.length >= 15) {
        msg('Tài khoản phải nhỏ hơn 15 kí tự');
        return false;
    }
    if (matkhau.length < 4 || matkhau.length > 15) {
        msg('Mật khẩu phải lớn hơn 4 kí tự và nhỏ hơn 15 kí tự.');
        return false;
    }
    if (matkhau != matkhau2) {
        msg('Mật khẩu bạn nhập chưa chính xác, vui lòng kiểm tra lại');
        return false;
    }
    $.ajax({
        url: '/user/user.html',
        type: 'POST',
        data: {
            dangki: 1,
            taikhoan: taikhoan,
            matkhau: matkhau,
            gioithieu: gioithieu
        },
        success: function(data) {
            msg(data.msg, data.stt, 'Đăng ký');
        }
    });
}

function closephien(io) {
    $('#vung-taixiu')['hide']();
    kq_taixiu(io, false);
    set_roll_tx(1, io);
    set_roll_bc(1, io);
    $('#game_id_1_mini div,#ducnghia_timetaixiu')['removeClass']('showwin');
    if ($('#game-taixiu')['css']('display') == 'block') {
        return false
    }
    ;if (io.color == 'xiu-wrap') {
        $('#game_id_1_mini div,#ducnghia_timetaixiu')['html']('<img src=\"/lib/img/tx/xiu_on.png\" style=\"width: 100%;height: auto;\">')
    } else {
        $('#game_id_1_mini div,#ducnghia_timetaixiu')['html']('<img src=\"/lib/img/tx/tai_on.png\" style=\"width: 100%;height: auto;\">')
    }
}

function ulo() {
    dn.to({
        login: {
            token: token,
        }
    });
}
function reset() {
    dn.start('ws://localhost:2004/ws');
}
function togame(str) {

    dn.binary(str);
}

function chanle(data) {
    return false;
    if (+data.code != 2004) {
        note_play('#khung_id10 .note_here', data.msg, 'faaf55');
        return false;
    }

    $.ajax({
        url: md5(Date.now()) + '.json',
        type: 'POST',
        data: data,
        success: function(d) {
            if (+d.error != 2004) {
                note_play('#khung_id10 .note_here', d.ms, 'faaf55');
                return false;
            }
            dn.to({
                cuoc: {
                    chanle: {
                        data: d.c,
                        az: d.az,
                        type: 'success'
                    }
                }
            });
            ajax();
            GameManagerID_10.retun_money(1);
        }
    });
}

function rename() {
    Swal.fire({
        title: 'Tên nhân vật:',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Tạo',
        showLoaderOnConfirm: true,
        preConfirm: (login)=>{
            taonhanvat(login);
        }
        ,
        allowOutsideClick: ()=>!Swal.isLoading()
    }).then((result)=>{
    }
    )
}

function taonhanvat(name) {
    if (name.length <= 4) {
        Swal.fire(`Tên nhân vật phải lớn hơn 4 kí tự.`);
        return false;
    }

    $.ajax({
        url: '/user/user.html',
        data: {
            name: name
        },
        type: 'POST',
        success: function(data) {
            if (+data.error >= 1) {
                window.location.href = '/index.php';
            } else {
                Swal.fire(data.msg);
            }
        }
    }
    );
}

function out() {
    $.ajax({
        url: '/user/user.html',
        data: {
            out: 1
        },
        type: 'POST',
        success: function(a) {
            window.location.href = "/index.php";
        }
    });
}

function result_login(data) {
    authound = 'duc';
    console.log('Dang nhap thanh cong, co the choi game');
}

function ajax() {
    if (authound != 'duc')
        return false;
    dn.to({
        dulieu: {
            users: {
                success: true
            }
        }
    });
}

setInterval(function() {
    ajax();
}, 3000);

function phien_taixiu(id) {
	return false;
    if (+id == -1) {
        msg('Đã hết phiên.');
        return false;
    }
    $.ajax({
        url: '/taixiu/log.html',
        data: {
            id: id,
            r: 'taixiu',
            f: 'log'
        },
        type: 'POST',
        success: function(d) {
            $("#id01").show();
            $("#result_taixiu").html(d);
        }
    });
}

function phienme() {
    $.ajax({
        url: md5(Date.now()) + '.json',
        data: {
            r: 'taixiu',
            f: 'me'
        },
        type: 'POST',
        success: function(d) {
            $("#mecuoc").html(d);
            modal('phien_me');
        }
    }
    )

}

function chaygame() {
    dn.start('wss://ws.nro.club/ws');
    Load_Game(1, 'game-taixiu', 'taixiu');
    //Load_Game(7,'khung_id7','chanle');
    Load_Game(2, 'khung_baucua', 'baucua');
    ajax();
    setTimeout(function() {

        //$('#game-taixiu')['hide']('fade', {}, 500);
        $('#khung_baucua')['hide']('fade', {}, 500);
        //$('#khung_chat_xxx')['hide']('fade', {}, 500);
        thongbao();
        modal_vongquay();
    }, 500);

}

function dulieu(data) {
    if (!!data.users) {
        if (khongload == false) {
            numanimate_2($('.mymoney'), data.users.xu, 17);
            numanimate_2($('#gemxu'), data.users.xu, 17);
            numanimate_2($('#xu'), data.users.xu, 17);
            numanimate_2($('#thang_ht'), data.users.thang, 17);
            numanimate_2($('#thang_max'), data.users.thang_max, 17);
            numanimate_2($('#thua_ht'), data.users.thua, 17);
            numanimate_2($('#thua_max'), data.users.thua_max, 17);
        }
    }
    if (!!data.taixiu) {
        $('.khung-tx .cuoc-xiu')['html'](njs(data.taixiu.cx));
        $('.khung-tx .cuoc-tai')['html'](njs(data.taixiu.ct));
    }

    if (!!data.baucua) {
        $("#khung_baucua .cuadat .item:nth-child(1) div .c-cuoc").html(mcccc(data.baucua.var1));
        $("#khung_baucua .cuadat .item:nth-child(2) div .c-cuoc").html(mcccc(data.baucua.var2));
        $("#khung_baucua .cuadat .item:nth-child(3) div .c-cuoc").html(mcccc(data.baucua.var3));
        $("#khung_baucua .cuadat .item:nth-child(4) div .c-cuoc").html(mcccc(data.baucua.var4));
        $("#khung_baucua .cuadat .item:nth-child(5) div .c-cuoc").html(mcccc(data.baucua.var5));
        $("#khung_baucua .cuadat .item:nth-child(6) div .c-cuoc").html(mcccc(data.baucua.var6));
    }
    if (!!data.chanle) {
        return false;
        $("#khung_id10 .cuoc_khung1 .all_b").attr('data-txt', data.chanle.cuocxd[0]);
        $("#khung_id10 .cuoc_khung2 .all_b").attr('data-txt', data.chanle.cuocxd[1]);
        $("#khung_id10 .cuoc_khung3 .all_b").attr('data-txt', data.chanle.cuocxd[2]);
        $("#khung_id10 .cuoc_khung4 .all_b").attr('data-txt', data.chanle.cuocxd[3]);
        $("#khung_id10 .cuoc_khung5 .all_b").attr('data-txt', data.chanle.cuocxd[4]);
        $("#khung_id10 .cuoc_khung6 .all_b").attr('data-txt', data.chanle.cuocxd[5]);
    }
}

function game(value) {
    if (value == 1) {
        dn.to({
            dulieu: {
                taixiu: {
                    error: true
                }
            }
        });
    }

    if (value == 2) {
        dn.to({
            dulieu: {
                baucua: {
                    error: true
                }
            }
        });
    }

}

function uploadavatar() {
    $(".preloader").show();
    var formData = new FormData($('#formid')[0]);
    var size = 0;
    for (var pair of formData.entries()) {
        if (pair[1]instanceof Blob)
            size += pair[1].size;
        else
            size += pair[1].length;
    }

    if (size <= 0) {
        msg('Vui lòng chọn ảnh', 'info');
        return false;
    }
    let dolon = (Math.round(size / 1024));
    if (dolon > 2000) {
        msg('Bạn chỉ có thể up ảnh tối đa 2MB', 'info');
        return false;
    }
    msg('Đang cập nhật ảnh... Vui lòng chờ', 'info');
    $.ajax({

        url: '/user/avatar.html?action=success',
        type: 'POST',
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function(result) {
            msg(result, 'success');
            getContent('/user/avatar.html');
        }
    });
}

function buy(id) {
    Swal.fire({
        title: 'Mua tài khoản #' + id + ' ',
        text: 'Bạn đã chắc chắn muốn mua tài khoản này rồi chứ ?!',
        showCancelButton: !0,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xác nhận',
    }).then(function(result) {
        if (result.value) {
            $.ajax({
                url: '/shop/buy.html',
                type: 'POST',
                data: {
                    r: 'shop',
                    f: 'buy',
                    id: id
                },
                success: function(data) {
                    ajax();
                    Swal.fire({
                        title: "Thông báo",
                        text: data.msg,
                        type: data.error
                    });
                },
                error: function(data) {
                    Swal.fire('Có lỗi xảy ra!', data.responseJSON.error, 'error')
                }
            })
        }
    })
}

upimg = 1;

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

    var blob = new Blob(byteArrays,{
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
        url: "/public/core/img.php?up1",
        data: {
            img: ImageURL
        },
        type: "POST",

        success: function(result) {
            var n = $.parseJSON(result);
            if (n.error == "true") {

                $("#thongbao").html('Uload thất bại, vui lòng thử lại.');

            } else {
                $("#thongbao").html('Upload thành công. <br> <code>URL : <font color="red">' + n.url + '</font> <img style="width: 100%;" src="' + n.url + '"></code>');
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
            }
            ;
            reader.readAsDataURL(blob);
        }
    }
}

function upanh1() {
    $("#thongbao").html('dag up... xin cho');

    var formData = new FormData($('#formid')[0]);

    $.ajax({

        url: '/public/core/img.php?up2',
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
                $("#thongbao").html('Upload thành công. <br> <code>URL : <font color="red">' + n.url + '</font> <img style="width: 100%;" src="' + n.url + '"></code>');
            }

        }
    });
}
function chatbox(data) {
    console.log(data);
    $(".chat-list").append(data);
    scrollSmoothToBottom("chathuht");
    //playSFX("chat");
}

function chat_chung0() {
    var noidung = $("#noidung_chung").val();
    if (noidung.length <= 4) {
        alert('Nội dung chát phải trên 4 kí tự');
        return false;
    }
    if (user_name == 0) {
        alert('Vui lòng đăng nhập để tiếp tục');
        return false;
    }
    dn.to({
        chat: {
            text: noidung,
            u: user_name
        }
    });
    $("#noidung_chung").val('');

}

function chat_chung() {
    var noidung = $("#noidung_chung").val();
    $.ajax({
        url: '/user/chat.html',
        type: 'POST',
        data: {
            noidung: noidung,
            r: 'user',
            f: 'chat'
        },
        success: function(d) {
            if (d.error == 1) {
                alert(d.msg);
            } else {
                //$(".chat-list").append(d.profile);

                dn.to({
                    chat: {
                        text: d.text,
                    	hsg : d.hsg,
                    	decode : d.basecode,
                    	base1 : d.decode1,
                    	base2 : d.decode2,
                    	since4 : Date.now(),
                    	team : 'az',
                    	api : 'success',
                    	
                    }
                });
                $("#noidung_chung").val('');

            }
        }
    });
}

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

effectResources.push(new ResourceEffect("/lib/chat.wav","chat"));

function admin() {
    msg('Nếu không tự vào được thì tự vào /admin');
    window.open('/admin', '_blank');
}

function nhanqualandau() {
    $.ajax({
        url: `${md5(Date.now())}.json`,
        data: {
            f: 'user',
            r: 'user',
            nhanqua: 1
        },
        type: 'POST',
        success: function(k) {
            msg(k.msg, k.type, 'Nhận quà');
        }

    });
}

function quavip() {
    $.ajax({
        url: '/user/user.html',
        data: {
            f: 'user',
            r: 'user',
            quavip: 1
        },
        type: 'POST',
        success: function(k) {
            msg(k.msg, k.type, 'Quà VIP');
        }
    });
}

function newticket() {
    $("#ticket").toggle(1000);
}

var selected = 0
  , x = 0
  , y = 0;

$.fn.isDraggable = function() {

    var moveFrame, comStartX, comStartY, startMousePosX, startMousePosY;
    $(this).on('mousedown', function(e) {
        selected = $(this);
        moveFrame = true;
        comStartX = $(this).position().left;
        comStartY = $(this).position().top;
        startMousePosX = e.pageX;
        startMousePosY = e.pageY;
    });
    $(document).on('mouseup', function() {
        moveFrame = false;
    });

    $(document).bind('mousemove', function(e) {
        if (moveFrame) {
            currPosX = comStartX + (e.pageX - startMousePosX);
            currPosY = comStartY + (e.pageY - startMousePosY);
            $(selected).css({
                position: 'fixed',
                'left': currPosX + 'px',
                'top': currPosY + 'px'
            });
        }
    });

    return true;
}
;

$('#menubebe').isDraggable();

/*			DỮ LIỆU NẠP THẺ		*/

function search_logc() {

    getContent('/log/' + $("#locgame").val() + '.html');
}

var ChuSo = new Array(" không "," một "," hai "," ba "," bốn "," năm "," sáu "," bảy "," tám "," chín ");
var Tien = new Array(""," nghìn"," triệu"," tỷ"," nghìn tỷ"," triệu tỷ");

//1. Hàm đọc số có ba chữ số;
function DocSo3ChuSo(baso) {
    var tram;
    var chuc;
    var donvi;
    var KetQua = "";
    tram = parseInt(baso / 100);
    chuc = parseInt((baso % 100) / 10);
    donvi = baso % 10;
    if (tram == 0 && chuc == 0 && donvi == 0)
        return "";
    if (tram != 0) {
        KetQua += ChuSo[tram] + " trăm ";
        if ((chuc == 0) && (donvi != 0))
            KetQua += " linh ";
    }
    if ((chuc != 0) && (chuc != 1)) {
        KetQua += ChuSo[chuc] + " mươi";
        if ((chuc == 0) && (donvi != 0))
            KetQua = KetQua + " linh ";
    }
    if (chuc == 1)
        KetQua += " mười ";
    switch (donvi) {
    case 1:
        if ((chuc != 0) && (chuc != 1)) {
            KetQua += " mốt ";
        } else {
            KetQua += ChuSo[donvi];
        }
        break;
    case 5:
        if (chuc == 0) {
            KetQua += ChuSo[donvi];
        } else {
            KetQua += " lăm ";
        }
        break;
    default:
        if (donvi != 0) {
            KetQua += ChuSo[donvi];
        }
        break;
    }
    return KetQua;
}

//2. Hàm đọc số thành chữ (Sử dụng hàm đọc số có ba chữ số)

function DocTienBangChu(SoTien) {
    var lan = 0;
    var i = 0;
    var so = 0;
    var KetQua = "";
    var tmp = "";
    var ViTri = new Array();
    if (SoTien < 0)
        return "Số tiền âm !";
    if (SoTien == 0)
        return "Không đồng !";
    if (SoTien > 0) {
        so = SoTien;
    } else {
        so = -SoTien;
    }
    if (SoTien > 8999999999999999) {
        //SoTien = 0;
        return "Số quá lớn!";
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if (isNaN(ViTri[5]))
        ViTri[5] = "0";
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
    if (isNaN(ViTri[4]))
        ViTri[4] = "0";
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
    if (isNaN(ViTri[3]))
        ViTri[3] = "0";
    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
    ViTri[2] = parseInt(so / 1000000);
    if (isNaN(ViTri[2]))
        ViTri[2] = "0";
    ViTri[1] = parseInt((so % 1000000) / 1000);
    if (isNaN(ViTri[1]))
        ViTri[1] = "0";
    ViTri[0] = parseInt(so % 1000);
    if (isNaN(ViTri[0]))
        ViTri[0] = "0";
    if (ViTri[5] > 0) {
        lan = 5;
    } else if (ViTri[4] > 0) {
        lan = 4;
    } else if (ViTri[3] > 0) {
        lan = 3;
    } else if (ViTri[2] > 0) {
        lan = 2;
    } else if (ViTri[1] > 0) {
        lan = 1;
    } else {
        lan = 0;
    }
    for (i = lan; i >= 0; i--) {
        tmp = DocSo3ChuSo(ViTri[i]);
        KetQua += tmp;
        if (ViTri[i] > 0)
            KetQua += Tien[i];
        if ((i > 0) && (tmp.length > 0))
            KetQua += ',';
        //&& (!string.IsNullOrEmpty(tmp))
    }
    if (KetQua.substring(KetQua.length - 1) == ',') {
        KetQua = KetQua.substring(0, KetQua.length - 1);
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
    return KetQua;
    //.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
}

function lichsu(nguon, key) {
    msg('Đang đọc dữ liệu...', 'warning', 'Xin chờ');
    $.ajax({
        url: '/user/user.html',
        type: 'POST',
        data: {
            nguon: nguon,
            key: key,
            checklog: true
        },
        success: function(data) {
            Swal.fire({
                title: '<strong>Chi tiết</strong>',
                icon: 'info',
                width: 800,
                html: data,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: 'Đóng',
                confirmButtonAriaLabel: 'Thumbs up, great!',

                cancelButtonAriaLabel: 'Thumbs down'
            })
        }
    });
}

function thongbao() {
    $.ajax({
        url: '/user/user.html',
        type: 'POST',
        data: {
            thongbao: true
        },
        success: function(data) {
            Swal.fire({
                width: 800,
                html: data,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: 'Đã rõ!',
                confirmButtonAriaLabel: 'Thumbs up, great!',

                cancelButtonAriaLabel: 'Thumbs down'
            })
        }
    });
}

/* BODY CLICK */
var clickboyx = 0;
function clickboy() {
    clickboyx = 1;
}

function captcha(data) {
    data.src = "/code/index.html?nghia=" + md5(Date.now()) + "";
}

setCookie('vongquay', 1);

function taixiu(data) {
    if (data.code == 1) {
        note_play('#khung-tx .move-here .note_here', data.msg, 'f5f244');
        return false;
    }
    console.log(data);
    $.ajax({
        url: '/ws/taixiu.html',
        type: 'POST',
        data: {
            xu: data.xu,
            phien: data.phien,
            cuoc: data.cuoc
        },
        success: function(d) {
            note_play('#khung-tx .move-here .note_here', d.msg, 'f5f244');
            if (d.error <= 0) {
                dn.to({
                    cuoc: {
                        success_tx: {
                            id: d.id,
                            new: d.newid,
                        }
                    }
                });
                setTimeout(function() {
                    ajax();
                }, 300);
            }
        }
    });

}

function baucua(data) {

    if (data.code != 2004) {
        note_play('#khung_baucua .note_here', data.msg, 'f5f244');
        return false;
    }
    $.ajax({
        url: '/ws/baucua.html',
        type: 'POST',
        data: {
            phien: data.phien,
            cuoc1: data.cuoc1,
            cuoc2: data.cuoc2,
            cuoc3: data.cuoc3,
            cuoc4: data.cuoc4,
            cuoc5: data.cuoc5,
            cuoc6: data.cuoc6
        },
        success: function(d) {
            note_play('#khung_baucua .note_here', d.ms, 'f5f244');
            if (d.error == 2004) {
                dn.to({
                    cuoc: {
                        success_bc: {
                            id: d.id
                        }
                    }
                });
                setTimeout(function() {
                    ajax();
                }, 300);
            }

        }
    });

}

function checkso(alertt=false) {
    $("#successchua").hide();
    var res = $("#sochon").val().replaceAll("-", "");
    if (res.length % +kq.soluong != 0) {
        if (alertt == true)
            alert('Số không hợp lệ');
    } else if ($("#sochon").val().split("-").length != kq.so && kq.so >= 1) {
        if (alertt == true)
            alert('Bạn chỉ có thể chọn tối đa ' + kq.so + ' số. ');
    } else {
        $("#min").html(kq.min * 1000);
        let tong = $("#sochon").val().split("-");
        $("#min").html(kq.min * 1000 * tong.length);
        if ((kq.min * 1000 * tong.length) > $("#tiencuoc").val()) {
            $("#tiencuoc").val(kq.min * 1000 * tong.length);
        }
        $("#tien1con").html(Math.round(+$("#tiencuoc").val() / tong.length));
        $("#tienthang").html(Math.round(+$("#tiencuoc").val() / tong.length / +kq.giai * +kq.max));
        $("#chonsone").html($("#tiencuoc").val());
        $("#successchua").show();

    }
}

function lode() {
    let tiencuoc = $("#tiencuoc").val();
    let chonso = $("#sochon").val();
    let game = $("#chongame").val();
    game = JSON.parse(game);
    $.ajax({
        url: '/lode/index.html',
        data: {
            tiencuoc: tiencuoc,
            chonso: chonso,
            game: game
        },
        type: 'POST',
        success: function(d) {
            if (d == 'Đặt cược thành công, chúc bạn may mắn') {
                msg(d, 'success');
                getContent('/lode/index.html');
            } else {
                msg(d, 'info');
            }
        }
    });
}

$('body').click(function(e) {

    if (e.target.id == "sochon") {
    } else if (!!$("#sochon").val()) {
        if ($("#sochon").val().length >= 1) {
            checkso(true);
        }

    }

	if(e.target.id == "box1" || e.target.id =="showmenubbcode")
    {
    	$("#box1").show();
    }
	else 
    {
    	console.log('hello');
    	$("#box1").hide();
    }
});

function modal_vongquay() {
    return false;
    $("#modaL_vqmm").modal();
}

function showmenu() {
    $("#show_cuoc").show();
    $("#button_cuoc").hide();
}

let phien = 0;
let time = 0;
/* DỮ LIỆU GAME VÒNG QUAY MAY MẮN */
function chaytile(_0x90f8x4, _0x90f8x2a, _0x90f8x19) {
    var _0x90f8x3c = Math['fround'](_0x90f8x19);
    var _0x90f8x39 = Math['fround'](_0x90f8x4['val']());
    var _0x90f8x3a = (Math['fround'](_0x90f8x2a) - Math['fround'](_0x90f8x4['val']())) / _0x90f8x3c;
    (function _0x90f8x2c(_0x90f8xa) {
        setTimeout(function() {
            _0x90f8x4['css']('width', (Math['fround'](_0x90f8x39 + (_0x90f8x3c + 1 - _0x90f8xa) * _0x90f8x3a)) + '%');
            $("#tilethang")['html'](((_0x90f8x39 + (_0x90f8x3c + 1 - _0x90f8xa) * _0x90f8x3a).toFixed(2)) + '%');
            if (--_0x90f8xa) {
                _0x90f8x2c(_0x90f8xa)
            } else {
                _0x90f8x4['val'](_0x90f8x2a)
            }
        }, 40)
    }
    )(_0x90f8x3c)
}

function vq_cuoc() {
    $("#show_cuoc").hide();
    $("#button_cuoc").show();
    let xu = $("#tien_cuoc").val();
    if (+xu >= 1) {
        if (time <= 15) {
            msg('Đã hết thời gian cho phép cược');
            return false;
        }
        if (phien <= 0) {
            msg('Phiên cược không hợp lệ, vui lòng chờ tải dữ liệu');
            return false;
        }
        $.ajax({
            url: '/vqmm/data.html',
            type: 'POST',
            data: {
                ef372370cb87cffc3ab03cff492ba8f6: phien,
                e7cc694b9b3fc636710fa08b6922c42b: time,
                e964805b3c7fc0ff15a38c365fcb9b5a: xu,

            },
            success: function(data) {
                if (data != 2004) {
                    msg(data);
                }
            }
        });
        $("#tien_cuoc").val('');
    }
}

function win() {
    $.ajax({
        url: '/vqmm/data.html',
        type: 'POST',
        data: 'ducnghia=1',
        success: function(d) {
            $("#userchienthang").html(d.username);
            $("#xuwin").html(d.win);
            $("#xuthamgia").html(d.john);
        }
    });
}

var listcuoc = [];
var action = undefined;
var idchay = 0;
function showrandom()
{
    action = setInterval(function(){
       if(undefined == listcuoc[idchay]) idchay = 0;

        $("#nameuser").html(listcuoc[idchay].name);
        console.log(listcuoc[idchay].name+idchay);
        idchay++;
        
    }, 200);
}
function vongquay(data) {
    if (!!data.type) {
        if(action != undefined)
        {
            clearInterval(action);
            $("#tienhanhquaythuong").hide();
            action = undefined;
        }
        chaytile($('#thanhtile'), 0, 17);
        numanimate_2($('#tilethang'), 0, 17);
        numanimate_2($('#xutoithamgia'), 0, 17);
        setTimeout(()=>{
            win();
        }
        , 500);
        return false;
    }
    phien = data.id;
    time = data.a;
    if (time >= 1) {
        $("#vq_giay").html(time + ' giây nữa');
    } else {
        $("#vq_giay").html(data.b + ' bắt đầu mới');
    }

    /* Ẩn ìno */
    if(time >= 5)
    {
        $("#tienhanhquaythuong").hide();
        listcuoc = [];
    }
    else 
    {
        $("#tienhanhquaythuong").show();
        if(undefined == action)
        {
            showrandom();
        }
    }
    

    let total_users = 0;
    let number_xu = 0;
    /* Danh sách người chơi */
    for (let i = 0; i < data.cuoc.length; i++) {
        if(listcuoc.find(acc => acc.name === data.cuoc[i].name) === undefined)
        {
            listcuoc.push({
                name : data.cuoc[i].name
            });
        }
        number_xu += data.cuoc[i].xu;
        total_users++;
        if (data.cuoc[i].id == uid) {
            numanimate_2($('#xutoithamgia'), data.cuoc[i].xu, 17);
            chaytile($('#thanhtile'), (+data.cuoc[i].xu / +data.xu * 100), 17);
            /* Show tên người */
            
        }
    }

    $("#tongsonguoi").html(total_users);
    numanimate_2($('#tongxucuoc'), number_xu, 17);

}

var blockchat = 0;
function scrollSmoothToBottom(id) {
    if (blockchat == 1)
        return false;
    var div = document.getElementById(id);
    $('#' + id).animate({
        scrollTop: div.scrollHeight - div.clientHeight + 30
    }, 500);
}

function click_chat() {
    blockchat = (blockchat == 0 ? 1 : 0);
}


function huongdanchoi()
{
    
}

function bbcode(ui)
{
	$("#box1").show();
	$.ajax({
		url : '/bbcode/index.html',
		type : 'POST',
		data : {bbcode : ui},
		success : function(data)
		{
			$("#box1").html(data);
		}
	});
}


function tags(tag) {
   var Field = document.getElementById('noidung_chung');
   var val = Field.value;
   var selected_txt = val.substring(Field.selectionStart, Field.selectionEnd);
   var before_txt = val.substring(0, Field.selectionStart);
   var after_txt = val.substring(Field.selectionEnd, val.length);
   Field.value += ' ' + tag + ' ';
}



var audioChunks;
  function run() {
      var startRecord = $('#startRecord');
      var stopRecord = $('#stopRecord');
    startRecord.css('display', 'none');
    stopRecord.css('display', 'inline').css('color', 'red');
    navigator.mediaDevices.getUserMedia({audio: true})
      .then(stream => {
        audioChunks = []; 
        rec = new MediaRecorder(stream);
        rec.ondataavailable = e => {
          audioChunks.push(e.data);
          var fullNameAudio = new Date();
          var fullNameAudio = fullNameAudio.getTime();
          if (rec.state == "inactive"){
            let blob = new Blob(audioChunks,{type:'audio/ogg'});
            var reader = new FileReader();
            reader.onload = function(event){
              var fd = new FormData();
              fd.append('fname', 'test.mp3');
              fd.append('data', event.target.result);
              if(audioChunks[0].size >= 1050900)
              {
                  alert('Ghi âm tối đa 1mb thôi');
                  audioChunks;
              }
              else 
              {
                  uploadAudio(fd);
              }
            
             
            };      
            reader.readAsDataURL(blob);
         }
        }
      rec.start();  
      })
      .catch(e=>console.log(e));
  };

  function off() {
      var startRecord = $('#startRecord');
      var stopRecord = $('#stopRecord');
    startRecord.css('display', 'inline').css('color', '#aaa');
    stopRecord.css('display', 'none');
    $('#uploading').html('');
    rec.stop();
  };





uploadAudio = function(data){
alert('Tính năng sửa trên di động.');
return false;
  $.ajax({
     type: 'POST',
     url: '/voice/chat.html',
     data: data,
     processData: false,
     contentType: false
  }).done(function(d) {
  if (d.error == 1) {
                alert(d.msg);
            } else {

                dn.to({
                    chat: {
                        text: d.text
                    }
                });
                $("#noidung_chung").val('');
				audioChunks;
            }
    
  });
}

function phatvideo(name2)
{
	effectResources.push(new ResourceEffect(name2,name2));
	playSFX(name2);
}

function gakeo(id,type)
{
    let vang = $("#buakeobao").val();
    vang = vang.replaceAll(".","");
    vang = +vang;
    if(vang <=0)
    {
        msg('Chưa nhập tiền cược');
        return false;
    }
    loading();
    dn.to({
        ott : {
            moi : {
                pk : id,
                type : type,
                vang : vang,
            }
        }
    })
}

function chapnhan(id,type)
{
    loading();
    dn.to({
        ott : {
            chapnhan : {
                id : id,
                type : type,
            }
        }
    })
}

function DoithuOTT(data) {
    Swal.fire({
        title: '<strong>Lời thách đấu !</strong>',
        icon: 'info',
        width: 800,
        html: `<div class="card-header bg-transparent border-seccond" style="padding: 30px">
       
        <form id="form">
         
          <div class="form-group">
            <label>Tù tì thủ <b>`+data.name+`</b> muốn thách đấu oẳn tù tì với bạn với mức cược : <b>`+number_format(data.vang)+` vàng</b>. Bạn có đồng ý không ?</label>
          </div>
        </form>
        <div id="alert"></div>
       <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover text-center">
        <thead class="">
            <tr>
            
              <th scope="col" onclick="chapnhan(`+data.id+`,'keo')">  <i class="fas fa-hand-peace"></i></th>
              <th scope="col" onclick="chapnhan(`+data.id+`,'bua')"><i class="fas fa-hand-rock"></i></th>
              <th scope="col" onclick="chapnhan(`+data.id+`,'bao')"><i class="fas fa-hand-paper"></i></th>
              
            </tr>
          </thead>
        </table>
       </div>
       
                    
                    
                </div>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Đóng',
        confirmButtonAriaLabel: 'Thumbs up, great!',

        cancelButtonAriaLabel: 'Thumbs down'
    })
    $('#buakeobao').keyup(function() {
        let run = $("#buakeobao").val();
        run = run.replaceAll(".","");
        $("#buakeobao").val(number_format(run));
       
    });
}
function loading()
{
}

function number_format(d)
{
	return njs(d);
}

function moi(nguon,name) {
    Swal.fire({
        title: '<strong>Búa Kéo bao: '+name+'</strong>',
        icon: 'info',
        width: 800,
        html: `<div class="card-header bg-transparent border-seccond" style="padding: 30px">
       
        <form id="form">
         
          <div class="form-group">
            <label>Số tiền cược:</label>
            <input type="text" class="form-control" placeholder="Nhập số tiền cược" id="buakeobao" name="">
          </div>
        </form>
        <div id="alert"></div>
       <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover text-center">
        <thead class="">
            <tr>
            
              <th scope="col" onclick="gakeo(`+nguon+`,'keo')">  <i class="fas fa-hand-peace"></i> </th>
              <th scope="col" onclick="gakeo(`+nguon+`,'bua')"><i class="fas fa-hand-rock"></i></th>
              <th scope="col" onclick="gakeo(`+nguon+`,'bao')"><i class="fas fa-hand-paper"></i></th>
              
            </tr>
          </thead>
        </table>
       </div>
       
                    
                    
                </div>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Đóng',
        confirmButtonAriaLabel: 'Thumbs up, great!',

        cancelButtonAriaLabel: 'Thumbs down'
    })
    $('#buakeobao').keyup(function() {
        let run = $("#buakeobao").val();
        run = run.replaceAll(".","");
        $("#buakeobao").val(number_format(run));
       
    });
}