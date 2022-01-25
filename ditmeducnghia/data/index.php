<?=json('Trang chủ')?>
<div class="content-wrapper">
  <div class="row">
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-danger card-img-holder text-white">
        <div class="card-body">
          <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
          <h4 class="font-weight-normal mb-3">Máy chủ <i class="mdi mdi-chart-line mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">Online: <b id="total_online">0</b></h2>
          <h6 class="card-text">Người chơi : <b id="users">0</b></h6>
          <h6 class="card-text">Khách : <b id="khach">0</b></h6>
          <h6 class="card-text">Người chơi mới : <?=number_format($doanhthu->data->users)?></b></h6>
          <h6 class="card-text">Tổng người chơi : <?=number_format($mysqli->query("SELECT * FROM `nguoichoi`")->num_rows)?></b></h6>
          <h6 class="card-text">Số phiếu hỗ trợ đang chờ : <?=number_format($mysqli->query("SELECT * FROM `hotro` WHERE `status` = '0'")->num_rows)?></b></h6>
  <h6 class="card-text">Số nick đang chờ : <?=number_format($mysqli->query("SELECT * FROM `nhapnick` WHERE `trangthai` = '0'")->num_rows)?></b></h6>
        </div>
        
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-info card-img-holder text-white">
        <div class="card-body">
          <h4 class="font-weight-normal mb-3">Doanh thu hôm nay <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
          </h4>
          <h6 class="card-text">Vàng nạp: <b><?=number_format($doanhthu->data->vangnap)?></b></h6>
          <h6 class="card-text">Vàng rút: <b><?=number_format($doanhthu->data->vangrut)?></b></h6>
          <h6 class="card-text">Lãi vàng: <b><?=number_format($doanhthu->data->vangnap-$doanhthu->data->vangrut)?></b></h6>
          <h6 class="card-text">TSR: <b><?=number_format($doanhthu->data->thesieure)?></b></h6>
          <h6 class="card-text">Tiền nick: <b><?=number_format($doanhthu->data->nick)?></b></h6>
          <h6 class="card-text">Thẻ cào: <b><?=number_format($doanhthu->data->napcard)?></b></h6>
          <h6 class="card-text">Momo: <b><?=number_format($doanhthu->data->momo)?></b> <a href="http://toicontre.net/thesieure/momo/nro.php">Xem số dư ví</a> </h6>

        </div>
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-success card-img-holder text-white">
        <div class="card-body">
          <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
          <h4 class="font-weight-normal mb-3">Trò chơi hôm nay <i class="mdi mdi-diamond mdi-24px float-right"></i>
          </h4>
          <h6 class="card-text">BOT Bú xu : <?=number_format($doanhthu->data->botxu)?></h6>
          <h6 class="card-text">Bầu cua thắng : <?=number_format($doanhthu->data->baucua_thang)?></h6>
          <h6 class="card-text">Bầu cua thua : <?=number_format($doanhthu->data->baucua_thua)?></h6>
        <hr>
        Thông tin BOT : (NẠP|RÚT) <br>
        
        <?PHP 
		$i = 1;
		while($i <=9)
        {
        	$game = $mysqli->query("SELECT `nap`,`rut` FROM `botvang` WHERE `server` = '".$i."'")->fetch_assoc();
        	echo 'Vũ trụ : '.$i.': '.number_format($game['nap']).'|'.number_format($game['rut']).' <br> ';
        	$i++;
        }

		?>
        </div>
        Since04, xin lưu ý : <br>
        - Do BOT là người dùng thật, nên cũng được tính vào doanh thu. Thân !
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-7 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <div class="clearfix">
            <h4 class="card-title float-left">Danh sách người online</h4>
            <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right"></div>
          </div>
          <b id="list_online"></b>
        </div>
      </div>
    </div>
    <div class="col-md-5 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Danh sách khách truy cập</h4>

          <b id="list_khach"></b>
        </div>
      </div>
    </div>
  </div>
