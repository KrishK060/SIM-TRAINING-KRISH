const table = new DataTable('#example', {
    ajax: {
        dataSrc: 'data', //dataSrc is used to specify where the DataTable should look for the data within the response from the AJAX request.
        url: './array.txt'
    },
    columns: [
        // { data: '' },
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'extn' },
        { data: 'start_date' },
        { data: 'salary' }
    ],
    columnDefs: [
        {
            searchable: false,
            orderable: false,
            targets: 0
        }
    ],
    order: [[1, 'asc']],

    scrollY: '200px',
    initComplete: function () {
        let api = this.api();
        api.on('click', 'tbody td', function () {
            if (this.innerHTML.includes('Accountant') || this.innerHTML.includes('New York'))
                api.search(this.innerHTML).draw();
        })
    }
});
// table.on('order.dt search.dt', function () {   //this is used to provide the number to every rows even if searching and ordering is perfomed this number will remain same
//     let i = 1;
//     table.cells(null, 0, { search: 'applied', order: 'applied' })
//         .every(function (cell) {
//             this.data(i++)
//         });
// })
//     .draw();
document.querySelectorAll('a.toggle-vis').forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        let columnidx = e.target.getAttribute('data-column');
        let column = table.column(columnidx)
        column.visible(!column.visible());
    })
})
document.getElementById('sel').addEventListener("click", function (e) {
    highlightSalaries()
})
function highlightSalaries() {
    table.rows().every(function () {
        let row = this.data();
        let salary = parseFloat(row['salary'].replace(/[\$,]/g, ''))
        // console.log(salary)
        if (salary > 120000) {
            console.log("inside if")
            $(this.node()).addClass('highlight');

        }
    })
}
function newOutput(text){
    let newelem = document.createElement('div')
    newelem.textContent=text;
    document.getElementById('sel').prepend('newelem')
}

document.getElementById('sum-all').addEventListener("click",function(){
    newOutput('column sum is'+table.column(3).data().sum())
});
document.getElementById()