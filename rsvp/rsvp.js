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
    }
}