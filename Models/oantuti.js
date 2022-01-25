function gakeo(id,type)
{
    let vang = $("#buakeobao").val();
    //vang = vang.replaceAll(".","");
    vang = +vang;
    if(vang <=0)
    {
        msg('Chưa nhập tiền cược');
        return false;
    }
    loading();
    dn.to({
        ott : {
            moi : {
                pk : id,
                type : type,
                vang : vang,
            }
        }
    })
}

function chapnhan(id,type)
{
    loading();
    dn.to({
        ott : {
            chapnhan : {
                id : id,
                type : type,
            }
        }
    })
}

function DoithuOTT(data) {
  Swal.fire({
      title: '<strong>Lời thách đấu !</strong>',
      icon: 'info',
      width: 800,
      html: `<div class="card-header bg-transparent border-seccond" style="padding: 30px">
     
      <form id="form">
       
        <div class="form-group">
          <label>Tù tì thủ <b>`+data.name+`</b> muốn thách đấu oẳn tù tì với bạn với mức cược : <b>`+number_format(data.vang)+` vàng</b>. Bạn có đồng ý không ?</label>
        </div>
      </form>
      <div id="alert"></div>
     <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover text-center">
      <thead class="">
          <tr>
          
            <th scope="col" onclick="chapnhan(`+data.id+`,'keo')">  <i class="fas fa-hand-peace"></i></th>
            <th scope="col" onclick="chapnhan(`+data.id+`,'bua')"><i class="fas fa-hand-rock"></i></th>
            <th scope="col" onclick="chapnhan(`+data.id+`,'bao')"><i class="fas fa-hand-paper"></i></th>
            
          </tr>
        </thead>
      </table>
     </div>
     
                  
                  
              </div>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Đóng',
      confirmButtonAriaLabel: 'Thumbs up, great!',

      cancelButtonAriaLabel: 'Thumbs down'
  })
  
}


function moi(nguon,name) {
  Swal.fire({
      title: '<strong>Búa Kéo bao: '+name+'</strong>',
      icon: 'info',
      width: 800,
      html: `<div class="card-header bg-transparent border-seccond" style="padding: 30px">
     
      <form id="form">
       
        <div class="form-group">
          <label>Số tiền cược:</label>
          <input type="text" class="form-control" placeholder="Nhập số tiền cược" id="buakeobao" name="">
        </div>
      </form>
      <div id="alert"></div>
     <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover text-center">
      <thead class="">
          <tr>
          
            <th scope="col" onclick="gakeo(`+nguon+`,'keo')">  <i class="fas fa-hand-peace"></i> </th>
            <th scope="col" onclick="gakeo(`+nguon+`,'bua')"><i class="fas fa-hand-rock"></i></th>
            <th scope="col" onclick="gakeo(`+nguon+`,'bao')"><i class="fas fa-hand-paper"></i></th>
            
          </tr>
        </thead>
      </table>
     </div>
     
                  
                  
              </div>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Đóng',
      confirmButtonAriaLabel: 'Thumbs up, great!',

      cancelButtonAriaLabel: 'Thumbs down'
  })
  /*
  $('#buakeobao').keyup(function() {
      let run = $("#buakeobao").val();
      run = run.replaceAll(".","");
      $("#buakeobao").val(number_format(run));
     
  });
  */
}