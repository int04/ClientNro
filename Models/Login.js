let load_login = function()
{
    let html = `<div class="form" style="padding-top: 25px;">
    <div class="row justify-content-center">
      <h3>Đăng nhập</h3>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div id="alert"></div>
        <form id="formLogin" method="POST" style="padding: 20px 20px;">
          <div class="form-group">
            <label for="">Tài khoản</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="">
          </div>
          <div class="form-group">
            <label for="">Mật khẩu</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="">
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-success form-control font-weight-bold text-uppercase" onclick="btnLogin();"><i class="fas fa-sign-in-alt"></i> Đăng nhập</i></button>
          </div>
          <div class="form-group text-center">
            Bạn chưa có tài khoản? <a type="button" class="btn btn-danger font-weight-bold text-uppercase" href="#" onclick="load_reg()"><i class="fas fa-user-plus"></i> Đăng kí</a>
          </div>
        </form>
      </div>
    </div>
  </div>`;
    head();

    $("#ducnghia").html(html);
}

function btnLogin()
{
    let username = $("#username").val();
    let password = $("#password").val();
    if(username.length <=0 || password.length <=0)
    {
        msg('Vui lòng nhập tất cả thông tin')
    }
    else 
    {
        loading();
        dn.to({
            users :
            {
                nguoichoi : 
                {
                    login : 
                    {
                        username : username,
                        password : password
                    }
                }
            }
        })
    }
}