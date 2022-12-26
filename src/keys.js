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
          isBasicOption: true,
          title: "Basic",
          description:
            "The standard fingering for the selected pitch in the selected octave.",
          keys: ["th2", "l2", "l3", "r1", "r2", "r3"],
        },
      ],
      4: [],
      5: [],
      6: [],
      7: [
        {
          _id: "33e12a60-1ecb-4795-a120-7db0ac6330b4",
          isBasicOption: true,
          title: "Basic",
          description:
            "The standard fingering for the selected pitch in the selected octave.",
          keys: ["th2", "l1", "l2", "l3", "r3", "pr1"],
        },
        {
          _id: "2d48ecd9-e576-4b41-b9f8-35913ca3973d",
          isBasicOption: false,
          title: "Forked",
          description: "Facilitates trills.",
          keys: ["th2", "l1", "l2", "l3", "r2", "pr1"],
        },
      ],
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
          isBasicOption: true,
          title: "Basic",
          description:
            "The standard fingering for the selected pitch in the selected octave.",
          keys: ["th2", "l2", "l3", "r1", "r2", "r3"],
        },
      ],
      7: [
        {
          _id: "14aac437-d987-48ce-aecc-df52e96e2171",
          isBasicOption: true,
          title: "Basic",
          description:
            "The standard fingering for the selected pitch in the selected octave.",
          keys: ["th2", "l1", "l2", "l3", "r3", "pr1"],
        },
        {
          _id: "2adb2c48-7eb6-4ac7-8c80-190dd86591c1",
          isBasicOption: false,
          title: "Forked",
          description: "Facilitates trills.",
          keys: ["th2", "l1", "l2", "l3", "r2", "pr1"],
        },
      ],
    },
    5: {},
    6: {},
  },
};

const getChartList = (instrument, octave, pitch, fingerOptions, id = "") => {
  const keySetToUse = instrumentKeySets[instrument];
  const ul = document.createElement("ul");

  ul.setAttribute("id", "chart-list-options");
  keySetToUse[octave][pitch].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.title}</strong><br/>${item.description}`;
    li.setAttribute("id", item._id);
    if ((id === "" && item.isBasicOption) || item._id === id) {
      li.classList.add("selected-item");
    }
    li.addEventListener("click", (event) => {
      console.log(event.target.getAttribute("id"));
      console.log(document.getElementById(event.target.getAttribute("id")));
      console.log(document.getElementsByClassName("selected-item").length);
    });
    ul.appendChild(li);
  });

  fingerOptions.innerText = "";
  fingerOptions.appendChild(ul);
};

const setKeys = (instrument, screenSize, octave, pitch, chart, id = "") => {
  const keySetToUse = instrumentKeySets[instrument];
  let keysToSet = [];

  keysToSet = !id
    ? keySetToUse[octave][pitch].filter(
        (item) => item.title.toLowerCase() === "basic"
      )[0].keys
    : keySetToUse[octave][pitch].filter((item) => (item._id = id));

  const explanationDetailsForInstrument =
    explanationDetails[instrument] || explanationDetails["default"];
  explanationPane.innerText = `${explanationDetailsForInstrument} ${instrumentChoice.value} ${octaveChoice.value} ${pitchChoice.value}`;
  renderFlutePiccoloKeys(instrument, screenSize, chart, keysToSet);
};
