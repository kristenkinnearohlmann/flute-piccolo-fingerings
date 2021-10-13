const keyItems = document.getElementsByClassName('key-item')
const chart = document.getElementById("note-finger-chart")
const keyChoiceForm = document.getElementById('key-choice-form')
const keyChoiceFlute = document.getElementById('flute-keys')
const keyChoicePiccolo = document.getElementById('piccolo-keys')

// Set up functions
const init = () => {
    console.log('Start fingerings app')
    setFluteKeys()
    setKeyPress()
}

const setFluteKeys = () => {
    keysFlute()
    document.getElementById('flute-keys').checked = true
}

const setPiccoloKeys = () => {
    keysPiccolo()
    document.getElementById('piccolo-keys').checked = true
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

keyChoicePiccolo.addEventListener('click', (event) =>{
    console.log('Picc key pick')
    console.log(event.target.name)
    console.log(event.target.value)
})


// Start app
init()