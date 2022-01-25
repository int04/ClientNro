var idCsmm = document.getElementById("idCsmm");
var goldChan = document.getElementById("goldChan");
var goldLe = document.getElementById("goldLe");
var goldTai = document.getElementById("goldTai");
var goldXiu = document.getElementById("goldXiu");
var timeCsmm = document.getElementById("time");
var chatGlobal = document.getElementById("chatGlobal");
var content = document.getElementById("chatContent");
var btn = document.getElementById("chatButton");
btn.addEventListener("click", function () {
  sendChat();
});

function sendChat() {
  var data = "content=" + content.value;
  var http = new XMLHttpRequest();
  http.open('POST', "control.php?chat=post" + "&server=" + indexServer, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(http.responseText);
      var newItem = $(json.message);
      $("#chatGlobal").append(newItem);
      newItem.show("slow");
      $("#chatGlobal").animate({
        scrollTop:
          $("#chatGlobal").prop("scrollHeight")
      }, 500);
      content.value = "";
    }
  }
  http.send(data);
}

loadChat(true);
setInterval(function () {
  loadChat(false);
}, 7500);

function loadChat(isFirst) {
  var idLast = idMax;
  var tds = chatGlobal.children;
  for (var i = tds.length - 1; i >= 0; i--) {
    var td = tds[i].children[0];
    if (td.getAttribute("data-id") != "-1") {
      idLast = td.getAttribute("data-id");
      break;
    }
  }
  if (isFirst){
    idLast -= 7;
    chatGlobal.innerHTML = "";
  }
  var http = new XMLHttpRequest();
  http.open('GET', "control.php?chat=update&id=" + idLast + "&record=" + record.value + "&server=" + indexServer, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(http.responseText);
      if (json.status == 1) {
        for (var i = 0; i < json.message.length; i++) {
          var newItem = $(json.message[i]);
          $("#chatGlobal").append(newItem);
          newItem.show("slow");
          $("#chatGlobal").animate({
            scrollTop:
              $("#chatGlobal").prop("scrollHeight")
          }, 500);
        }
      }
      server.innerHTML = json.server;
      seccond.innerHTML = json.seccond;
      result.innerHTML = json.result;
      lsgd.innerHTML = json.history;
      goldUser.value = json.amount;
      idCsmm.innerHTML = json.id;
      goldChan.innerHTML = json.goldChan;
      goldLe.innerHTML = json.goldLe;
      timeCsmm.innerHTML = json.time;
      goldTai.innerHTML = json.goldTai;
      goldXiu.innerHTML = json.goldXiu;
    }
  }
  http.send();
}

record.addEventListener("change", function(){
  loadChat(false);
});

content.addEventListener('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    sendChat();
  }
});