// let instrumentChoice = document.getElementById("instrument-choice");
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
let instrumentOctaves = {
  flute: {
    3: {},
    4: {},
    5: {},
    6: {},
  },
  piccolo: {},
};
const generateInstrumentOptions = () => {
  populateDropdownList(["Flute", "Piccolo"], instrumentChoice);
};

const generateOctaveOptions = (instrument = "") => {
  console.log("The instrument selected ", instrument);
  console.log(fluteOctaves);
  console.log(instrument);
  // const octaves = instrument ? "" : generateNumberRange(0, 8);
  // populateDropdownList(octaves, octaveChoice);
};

const generatePitchOptions = () => {
  let pitchItems = [];
  for (const [pitch, value] of Object.entries(pitches)) {
    pitchItems.push(value.join("/"));
  }

  populateDropdownList(pitchItems, pitchChoice);
};

const getPitches = (instrument) => {
  // check for instrument

  console.log("instrument", instrument);
  console.log("chosen octave", octaveChoice);

  pitchChoice.innerHTML = `<option value="0"></option>`;
};

// TODO: Determine if this can be moved to keys

// Flute
// B3
// C4
// ...
// C5
// ...
// C6
// ...
// C7

// Piccolo
// D4
// ...
// D5
// ...
// D6
// ...
// C7
