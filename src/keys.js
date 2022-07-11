const renderKeys = (instrument, screenSize) => {
  switch (instrument) {
    case "flute":
      renderFluteKeys(instrument, screenSize);
      break;
    case "piccolo":
      keysFlutePiccolo(instrument, screenSize);
      break;
    default:
      console.log("This instrument is not defined.");
  }
};
