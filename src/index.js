const keyItems = document.getElementsByClassName("key-item");
const keyTargets = document.getElementsByClassName("key-target");
const chart = document.getElementById("note-finger-chart");
const keyChoiceForm = document.getElementById("key-choice-form");
const keyChoiceFlute = document.getElementById("flute-keys");
const keyChoicePiccolo = document.getElementById("piccolo-keys");
const keyChoice = document.getElementById("key-choice");
let octaveChoice = document.getElementById("octave-choice");
let pitchChoice = document.getElementById("pitch-choice");
let octaves = [1, 2, 3, 4, 5, 6, 7];
let pitches = {
  1: ["B#", "C"],
  2: ["C#", "Db"],
  3: ["D"],
  4: ["D#", "Eb"],
  5: ["E"],
  6: ["E#", "F"],
  7: ["F#", "Gb"],
  8: ["G"],
  9: ["G#", "Ab"],
  10: ["A"],
  11: ["A#", "Bb"],
  12: ["B", "Cb"],
};

// Set up functions
const init = () => {
  console.log("Start fingerings app");
  setInstrumentKeys("flute");
};

const getScreenSize = () => {
  return screen.width >= 768 ? "large" : "small";
};

const setInstrumentKeys = (instrument) => {
  renderKeys(instrument, getScreenSize());
  getOctavesAndPitches(instrument, octaveChoice);
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
  setInstrumentKeys(keyChoice.value);
});

window.addEventListener(
  "resize",
  debounce(() => {
    setInstrumentKeys(keyChoice.value);
  }, 250)
);

octaveChoice.addEventListener("change", (event) => {
  console.log(event);
  console.log(octaveChoice);
  console.log(pitchChoice);
});

// Start app
init();
