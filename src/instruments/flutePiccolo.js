let screenSizeFactor;
let keySize;
let keyStrokeColor;
let finalChart;
let keyFill = "none";
const keysLargeKeys = {
  stroke: "silver",
  fill: "none",
  strokeWidthMain: 3,
  strokeWidthAux: 2,
  thumb1: {
    mainHeight: 63,
    mainWidth: 18,
    x: 6,
    y: 25,
    keyHeight: 10,
    keyWidth: 10,
  },
  thumb2: {
    mainHeight: 63,
    mainWidth: 28,
    x: 1,
    y: 25,
    keyHeight: 10,
    keyWidth: 20,
  },
  mainRound: {
    mainHeight: 40,
    mainWidth: 40,
    cx: 20,
    cy: 20,
    r: 15,
  },
  leftPinky: {
    mainHeight: 60,
    mainWidth: 40,
    d: "M 10 10 h 20 v 40 h -5 v -28 h -15 v -12",
  },
  trill: {
    mainHeight: 63,
    mainWidth: 18,
    cx: 9,
    cy: 24,
    rx: 5,
    ry: 12,
  },
  rightPinky: {
    mainHeight: 40,
    mainWidth: 28,
    cx: 13,
    cy: 24,
    rx: 9,
    ry: 15,
  },
  roller: {
    mainHeight: 8,
    mainWidth: 22,
    x: 1,
    y: 1,
    keyHeight: 6,
    keyWidth: 20,
  },
  footKey: {
    mainHeight: 20,
    mainWidth: 28,
    x: 1,
    y: 2,
    keyHeight: 15,
    keyWidth: 20,
  },
};

// Large * 0.85
const keysSmallKeys = {
  stroke: "silver",
  fill: "none",
  strokeWidthMain: 3,
  strokeWidthAux: 2,
  thumb1: {
    mainWidth: 15.3,
    x: 5.1,
    y: 21.25,
    keyHeight: 8.5,
    keyWidth: 8.5,
  },
  thumb2: {
    mainWidth: 23.8,
    x: 0.85,
    y: 21.25,
    keyHeight: 8.5,
    keyWidth: 17,
  },
  mainRound: {
    mainWidth: 34,
    cx: 17,
    cy: 17,
    r: 12.75,
  },
  leftPinky: {
    mainWidth: 34,
    d: "M 8.5 8.5 h 17 v 34 h -4.25 v -23.8 h -12.75 v -10.2",
  },
  trill: {
    mainWidth: 15.3,
    cx: 7.65,
    cy: 20.4,
    rx: 4.25,
    ry: 10.2,
  },
  rightPinky: {
    mainWidth: 23.8,
    cx: 11.05,
    cy: 20.4,
    rx: 7.65,
    ry: 12.75,
  },
  roller: {
    mainWidth: 18.7,
    x: 0.85,
    y: 0.85,
    keyHeight: 5.1,
    keyWidth: 17,
  },
  footKey: {
    mainWidth: 23.8,
    x: 0.85,
    y: 1.7,
    keyHeight: 12.75,
    keyWidth: 17,
  },
};

const keysFlutePiccolo1 = (instrument, screenSize) => {
  //   const keySize = screenSize === "large" ? keysLargeKeys : keysSmallKeys;
  //   instrument === "flute"
  //     ? (keySize.stroke = "silver")
  //     : (keySize.stroke = "black");
  //   console.log(screenSize);
  //   const keySetup = `
  //   <div>
  //       <div class="key-item key-item-roller">
  //           <svg class="key-target" id="key-rh-broll" height="8" width="${keySize.roller.mainWidth}">
  //           </svg>
  //           <svg class="key-target" id="key-rh-croll" height="8" width="${keySize.roller.mainWidth}">
  //           </svg>
  //       </div>
  //       <div class="key-item">
  //           <svg class="key-target" id="key-rh-csharp" height="20" width="${keySize.footKey.mainWidth}">
  //               <rect x="${keySize.footKey.x}" y="${keySize.footKey.y}" height="${keySize.footKey.keyHeight}" width="${keySize.footKey.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //               Sorry, your browser does not support inline SVG.
  //           </svg>
  //       </div>
  //   <div>
  // `;
  //   chart.innerHTML = keySetup;
  //   const keyRhBRoller = document.getElementById("key-rh-broll");
  //   const keyRhCRoller = document.getElementById("key-rh-croll");
  //   if (instrument === "flute") {
  //     keyRhBRoller.innerHTML = `
  //             <rect x="${keySize.roller.x}" y="${keySize.roller.y}" height="${keySize.roller.keyHeight}" width="${keySize.roller.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //             Sorry, your browser does not support inline SVG.
  //             `;
  //     keyRhCRoller.innerHTML = `
  //             <rect x="${keySize.roller.x}" y="${keySize.roller.y}" height="${keySize.roller.keyHeight}" width="${keySize.roller.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //             Sorry, your browser does not support inline SVG.
  //             `;
  //   } else {
  //     keyRhBRoller.innerHTML = "";
  //     keyRhCRoller.innerHTML = "";
  //   }
};

