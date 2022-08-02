const generateOctaveOptions = (octaves) => {
  octaves.forEach((octave) => {
    let opt = document.createElement("option");
    opt.value = octave;
    opt.textContent = octave;
    octaveChoice.appendChild(opt);
  });
};

const renderKeys = (instrument, screenSize) => {
  switch (instrument) {
    case "flute":
    case "piccolo":
      renderFlutePiccoloKeys(instrument, screenSize);
      break;
    default:
      console.log("This instrument is not defined.");
  }
};
