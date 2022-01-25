function login_game()
{
    let taikhoan = $("#taikhoan").val();
    let matkhau = $("#matkhau").val();
    loading()
    dn.to({
        admin : 
        {
            nguoichoi  : {
                login : {
                    username : taikhoan,
                    password : matkhau,
                }
            }
        }
    })
}

function index_login()
{
    
    let html = `
    <div class="pcoded-inner-content">
    <div class="row">
<div class="col-sm-12">

<form class="md-float-material form-material">

<div class="auth-box card">
<div class="card-block">
<div class="row m-b-20">
<div class="col-md-12">
<h3 class="text-center txt-primary">Đăng nhập</h3>
</div>
</div>

<p class="text-muted text-center p-b-5">Bạn phải đăng nhập mới có thể sử dụng tất cả các tính năng của admin</p>
<div class="form-group form-primary">
<input id="taikhoan" type="text" name="user-name" class="form-control" required="">
<span class="form-bar"></span>
<label class="float-label">Username</label>
</div>
<div class="form-group form-primary">
<input id="matkhau" type="password" name="password" class="form-control" required="">
<span class="form-bar"></span>
<label class="float-label">Password</label>
</div>

<div class="row m-t-30">
<div class="col-md-12">
<button onclick="login_game()" type="button" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">ĐĂNG NHẬP</button>
</div>
</div>
</div>
</div>
</form>

</div>

</div>
    </div>
    
    `;

    $("#ducnghia").html(html);
}