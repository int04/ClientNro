let load_index2 = function()
{
  
  head();
  head_menu('index')
  chonserver(server);
    let html = `<h2 class="text-center" style="margin-top: 30px;">CON SỐ MAY MẮN</h2>
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
         
          <div class="box-body" style="padding: 30px;background: #00d0ff0d;">
      <center>
  
      <img src="/vendor/bahatmit.png?since04" style="
        position: relative;
        margin-left: 8%;
        ">
    
    
      </center>
      <div style="border: 1px solid #060606;
            background-color: #ffffff;
            border-radius: 5px; font-size : 17px;font-weight:500;
            padding: 10px;">        
            <p class="card-text">
              Mã phiên: <span id="idCsmm" class="font-weight-bold text-danger"></span></br>
              Máy chủ: <span id="server" class="font-weight-bold text-danger">0</span> sao</br>Kết quả trước đó: <span class="text-danger font-weight-bold" id="result">0</span></br>
              Thời gian còn: <span class="text-danger font-weight-bold"><span id="seccond">0</span> giây</span> <img id="loadding" style="margin-left: 10px;" src="/vendor/image/loading.gif" alt="loading" width="auto" height="20px" hidden></br>
              Chẵn: <span id="goldChan" class="font-weight-bold text-danger"></span> - Lẻ: <span id="goldLe" class="font-weight-bold text-primary"></span></br>
              Tài: <span id="goldTai" class="font-weight-bold text-danger"></span> - Xỉu: <span id="goldXiu" class="font-weight-bold text-primary"></span></br>
              Thời gian hoạt động: <span id="time_game" class="font-weight-bold text-danger"></span>
            </p>
            <p style="margin-bottom: 7px;">
            CL: <span id="resultCL" style="display:inline-flex"></span>
          </p>

          <p style="margin-bottom: 7px;">
          TX: <span id="resultTX" style="display:inline-flex"></span>
          </p>
    </div>
          </div>

        </div>
        <div class="card border-info" style="margin-top: 25px;">
          <div class="card-header bg-info text-light border-seccond text-center font-weight-bold"><span class="fas fa-gavel"></span> ĐẶT CƯỢC</div>
          <div class="card-header bg-transparent border-seccond" style="padding: 30px">
            <div class="form-group">
              <input class="form-control font-weight-bold" type="text" value="Vàng hiện có: 0" readonly id="goldUser">
            </div>
            <form id="form">
              <div class="form-group">
                <label>Trò chơi:</label>
                <select class="form-control" style="color: red" id="type" name="type">
                  <option value="chanle">Chẵn lẻ - Tài Xỉu(x1.95)</option>
                  <option value="xien">Xiên (x3.2)</option>
                </select>
              </div>
              <div class="form-group" id="divValue">
                <label>Kết quả dự đoán:</label>
                <div class="form-group">
                <div class="btn-group" style="width: 100%;">
                <div class="row" style="width: 100%;" id="cuamuondat">
                <div class="col-6" style="padding-right : 2px;"><b type="button" class="btn btn-info form-control rounded font-weight-bold text-uppercase" onclick="typechon('chanle','chan')" id="chanle_chan" style="opacity: 0.2;">Chẵn</b></div>

                <div class="col-6 text-right" style="padding-right : 2px;"> <b  class="btn btn-warning form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('chanle','le')" id="chanle_le">Lẻ </b></div>
        
                <div class="col-6 mt-3 text-right" style="padding-right : 2px;"><b type="button" class="btn btn-success form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('taixiu','tai')" id="taixiu_tai">Tài </b></div>
                <div class="col-6 mt-3 text-right" style="padding-right : 2px;"><b type="button" class="btn btn-danger form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('taixiu','xiu')" id="taixiu_xiu">Xỉu </b></div>
                </div>
                </div>
                </div>
              </div>
              <div class="form-group">
                <label>Số vàng cược:(<b id="format_vang">0</b>)</label>
                <input type="text" class="form-control" placeholder="Nhập số vàng đặt cược" id="gold" name="gold">
                <input type="text" class="form-control" style="display:none;" placeholder="Nhập số vàng đặt cược" id="gold2" name="gold2">
              </div>
            </form>
            <div id="alert"></div>
                        <button class="btn btn-info font-weight-bold text-uppercase form-control" onclick="datngay()" type="button" id="btnSubmit" style="">Đặt ngay</button>
                        
                        
                    </div>
                   


        </div>
      </div>
      `+chat_function()+`
      </div>
    </div>
    <div class="row">
      <div class="text-center font-weight-bold" style="margin-top: 50px; margin-bottom: 3px; width: 100%">
        <h4>Lịch sử đặt cược</h4>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover text-center">
          <thead class="bg bg-info text-white">
            <tr>
            
              <th scope="col">Vũ trụ</th>
              <th scope="col">Phiên</th>
              <th scope="col">Người cược</th>
              <th scope="col">Vàng đặt</th>
              <th scope="col">Thể loại</th>
              <th scope="col">Dự đoán</th>
              <th scope="col">Vàng nhận</th>
              <th scope="col">Tình trạng</th>
              <th scope="col">Thời gian</th>
            </tr>
          </thead>
          <tbody id="logphienindex">
                    </tbody>
        </table>
      </div>
    </div>

    <div class="row">
    <div class="col-lg-2 col text-dark" id="darkMode7">
      <label>Tất cả:</label>
      <select id="Sevelselct" class="form-control">
        <option value="0">Tất cả</option>
        <option value="1">Vũ trụ 1</option>
        <option value="2">Vũ trụ 2</option>
        <option value="3">Vũ trụ 3</option>
        <option value="4">Vũ trụ 4</option>
        <option value="5">Vũ trụ 5</option>
        <option value="6">Vũ trụ 6</option>
        <option value="7">Vũ trụ 7</option>
        <option value="8">Vũ trụ 8</option>
        <option value="9">Vũ trụ 9</option>
        <option value="999">Vũ trụ 24/24</option>
      </select>
    </div>
    <div class="col offset-lg-8 col text-dark" id="darkMode6">
      <label>Bản ghi:</label>
      <select id="record" class="form-control">
        <option value="10">10 bản ghi</option>
        <option value="20">20 bản ghi</option>
        <option value="30">30 bản ghi</option>
        <option value="50">50 bản ghi</option>
        <option value="100">100 bản ghi</option>
        <option value="200">200 bản ghi</option>
      </select>
    </div>
  </div>

   
  
    <div class="row">
    <div class="col-12">
      <div class="text-center font-weight-bold" style="margin-top: 50px; margin-bottom: 3px; width: 100%">
        <h5>BẢNG XẾP HẠNG TRONG NGÀY</h5>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover text-center" id="bxh">
          <thead class="bg bg-danger text-white">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Người chơi</th>
              <th scope="col">Tổng tiền chơi</th>
            </tr>
          </thead>
          <tbody id="log_play">
                       <tr>
              <td colspan="10" style="color: red" class="font-weight-bold">Người chơi đứng TOP Thắng, thua 24h đêm sẽ nhận được danh hiệu. Ngoài ra tổng người chơi cược nhiều nhất cũng sẽ nhận được thưởng xu.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
    <!-- Modal -->
   
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
    dn.to({
      users : {
        top : {
          play_csmm : true,
        }
      }
    })
    $("#gold").keyup(function(){
      $("#format_vang").html(number_format(Math.round($("#gold").val())));
  })
    $("select#record").change(function(){
      MaxJohn = $("#record").val();
      dn.to({
        users : {
            csmm : {
                
                getlsgs :
                {
                  ducnghia : true,
                }
            }
        }
    })
    })

    $("select#Sevelselct").change(function(){
      Sevelselct = $("#Sevelselct").val();
      dn.to({
        users : {
            csmm : {
                
                getlsgs :
                {
                  ducnghia : true,
                }
            }
        }
    })
    })

    
    $("select#type").change(function() {
      let type = $("#type").val();
      $("#value").html('');
      if(type == "chanle")
      {
        $("#cuamuondat").html(`
        
        <div class="col-6" style="padding-right : 2px;"><b type="button" class="btn btn-info form-control rounded font-weight-bold text-uppercase" onclick="typechon('chanle','chan')" id="chanle_chan" style="opacity: 0.2;">Chẵn</b></div>

        <div class="col-6 text-right" style="padding-right : 2px;"> <b  class="btn btn-warning form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('chanle','le')" id="chanle_le">Lẻ </b></div>

        <div class="col-6 mt-3 text-right" style="padding-right : 2px;"><b type="button" class="btn btn-success form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('taixiu','tai')" id="taixiu_tai">Tài </b></div>
        <div class="col-6 mt-3 text-right" style="padding-right : 2px;"><b type="button" class="btn btn-danger form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('taixiu','xiu')" id="taixiu_xiu">Xỉu </b></div>

        `);
      }
     
      else 
      if(type == "xien")
      {
        $("#value").append(`<option value="chantai">Chẵn - Tài</option> <option value="chanxiu">Chẵn - xỉu</option>
        <option value="letai">Lẻ - Tài</option> <option value="lexiu">Lẻ - xỉu</option>
        `);
        $("#cuamuondat").html(`
        
        <div class="col-6" style="padding-right : 2px;"><b type="button" class="btn btn-info form-control rounded font-weight-bold text-uppercase" onclick="typechon('xien','chantai')" id="xien_chantai" style="opacity: 0.2;">Chẵn - Tài</b></div>

        <div class="col-6 text-right" style="padding-right : 2px;"> <b  class="btn btn-warning form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('xien','chanxiu')" id="xien_chanxiu">Chẵn - Xỉu </b></div>

        <div class="col-6 mt-3 text-right" style="padding-right : 2px;"><b type="button" class="btn btn-success form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('xien','letai')" id="xien_letai">Lẻ - Tài </b></div>
        <div class="col-6 mt-3 text-right" style="padding-right : 2px;"><b type="button" class="btn btn-danger form-control rounded font-weight-bold text-uppercase text-white" style="opacity: 0.2;" onclick="typechon('xien','lexiu')" id="xien_lexiu">Lẻ - Xỉu </b></div>

        `);
      }
  });
   
  listserver();
  dn.to({
    users : {
        csmm : {
            
            getlsgs :
            {
              ducnghia : true,
            }
        }
    }
})
}


var chosegame = '';
var chosecuachon = '';

let typechon = function(type,cuoc)
{
  $("#"+chosegame+"_"+chosecuachon+"").css('opacity',0.2);
  chosegame = type;
  chosecuachon = cuoc;
  $("#"+chosegame+"_"+chosecuachon+"").css('opacity',1);
}


let datngay = function()
{
  let type = chosegame;
  let vang = $("#gold").val();
  let cuoc = chosecuachon;
  //vang = vang.replaceAll(".","");
  
  if(cuoc <0)
  {
    msg('Bạn chưa nhập số tiền cần cược')
  }
  if(type  == "taixiu" || type == "chanle" || type == "xien")
  {
    if(type == "taixiu" && cuoc == "tai" || cuoc == "xiu")
    {
      loading();
      dn.to({
        users : {
          csmm : 
          {
            cuoc : 
            {
              type : type,
              cuoc : cuoc,
              vang : vang,
              server : server,
            }
          }
        }
      });
    }
    else 
    if(type == "chanle" && cuoc == "chan" || cuoc == "le")
    {
      loading();
      dn.to({
        users : {
          csmm : 
          {
            cuoc : 
            {
              type : type,
              cuoc : cuoc,
              vang : vang,
              server : server,
            }
          }
        }
      });
    }
    else 
    if(type == "xien" && cuoc == "chantai" || cuoc == "chanxiu" || cuoc == "letai" || cuoc == "lexiu")
    {
      loading();
      dn.to({
        users : {
          csmm : 
          {
            cuoc : 
            {
              type : type,
              cuoc : cuoc,
              vang : vang,
              server : server,
            }
          }
        }
      });
    }
    else 
    {
      msg('Cửa chọn không hợp lệ')
    }
  }
  else 
  {
    msg('Vui lòng chọn game để chơi')
  }
}

let chonserver = function(res)
{
    loading(); 
    server = res;
    listserver();
    dn.to({
        users : {
            csmm : {
                phien : {
                    server : res
                },
                
            }
        }
    })
}

let listserver = function()
{
    
    $("#listBtnSv").html('');
    let c = [
      {
        server : 1,
        name : 'Vũ trụ 1',
    },
        {
            server : 2,
            name : 'Vũ trụ 2',
        }
        ,
        {
          server : 3,
          name : 'Vũ trụ 3',
      }
      ,
      {
        server : 4,
        name : 'Vũ trụ 4',
    }
    ,
    {
      server : 5,
      name : 'Vũ trụ 5',
  }
  ,
  {
    server : 6,
    name : 'Vũ trụ 6',
}
,

{
  server : 7,
  name : 'Vũ trụ 7',
}
,
{
  server : 8,
  name : 'Vũ trụ 8',
}
,
{
  server : 9,
  name : 'Vũ trụ 9',
}
,
        {
           server : 999,
          name : 'Server World'
       }
    ];
    c.forEach(e => {
        $("#timeserver_"+e.server).html('');
        $("#listBtnSv").append(`
        <button onclick="chonserver(`+e.server+`)" type="button" class="`+(server == e.server ? 'btn btn-info font-weight-bold btn-sv' : 'btn border-info font-weight-bold text-info btn-sv')+`" data-server="1" style="background-color: #fdd6a9;
        border-color: #5d2700!important;">`+e.name+` <b id="timeserver_`+e.server+`"></b></button>
        `);
    });
}
let status = function(data)
{
    $("#idCsmm").html(number_format(data.id));
    $("#server").html(number_format(data.server));
    $("#time_game").html((data.server != 999 ? '8h - 22h' : '24/24'));
    $("#seccond").html((data.time <=0 ? 'Đang chờ KQ' : data.time));
    numanimate_2($('#goldChan'), data.chan, 17);
    numanimate_2($('#goldLe'), data.le, 17);
    numanimate_2($('#goldTai'), data.tai, 17);
    numanimate_2($('#goldXiu'), data.xiu, 17);
}
let xulyserver = function(data)
{
    data.forEach(e => {
        //$("#timeserver_"+e.server).html('('+e.time+'s)');
    });
    if(data.find(e => e.server == server) != undefined)
    {
        status(data.find(e => e.server == server));
    }
    else 
    {
        if(timejob != server)
        {
            loading();
            dn.to({
                users : 
                {
                    csmm : 
                    {
                        get :
                        {
                            server : server
                        }
                    }
                }
            })
            timejob = server;
        }
    }
}
let dat = function(data)
{
    let value = +$("#gold").val();
    $("#gold").val(value + data);
    if(value > 500000000) $("#gold").val(500000000);

}
let timejob = 999;
let MaxJohn = 10;
let Sevelselct = 0;

let tendf = function(s)
{
  if(s == "chantai") return "Chẵn - tài"
  else if(s == "chanxiu") return "Chẵn - xỉu"
  else if(s == "lexiu") return "Lẻ - xỉu"
  else if(s == "letai") return "Lẻ - tài"
}
let logcuoc = function (data) {
    $("#logphienindex").html('');
    let o = data;
    for(var i=0; i< (o.length < MaxJohn ? o.length : MaxJohn); i++)
    {
        let e = o[i];
        if(e.server == Sevelselct || Sevelselct == 0)
        {
          $("#logphienindex").append(`
          <tr>
              <td>`+e.server+`</td>
              <td>`+e.phien+`</td>
              <td>`+e.name+`</td>
              <td>`+number_format(e.vangcuoc)+`</td>
              <td>`+(e.game == "chanle" ? 'Chẵn lẻ' : (e.game == "taixiu" ? "Tài xỉu" : "Xiên"))+`</td>
              <td>`+(e.cuoc == "tai" ? "Tài" : (e.cuoc == "xiu" ? "xỉu" : (e.cuoc == "chan" ? "chẵn" : (e.cuoc == "le" ? 'Lẻ' : tendf(e.cuoc)))))+`</td>
              <td>`+(e.trangthai == 0 ? '<i class="fas fa-spinner fa-spin "></i>' : number_format(e.vangnhan) )+`</td>
              <td>`+(e.trangthai == 0 ? '<i class="fas fa-spinner fa-spin "></i>' : (e.vangnhan >=1 && e.vangnhan != e.vangcuoc   ? '<div class="badge badge-success btn btn-success text-uppercase font-weight-bold" ;="" style="padding: 5px 5px"> Đã trao thưởng </div>' : (e.vangnhan == e.vangcuoc ? '<div class="badge badge-info btn btn-info text-uppercase font-weight-bold" style="padding: 5px 5px"> Hoàn trả </div>' : '<div class="badge badge-danger btn btn-danger text-uppercase font-weight-bold" style="padding: 5px 5px"> Thua </div>') ) )+`</td>
              <td>`+e.thoigian+`</td>
          </tr>
          `);
        }
        
    }
        
    
}

let resdocphien = function(data)
{
    $("#resultCL").html('');
    $("#resultTX").html('');
    $("#result").html(data.pre);
    data.list.sort(function(a,b)
    {
        return a.id  - b.id;
    });
    data.list.forEach (e => {
        let ketqua = e.ketqua >> 0;
        $("#resultCL").append(` `+(ketqua%2 == 0 ? '<span class="rounded-circle bg-info text-white text-center" style="padding-right: 5px; padding-left: 5px; margin-right: 3px; display: inline-block; width: 22px;border-radius: 30px;">C</span>' : '<span class="rounded-circle bg-warning text-white text-center" style="border-radius: 30px;padding-right: 5px; padding-left: 5px; margin-right: 3px; display: inline-block; width: 22px">L</span>')+` `);
        $("#resultTX").append(` `+(ketqua <= 49 ? '<span class="rounded-circle bg-danger text-white text-center" style="padding-right: 5px; padding-left: 5px; margin-right: 3px; display: inline-block; width: 22px;border-radius: 30px;">X</span>' : '<span class="rounded-circle bg-success text-white text-center" style="padding-right: 5px; padding-left: 5px; margin-right: 3px; display: inline-block; width: 22px;border-radius: 30px;">T</span>')+`  `);
    })
}