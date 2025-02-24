function format(d) {

    return (
        '<dl>' +
        '<dt>Full name:</dt>' +
        '<dd>' +
        d.name +
        '</dd>' +
        '<dt>Extension number:</dt>' +
        '<dd>' +
        d.extn +
        '</dd>' +
        '<dt>Extra info:</dt>' +
        '<dd>And any further details here (images etc)...</dd>' +
        '</dl>'
    );
}

let table = new DataTable('#example', {
    ajax: './array.txt',
    columns: [
        {
            className: 'dt-control',
            orderable: false,
            data: null,
            defaultContent: ''
        },
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'salary' }
    ],
   
    order: [[1, 'asc']],
    rowId: 'id',
    stateSave: false

});


table.on('click', 'td.dt-control', function (e) {
    let tr = e.target.closest('tr');
    let row = table.row(tr);

    if (row.child.isShown()) {

        row.child.hide();
    }
    else {

        row.child(format(row.data())).show();
    }
});
table.on('click', 'tbody tr', function (e) {
    // e.currentTarget.classList.toggle('selected');
    let classList = e.currentTarget.classList;
    if (classList.contains('selected')) {
        classList.remove('selected')
    }
    else {
        table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        classList.add('selected');
    }
});
document.querySelector('#button').addEventListener('click',function(){
    alert(table.rows('.selected').data().Lenght+ 'row(s)selected')
})


document.querySelector('#delbtn').addEventListener('click', function () {
    table.row('.selected').remove().draw(false)
})