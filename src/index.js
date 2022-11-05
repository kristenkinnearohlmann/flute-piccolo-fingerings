const keyItems = document.getElementsByClassName("key-item");
const keyTargets = document.getElementsByClassName("key-target");
const chart = document.getElementById("note-finger-chart");
const keyChoiceForm = document.getElementById("key-choice-form");
const keyChoiceFlute = document.getElementById("flute-keys");
const keyChoicePiccolo = document.getElementById("piccolo-keys");
const instrumentChoice = document.getElementById("instrument-choice");
const getListButton = document.getElementById("get-list");
let currentInstrument;
let currentOctave;
let currentPitch;

// Set up functions
const init = () => {
  console.log("Start fingerings app");
  generateInstrumentOptions();
};

// const getChartList = (event) => {
//   // TODO: Determine how to prevent dropdowns from changing
//   event.preventDefault;
//   console.log("Button clicked");
// };

// const getScreenSize = () => {
//   return screen.width >= 768 ? "large" : "small";
// };

// const setInstrumentKeys = (instrument) => {
//   renderKeys(instrument, getScreenSize());
//   getOctavesAndPitches(instrument, octaveChoice);
//   setKeyPress();
// };

// const setKeyPress = () => {
//   console.log("setKeyPress Function");
//   Array.from(keyTargets).forEach((element) => {
//     let key = element;
//     element.addEventListener("click", keyPress(key));
//   });
// };

// const keyPress = (key) => {
//   return function curried_func(e) {
//     console.log("keyPress Function");
//     console.log(key);
//     console.log(key.id);
//   };
// };

// const debounce = (func, delay) => {
//   let timeout;

//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };

//     clearTimeout(timeout);
//     timeout = setTimeout(later, delay);
//   };
// };

// instrumentChoice.addEventListener("change", (event) => {
//   setInstrumentKeys(instrumentChoice.value);
// });

// window.addEventListener(
//   "resize",
//   debounce(() => {
//     setInstrumentKeys(instrumentChoice.value);
//   }, 250)
// );

instrumentChoice.addEventListener("change", (event) => {
  // TODO: Implement check on currentInstrument, currentOctave, currentPitch
  event.preventDefault;
  generateOctaveOptions(instrumentChoice.value);
  generatePitchOptions(instrumentChoice.value);
});

octaveChoice.addEventListener("change", (event) => {
  // TODO: Implement check on currentInstrument, currentOctave, currentPitch
  generatePitchOptions(instrumentChoice.value, octaveChoice.value);
});

pitchChoice.addEventListener("change", (event) => {
  // TODO: Implement check on currentInstrument, currentOctave, currentPitch
  // TODO: Implement creation of fingering options
  console.log(instrumentChoice.value, octaveChoice.value, pitchChoice.value);
});

getListButton.addEventListener("submit", (event) => {
  event.preventDefault;
  const inst = instrumentChoice.value;
  const oct = octaveChoice.value;
  const pit = pitchChoice.value;
  console.log(
    "Clicked submit",
    instrumentChoice.value,
    octaveChoice.value,
    pitchChoice.value
  );
  console.log("Button clicked!");
  instrumentChoice.value = inst;
  octaveChoice.value = oct;
  pitchChoice.value = pit;
});

// Start app
init();
