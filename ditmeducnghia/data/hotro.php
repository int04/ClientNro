<div class="content-wrapper">

    <?php

    ?>

<div class="row">
    <div class="col-md-12">
        <section class="panel">
            <header class="panel-heading">

                <h2 class="panel-title">YÊU CẦU HỖ TRỢ</h2>
            </header>
            <div class="panel-body">
                <!-------------->
                <div class="table-responsive">
                    <table class="table table-dark">
                        <thead class="">
                            <tr>
                                <th scope="col">Chủ đề</th>
                                <th scope="col">Loại</th>
                                <th scope="col">Trả lời</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody class="border-primary">
                            <?PHP 
                         $log = $mysqli->query("SELECT * FROM `hotro`     ORDER by `time` DESC LIMIT $start, $kmess");
                         while($hotro = $log->fetch_assoc())
                        {
                            echo '<tr><td><a href="/admin/index.php?f=view&id='.$hotro['id'].'">'.$hotro['title'].'</a></td><td>'.$hotro['danhmuc'].'</td><td>'.(new users($hotro['uid']))->name().'</td><td>'.hotro($hotro['status']).'</td><td><a href="/hotro/view.html?id='.$hotro['id'].'"><i class="far fa-comments"></i></a></td></tr>';
                        }

                         ?>
                        </tbody>
                    </table>
                    <?PHP 
                        if($mysqli->query("SELECT * FROM `hotro`  ")->num_rows > $kmess)
                        {
                            echo '<center>' . trang('/admin/index.php?f=hotro&', $start, $mysqli->query("SELECT * FROM `hotro` ")->num_rows, $kmess) . '</center>';
                        }
                        ?>
                </div>

                <!----------->

            </div>
        </section>
    </div>
</div>

</div>