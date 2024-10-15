let namebox = document.getElementById('namebox');
let username = document.getElementById('namebox').textContent;
let response = document.getElementById('responsetext')

function submitname() {
    let name = namebox.value
    console.log('"' + name + '" was submitted.')
    if ( name === 'james') {
        response.textContent = 'Your name is James, therefore we cannot grant you access to this website.';
        console.log('Name was James, denying access to page.');
        document.getElementById('jameshating').style.visibility = 'hidden';
        alertwindow();
    } else {
        response.textContent = 'Your name is not James, therefore we will now grant you access to this website.';
        console.log('Name was NOT James');
        document.getElementById('jameshating').style.visibility = 'visible';
        console.log('Attempting to open page.');
    }

}