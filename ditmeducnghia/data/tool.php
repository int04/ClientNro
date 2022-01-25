<?=json('Trang chủ')?>
<div class="content-wrapper">
  <div class="row">
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-danger card-img-holder text-white">
        <div class="card-body">
          <h4 class="font-weight-normal mb-3">Tài xỉu <i class="mdi mdi-chart-line mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">Thời gian: <b id="time_phien">0</b> <b id="status"></b></h2>
          <h6 class="card-text">Tiền tài : <b id="tien_tai">0</b></h6>
          <h6 class="card-text">Tiền xỉu : <b id="tien_xiu">0</b></h6>
          <h6 class="card-text">Số người xỉu : <b id="num_tai">0</b></h6>
          <h6 class="card-text">Số người tài : <b id="num_xiu">0</b></h6>
          <hr>
          Kết quả : <br>
          <b id="xuc_xac_1"></b> <b id="xuc_xac_2"></b> <b id="xuc_xac_3"></b>
<b id="chon_taixiu"></b>
<hr>
chọn Nhanh : <button type="submit" class="btn btn-gradient-primary mb-2" onclick="chontai()">Tài</button> <button type="submit" class="btn btn-gradient-primary mb-2" onclick="chonxiu()">Xỉu</button>
        </div>

        
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-info card-img-holder text-white">
        <div class="card-body">
          <h4 class="font-weight-normal mb-3">Bầu cua <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
          </h4>
          <h6 class="card-text">Tiền gà: <b id="cga">0</b></h6>
          <h6 class="card-text">Tiền cá: <b id="cca">0</b></h6>
          <h6 class="card-text">Tiền bầu: <b id="cbau">0</b></h6>
          <h6 class="card-text">Tiền cua: <b id="ccua">0</b></h6>
          <h6 class="card-text">Tiền hươu: <b id="chuou">0</b></h6>
          <h6 class="card-text">Tiền tôm: <b id="ctom">0</b></h6>
         <hr>
         kết quả : <br>
          <b id="b1"></b> <b id="b2"></b> <b id="b3"></b>
                        
                        <b id="chon_baucua"></b>

        </div>
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-success card-img-holder text-white">
        <div class="card-body">
          <h4 class="font-weight-normal mb-3">Vòng quay may mắn <i class="mdi mdi-diamond mdi-24px float-right"></i>
          </h4>
          <h6 class="card-text">Thời gian: <b id="vongquay_time">0</b></h6>
          <h6 class="card-text">Tổng tiền: <b id="vongquay_numrows">0</b></h6>
          <br>
                               - Người chơi có chữ màu đỎ là người chơi chiến thắng <br> 
                               - Để chọn người đó chiến thắng bạn click vào hắn.
          <hr>
          <br>
          <div id="vongquay_list"></div>


          
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="clearfix">
            <h4 class="card-title float-left">Danh sách cược tài xỉu</h4>
            <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right"></div>
          </div>
             <div class="table-responsive">

                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Bên tài</th>
                                            <th scope="col">Bên xỉu</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody id="game_cuoctai">
                                        <tr><td id="list_tai">0</td><td id="list_xiu">0</td></tr>
                                       
                                    </tbody>
                                </table>
                            </div>

                             
        </div>
      </div>
    </div>
    <div class="col-md-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Danh sách cược bầu cua</h4>

          <div class="table-responsive">

                                <table class="table">
                                    <tbody id="">
                                        <tr>
                                          <th scope="col">Hươu</th> <td id="huou"></td>
                                            
                                        </tr>
                                       
                                       <tr>
                                          
                                            <th scope="col">Bầu</th>  <td id="bau"></td>
                                           
                                        </tr>

                                        <tr>
                                          
                                            <th scope="col">Gà</th>    <td id="ga"></td>
                                            
                                        </tr>

                                        <tr>
                                          
                                            <th scope="col">cá</th>  <td id="ca"></td>
                                            
                                        </tr>

                                        <tr>
                                        
                                            <th scope="col">Tôm</th> <td id="tom"></td>
                                           
                                        </tr>

                                        <tr>
                                            <th scope="col">Cua</th>     <td id="cua"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

        </div>
      </div>
    </div>



    <div class="col-md-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Danh sách cược chẵn lẻ</h4>

          <div class="table-responsive">

                                <table class="table">
                                    <tbody id="">
                                        <tr>
                                          <th scope="col">2 chẵn</th> <td id="chan2"></td>
                                            
                                        </tr>
                                       
                                       <tr>
                                          
                                            <th scope="col">2 lẻ</th>  <td id="le2"></td>
                                           
                                        </tr>

                                        <tr>
                                          
                                            <th scope="col">3 lẻ</th>    <td id="le3"></td>
                                            
                                        </tr>

                                        <tr>
                                          
                                            <th scope="col">3 chẵn</th>  <td id="chan3"></td>
                                            
                                        </tr>

                                        <tr>
                                        
                                            <th scope="col">4 lẻ</th> <td id="le4"></td>
                                           
                                        </tr>

                                        <tr>
                                            <th scope="col">4 chẵn</th>     <td id="chan4"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br>
                                Đọc để mà bịp : chẵn 0, lẻ = 1; 4 (tổng 4 xúc sắc lại) : <br>
                                - 0 điểm => 2 chẵn, 4 lẻ. <br>
                                - 1 điểm => 1 lẻ, 3 chẵn <br>
                                - 2 điểm => 2 chẵm, <br>
                                - 3 điểm => 2 lẻ, 3 lẻ <br>
                                - 4 điểm => 2 chẵn, 4 chẵn.
                            </div>

        </div>
      </div>
    </div>
  </div>

</div>

