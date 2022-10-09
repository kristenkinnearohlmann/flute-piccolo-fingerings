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
    3: { 12: ["B", "Cb"] },
    4: {
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
    },
    5: {
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
    },
    6: { 1: ["B#", "C"], 2: ["C#", "Db"], 3: ["D"] },
  },
  piccolo: {
    3: {
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
    },
    4: {
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
    },
    5: {
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
    },
    6: { 2: ["C#", "Db"], 3: ["D"] },
  },
};
const generateInstrumentOptions = () => {
  populateDropdownList(["Flute", "Piccolo"], instrumentChoice);
};

const generateOctaveOptions = (instrument = "") => {
  let octaveMin = 0;
  let octaveMax = 8;

  console.log("In generateOctaveOptions", instrument);

  if (instrument) {
    let selectedOctaves = Object.keys(
      instrumentOctaves[instrument.toLowerCase()]
    );

    console.log(selectedOctaves);
    octaveMin = parseInt(selectedOctaves.shift());
    octaveMax = parseInt(selectedOctaves.pop());
  }
  populateDropdownList(generateNumberRange(octaveMin, octaveMax), octaveChoice);
};

const generatePitchOptions = (instrument = "") => {
  console.log(instrument);
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
