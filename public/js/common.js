const sendData = (path, data) => {
    fetch(path, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' });
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => processData(data))
}

const processData = (data) => {
    console.log(data);
}


const showFormError = (err) => {
    const errorElement = document.querySelector('.error');
    errorElement.innerHTML = err;
    errorElement.classList.add('show')
}