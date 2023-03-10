const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Just loading'
    messageTwo.textContent = ''

    
    fetch('http://localhost:8000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = JSON.stringify(data.forecast)
        }
    })
})

})