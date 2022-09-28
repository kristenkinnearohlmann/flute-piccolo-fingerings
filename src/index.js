const keyItems = document.getElementsByClassName("key-item");
const keyTargets = document.getElementsByClassName("key-target");
const chart = document.getElementById("note-finger-chart");
const keyChoiceForm = document.getElementById("key-choice-form");
const keyChoiceFlute = document.getElementById("flute-keys");
const keyChoicePiccolo = document.getElementById("piccolo-keys");
// const keyChoice = document.getElementById("key-choice");
const instrumentChoice = document.getElementById("instrument-choice");

// Set up functions
const init = () => {
  console.log("Start fingerings app");
  generateInstrumentOptions();
  generateOctaveOptions();
  generatePitchOptions();
};

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

// // octaveChoice.addEventListener("change", (event) => {
// //   console.log(event);
// //   console.log(octaveChoice);
// //   console.log(pitchChoice);
// // });

// pitchChoice.addEventListener("change", (event) => {
//   console.log("Change pitch choice", event);
//   console.log(instrumentChoice.value);
// });

instrumentChoice.addEventListener("change", (event) => {
  console.log("instrumentChoice change, Instrument selected");
  console.log(instrumentChoice.value, octaveChoice.value, pitchChoice.value);
  generateOctaveOptions(instrumentChoice.value);
  // TODO: Wire together instrument, octave, pitches
  // TODO: Cross-check octave and pitch on changes
  // TODO: Anything additional to account for?
});

octaveChoice.addEventListener("change", (event) => {
  console.log(instrumentChoice.value, octaveChoice.value, pitchChoice.value);
});

pitchChoice.addEventListener("change", (event) => {
  console.log(instrumentChoice.value, octaveChoice.value, pitchChoice.value);
});

// Start app
init();
