function  docmsg(id) {
        if(id <=0)
        {
            msg('không hợp lệ')
        }
        else 
        {
            loading();
            dn.to({
                users : {
                    mail : 
                    {
                        read : {
                            id  : id
                        }
                    }
                }
            })
        }
}
function res_read(data) {
    $("#title_hopthu").html(data.title);
    $("#modal_hopthu").modal();
    let html = ``;
    $("#data_hopthu").html(data.msg);
    $("#mail_pc").html(0);
}
function load_mail(data)
{
    $("#title_hopthu").html('HỘP THƯ')
    $("#modal_hopthu").modal();
    let html = `<div class="table-responsive">
    <table class="table table-striped table-bordered table-hover text-center">
      <thead class="thead-light">
        <tr>
          <th scope="col">Thời gian</th>
          <th scope="col">Tiêu đề</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody id="tinhanbox">
              </tbody>
    </table>
  </div>`;
    $("#data_hopthu").html(html);
    data.dulieu.forEach(e => {
        $("#tinhanbox").append(`
          <tr>
            <td>`+e.thoigian+`</td>
            <td onclick="docmsg(`+e.id+`)">`+(e.title)+`</td>
            <td onclick="docmsg(`+e.id+`)"><i class="fa fa-envelope-open" aria-hidden="true"></i>   `+(e.doc == 1 ? `<i class="fa fa-star" aria-hidden="true"></i>
             ` : ``)+`          </td>
          </tr>
        `);
      });
      $("#trang_hopthu").html(trang('abc',data.page,data.TOTAL));
      function trang(url, start, total) {
        kmess = 25;
        let out = '';
        out += '<nav aria-label="Page navigation example"><ul ul class="pagination">';
        neighbors = 2;
        if (start >= total) start = Math.max(0, total - ((total % kmess) == 0 ? kmess : (total % kmess)));
        else start = Math.max(0, +start - (+start % +kmess));
        base_link = '<li class="page-item"><a class="page-link" href="#" onclick="dn.to({users : { sms : {index : {trang : ' + '%d' + '}}}})">%s</a></li>';
        out += start == 0 ? '' : sprintf(base_link, start / kmess, '&lt;&lt;');
        if (start > kmess * neighbors) out += sprintf(base_link, 1, '1');
        if (start > kmess * (neighbors + 1)) out += '<li class="page-item"><a class="page-item" href="#">...</a></li>';
        for (nCont = neighbors; nCont >= 1; nCont--) if (start >= kmess * nCont) {
            tmpStart = start - kmess * nCont;
            out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
        }
        out += '<li class="page-item active"><a class="page-link" href="#">' + (start / kmess + 1) + '</a></li>';
        tmpMaxPages = +((total - 1) / kmess) * kmess;
        for (nCont = 1; nCont <= neighbors; nCont++) if (start + kmess * nCont <= tmpMaxPages) {
            tmpStart = start + kmess * nCont;
            out += sprintf(base_link, tmpStart / kmess + 1, tmpStart / kmess + 1);
        }
        if (start + kmess * (neighbors + 1) < tmpMaxPages) out += '<li class="page-item "><a class="page-link" href="#">...</a></li>';
        if (start + kmess * neighbors < tmpMaxPages) out += sprintf(base_link, Math.round(tmpMaxPages / kmess + 1), Math.round(tmpMaxPages / kmess + 1));
        if (start + kmess < total) {
            display_page = (start + kmess) > total ? total : (start / kmess + 2);
            out += sprintf(base_link, display_page, '&gt;&gt;');
        }
        out += '</ul></nav>';
        return out;
    }
}