let xulytop = function(data)
{
    $("#thongtin_box").modal();
    $("#head_table_index").html('');
    $("#body_tablue_index").html('')
    $("#button_them").html('')
    let head = data.head.split("|");
    head.forEach(element => {
        $("#head_table_index").append(`<th scope="col">`+element+`</th>`);
    });
    data.body.forEach(element => {
        let html = ``;
        html+= `<tr>`;
        let fore  = element.split("|");
        fore.forEach(e => {
            html+=`<td>`+e+`</td>`;
        });
        html+= `</tr>`;
        $("#body_tablue_index").append(html);
    });
    if(!!data.end)
    {
        let end = data.end.split("|");
        end.forEach(e => {
            let oo =  e.split(",");
            $("#button_them").append(`<button class="btn btn-`+oo[2]+`" onclick="`+oo[1]+`">`+oo[0]+`</button>`)
        });
    }
}