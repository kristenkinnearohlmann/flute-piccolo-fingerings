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

  if (instrument) {
    let selectedOctaves = Object.keys(
      instrumentOctaves[instrument.toLowerCase()]
    );

    octaveMin = parseInt(selectedOctaves.shift());
    octaveMax = parseInt(selectedOctaves.pop());
  }

  instrument
    ? populateDropdownList(
        generateNumberRange(octaveMin, octaveMax),
        octaveChoice
      )
    : populateDropdownList([], octaveChoice);
};

const generatePitchOptions = (instrument = "", octave = "") => {
  let pitchItems = [];

  if (instrument) {
    let pitchSet = instrumentOctaves[instrument.toLowerCase()][octave];

    for (let pitch in pitchSet) {
      pitchItems.push(pitchSet[pitch].join("/"));
    }
  }

  populateDropdownList(pitchItems, pitchChoice);
};
