// Super Wheel Script

//noi dung quay thuong
var isCheckingCode = false;

function clearForm() {
    $('#code').val('');
}

function setCheckingCode(pending) {
    isCheckingCode = pending;
}

function layGiaiThuong(params) {
    var callback = params && params.saudo ? params.saudo : undefined;
    $.ajax({
        data: {
            code: 'MAC_DINH'
        },
        type: "GET",
        url: '/QuayThuong/danhsachgiaithuong',
        timeout: 20000,
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        dataType: 'json',
        success: function(res) {
            console.log('giai thuong', res);
            callback && callback(res);
        }
    });
}

function quay(button) {
    $(button).prop('disabled', true);
    $.ajax({
        type: "POST",
        url: '/QuayThuong/quay',
        data: {},
        success: function(data) {
            if (data.success) {
                $('.wheel').superWheel('start', 'id', data.data.id_giai_thuong);
            } else {
                alert(data.msg || 'Có lỗi, vui lòng thử lại');
                setTimeout(function() {
                    ket_thuc_quay(button)
                }, 1000);
            }
        },
        complete() {

        },
        error() {
            setTimeout(function() {
                ket_thuc_quay(button)
            }, 1000);
            alert('Có lỗi, vui lòng thử lại');
        }
    });
}

function quay_mat_tien(button) {
    var r = confirm("Quay sẽ mất 15k!");
    if (r == true) {
        batdauquay();
        $(button).prop('disabled', true);
        $.ajax({
            type: "POST",
            url: '/QuayThuong/quay_mat_tien',
            data: {},
            success: function(data) {
                if (data.success) {
                    $('.wheel').superWheel('start', 'id', data.data.id_giai_thuong);
                } else {
                    alert(data.msg || 'Có lỗi, vui lòng thử lại');
                    setTimeout(function() {
                        ket_thuc_quay(button)
                    }, 1000);
                }
            },
            complete() {

            },
            error() {
                setTimeout(function() {
                    ket_thuc_quay(button)
                }, 1000);
                alert('Có lỗi, vui lòng thử lại');
            }
        });
    } else {}

}

function batdauquay(button) {
    //$(button).prop('disabled',false).text('Quay Thưởng');
    $('.spin-button').prop('disabled', true);
    $('.xu-spin-button').prop('disabled', true);
}

function ket_thuc_quay(button) {
    //$(button).prop('disabled',false).text('Quay Thưởng');
    $('.spin-button').prop('disabled', false).text('Quay Thưởng');
    $('.xu-spin-button').prop('disabled', false).text('Quay Thưởng');
    lichsu();
    tiencon();
}

function lichsu() {
    $.ajax({
        data: {},
        type: "GET",
        url: '/QuayThuong/lichsu',
        timeout: 20000,
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        dataType: 'json',
        success: function(res) {
            console.log('lichsu', res);
            $('#quayThuong_tableContent').empty();
            if (res.success == true) {
                res.data.forEach(row => {
                    var tr = $('<tr></tr>');
                    var td1 = $('<td class="ten"></td>').html(row.ma_the_quay_thuong).appendTo(tr);
                    var td2 = $('<td class="tien"></td>').html(row.ten_giai_thuong).appendTo(tr);
                    var td2 = $('<td></td>').html(row.created_at).appendTo(tr);
                    $('#quayThuong_tableContent').append(tr);
                });
            }

        }
    });
}

function tiencon() {
    $.ajax({
        data: {},
        type: "GET",
        url: '/QuayThuong/tiencon',
        timeout: 20000,
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        dataType: 'json',
        success: function(res) {
            console.log('tiencon', res);
            $('.luot-con').text('--');
            if (res.success == true) {
                $('.luot-con').text(res.count || 0);
            }
        }
    });
}

function kiemtra() {
    var code = $('#code').val();
    setCheckingCode(true);
    $.ajax({
        type: "POST",
        url: '/QuayThuong/kiemtra',
        data: {
            code
        },
        success: function(data) {
            if (data.success) {
                $.notify(data.msg, "info");
                lichsu();
                clearForm();
            } else {
                alert(data.msg);
            }
        },
        complete() {
            setCheckingCode(false);
        },
        error() {
            $.notify(data.msg, "warning");
        }
    });
}

function initVongQuay(res) {
    const colors = ["#364C62", "#9575CD", "#E67E22", "#E74C3C", "#95A5A6", "rgb(71, 183, 73)", "rgb(151, 209, 187)", "#2196F3", "rgb(20, 121, 189)", "rgb(151, 209, 187)"];
    const slices = [];
    for (var i = 0; i < res.data.length; i++) {
        const giai_thuong = res.data[i];
        slices.push({
            text: giai_thuong.text,
            id: giai_thuong.id,
            message: "Bạn nhận được " + giai_thuong.text,
            discount: "",
            background: colors[i % colors.length],
            value: parseInt(giai_thuong.is_win)
        });
    }
    $('.wheel').superWheel({
        slices,
        text: {
            size: 14,
            color: '#fff',
            offset: 8,
            letterSpacing: 0,
            orientation: 'v',
            arc: true
        },
        selector: "id",
        frame: 1,
        type: "spin",
        slice: {
            background: "#333",
            selected: {}
        },

        line: {

            color: "#ecf0f1"
        },
        outer: {
            color: "#ecf0f1"
        },
        inner: {
            color: "#ecf0f1"
        },
        center: {
            rotate: 1,
        },
        marker: {
            background: "#e53935",
            animate: 1
        },
        width: 300
    });
    var tick = new Audio('media/tick.mp3');

    $('.wheel').superWheel('onStart', function(results) {
        $('.spin-button').text('Spinning...');
    });

    $('.wheel').superWheel('onStep', function(results) {
        if (typeof tick.currentTime !== 'undefined')
            tick.currentTime = 0;
        tick.play();
    });


    $('.wheel').superWheel('onComplete', function(results) {
        //console.log(results.value);
        if (results.value === 1) {

            swal({
                type: 'success',
                title: "Xin chúc mừng!",
                html: '<b>' + results.message + '</b>'
            });

        } else {
            swal("Quá đen!", results.message, "error");
        }
        ket_thuc_quay($('.spin-button:disabled'));

        //$('.spin-button:disabled').prop('disabled',false).text('Quay Thưởng');

    });
}

function bat_vong_quay() {
    $('#modalVongQuay').modal('show');
}

jQuery(document).ready(function($) {
    $('#modalVongQuay').on('shown.bs.modal', function() {
        lichsu();
        tiencon();
        layGiaiThuong({
            saudo: function(res) {
                if (res.success = true) {
                    initVongQuay(res);
                } else {
                    alert("Co loi");
                }
            }
        });
    });

    bat_vong_quay();

    $('#quaythuong_btn_kiemtra').on('click', function() {
        if (!isCheckingCode) kiemtra();
    });

    $(document).on('click', '.spin-button', function(e) {
        quay(this);
    });

    $(document).on('click', '.xu-spin-button', function(e) {
        quay_mat_tien(this);
    });

});