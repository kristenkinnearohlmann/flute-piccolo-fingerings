const explanationPane = document.getElementById("note-finger-explanation");
// options
// th1: key-th-bflat
// th2: key-th
// l1: key-lh-1
// l2: key-lh-2
// l3: key-lh-3
// pl1: key-lh-4
// r1: key-rh-1
// tr1: key-rh-tr1
// r2: key-rh-2
// tr2: key-rh-tr2
// r3: key-rh-3
// pr1: key-rh-pinky
// r1: key-rh-broll
// r2: key-rh-croll
// pr2: key-rh-csharp
// const setKeys = (keyArr) => {
//   return
// }

const fluteKeys = {
  3: {},
  4: {
    1: [],
    2: [],
    3: [
      {
        title: "Basic",
        description: "",
        keys: setKeys(["th2", "l2", "l3", "r1", "r2", "r3"]),
      },
    ],
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
