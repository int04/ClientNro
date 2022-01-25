function lixi() {
    Swal.fire({
        title: '<strong>LÌ XÌ</strong>',
        icon: 'success',
        width: 450,
        html: `<div class="card-header bg-transparent border-seccond" style="padding: 30px">
       
        <form id="form">
       
        <div class="form-group">
          <label>Số tiền:</label>
          <input type="number" class="form-control" placeholder="Số tiền " id="sotienlx" name="">
        </div>
        <div class="form-group">
          <label>Số lượng:</label>
          <input type="number" class="form-control" placeholder="Số lượng " value="1" id="soluonglx" name="">
        </div>
      </form>
      <center><button class="btn btn-success" onclick="lixinow()">Lì xì</button></center>
       </div>
       
                    
                    
                </div>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Đóng',
        confirmButtonAriaLabel: 'Thumbs up, great!',
  
        cancelButtonAriaLabel: 'Thumbs down'
    })
    
  }

  let lixinow = function()
  {
      let soluong = $("#soluonglx").val();
      let xu = $("#sotienlx").val();
      if(+xu <= 1000)
      {
          msg('Xu lì xì phải lớn hơn 1.000 xu','info')
      }
      else 
      if(soluong <=0)
      {
          msg('Số lượng người nhận không hợp lệ','info');
      }
      else 
      {
          loading();
          dn.to({
              lixi : {
                  tao : {
                      soluong : soluong,
                      xu : xu,
                  }
              }
          })
      }
  }
  
  let nhanlx = function(data)
  {
      let so1 = rand(1,100);
      let so2 = rand(1,100);
      let checkspam = prompt("Lì xì: ("+so1+"+"+so2+"=):", "");
      if(checkspam == (so1+so2))
      {
        loading();
        dn.to({
           
                lixi : {
                    nhan : {
                        id : data,
                    }
                }
            
        })
      }
      
      
  }