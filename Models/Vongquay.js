let load_vongquay = function(data)
{
    head();
    if(!data)
    {
        loading();
        dn.to({
            users : {
                VXMM : {
                    home : true
                }
            }
        })
        return false;
    }
    let html = `<h2 class="text-center" style="margin-top: 30px;">VÒNG XOAY MAY MẮN</h2>
    <hr style="width: 15%; height: 1px" class="bg-danger">
  
  
    <!-- Modal -->
  
    <div class="row m-4">
      <div class="col text-center" id="listBtnSv">
       
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6" id="index-box-ketqua">
        <div class="card border-info">
          <div class="card-header bg-info text-light border-seccond text-center font-weight-bold"><span class="fas fa-history"></span> KẾT QUẢ</div>
          <div class="text-seccond">
                
          <div class="box-body" style="padding-top: 10px;
    padding-left: 10px;
    display: block;
    height: calc(91.0vh - 190px);
    overflow-y: auto;
    padding-right: 10px;background-color: #642201;">
                            <div style="background-color: #642201;">
                                <center>
                                    <br>
                                    <img src="/vendor/bahatmit.png?since04" style="position: relative;
    top: 10px;"> 
    <div style="border: 2px solid #060606;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;">
        <b style="color: #e91e63;">Người vừa chiến thắng: <b id="userchienthang">0</b></b> <br>
                                    <b style="color: #e91e63;">Số xu thắng: <b id="xuwin">0</b> xu</b> <br>
                                    <b style="color: #e91e63;">Số xu tham gia: <b id="xuthamgia">0</b> xu</b> <br>

                                    Tham gia <b id="tongsonguoi">....</b> Tổng giải thưởng <b id="tongxucuoc">0</b> Xu</b> <br>
                                    <b style="color: #cf841f;" id="vq_giay">0s</b> <br>
                                    <b>Bạn đã tham gia: <b id="xutoithamgia">0</b> Xu</b> (<b id="tilethang">0%</b>) <br>
                                    <b id="tienhanhquaythuong" style="color:#ff5722;display:none;">Quay thưởng: <b id="nameuser"></b></b>
                                    
    </div>
                            
                            
                             <div id="buttontile" style="display:none;">
                                    <b style="color: #f1ce31;">Tỉ lệ thắng</b> <br>
                                <div class="w3-light-grey" style="width: 30%;
     margin: 0 auto;background-color: #010001!important;">
                                    <div id="thanhtile" class="w3-container" style="width:0%;color:#f1ce31;
    background-color: #bd130c!important;display:none;">
                                        
                                    </div>
                                </div>
                            </div>

                                    

                                    
                                    
                                
                                    
                               
    <button style="border: 3.5px solid #593b31;
    border-radius: 16px;
    padding: 7px;
    color: #431d02;
    background-color: #b87d21;" id="button_cuoc" onclick="showmenu()">Tham <br> gia chơi</button>
                                   
                                    <div id="show_cuoc" style="display:none;">
    <div style="border: 2px solid #705e1e;
    background-color: #f7e1c2;
    border-radius: 7px;
    padding: 10px;
    margin: 10px 0;">
    
    <b style="color:#094116" id="text_inp">Nhập số tiền bạn muốn tham gia, nhỏ nhất 10.000 xu và lớn nhất 5.000.000 xu</b>
    <input type="text" id="tien_cuoc" placeholder="Nhập tiền cược" autocomplete="off" class="form-control" style="height: 40px; font-size: 16px; font-weight: normal;">
    
    </div>
    <button style="border: 3.5px solid #593b31;
    border-radius: 16px;
    padding: 7px;
    color: #431d02;
    width: 30%;
    background-color: #b87d21;" id="" onclick="$('#show_cuoc').hide();$('#button_cuoc').show();">Đóng</button>
    <button style="border: 3.5px solid #593b31;
    border-radius: 16px;
    padding: 7px;
    color: #431d02;
    width: 30%;
    background-color: #b87d21;" id="" onclick="vq_cuoc()">OK</button>
    </div>

                                    <br><br>
                                </center>
                            </div>
                           
                           

                        </div>

         

          </div>
        </div>
        <div class="card border-info" style="margin-top: 25px;">
          <div class="card-header bg-info text-light border-seccond text-center font-weight-bold"><span class="fas fa-gavel"></span>HƯỠNG DẪN</div>
          <div class="card-header bg-transparent border-seccond" style="padding: 30px">
            
          - Vòng quay may mắn là game nhiều người chơi. <Br> 
          - Một phiên gồm có 120 giây, trong thời gian này bạn có thể đặt cược. <br> 
          - Sau khi hết thời gian, hệ thống sẽ chọn ra người may mắn để nhận toàn bộ số tiền của tổng người chơi. <Br>
          - Ví dụ bạn cược 10.000 xu, trong tổng 100.000 xu, tỉ lệ thắng bạn là 10%, tương đương tên của bạn sẽ được ghi ngẫu nhiên vào 10 ô (gồm 100 ô) <br>
          - Hết thời gian, hệ thống tiền hành quay thưởng, nếu trúng ô có tên bạn, bạn sẽ là người chiến thắng.
                        
                    </div>
                   


        </div>
      </div>
      `+chat_function()+`
      </div>
    </div>
    <div class="row">
      <div class="text-center font-weight-bold" style="margin-top: 50px; margin-bottom: 3px; width: 100%">
        <h4>BẢNG VINH DANH</h4>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover text-center">
          <thead class="bg bg-info text-white">
            <tr>
            
              <th scope="col">PHIÊN</th>
              <th scope="col">NGƯỜI CHƠI</th>
              <th scope="col">VÀNG THAM GIA</th>
              <th scope="col">VÀNG CHIẾN THẮNG</th>
            </tr>
          </thead>
          <tbody id="log_phien_vqmm">
                    </tbody>
        </table>
      </div>
    </div>
   
  
    <!-- Modal -->
   
  
  
    `;
    $("#ducnghia").html(html);
    
   data.win.forEach(e => {
       $("#log_phien_vqmm").append(`<tr><td>`+e.phien+`</td> <td>`+e.name+`</td>  <td>`+number_format(e.john)+`</td> <td>`+number_format(e.win)+`</td></tr>`);
   });
   if(data.chat.length >=1)
   {
    data.chat[0].sort(function(a, b) {
      return a.id - b.id;
    });
    data.chat[0].forEach(c => {
      chatbox(c.name,c.noidung,c.avatar);
      
  });
}
  scrollSmoothToBottom("chathuht");
win();
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
    //xu = xu.replaceAll(".","");
    if (+xu >= 1) {
        loading();
        dn.to({
            users : {
                VXMM : {
                    cuoc : {
                        xu : xu
                    }
                }
            }
        })
        $("#tien_cuoc").val('')
    }
}

function win(data) {
    if(!data) {
        dn.to({
            users : {VXMM : {
                update : true,
            }}
        })
        return false;
    }
    let d = data;
    $("#userchienthang").html(d.username);
    numanimate_2($('#xuwin'), d.win, 17);
    numanimate_2($('#xuthamgia'), d.john, 17);    
    
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
