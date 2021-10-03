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




// Start app
init()