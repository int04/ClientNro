let doc = function(nguon,key)
{
    loading();
    dn.to({
        users : {
            lichsu : {
                doc : {
                    nguon : nguon,
                    key : key,
                }
            }
        }
    })
}
function lichsu(data) {
    let html = ``;
    html+=`<div class="table-responsive">`;
    html+=`<table class="table table-bordered table-response text-center table-striped">`;
    html+=`<thead class="thead-light">`;
    html+=`<tr id="contenttab">`;
    html+=`</tr>`;
    html+=`</thead>`;
    html+=`<tbody id="">`;
    html+=`<tr scope="col" id="conntenbody">`;
    html+=`<tr>`;
    html+=`</tbody>`;
    html+=`</table>`;
    html+=`</div>`;
    Swal.fire({
        title: '<strong>Chi tiết</strong>',
        icon: 'info',
        width: 800,
        html: html,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Đóng',
        confirmButtonAriaLabel: 'Thumbs up, great!',

        cancelButtonAriaLabel: 'Thumbs down'
    })
    let trhead = data.head.split(",");
    let bodytr = data.body.split("|");
    trhead.forEach(element => {
        $("#contenttab").append(`<th scope="col">`+element+`</th>`);
    });
    bodytr.forEach(element => {
        $("#conntenbody").append(`<td scope="col">`+element+`</td>`);
    });
}