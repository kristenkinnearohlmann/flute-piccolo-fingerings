const explanationPane = document.getElementById("finger-explanation");
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

// TODO: Implement setting keys based on revised ids
const fluteKeys = {
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
        title: "another fingering",
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
};
const piccoloKeys = { 3: {}, 4: {}, 5: {}, 6: {} };

const renderKeys = (instrument, screenSize, chart) => {
  switch (instrument) {
    case "flute":
      explanationPane.innerText = "Pane 2: Explanation";
      renderFlutePiccoloKeys(instrument, screenSize, chart);
    case "piccolo":
      explanationPane.innerText = "Sounds 1 octave higher than written";
      renderFlutePiccoloKeys(instrument, screenSize, chart);
      break;
    default:
      console.warn("This instrument is not defined.");
  }
};

const setKeys = (instrument, octave, pitch, chart, id = "") => {
  console.log(instrument, octave, pitch, chart, id);
  // TODO: Refactor for better flow
  console.log("What is id", !!id);
  let keysToSet = [];
  console.log(
    "What is here",
    fluteKeys[octave][pitch].filter(
      (item) => item.title.toLowerCase() === "basic"
    )[0].keys
  );
  if (instrument === "flute") {
    keysToSet = !id
      ? fluteKeys[octave][pitch].filter(
          (item) => item.title.toLowerCase() === "basic"
        )[0].keys
      : fluteKeys[octave][pitch].filter((item) => (item._id = id));
  }

  console.log(keysToSet);
  console.log(chart.id);
  console.log(Array.from(chart.children));
  // for (let item in chart) {
  //   console.log(item);
  // }
};
