let load_chuyentien = function(data)
{
    head();
    let html = `
    <h2 class="text-center" style="margin-top: 50px;">CHUYỂN TIỀN</h2>
    <hr style="width: 15%; height: 1px" class="bg-danger">
    <div class="alert alert-info" style="margin-top: 40px">
      <strong>Bạn có thể chuyển tiền cho người chơi khác.</strong><br>
      - Số tiền chuyển tối thiểu là : <b>`+number_format(data.min)+` xu. <Br>
      - Phí chuyển tiền là : <b>`+(Math.fround(data.phi - 1)*100).toFixed(2)+`%</b>
      
    </div>
    <div class="row" style="padding-top: 25px">
      <div class="col-lg-5">
        <div class="card border-info">
          <div class="card-header bg-info text-light border-info text-center font-weight-bold">
            <span id="sodu">xu hiện có: `+number_format(data.vang)+`</span>
          </div>
          <div class="card-body border-info">
            <form id="form">
           

          

             
              <div class="form-group">
                <label>UID hoặc tên nhân vật</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Tên nhân vật hoặc UID bạn muốn chuyển">
                <small>Tên nhân vật hoặc UID người nhận</small>
              </div>
              <div class="form-group">
                <label>Người nhận</label>
                <input type="text" name="vang" id="findusers" class="form-control" placeholder="" readonly value="Không tồn tại">
                <small>Hãy kiểm tra xem đúng người chưa nhé !</small>
              </div>

              <div class="form-group">
                <label>Số tiền cần chuyển</label>
                <select class="form-control" id="vangchuyen">
                  <option value="0">chọn số tiền</option>
                  <option value="1">10.000.000 xu</option>
                  <option value="2">20.000.000 xu</option>
                  <option value="3">50.000.000 xu</option>
                  <option value="4">100.000.000 xu</option>
                  <option value="5">200.000.000 xu</option>
                  <option value="6">500.000.000 xu</option>
                </select>
                <small>Số tiền bạn muốn chuyển cho người chơi này.</small>
              </div>

              <div class="form-group">
                <label>Tổng tiền</label>
                <input type="text" name="vang" id="tongtien" class="form-control" placeholder="" readonly value="0">
                <small>Tổng số tiền chuyển + phí.</small>
              </div>

              <div class="form-group">
                <label>Lời nhắn</label>
                <textarea id="noidung" class="form-control"></textarea>
                <small>Lời nhắn chuyển tiền.</small>
              </div>
              
              
             
              <div id="alert"></div>
              <div class="form-group">
                <button class="form-control btn btn-info font-weight-bold text-uppercase" type="button" id="btn" onclick="chuyentien()"> Chuyển tiền</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-7" id="vitri">
        <div class="form-group">
          <a class="btn btn-info form-control font-weight-bold text-white readonly">Lịch sử chuyển nhận</a>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-response text-center table-striped">
            <thead class="thead-light">
              <tr>
                <th scope="col">Mã đơn</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Người chuyển</th>
                <th scope="col">Người nhận</th>
                <th scope="col">Số xu</th>
                <th scope="col">Phí</th>
                <th scope="col">Nội dung</th>
              </tr>
            </thead>
            <tbody id="listnhantien">
                    </tbody>
          </table>
          <center id="trang"></center>
        </div>
      </div>
    </div>
    
  `;

    $("#ducnghia").html(html);
    $('#name').keyup(function() {
        input = $("#name").val();
        loading();
        dn.to({
            chuyentien : 
            {
                find : {
                  text : input,
                },
            }
        });
    });
    $("#vangchuyen").keyup(function(){
        input = $("#vangchuyen").val();
        $("#tongtien").val(number_format(Math.round(input * tile)));
    })
    if(data.list.length >=1)
    {
    data.list[0].forEach(e => {
        $("#listnhantien").append(`
            <tr>
                <td>`+e.id+`</td>
                <td>`+e.thoigian+`</td>
                <td>`+e.from+`</td>
                <td>`+e.to+`</td>
                <td>`+number_format(e.vang)+`</td>
                <td>`+number_format(Math.round(e.vang * e.phi - e.vang))+`</td>
                <td>`+(e.noidung)+`</td>
            </tr>
        `);
    });
  }
    let tile = data.phi;
    input = 0;

    $("#trang").html(trang('abc',data.page,data.TOTAL));
    function trang(url, start, total) {
      kmess = 25;
      let out = '';
      out += '<nav aria-label="Page navigation example"><ul ul class="pagination">';
      neighbors = 2;
      if (start >= total) start = Math.max(0, total - ((total % kmess) == 0 ? kmess : (total % kmess)));
      else start = Math.max(0, +start - (+start % +kmess));
      base_link = '<li class="page-item"><a class="page-link" href="#" onclick="loading();dn.to({  { chuyentien : {index : {trang : ' + '%d' + '}}})">%s</a></li>';
      out += start == 0 ? '' : sprintf(base_link, start / kmess, '&lt;&lt;');
      if (start > kmess * neighbors) out += sprintf(base_link, 1, '1');
      if (start > kmess * (neighbors + 1)) out += '<li class="page-item"><a class="page-item" href="#">...</a></li>';
      for (nCont = neighbors; nCont >= 1; nCont--) if (start >= kmess * nCont) {
          tmpStart = start - kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      out += '<li class="page-item active"><a class="page-link" href="#">' + (start / kmess + 1) + '</a></li>';
      tmpMaxPages = +((total - 1) / kmess) * kmess;
      for (nCont = 1; nCont <= neighbors; nCont++) if (start + kmess * nCont <= tmpMaxPages) {
          tmpStart = start + kmess * nCont;
          out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
      }
      if (start + kmess * (neighbors + 1) < tmpMaxPages) out += '<li class="page-item "><a class="page-link" href="#">...</a></li>';
      if (start + kmess * neighbors < tmpMaxPages) out += sprintf(base_link, Math.round(tmpMaxPages / kmess + 1), Math.round(tmpMaxPages / kmess + 1));
      if (start + kmess < total) {
          display_page = (start + kmess) > total ? total : (start / kmess + 2);
          out += sprintf(base_link, display_page, '&gt;&gt;');
      }
      out += '</ul></nav>';
      return out;
  }
    
    

}

let chuyentien = function()
{
    let name= $("#name").val();
    let vang = +$("#vangchuyen").val();
    let noidung = $("#noidung").val();
    if(vang <=0 )
    {
        msg('xu chuyển không hợp lệ')
    }
    else 
    if(name.length <=0)
    {
        msg('Vui lòng nhập người nhận')
    }
    else 
    if(noidung.length >=500)
    {
        msg('Nội dung bạn nhập quá dài, tối đa 500 kí tự thôi.')
    }
    else
    {
        loading();
        dn.to({
            chuyentien : 
            {
                submit : 
                {
                    name : name,
                    vang : vang,
                    noidung :noidung 
                }
            }
        })
    }
}