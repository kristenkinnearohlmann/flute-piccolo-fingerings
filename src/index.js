const keyTargets = document.getElementsByClassName("key-target");
const chart = document.getElementById("finger-chart");
const fingerOptions = document.getElementById("finger-options");
const instrumentChoice = document.getElementById("instrument-choice");
const selectButton = document.getElementById("select-button");
const resetButton = document.getElementById("reset-button");
const noteResult = document.getElementById("note-result");
const fingerExplanation = document.getElementById("finger-explanation");

// Set up functions
const init = () => {
  console.log("Start fingerings app");
  generateInstrumentOptions();
};

// const getChartList = (instrument, octave, pitch) => {
//   console.log("Get chart list for", instrument, octave, pitch);
// };

const getScreenSize = () => {
  return screen.width >= 768 ? "large" : "small";
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

window.addEventListener(
  "resize",
  debounce(() => {
    setKeys(
      instrumentChoice.value,
      getScreenSize(),
      octaveChoice.value,
      pitchChoice.value,
      chart
    );
    setKeyPress();
  }, 250)
);

instrumentChoice.addEventListener("change", (event) => {
  // TODO: Implement check on currentInstrument, currentOctave, currentPitch
  generateOctaveOptions(instrumentChoice.value);
  generatePitchOptions(instrumentChoice.value);
});

octaveChoice.addEventListener("change", (event) => {
  // TODO: Implement check on currentInstrument, currentOctave, currentPitch
  generatePitchOptions(instrumentChoice.value, octaveChoice.value);
});

pitchChoice.addEventListener("change", (event) => {
  instrumentChoice.value, octaveChoice.value, pitchChoice.value;
});

selectButton.addEventListener("click", () => {
  if (instrumentChoice.value && octaveChoice.value && pitchChoice.value) {
    noteResult.style.display = "block";
    getChartList(
      instrumentChoice.value,
      octaveChoice.value,
      pitchChoice.value,
      fingerOptions
    );
    setKeys(
      instrumentChoice.value,
      getScreenSize(),
      octaveChoice.value,
      pitchChoice.value,
      chart
    );
    setKeyPress();
    // TODO: Implement creation of fingering options
  }
});

resetButton.addEventListener("click", () => {
  noteResult.style.display = "none";
  generateInstrumentOptions();
  generateOctaveOptions();
  generatePitchOptions();
});

// Start app
init();
