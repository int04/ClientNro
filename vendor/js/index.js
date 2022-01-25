var indexServer = serverDefault;
var listBtnSv = document.getElementById("listBtnSv");
var innerHTML = "";
for (var i = 1; i <= 10; i++){
  var className = "btn border-info font-weight-bold text-info btn-sv";
  if (i == indexServer){
    className = "btn btn-info font-weight-bold btn-sv";
  }
  var title = i;
  if (i == 10){
    title = " 24/24";
  }
  innerHTML += '<button type="button" class="' +  className + '" data-server="' + i + '">Server ' + title + '</button>';
}



listBtnSv.innerHTML = innerHTML;

var btnSvs = document.getElementsByClassName("btn-sv");
for (var i = 0; i < btnSvs.length; i++) {
  var btnSv = btnSvs[i];
  btnSv.addEventListener("click", function () {
    var index = Number(this.getAttribute("data-server"));
    if (index == indexServer){
      return;
    }
    btnSvs[index - 1].className = "btn btn-info font-weight-bold btn-sv";
    btnSvs[indexServer - 1].className = "btn border-info font-weight-bold text-info btn-sv";
    indexServer = index;
    loadChat(true);
  })
}