
// Object.assign(DataTable.defaults, {   //this is used to provide defaults settings to the table
//     searching: false,
//     ordering: false
// });
$(document).ready(function () {
    $('#example').DataTable({
        // dom: 'Bfrtip',
        // searching: true, //true or false is used to implement the searching functionality
        // paging: true, //to show only the limied data on current page and added the page switching functionality to see more data
        // order: [[3, "asc"]], //0 is used to represent the coloum number and asc or desc is used to represent the order with this we can assign default ordering
        // ordering: true, //ordering is used to add or remove the sorting functionality
        // "stateSave": true, //this is used to store the state of the table
        columnDefs: [
            {
                "targets": [3], //this is used to target the coloum and we can target multiple coloums
                "orderable": true //this is used to apply or not sorting 
            },
            {
                "targets": [3],
                "visible": true,
                "searchable": false //with this we can restrict the user to search data from particular column
            },
            {
                "targets": [5],
                "visible": true
            },
            {
                "targets": [3],//multi coloum ordering
                "orderData": [3, 0],
                "width":"10%",
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": (data, type, row) => data + ' (' + row[3] + ')', //this is will combine 4th -> 1st column
                "targets": 0
            },
            { 
                "visible": false, 
                "targets": [3] 
            }
        ],
        columns: [
            null,
            null,
            { orderSequence: ['asc', ''] },
            { orderSequence: ['desc', 'asc', ''] },
            { orderSequence: ['desc'] },
            null
        ],
        createdRow: (row, data, index) => {
            if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                row.querySelector(':nth-child(6)').classList.add('highlight');
            }
        },
        // scrollCollapse: true, //this will add the scroll bar to the table
        // scrollY: '260px',     //this is used to show how much data should be shown at a time of scrolling
        // scrollX: true,
        layout: {
            bottomEnd: {
                paging: {
                    firstLast: false
                }
            }
        },
        search: {
            return:true
        },
        lengthMenu: [         //page lenght option
            [10, 25, 50, -1],
            [10, 25, 50, 'All']
        ],
        pageLength: 10,
        info: false,
        buttons: [
            'copy', 'excel', 'pdf', 'print'
        ],

        
    });

})
// $(document).ready(function(){
//     let table = new DataTable('#example');
//     table.on('click', 'tbody tr', function () {
//         let data = table.row(this).data();
     
//         alert('You clicked on ' + data[0] + "'s row"); //data[0] specifies the column name
//     });
//     table.on('order.dt', () => eventFired('Order'))
//     table.on('search.dt', () => eventFired('Search'))
//     table.on('page.dt', () => eventFired('Page'));

// })
// function eventFired(type) {
//     let n = document.querySelector('#demo_info');
//     n.innerHTML +=
//         '<div>' + type + ' event - ' + new Date().getTime() + '</div>';
//     n.scrollTop = n.scrollHeight;
// }