<?php
$i = 1;
$ngay = '0';
$vangnap = '0';
$vangrut = '0';
$vanglai= '0';
$tongvangnap = 0;
$tongvanglai = 0;
$tongvangrut = 0;
$tongthenap = 0;
$thecao = '0';
$tongthesieure = 0;
$thesieure = '0';
$tongnick = 0;
$nick = '';
$taixiu_thang = '0';
$tongtaixiu_thang = 0;
$taixiu_thua = '0';
$tongtaixiu_thua = 0;
$baucua_thang = '0';
$tongbaucua_thang = 0;
$baucua_thua = '0';
$tongbaucua_thua = 0;
$chanle_thang = '0';
$tongchanle_thang = 0;
$chanle_thua = '0';
$tongchanle_thua = 0;
$tongmomo = 0;
$momo = '0';
while($i <=31)
{
  $ko = $i;
  if($i<=9)
  {
    $ko='0'.$ko;
  }
  $doanhthu = new doanhthu($ko,$thang,$nam);
  $vangnap.=','.$doanhthu->data->vangnap.'';
  $vangrut.=','.$doanhthu->data->vangrut.'';
  $vanglai.=','.($doanhthu->data->vangnap-$doanhthu->data->vangrut).'';
  $tongvangnap+=$doanhthu->data->vangnap;
  $tongvanglai+=$doanhthu->data->vangnap-$doanhthu->data->vangrut;
  $tongvangrut+=$doanhthu->data->vangrut;
  $thecao.=','.$doanhthu->data->napcard.'';
  $tongthenap+=$doanhthu->data->napcard;
  $tongthesieure+=$doanhthu->data->thesieure;
  $thesieure.=','.$doanhthu->data->thesieure.'';
  $tongnick+=$doanhthu->data->nick;
  $nick.=','.$doanhthu->data->nick.'';
  $tongmomo+=$doanhthu->data->momo;
  $momo.=','.$doanhthu->data->momo.'';
  $tongtaixiu_thang+=$doanhthu->data->taixiu_thang;
  $taixiu_thang.=','.$doanhthu->data->taixiu_thang.'';
  $tongtaixiu_thua+=$doanhthu->data->taixiu_thua;
  $taixiu_thua.=','.$doanhthu->data->taixiu_thua.'';

  $tongtaixiu_thang+=$doanhthu->data->taixiu_thang;
  $taixiu_thang.=','.$doanhthu->data->taixiu_thang.'';
  $tongtaixiu_thua+=$doanhthu->data->taixiu_thua;
  $taixiu_thua.=','.$doanhthu->data->taixiu_thua.'';

  $tongbaucua_thang+=$doanhthu->data->baucua_thang;
  $baucua_thang.=','.$doanhthu->data->baucua_thang.'';
  $tongbaucua_thua+=$doanhthu->data->baucua_thua;
  $baucua_thua.=','.$doanhthu->data->baucua_thua.'';
  $tongchanle_thang+=$doanhthu->data->chanle_thang;
  $chanle_thang.=','.$doanhthu->data->chanle_thang.'';
  $tongchanle_thua+=$doanhthu->data->chanle_thua;
  $chanle_thua.=','.$doanhthu->data->chanle_thua.'';
  $ngay.=','.$i;
  $i++;
}
?>
  <div class="row">
    <div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Doanh thu vàng</h4>
        <canvas id="doanhthuvang" style="height: 200px; display: block; width: 400px;" width="400" height="200" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#doanhthuvang").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'Vàng Nạp(<?=number_format($tongvangnap)?>)',
          data: [<?=$vangnap?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    },
    {
      label: 'Vàng rút (<?=number_format($tongvangrut)?>)',
      data: [<?=$vangrut?>],
      backgroundColor: [
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)'
      ],
      borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }

    ,
    {
      label: 'Vàng Lãi (<?=number_format($tongvanglai)?>)',
      data: [<?=$vanglai?>],
      backgroundColor: [
      'rgba(76, 175, 80, 0.2)',
      'rgba(76, 175, 80, 0.2)',
      'rgba(76, 175, 80, 0.2)',
      'rgba(76, 175, 80, 0.2)',
      'rgba(76, 175, 80, 0.2)',
      'rgba(76, 175, 80, 0.2)'
      ],
      borderColor: [
      'rgba(255,30,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }

    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>

<div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Doanh thu thẻ cào</h4>
        <canvas id="doanhthuthecao" style="height: 300px; display: block; width: 600px;" width="600" height="300" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#doanhthuthecao").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'Thẻ cào(<?=number_format($tongthenap)?>)',
          data: [<?=$thecao?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    }
    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>
</div>



 


<div class="row">
    <div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Doanh thu thẻ siêu rẻ</h4>
        <canvas id="doanhtuthessieure" style="height: 300px; display: block; width: 600px;" width="600" height="300" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#doanhtuthessieure").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'TSR(<?=number_format($tongthesieure)?>)',
          data: [<?=$thesieure?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    }
    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>


<div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Doanh thu bán nick</h4>
        <canvas id="doanhthubannick" style="height: 300px; display: block; width: 600px;" width="600" height="300" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#doanhthubannick").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'Số tiền:(<?=number_format($tongnick)?>)',
          data: [<?=$nick?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    }
    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>


</div>


<div class="row">
    <div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Thống kê game tài xỉu</h4>
        <canvas id="taixiuthongke" style="height: 200px; display: block; width: 400px;" width="400" height="200" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#taixiuthongke").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'Tiền thắng(<?=number_format($tongtaixiu_thang)?>)',
          data: [<?=$taixiu_thang?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    },
    {
      label: 'Tiền thua (<?=number_format($tongtaixiu_thua)?>)',
      data: [<?=$taixiu_thua?>],
      backgroundColor: [
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)'
      ],
      borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }


    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>

<div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Thống kê game bầu cua</h4>
        <canvas id="baucuathongke" style="height: 200px; display: block; width: 400px;" width="400" height="200" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#baucuathongke").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'Tiền thắng(<?=number_format($tongbaucua_thang)?>)',
          data: [<?=$baucua_thang?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    },
    {
      label: 'Tiền thua (<?=number_format($tongbaucua_thua)?>)',
      data: [<?=$baucua_thua?>],
      backgroundColor: [
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)'
      ],
      borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }


    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>



<div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Thống kê game chẵn lẻ</h4>
        <canvas id="chamelthongkecmm" style="height: 200px; display: block; width: 400px;" width="400" height="200" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#chamelthongkecmm").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'Tiền thắng(<?=number_format($tongchanle_thang)?>)',
          data: [<?=$chanle_thang?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    },
    {
      label: 'Tiền thua (<?=number_format($tongchanle_thua)?>)',
      data: [<?=$chanle_thua?>],
      backgroundColor: [
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)',
      'rgba(255, 152, 0, 0.2)'
      ],
      borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }


    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>



<div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <h4 class="card-title">Doanh thu MOMO</h4>
        <canvas id="nmoomoodijttdg" style="height: 200px; display: block; width: 400px;" width="400" height="200" class="chartjs-render-monitor"></canvas>
      </div>
    </div>
  </div>
  <script>
    var areaChartCanvas = $("#nmoomoodijttdg").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: {
        labels: [<?=$ngay?>],
        datasets: [{
          label: 'Tiền nạp(<?=number_format($tongmomo)?>)',
          data: [<?=$momo?>],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      fill: true, // 3: no fill
    }

    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }
});
</script>



</div>




</div>
