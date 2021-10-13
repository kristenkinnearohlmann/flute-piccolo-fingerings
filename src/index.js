const keyItems = document.getElementsByClassName('key-item')
const chart = document.getElementById("note-finger-chart")

// Set up functions
const init = () => {
    console.log('Start fingerings app')
    keysFlute()
    setKeyPress()
}

const setKeyPress = () => {
    console.log('setKeyPress Function')
    Array.from(keyItems).forEach(element => {
        let key = element
        element.addEventListener('click', keyPress(key))
    })
}

const keyPress = (key) => {
    return function curried_func(e) {
        console.log('keyPress Function')
        console.log(key)
    }
}

document.getElementById('key-choice-form').addEventListener('click', (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
})


// Start app
init()