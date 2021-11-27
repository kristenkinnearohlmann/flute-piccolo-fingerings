const keyItems = document.getElementsByClassName('key-item')
const keyTargets = document.getElementsByClassName('key-target')
const chart = document.getElementById("note-finger-chart")
const keyChoiceForm = document.getElementById('key-choice-form')
const keyChoiceFlute = document.getElementById('flute-keys')
const keyChoicePiccolo = document.getElementById('piccolo-keys')

// Set up functions
const init = () => {
    console.log('Start fingerings app')
    setFluteKeys()
}

const setFluteKeys = () => {
    keysFlute()
    setKeyPress()
    keyChoiceFlute.checked = true
}

const setPiccoloKeys = () => {
    keysPiccolo()
    setKeyPress()
    keyChoicePiccolo.checked = true
}

const setKeyPress = () => {
    console.log('setKeyPress Function')
    Array.from(keyTargets).forEach(element => {
        let key = element
        element.addEventListener('click', keyPress(key))
    })
}

const keyPress = (key) => {
    return function curried_func(e) {
        console.log('keyPress Function')
        console.log(key)
        console.log(key.id)
    }
}

keyChoiceFlute.addEventListener('click', (event) => {
    setFluteKeys()
})

keyChoicePiccolo.addEventListener('click', (event) =>{
    setPiccoloKeys()
})


// Start app
init()