const renderFlutePiccoloKeys = (instrument, screenSize) => {
  // TODO: Re-create size object as size agnostic, using calculation
  keySize = keysLargeKeys;
  screenSizeFactor = screenSize === "large" ? 1 : 0.85;
  finalChart = document.createElement("div");

  if (instrument === "flute") {
    keyStrokeColor = "silver";
    renderCommonKeys();
    renderFluteKeys(instrument, screenSize);
    chart.innerHTML = finalChart.innerHTML;
  }

  if (instrument === "piccolo") {
    keyStrokeColor = "black";
    renderCommonKeys();
    renderPiccoloKeys(instrument, screenSize);
    chart.innerHTML = finalChart.innerHTML;
  }
};

const createKeyItem = () => {
  let keyDiv = document.createElement("div");
  keyDiv.classList.add("key-item");
  return keyDiv;
};

// thumb1
const renderKeysFlutePiccoloThumb1 = (keyId, keyItem) => {
  keyItem.classList.add("key-lower");
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" height="${
    keySize.thumb1.mainHeight * screenSizeFactor
  }" width="${keySize.thumb1.mainWidth * screenSizeFactor}">
      <rect x="${keySize.thumb1.x * screenSizeFactor}" y="${
    keySize.thumb1.y * screenSizeFactor
  }" height="${keySize.thumb1.keyHeight * screenSizeFactor}" width="${
    keySize.thumb1.keyWidth * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
  `;
  return keyItem;
};

// thumb2
const renderKeysFlutePiccoloThumb2 = (keyId, keyItem) => {
  keyItem.classList.add("key-lower");
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" height="${
    keySize.thumb2.mainHeight * screenSizeFactor
  }" width="${keySize.thumb2.mainWidth * screenSizeFactor}">
      <rect x="${keySize.thumb2.x * screenSizeFactor}" y="${
    keySize.thumb2.y * screenSizeFactor
  }" height="${keySize.thumb2.keyHeight * screenSizeFactor}" width="${
    keySize.thumb2.keyWidth * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
  `;
  return keyItem;
};

// main
const renderKeysFlutePiccoloMain = (keyId, keyItem) => {
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" height="${
    keySize.mainRound.mainHeight * screenSizeFactor
  }" width="${keySize.mainRound.mainWidth * screenSizeFactor}">
      <circle cx="${keySize.mainRound.cx * screenSizeFactor}" cy="${
    keySize.mainRound.cy * screenSizeFactor
  }" r="${
    keySize.mainRound.r * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySize.strokeWidthMain * screenSizeFactor
  }" fill="${keyFill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
`;
  return keyItem;
};

// leftPinky
const renderKeysFlutePiccoloLeftPinky = (keyId, keyItem) => {
  const keyShape = keysLargeKeys.leftPinky.d
    .split(" ")
    .map((item) => {
      return parseInt(item) ? `${item * screenSizeFactor}` : item;
    })
    .join(" ");

  keyItem.innerHTML = `
    <svg class="key-target" id="${keyId}" height="${
    keySize.leftPinky.mainHeight * screenSizeFactor
  }" width="${keySize.leftPinky.mainWidth * screenSizeFactor}">
    <path d="${keyShape}" stroke="${keyStrokeColor}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
    Sorry, your browser does not support inline SVG.
    </svg>
  `;

  return keyItem;
};

// trill
const renderKeysFlutePiccoloTrill = (keyId, keyItem) => {
  keyItem.classList.add("key-lower");
  keyItem.innerHTML = `
    <svg class="key-target" id="${keyId}" height="${
    keySize.trill.mainHeight * screenSizeFactor
  }" width="${keySize.trill.mainWidth * screenSizeFactor}">
        <ellipse cx="${keySize.trill.cx * screenSizeFactor}" cy="${
    keySize.trill.cy * screenSizeFactor
  }" rx="${keySize.trill.rx * screenSizeFactor}" ry="${
    keySize.trill.ry * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
        Sorry, your browser does not support inline SVG.
    </svg>
  `;
  return keyItem;
};

// rightPinky
const renderKeysFlutePiccoloRightPinky = (keyId, keyItem) => {
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" height="${
    keySize.rightPinky.mainHeight * screenSizeFactor
  }" width="${keySize.rightPinky.mainWidth * screenSizeFactor}">
  <ellipse cx="${keySize.rightPinky.cx * screenSizeFactor}" cy="${
    keySize.rightPinky.cy * screenSizeFactor
  }" rx="${keySize.rightPinky.rx * screenSizeFactor}" ry="${
    keySize.rightPinky.ry * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
  Sorry, your browser does not support inline SVG.
  </svg>
  `;
  return keyItem;
};

