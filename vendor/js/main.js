
var divAlert = document.getElementById("alert");


function btnLogin() {
  divAlert.innerHTML = "";
  var input = document.getElementsByTagName("input");
  for (var i = 0; i < input.length; i++) {
    if (input[i].value.length == 0) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Thông tin đăng nhập không được để trống");
      return;
    }
    if (input[i].value.length < 6) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Thông tin đăng nhập phải là 1 chuỗi kí tự lớn hơn hoặc bằng 6 kí tự");
      return;
    }
    if (input[i].value.length > 16) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Thông tin đăng nhập phải là 1 chuỗi kí tự nhỏ hơn hoặc bằng 16 kí tự");
      return;
    }
    var arr = input[i].value.match(/([0-9]|[a-z]|[A-Z])/g);
    if (arr.length != input[i].value.length) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Tài khoản và mật khẩu phải là 1 chuỗi kí tự từ a -> z, A -> Z hoặc 0 -> 9");
      return;
    }
  }
  var data = $("#formLogin").serialize()
  XMLHttpRequestPOST("control.php?login", data, function (response) {
    var json = JSON.parse(response);
    if (json.code == 0) {
      divAlert.innerHTML = json.message;
      return;
    }
    window.location.href = "?";
  });
}

function btnResiger() {
  divAlert.innerHTML = "";
  var server = document.getElementById("server");
  if (server.value == 0) {
    divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Vui lòng chọn máy chủ");
    return;
  }
  var input = document.getElementsByTagName("input");
  for (var i = 0; i < input.length; i++) {
    if (input[i].value.length == 0) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Thông tin đăng kí không được để trống");
      return;
    }
    if (input[i].value.length < 6) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Thông tin đăng kí phải là 1 chuỗi kí tự lớn hơn hoặc bằng 6 kí tự");
      return;
    }
    if (input[i].value.length > 16) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Thông tin đăng kí phải là 1 chuỗi kí tự nhỏ hơn hoặc bằng 16 kí tự");
      return;
    }
    var arr = input[i].value.match(/([0-9]|[a-z]|[A-Z])/g);
    if (arr.length != input[i].value.length) {
      divAlert.innerHTML = alert("danger", "<strong>Thất bại!</strong> Tài khoản và mật khẩu phải là 1 chuỗi kí tự từ a -> z, A -> Z hoặc 0 -> 9");
      return;
    }
  }
  var data = $("#formRegister").serialize()
  XMLHttpRequestPOST("control.php?register", data, function (response) {
    var json = JSON.parse(response);
    if (json.code == 0) {
      divAlert.innerHTML = json.message;
      return;
    }
    window.location.href = "?";
  });
};


function XMLHttpRequestPOST(url, data, func) {
  var http = new XMLHttpRequest();
  http.open('POST', url, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      func(http.responseText);
    }
  }
  http.send(data);
}

function alert(type, content) {
  return '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' + content + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></buton>'
}

$("#gold").on("keyup", function (event) {
  var selection = window.getSelection().toString();
  if (selection !== '') {
    return;
  }
  if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
    return;
  }
  var $this = $(this);
  var input = $this.val();
  var input = input.replace(/[\D\s\._\-]+/g, "");
  input = input ? parseInt(input, 10) : 0;
  $this.val(function () {
    return (input === 0) ? "" : input.toLocaleString("en-US");
  });
});