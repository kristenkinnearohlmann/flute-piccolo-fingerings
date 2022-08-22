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
