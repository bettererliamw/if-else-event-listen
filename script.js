let namebox = document.getElementById('namebox');
let username = document.getElementById('namebox').textContent;
let response = document.getElementById('responsetext')
let hiddenpage = document.getElementById('jameshating')

function submitname() {
    let name = namebox.value
    console.log('"' + name + '" was submitted.')
    if ( name === 'james' ) {
        response.textContent = 'Your name is James, therefore we cannot grant you access to this website.';
        console.log('Name was James');
    } else {
        response.textContent = 'Your name is not James, therefore we will now grant you access to this website.';
        console.log('Name was NOT James');
        hiddenpage.style.visibility: visible
        console.log('Opening page.');
    }

}

