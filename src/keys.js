const explanationPane = document.getElementById("note-finger-explanation");
const fluteKeys = {
  3: {},
  4: {
    1: [],
    2: [],
    3: [{ title: "Basic", description: "", keys: [] }],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
  },
  5: {},
  6: {},
};
const piccoloKeys = { 3: {}, 4: {}, 5: {}, 6: {} };

const renderKeys = (instrument, screenSize) => {
  switch (instrument) {
    case "flute":
      explanationPane.innerText = "Pane 2: Explanation";
    case "piccolo":
      explanationPane.innerText = "Sounds 1 octave higher than written";
      renderFlutePiccoloKeys(instrument, screenSize);
      break;
    default:
      console.warn("This instrument is not defined.");
  }
};
