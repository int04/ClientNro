<div class="content-wrapper">
	<?php
	echo json('Cài đặt thẻ siêu rẻ');
	if(isset($_POST['thesieure_password']))
	{
		foreach($_POST as $id => $data)
		{
        #
			$system->set($id,$data);

		}
		echo thongbao('Dữ liệu đã được lưu','thanhcong');
		$system = new hethong;
	}

	?>
	<div class="row">
		<div class="col-lg-12">
			<div class="panel">
				<header class="panel-heading"><h2 class="panel-title">Thẻ siêu rẻ</h2></header>
				<div class="panel-body">
					<form name="dangki" action="/admin/index.php?f=thesieure" class="form pt-3" id="formlogin" method="post">
						<div class="form-group">
							<label>Tỉ lệ (x) (vd x2, nạp 10k => nhận 20k xu)</label>
							<div class="input-group mb-3">

								<input type="number" class="form-control" value="<?=$system->data->thesieure?>"  aria-label="tieude" name="thesieure" aria-describedby="basic-addon11">
							</div>
						</div>


						<div class="form-group">
							<label>Tài khoản</label>
							<div class="input-group mb-3">

								<input step="1" type="text" class="form-control" value="<?=$system->data->thesieure_account?>"  aria-label="tieude" name="thesieure_account" aria-describedby="basic-addon11">
							</div>
						</div>

						<div class="form-group">
							<label>Mật khẩu</label>
							<div class="input-group mb-3">

								<input step="1" type="text" class="form-control" value="<?=$system->data->thesieure_password?>"  aria-label="tieude" name="thesieure_password" aria-describedby="basic-addon11">
							</div>
						</div>


						<div class="form-group">
							<label>Số điện thoại MoMo</label>
							<div class="input-group mb-3">

								<input step="1" type="text" class="form-control" value="<?=$system->data->momo_account?>"  aria-label="tieude" name="momo_account" aria-describedby="basic-addon11">
							</div>
						</div>

						<div class="form-group">
							<label>Địa chỉ Email Momo</label>
							<div class="input-group mb-3">

								<input step="1" type="text" class="form-control" value="<?=$system->data->email_momo?>"  aria-label="tieude" name="email_momo" aria-describedby="basic-addon11">
							</div>
						</div>

						<div class="form-group">
							<label>Mật khẩu Momo</label>
							<div class="input-group mb-3">

								<input step="1" type="text" class="form-control" value="<?=$system->data->pass_momo?>"  aria-label="tieude" name="pass_momo" aria-describedby="basic-addon11">
							</div>
						</div>





						<button name="dangki"  type="submit" class="btn btn-success mr-2">Lưu</button>
					</form>
				</div>
			</div>
		</div>
	</div>

</div>