// rollers
const renderKeysFlutePiccoloRollers = (keyId, keyItem) => {
  keyItem.classList.add("key-item-roller");
  // both rollers are added to the same div
  keyId.forEach((keyId) => {
    keyItem.innerHTML += `
    <svg class="key-target" id="${keyId}" height="${
      keySize.roller.mainHeight * screenSizeFactor
    }" width="${keySize.roller.mainWidth * screenSizeFactor}">

    </svg>
    `;
  });
  return keyItem;
};

// foot key
const renderKeysFlutePiccoloFootKey = (keyId, keyItem) => {
  // TODO: Finish fixing
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" height="${
    keySize.footKey.mainHeight * screenSizeFactor
  }" width="${keySize.footKey.mainWidth * screenSizeFactor}">
  <rect x="${keySize.footKey.x * screenSizeFactor}" y="${
    keySize.footKey.y * screenSizeFactor
  }" height="${keySize.footKey.keyHeight * screenSizeFactor}" width="${
    keySize.footKey.keyWidth * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
  Sorry, your browser does not support inline SVG.
</svg>
  `;
  return keyItem;
};

const renderCommonKeys = () => {
  // left thumb keys
  finalChart.appendChild(
    renderKeysFlutePiccoloThumb1("key-th-bflat", createKeyItem())
  );
  finalChart.appendChild(
    renderKeysFlutePiccoloThumb2("key-th", createKeyItem())
  );
  // left main keys
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("key-lh-1", createKeyItem())
  );
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("key-lh-2", createKeyItem())
  );
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("key-lh-3", createKeyItem())
  );
  // left pinky
  finalChart.appendChild(
    renderKeysFlutePiccoloLeftPinky("key-lh-4", createKeyItem())
  );
  // right main 1
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("key-rh-1", createKeyItem())
  );
  // trill 1
  finalChart.appendChild(
    renderKeysFlutePiccoloTrill("key-rh-tr1", createKeyItem())
  );
  // right main 2
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("key-rh-2", createKeyItem())
  );
  // trill 2
  finalChart.appendChild(
    renderKeysFlutePiccoloTrill("key-rh-tr2", createKeyItem())
  );
  // right main 3
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("key-rh-3", createKeyItem())
  );
  // right pinky
  finalChart.appendChild(
    renderKeysFlutePiccoloRightPinky("key-rh-pinky", createKeyItem())
  );
  // right rollers and foot key
  let rollerDiv = document.createElement("div");
  // rollers
  rollerDiv.appendChild(
    renderKeysFlutePiccoloRollers(
      ["key-rh-broll", "key-rh-croll"],
      createKeyItem()
    )
  );
  // foot key
  rollerDiv.appendChild(
    renderKeysFlutePiccoloFootKey("key-rh-csharp", createKeyItem())
  );
  console.log(rollerDiv);
  // add right rollers and foot key
  finalChart.appendChild(rollerDiv);
};

const updateRollers = (instrument, screenSize) => {
  let keyRhBRoller = document.getElementById("key-rh-broll");
  let keyRhCRoller = document.getElementById("key-rh-croll");

  console.log("B roll yet", keyRhBRoller);
  console.log("C roll yet", keyRhCRoller);

  // if (instrument === "flute") {
  //   keyRhBRoller.innerHTML = `
  //           <rect x="${keySize.roller.x}" y="${keySize.roller.y}" height="${keySize.roller.keyHeight}" width="${keySize.roller.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //           Sorry, your browser does not support inline SVG.
  //           `;
  //   keyRhCRoller.innerHTML = `
  //           <rect x="${keySize.roller.x}" y="${keySize.roller.y}" height="${keySize.roller.keyHeight}" width="${keySize.roller.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //           Sorry, your browser does not support inline SVG.
  //           `;
  // } else {
  //   keyRhBRoller.innerHTML = "";
  //   keyRhCRoller.innerHTML = "";
  // }
};

const renderFluteKeys = (instrument, screenSize) => {
  console.log("Reached flute");
  updateRollers(instrument, screenSize);
  keysFlutePiccolo1(instrument, screenSize);
};

const renderPiccoloKeys = (instrument, screenSize) => {
  console.log("Reached piccolo");
  updateRollers(instrument, screenSize);
  keysFlutePiccolo1(instrument, screenSize);
};
