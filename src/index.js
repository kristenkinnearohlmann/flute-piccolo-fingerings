const keyItems = document.getElementsByClassName("key-item");
const keyTargets = document.getElementsByClassName("key-target");
const chart = document.getElementById("note-finger-chart");
const keyChoiceForm = document.getElementById("key-choice-form");
const keyChoiceFlute = document.getElementById("flute-keys");
const keyChoicePiccolo = document.getElementById("piccolo-keys");

// Set up functions
const init = () => {
  console.log("Start fingerings app");
  setFluteKeys();
};

const getScreenSize = () => {
  return screen.width >= 768 ? "large" : "small";
};

const setFluteKeys = () => {
  renderKeys("flute", getScreenSize());
  setKeyPress();
  keyChoiceFlute.checked = true;
};

const setPiccoloKeys = () => {
  renderKeys("piccolo", getScreenSize());
  setKeyPress();
  keyChoicePiccolo.checked = true;
};

const setKeyPress = () => {
  console.log("setKeyPress Function");
  Array.from(keyTargets).forEach((element) => {
    let key = element;
    element.addEventListener("click", keyPress(key));
  });
};

const keyPress = (key) => {
  return function curried_func(e) {
    console.log("keyPress Function");
    console.log(key);
    console.log(key.id);
  };
};

const debounce = (func, delay) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};

// event listeners
keyChoiceFlute.addEventListener("click", (event) => {
  setFluteKeys();
});

keyChoicePiccolo.addEventListener("click", (event) => {
  setPiccoloKeys();
});

window.addEventListener(
  "resize",
  debounce(() => {
    keyChoiceFlute.checked ? setFluteKeys() : setPiccoloKeys();
  }, 250)
);

// Start app
init();
