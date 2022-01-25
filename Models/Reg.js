let load_reg = function()
{
    head();
    let html = `<div class="form" style="padding-top: 25px;">
    <div class="row justify-content-center">
      <h3>Đăng kí</h3>
    </div>
    <div class="row justify-content-center">
      
            <div class="col-lg-8">
        <div id="alert"></div>
        <form id="formRegister" method="POST" style="padding: 20px 20px;">
          <div class="form-group">
            <label for="">Tên đăng nhập</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Tên đăng nhập">
          </div>
          <div class="form-group">
            <label for="">Mật khẩu</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Mật khẩu đăng nhập">
          </div>
          <div class="form-group">
          <label for="">Tên hiển thị</label>
          <input type="text" class="form-control" id="name" name="name" placeholder="Vd: since04">
            <small id="check_name_reg">Tên sử dụng để hiển thị, không đặt cùng với tài khoản tránh bị checkpass.</small>
          </div>

          <div class="form-group">
          <label for="">Máy chủ</label>
          <select class="form-control" id="void_server">
    
          </select>
            <small id="v">Bạn chỉ có thể chọn một lần không thể đổi. Bạn chơi game vũ trụ nào thì hãy chọn vũ trụ đó..</small>
          </div>

          <div class="form-group row">
                <label class="col-form-label col-lg-3"><img id="img_napvang" src="" width="140" height="30" alt="captcha" class="img-thumbnail mb-1" onclick="dn.to({users : {captcha : {true : 2}}})"></label>
                <div class="col-lg-8">
                  <input class="form-control" id="captcha_napvang" type="text" value="">
                  <small>Mã xác nhận.</small>
                </div>
                <div class="col-lg-1"></div>
              </div>

          <div class="form-group">
            <button type="button" class="btn btn-danger form-control font-weight-bold text-uppercase" id="btnRegister" onclick="btnResiger();"><i class="fas fa-user-plus"></i> Đăng kí</button>
            <small id="v">Khi đăng kí, đồng nghĩa bạn đã đồng ý với <b onclick="qquydinhsudung()">Quy định & Điều khoản Nro.Club</b></small>
          </div>
          <div class="form-group text-center">
            Bạn đã có tài khoản? <a type="button" class="btn btn-success font-weight-bold text-uppercase" href="#" onclick="load_login()"><i class="fas fa-sign-in-alt"></i> Đăng nhập</i></a>
          </div>
        </form>
      </div>
    </div>
  </div>`;
  $("#ducnghia").html(html);
  dn.to({
    users : {
      captcha : {
        true : 1,
      }
    }
  })
    $("#name").each(function () {
        $(this).keyup(function () {
            dn.to({
                users :
                {
                    nguoichoi : 
                    {
                        checkname : {
                            value  : $("#name").val()
                        }
                    }
                }
            });
        });
    });

    for(var i = 1; i<=9; i++)
  {
      $("#void_server").append(`<option class="" value="`+i+`">Vũ trụ `+i+`</option>`);
  }
  
}

function btnResiger() {
    let username = $("#username").val();
    let password = $("#password").val();
    let name = $("#name").val();
    let vutru = $("#void_server").val();
    let code = $("#captcha_napvang").val();
    if(vutru <=0 || vutru >9)
    {
        msg('Vũ trụ không hợp lệ. Vui lòng chọn lại.')
    }
    else
    if (username.length < 3 || username.length >= 15) {
        msg('Tên đăng nhập tối thiểu 3-15 kí tự');
    }
    else
        if (password.length <= 3) {
            msg('Mật khẩu tối thiểu phải lớn hơn 3 kí tự');
        }
        else
            if (username == name) {
                msg('Tên nhân vật không được trùng với tên tài khoản');
            }
            else
                if (username == password) {
                    msg('Mật khẩu không được trùng với tên tài khoản');
                }
                else {
                    dn.to({
                        users:
                        {
                            nguoichoi:
                            {
                                reg:
                                {
                                    username: username,
                                    password: password,
                                    name: name,
                                    server : vutru,
                                    code : code,
                                }
                            }
                        }
                    });
                    loading();
                }
}