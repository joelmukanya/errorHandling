// Remove the current items
// localStorage.removeItem('items');
//
let lists = JSON.parse(localStorage.getItem('items')) ? 
JSON.parse(localStorage.getItem('items')) : [];

function addUsername() {
    let username = document.querySelector('#username').value;
    try {
        if( username === "" || username.length < 1) throw Error('Please enter your username');
        // Otherwise add it to an array
        lists.push(username);
        // Localstorage
        localStorage.setItem('items', JSON.stringify(lists));
    }catch(e) {
        /* e stand for Exception which is 
        a base class of all erros 
        */
        document.querySelector('#output').textContent = e.message;
    }
}

// Event listener for button
document.querySelector('#submit').addEventListener('click', addUsername);

(function readData() {
    console.log(lists);
})();