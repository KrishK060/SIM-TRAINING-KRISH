const table = new DataTable('#example', {
    ajax: {
        dataSrc: 'data', //dataSrc is used to specify where the DataTable should look for the data within the response from the AJAX request.
        url: './array.txt'
    },
});
table.on('mouseenter', 'td', function () {
    let colIdx = table.cell(this).index().column;
 
    table
        .cells()
        .nodes()
        .each((el) => el.classList.remove('highlight'));
 
    table
        .column(colIdx)
        .nodes()
        .each((el) => el.classList.add('highlight'));
});


// var table = new DataTable('#example', {
//     ajax: 'array.txt',
//     columnDefs: [
//         {
//             data: null,
//             defaultContent: '<button>Click!</button>',
//             targets: -1
//         }
//     ],
// })

// table.on('click', 'button', function(e){
//     let data = table.row(e.target.closest('tr')).data();
//     alert(data[0] + "'s salary is: " + data[5]);
// });


