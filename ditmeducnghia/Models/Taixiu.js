let tool_taixiu = function()
{
    let html = `<div class="content-wrapper">
    <div class="row">
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-danger card-img-holder text-white">
          <div class="card-body" style="color:black">
            <h4 class="font-weight-normal mb-3">Tài xỉu <i class="mdi mdi-chart-line mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">Thời gian: <b id="time_phien"><font color="green">14</font></b> <b id="status">(Đang chạy)</b></h2>
            <h6 class="card-text">Tiền tài : <b id="tien_tai">0</b></h6>
            <h6 class="card-text">Tiền xỉu : <b id="tien_xiu">0</b></h6>
            <h6 class="card-text">Số người xỉu : <b id="num_tai">0</b></h6>
            <h6 class="card-text">Số người tài : <b id="num_xiu">0</b></h6>
            <hr>
            Kết quả : <br>
            <b id="xuc_xac_1"><img onclick="taixiu('x1')" src="data/img/taixiu/0.png"></b> <b id="xuc_xac_2"><img onclick="taixiu('x2')" src="data/img/taixiu/0.png"></b> <b id="xuc_xac_3"><img onclick="taixiu('x3')" src="data/img/taixiu/0.png"></b>
  <b id="chon_taixiu"></b>
  <hr>
  chọn Nhanh : <button type="submit" class="btn btn-gradient-primary mb-2" onclick="chontai()">Tài</button> <button type="submit" class="btn btn-gradient-primary mb-2" onclick="chonxiu()">Xỉu</button>
          </div>
  
          
        </div>
      </div>
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-info card-img-holder text-white">
          <div class="card-body" style="color:black">
            <h4 class="font-weight-normal mb-3">Bầu cua <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
            </h4>
            <h6 class="card-text">Tiền gà: <b id="cga">0</b></h6>
            <h6 class="card-text">Tiền cá: <b id="cca">0</b></h6>
            <h6 class="card-text">Tiền bầu: <b id="cbau">0</b></h6>
            <h6 class="card-text">Tiền cua: <b id="ccua">0</b></h6>
            <h6 class="card-text">Tiền hươu: <b id="chuou">0</b></h6>
            <h6 class="card-text">Tiền tôm: <b id="ctom">0</b></h6>
           <hr>
           kết quả : <br>
            <b id="b1"><img onclick="baucua('b1')" src="data/img/baucua/0.png"></b> <b id="b2"><img onclick="baucua('b2')" src="data/img/baucua/0.png"></b> <b id="b3"><img onclick="baucua('b3')" src="data/img/baucua/0.png"></b>
                          
                          <b id="chon_baucua"></b>
  
          </div>
        </div>
      </div>
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-success card-img-holder text-white">
          <div class="card-body" style="color:black">
            <h4 class="font-weight-normal mb-3">CSMM <i class="mdi mdi-diamond mdi-24px float-right"></i>
            </h4>
            <h6 class="card-text">Thời gian: <b id="csmm_time">120</b></h6>
            <h6 class="card-text">Kết quả: <b id="ketqua_csmm">120</b></h6>
            <h6 class="card-text">Cược chẵn: <b id="cuoc_chan">0</b></h6>
            <h6 class="card-text">Cược Lẻ: <b id="cuoc_le">0</b></h6>
            <h6 class="card-text">Cược Tài: <b id="cuoc_tai">0</b></h6>
            <h6 class="card-text">Cược Xỉu: <b id="cuoc_xiu">0</b></h6>
            <br>
               <button class="btn btn-success" onclick="dn.to({admin : {tool : {chose : {type : 'tai'}}}})">Tài</button>   
               <button class="btn btn-success" onclick="dn.to({admin : {tool : {chose : {type : 'xiu'}}}})">Xỉu</button>  
               <button class="btn btn-success" onclick="dn.to({admin : {tool : {chose : {type : 'chan'}}}})">Chẵn</button>  
               <button class="btn btn-success" onclick="dn.to({admin : {tool : {chose : {type : 'le'}}}})">Lẻ</button>  
               <input type="number" id="input" class="form-control" value="">
               <button class="btn btn-success" onclick="kq()">OK</button>
            <hr>
            <br>
            Người có chữ đỏ là sẽ thắng:
            <div id="cuoc_csmm"></div>
  
  
            
          </div>
        </div>
      </div>
    </div>

      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-success card-img-holder text-white">
          <div class="card-body" style="color:black">
            <h4 class="font-weight-normal mb-3">Vòng quay may mắn <i class="mdi mdi-diamond mdi-24px float-right"></i>
            </h4>
            <h6 class="card-text">Thời gian: <b id="vongquay_time">120</b></h6>
            <h6 class="card-text">Tổng tiền: <b id="vongquay_numrows">0</b></h6>
            <br>
                                 - Người chơi có chữ màu đỎ là người chơi chiến thắng <br> 
                                 - Để chọn người đó chiến thắng bạn click vào hắn.
            <hr>
            <br>
            <div id="vongquay_list"></div>
  
  
            
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="clearfix">
              <h4 class="card-title float-left">Danh sách cược tài xỉu</h4>
              <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right"></div>
            </div>
               <div class="table-responsive">
  
                                  <table class="table">
                                      <thead class="thead-light">
                                          <tr>
                                              <th scope="col">Bên tài</th>
                                              <th scope="col">Bên xỉu</th>                                            
                                          </tr>
                                      </thead>
                                      <tbody id="game_cuoctai">
                                          <tr><td id="list_tai"></td><td id="list_xiu"></td></tr>
                                         
                                      </tbody>
                                  </table>
                              </div>
  
                               
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Danh sách cược bầu cua</h4>
  
            <div class="table-responsive">
  
                                  <table class="table">
                                      <tbody id="">
                                          <tr>
                                            <th scope="col">Hươu</th> <td id="huou"></td>
                                              
                                          </tr>
                                         
                                         <tr>
                                            
                                              <th scope="col">Bầu</th>  <td id="bau"></td>
                                             
                                          </tr>
  
                                          <tr>
                                            
                                              <th scope="col">Gà</th>    <td id="ga"></td>
                                              
                                          </tr>
  
                                          <tr>
                                            
                                              <th scope="col">cá</th>  <td id="ca"></td>
                                              
                                          </tr>
  
                                          <tr>
                                          
                                              <th scope="col">Tôm</th> <td id="tom"></td>
                                             
                                          </tr>
  
                                          <tr>
                                              <th scope="col">Cua</th>     <td id="cua"></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
  
          </div>
        </div>
      </div>
  
  
  
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Danh sách cược chẵn lẻ</h4>
  
            <div class="table-responsive">
  
                                  <table class="table">
                                      <tbody id="">
                                          <tr>
                                            <th scope="col">2 chẵn</th> <td id="chan2"></td>
                                              
                                          </tr>
                                         
                                         <tr>
                                            
                                              <th scope="col">2 lẻ</th>  <td id="le2"></td>
                                             
                                          </tr>
  
                                          <tr>
                                            
                                              <th scope="col">3 lẻ</th>    <td id="le3"></td>
                                              
                                          </tr>
  
                                          <tr>
                                            
                                              <th scope="col">3 chẵn</th>  <td id="chan3"></td>
                                              
                                          </tr>
  
                                          <tr>
                                          
                                              <th scope="col">4 lẻ</th> <td id="le4"></td>
                                             
                                          </tr>
  
                                          <tr>
                                              <th scope="col">4 chẵn</th>     <td id="chan4"></td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <br>
                                  Đọc để mà bịp : chẵn 0, lẻ = 1; 4 (tổng 4 xúc sắc lại) : <br>
                                  - 0 điểm =&gt; 2 chẵn, 4 lẻ. <br>
                                  - 1 điểm =&gt; 1 lẻ, 3 chẵn <br>
                                  - 2 điểm =&gt; 2 chẵm, <br>
                                  - 3 điểm =&gt; 2 lẻ, 3 lẻ <br>
                                  - 4 điểm =&gt; 2 chẵn, 4 chẵn.
                              </div>
  
          </div>
        </div>
      </div>
    </div>
  
  </div>`;
  $("#ducnghia").html(html)
}

