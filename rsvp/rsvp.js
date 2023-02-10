window.writeValues = function(form) {
    let name = form.Name.value;
    if (name.trimStart() === '') {
        document.getElementById('fullname').innerHTML = 'Must input name in order to RSVP';
    }
    else {
        let guest = form.Guest.value;
        if (guest === '') {
            guest = 'N/A'
        }
        let allergies = form.Allergies.value;
        if (allergies === '') {
            allergies = 'N/A'
        }

        document.getElementById('fullname').innerHTML = 'Name: ' + name + '<br>' + 'Guest: ' + guest + '<br>' + 'Allergies: ' + allergies + '<br>' + 'RSVP' + '&nbsp&nbsp&nbsp' + 'Confirmed';
        // take name, guest, and allergies and insert them into an excel file
        document.getElementById('poop').innerHTML = '<tr><th>Name</th><th>Allergy</th><th>Guest</th></tr><tr><th>' + name + '</th><th>' + guest + '</th><th>' + allergies + '</th>'
        window.open('data:text/csv;charset=utf-8,' + $('#poop').html());
        var table = document.getElementById('poop');
        var data = []
        for (var i = 0, row; row = table.rows[i]; i++) {
            var row_data = [];
            for (var j = 0, col; col = row.cells[j]; j++) {
                row_data.push(col.textContent);
            }
            data.push(row_data);
        }
        console.log(data);

        }
        console.log(data);
        wb = XLSX.utils.book_new();
        ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "RSVP");
        XLSX.writeFile(wb, "C:\\Users\\saral\\Projects\\Wedding_Invitations\\Wedding.xlsx");

}
