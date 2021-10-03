const keyItems = document.getElementsByClassName('key-item')

// Set up functions
const init = () => {
    console.log('Start fingerings app')
    setKeyPress()
    mainKey()
}

const setKeyPress = () => {
    console.log('setKeyPress Function')
    Array.from(keyItems).forEach(element => {
        element.addEventListener('click', keyPress)
    })
}

const keyPress = () => {
    console.log('keyPress Function')
    console.log('Add code to fill/clear svgs by id')
    console.log(event.target)
}

// Start app
init()