let xulytaixiu = function(data)
{
    if(!!data.vongquay)
    {
        $("#vongquay_time").html(data.vongquay.a);
        numanimate_2($('#vongquay_numrows'), data.vongquay.xu, 17);
        let list_vq = '';
        for(let j=0; j < data.vongquay.cuoc.length; j++)
        {
            list_vq+=' <font onclick="vqmm_chon('+data.vongquay.cuoc[j].id+')" color="'+(data.vongquay.cuoc[j].id == data.vongquay.win ? 'red' : 'black')+'">['+data.vongquay.cuoc[j].id+']'+data.vongquay.cuoc[j].name+'- '+data.vongquay.cuoc[j].xu+'xu</font>,';
        }
        $("#vongquay_list").html(list_vq);
        return false;
    }
    /* since 2004 */
    var u_online = '';
    var g_online = '';
    var total_online = 0;
    var total_online_u = 0;
    if(!data.phientxx)
    {
        return false;
    }
    let game = data.phientxx;
    if (game.trangthai == "dangchay") {
        status = '(Đang chạy)';
    } else {
        status = '(Hết phiên)';
    }
    let time_phien = 0;
    if (game.b > 0) {
        $("#time_phien").html('<font color="green">' + game.b + '</font>');
    } else {
        $("#time_phien").html('<font color="red">' + game.a + '</font>');
    }
    $("#list_online").html(u_online);
    $("#list_khach").html(g_online);
    $("#status").html(status);
    $("#users").html(total_online_u);
    $("#khach").html(total_online);
    $("#total_online").html(total_online_u + total_online);


    u_cuoctai = 0;
    u_cuocxiu = 0;
    cuoctai = 0;
    cuocxiu = 0;
    cuoc = data.cuoctx;
    listtai = '';
    listxiu = '';

    huou = '';
    bau = '';
    ga = '';
    ca = '';
    tom = '';
    cua = '';
    chuou = 0;
    cbau = 0;
    cga = 0;
    cca = 0;
    ctom = 0;
    ccua = 0;

    chan2 = '';
    le2 = '';
    chan3 = '';
    le3 = '';
    chan4 = '';
    le4 = '';
    cchan2 = 0;
    cle2 = 0;
    cchan3 = 0;
    cle3 = 0;
    cle4 = 0;
    cchan4 = 0;
    for (var i = 0; i < cuoc.length; i++) {
        k = cuoc[i];
        if(k.name != 'bot') {
        if (k.game == "taixiu") {
            if (k.type == "tai") {
                u_cuoctai += 1;
                cuoctai += k.xu;
                listtai += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            } else {
                u_cuocxiu += 1;
                cuocxiu += k.xu;
                listxiu += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
        }
        if (k.game == "baucua" && k.name != 'bot') {
            if (k.type == 1) {
                chuou += +k.xu;
                huou += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
            if (k.type == 2) {
                cbau += k.xu;
                bau += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
            if (k.type == 3) {
                cga += k.xu;
                ga += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
            if (k.type == 4) {
                cca += k.xu;
                ca += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
            if (k.type == 6) {
                ctom += k.xu;
                tom += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
            if (k.type == 5) {
                ccua += k.xu;
                cua += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
        }

        if (k.game == "chanle") {
            if (k.type == "chan") {
                cchan2 += k.xu;
                chan2 += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }

            if (k.type == "le") {
                cle2 += k.xu;
                le2 += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }

            if (k.type == "chan3") {
                cchan3 += k.xu;
                chan3 += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }

            if (k.type == "le3") {
                cle3 += k.xu;
                le3 += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }

            if (k.type == "chan4") {
                cchan4 += k.xu;
                chan4 += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }

            if (k.type == "le4") {
                cle4 += k.xu;
                le4 += '' + k.name + ' - ' + njs(k.xu) + ' xu<br>  ';
            }
        }
    }
}

    numanimate_2($('#tien_tai'), cuoctai, 17);
    numanimate_2($('#tien_xiu'), cuocxiu, 17);
	if((cuoctai+cuocxiu)>=500000000)
    {
    	playSFX("chat");
    }
    numanimate_2($('#num_tai'), u_cuoctai, 17);
    numanimate_2($('#num_xiu'), u_cuocxiu, 17);
    $("#list_tai").html(listtai);
    $("#list_xiu").html(listxiu);


    $("#cua").html(cua);
    $("#bau").html(bau);
    $("#tom").html(tom);
    $("#ga").html(ga);
    $("#ca").html(ca);
    $("#huou").html(huou);

    $("#chan2").html(chan2);
    $("#le2").html(le2);

    $("#chan3").html(chan3);
    $("#le3").html(le3);

    $("#chan4").html(chan4);
    $("#le4").html(le4);

    numanimate_2($('#ccua'), ccua, 17);
    numanimate_2($('#cbau'), cbau, 17);
    numanimate_2($('#ctom'), ctom, 17);
    numanimate_2($('#cga'), cga, 17);
    numanimate_2($('#cca'), cca, 17);
    numanimate_2($('#chuou'), chuou, 17);


    numanimate_2($('#cchan2'), cchan2, 17);
    numanimate_2($('#cle2'), cle2, 17);
    numanimate_2($('#cchan3'), cchan3, 17);
    numanimate_2($('#cle3'), cle3, 17);
    numanimate_2($('#cchan4'), cchan4, 17);
    numanimate_2($('#cle4'), cle4, 17);

    numanimate_2($('#diem_chanle'), (game.c1 + game.c2 + game.c3 + game.c4), 17);

    $("#xuc_xac_1").html('<img  onclick="taixiu(\'x1\')" src="data/img/taixiu/' + game.x1 + '.png">');
    $("#xuc_xac_2").html('<img onclick="taixiu(\'x2\')" src="data/img/taixiu/' + game.x2 + '.png">');
    $("#xuc_xac_3").html('<img onclick="taixiu(\'x3\')" src="data/img/taixiu/' + game.x3 + '.png">');

    $("#b1").html('<img onclick="baucua(\'b1\')" src="data/img/baucua/' + game.b1 + '.png">');
    $("#b2").html('<img onclick="baucua(\'b2\')" src="data/img/baucua/' + game.b2 + '.png">');
    $("#b3").html('<img onclick="baucua(\'b3\')" src="data/img/baucua/' + game.b3 + '.png">');

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

function chontai()
{
    dn.to(

            {
                admin : {
                    tool  : {
                        chontai : true
                    }
                }
            }
        );
}

function chanle(id)
{
    dn.to(
            {
                admin : 
                {
                    chanle : 
                    {
                        type : id
                    }
                }
            }

        );
}

function vqmm_chon(id)
{
  
    dn.to({
        admin : {
            tool : {
                VXMM : {
                    id : id
                }
            }
        }
    })
}
function chonxiu()
{
    dn.to(

        {
            admin : {
                tool  : {
                    chonxiu : true
                }
            }
        }
    );
}

function  chontaixiu(id,value)
{
    dn.to( {
        admin : 
        {
            tool  : 
           {
            chon : 
            {id : id, value : value}
           }
            
            
        }
    }
    );
    $("#chon_taixiu").html('');
    $("#chon_baucua").html('');
}
function taixiu(id)
{
    console.log(id);
    var a = '<hr><center>Bạn muốn chọn xí ngầu gì</center>';
    for(var i=0;i<=6;i++)
    {
        a+='<img onclick="chontaixiu(\''+id+'\','+i+')" src="data/img/taixiu/'+i+'.png">';
    }
    a+='<hr>';
    $("#chon_taixiu").html(a);
}

function baucua(id)
{
    var a = '<hr><center>Bạn muốn chọn con gì</center>';
    for(var i=0;i<=6;i++)
    {
        a+='<img onclick="chontaixiu(\''+id+'\','+i+')" src="data/img/baucua/'+i+'.png">';
    }
    a+='<hr>';
    $("#chon_baucua").html(a);
}
