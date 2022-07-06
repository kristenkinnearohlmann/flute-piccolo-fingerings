const renderKeys = (instrument, screenSize) => {
  switch (instrument) {
    case "flute":
    case "piccolo":
      keysFlutePiccolo(instrument, screenSize);
    default:
      console.error("This instrument does not exist.");
  }
};
