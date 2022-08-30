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

const generatePitchOptions = () => {
  // TODO: Process initial pitches set at top of this file
  let pitchItems = [];
  for (const [pitch, value] of Object.entries(pitches)) {
    pitchItems.push(value.join("/"));
  }

  populateDropdownList(pitchItems, pitchChoice);
};

const generateOctaveOptions = (octaves) => {
  populateDropdownList(octaves, octaveChoice);
};

// serve pitch choices
// C, C# Db, D, D# Eb, E, E# Fb, F, F# Gb, G, G# Ab, A, A# Bb, B, B# Cb
// <option value="1">C</option>
// <option value="2">C&sharp;/D&flat;</option>
// <option value="3">D</option>
// <option value="4">D&sharp;/E&flat;</option>
// <option value="5">E</option>
// <option value="6">F</option>
// <option value="7">F&sharp;/G&flat;</option>
// <option value="8">G</option>
// <option value="9">G&sharp;/A&flat;</option>
// <option value="10">A</option>
// <option value="11">A&sharp;/B&flat;</option>
// <option value="12">B</option>
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
