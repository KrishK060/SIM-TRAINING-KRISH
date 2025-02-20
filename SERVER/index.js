$(document).ready(function() {
    // Fetch data from PHP script and populate the DataTable
    $.ajax({
        url: 'fetch.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Populate the table with data
            data.forEach(function(item) {
                $('#employeeTable tbody').append(
                    `<tr>
                        <td>${item.id}</td>
                        <td>${item.first_name}</td>
                        <td>${item.last_name}</td>
                        <td>${item.email}</td>
                        <td>${item.gender}</td>
                        <td>${item.ip_address}</td>
                    </tr>`
                );
            });

            // Initialize DataTable
            $('#employeeTable').DataTable();
        }
    });
});