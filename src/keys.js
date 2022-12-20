const explanationPane = document.getElementById("finger-explanation");
// const instrumentKeySets = { flute: "fluteKeys", piccolo: "piccoloKeys" };
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
// roll1: key-rh-broll
// roll2: key-rh-croll
// pr2: key-rh-csharp

const explanationDetails = {
  default: "Pane 2: Explanation",
  piccolo: "Sounds 1 octave higher than written",
};
const instrumentKeySets = {
  flute: {
    3: {},
    4: {
      1: [],
      2: [],
      3: [
        {
          _id: "b6e0cf63-224c-4849-8966-f8af2bfe35b0",
          title: "Basic",
          description:
            "The standard fingering for the selected pitch in the selected octave.",
          keys: ["th2", "l2", "l3", "r1", "r2", "r3"],
        },
        {
          _id: "33e12a60-1ecb-4795-a120-7db0ac6330b4",
          title: "Another fingering",
          description: "Test description",
          keys: [""],
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
  },
  piccolo: {
    3: {},
    4: {
      3: [
        {
          _id: "5d6e11e4-52cf-4d96-9b32-76aeb6bae9fb",
          title: "Basic",
          description:
            "The standard fingering for the selected pitch in the selected octave.",
          keys: ["th2", "l2", "l3", "r1", "r2", "r3"],
        },
      ],
    },
    5: {},
    6: {},
  },
};

// const renderKeys = (instrument, screenSize, chart) => {
//   console.log("Am I still called?");
//   switch (instrument) {
//     case "flute":
//       explanationPane.innerText = "Pane 2: Explanation";
//       renderFlutePiccoloKeys(instrument, screenSize, chart, []);
//     case "piccolo":
//       explanationPane.innerText = "Sounds 1 octave higher than written";
//       renderFlutePiccoloKeys(instrument, screenSize, chart, []);
//       break;
//     default:
//       console.warn("This instrument is not defined.");
//   }
// };

const setKeys = (instrument, screenSize, octave, pitch, chart, id = "") => {
  console.log(instrument, octave, pitch, chart, id);
  // TODO: Refactor for better flow
  const keySetToUse = instrumentKeySets[instrument];
  let keysToSet = [];

  keysToSet = !id
    ? keySetToUse[octave][pitch].filter(
        (item) => item.title.toLowerCase() === "basic"
      )[0].keys
    : keySetToUse[octave][pitch].filter((item) => (item._id = id));

  explanationPane.innerText = `${instrumentChoice.value} ${octaveChoice.value} ${pitchChoice.value}`;
  renderFlutePiccoloKeys(instrument, screenSize, chart, keysToSet);
};
