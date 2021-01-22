let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    fetch('/forum', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: document.querySelector('#name').value,
            message: document.querySelector('#message').value
        })
        
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let comments = document.querySelector('#comments')
        comments.innerHTML += `<b>${data.name}</b> <i>${Date.now()}</i> <br>${data.message}<br>`
    })
})