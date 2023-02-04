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
        document.getElementById('poop').innerHTML = '<table><tr><th>Name</th><th>Allergy</th><th>Guest</th></tr><tr><th>' + name + '</th><th>' + guest + '</th><th>' + allergies + '</th>'
        window.open('data:text/csv;charset=utf-8,' + $('#poop').html());
    }
}