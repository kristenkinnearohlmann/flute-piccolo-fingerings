const explanationPane = document.getElementById("note-finger-explanation");
const fluteKeys = {};
const piccoloKeys = {};

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
