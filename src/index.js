const keyItems = document.getElementsByClassName("key-item");
const keyTargets = document.getElementsByClassName("key-target");
const chart = document.getElementById("note-finger-chart");
const keyChoiceForm = document.getElementById("key-choice-form");
const keyChoiceFlute = document.getElementById("flute-keys");
const keyChoicePiccolo = document.getElementById("piccolo-keys");
const keyChoice = document.getElementById("key-choice");
let octaveChoice = document.getElementById("octave-choice");
let pitchChoice = document.getElementById("pitch-choice");

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
  getOctaves("flute", octaveChoice);
  setKeyPress();
};

const setPiccoloKeys = () => {
  renderKeys("piccolo", getScreenSize());
  getOctaves("piccolo", octaveChoice);
  setKeyPress();
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

keyChoice.addEventListener("change", (event) => {
  keyChoice.value === "flute" ? setFluteKeys() : setPiccoloKeys();
});

window.addEventListener(
  "resize",
  debounce(() => {
    keyChoice.value === "flute" ? setFluteKeys() : setPiccoloKeys();
  }, 250)
);

octaveChoice.addEventListener("change", (event) => {
  console.log(event);
  console.log(octaveChoice);
  console.log(pitchChoice);
});

// Start app
init();
