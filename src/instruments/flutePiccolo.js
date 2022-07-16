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
    mainWidth: 28,
    cx: 13,
    cy: 24,
    rx: 9,
    ry: 15,
  },
  roller: {
    mainWidth: 22,
    x: 1,
    y: 1,
    keyHeight: 6,
    keyWidth: 20,
  },
  footKey: {
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
  const keySize = screenSize === "large" ? keysLargeKeys : keysSmallKeys;

  instrument === "flute"
    ? (keySize.stroke = "silver")
    : (keySize.stroke = "black");

  let mainRoundHeight = 40;
  console.log(screenSize);

  // const keySetup = `
  //         <div class="key-item key-lower">
  //             <svg class="key-target" id="key-th-bflat" height="63" width="${
  //               keySize.thumb1.mainWidth
  //             }">
  //                 <rect x="${keySize.thumb1.x}" y="${
  //   keySize.thumb1.y
  // }" height="${keySize.thumb1.keyHeight}" width="${
  //   keySize.thumb1.keyWidth
  // }" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthAux
  // }" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item key-lower">
  //             <svg class="key-target" id="key-th" height="63" width="${
  //               keySize.thumb2.mainWidth
  //             }">
  //                 <rect x="${keySize.thumb2.x}" y="${
  //   keySize.thumb2.y
  // }" height="${keySize.thumb2.keyHeight}" width="20" stroke="${
  //   keySize.stroke
  // }" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-lh-1" height="${
  //               screenSize === "small" ? mainRoundHeight * 0.85 : 40
  //             }" width="${keySize.mainRound.mainWidth}">
  //                 <circle cx="${keySize.mainRound.cx}" cy="${
  //   keySize.mainRound.cy
  // }" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthMain
  // }" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-lh-2" height="40" width="${
  //               keySize.mainRound.mainWidth
  //             }">
  //                 <circle cx="${keySize.mainRound.cx}" cy="${
  //   keySize.mainRound.cy
  // }" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthMain
  // }" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-lh-3" height="40" width="${
  //               keySize.mainRound.mainWidth
  //             }">
  //                 <circle cx="${keySize.mainRound.cx}" cy="${
  //   keySize.mainRound.cy
  // }" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthMain
  // }" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-lh-4" height="60" width="${
  //               keySize.leftPinky.mainWidth
  //             }">
  //             <path d="${keySize.leftPinky.d}" stroke="${
  //   keySize.stroke
  // }" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //             Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-rh-1" height="40" width="${
  //               keySize.mainRound.mainWidth
  //             }">
  //                 <circle cx="${keySize.mainRound.cx}" cy="${
  //   keySize.mainRound.cy
  // }" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthMain
  // }" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item key-lower">
  //             <svg class="key-target" id="key-rh-tr1" height="63" width="${
  //               keySize.trill.mainWidth
  //             }">
  //                 <ellipse cx="${keySize.trill.cx}" cy="${
  //   keySize.trill.cy
  // }" rx="${keySize.trill.rx}" ry="${keySize.trill.ry}" stroke="${
  //   keySize.stroke
  // }" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-rh-2" height="40" width="${
  //               keySize.mainRound.mainWidth
  //             }">
  //                 <circle cx="${keySize.mainRound.cx}" cy="${
  //   keySize.mainRound.cy
  // }" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthMain
  // }" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item key-lower">
  //             <svg class="key-target" id="key-rh-tr2" height="63" width="${
  //               keySize.trill.mainWidth
  //             }">
  //                 <ellipse cx="${keySize.trill.cx}" cy="${
  //   keySize.trill.cy
  // }" rx="${keySize.trill.rx}" ry="${keySize.trill.ry}" stroke="${
  //   keySize.stroke
  // }" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-rh-3" height="40" width="${
  //               keySize.mainRound.mainWidth
  //             }">
  //                 <circle cx="${keySize.mainRound.cx}" cy="${
  //   keySize.mainRound.cy
  // }" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthMain
  // }" fill="${keySize.fill}" />
  //                 Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div class="key-item">
  //             <svg class="key-target" id="key-rh-pinky" height="40" width="${
  //               keySize.rightPinky.mainWidth
  //             }">
  //             <ellipse cx="${keySize.rightPinky.cx}" cy="${
  //   keySize.rightPinky.cy
  // }" rx="${keySize.rightPinky.rx}" ry="${keySize.rightPinky.ry}" stroke="${
  //   keySize.stroke
  // }" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
  //             Sorry, your browser does not support inline SVG.
  //             </svg>
  //         </div>
  //         <div>
  //             <div class="key-item key-item-roller">
  //                 <svg class="key-target" id="key-rh-broll" height="8" width="${
  //                   keySize.roller.mainWidth
  //                 }">

  //                 </svg>
  //                 <svg class="key-target" id="key-rh-croll" height="8" width="${
  //                   keySize.roller.mainWidth
  //                 }">

  //                 </svg>
  //             </div>
  //             <div class="key-item">
  //                 <svg class="key-target" id="key-rh-csharp" height="20" width="${
  //                   keySize.footKey.mainWidth
  //                 }">
  //                     <rect x="${keySize.footKey.x}" y="${
  //   keySize.footKey.y
  // }" height="${keySize.footKey.keyHeight}" width="${
  //   keySize.footKey.keyWidth
  // }" stroke="${keySize.stroke}" stroke-width="${
  //   keySize.strokeWidthAux
  // }" fill="${keySize.fill}" />
  //                     Sorry, your browser does not support inline SVG.
  //                 </svg>
  //             </div>
  //         <div>
  //     `;
  const keySetup = `
  <div class="key-item">
      <svg class="key-target" id="key-rh-pinky" height="40" width="${keySize.rightPinky.mainWidth}">
      <ellipse cx="${keySize.rightPinky.cx}" cy="${keySize.rightPinky.cy}" rx="${keySize.rightPinky.rx}" ry="${keySize.rightPinky.ry}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
      Sorry, your browser does not support inline SVG.
      </svg>
  </div>
  <div>
      <div class="key-item key-item-roller">
          <svg class="key-target" id="key-rh-broll" height="8" width="${keySize.roller.mainWidth}">

          </svg>
          <svg class="key-target" id="key-rh-croll" height="8" width="${keySize.roller.mainWidth}">

          </svg>
      </div>
      <div class="key-item">
          <svg class="key-target" id="key-rh-csharp" height="20" width="${keySize.footKey.mainWidth}">
              <rect x="${keySize.footKey.x}" y="${keySize.footKey.y}" height="${keySize.footKey.keyHeight}" width="${keySize.footKey.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
              Sorry, your browser does not support inline SVG.
          </svg>
      </div>
  <div>
`;
  chart.innerHTML = keySetup;

  const keyRhBRoller = document.getElementById("key-rh-broll");
  const keyRhCRoller = document.getElementById("key-rh-croll");

  if (instrument === "flute") {
    keyRhBRoller.innerHTML = `
            <rect x="${keySize.roller.x}" y="${keySize.roller.y}" height="${keySize.roller.keyHeight}" width="${keySize.roller.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
            Sorry, your browser does not support inline SVG.
            `;
    keyRhCRoller.innerHTML = `
            <rect x="${keySize.roller.x}" y="${keySize.roller.y}" height="${keySize.roller.keyHeight}" width="${keySize.roller.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
            Sorry, your browser does not support inline SVG.
            `;
  } else {
    keyRhBRoller.innerHTML = "";
    keyRhCRoller.innerHTML = "";
  }
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
    chart.innerHTML += finalChart.innerHTML;
  }

  if (instrument === "piccolo") {
    keyStrokeColor = "black";
    renderCommonKeys();
    renderPiccoloKeys(instrument, screenSize);
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
  }" stroke="${keySize.stroke}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
  `;
  console.log(keyItem);
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
  }" stroke="${keySize.stroke}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
  `;
  console.log(keyItem);
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
  }" r="${keySize.mainRound.r * screenSizeFactor}" stroke="${
    keySize.stroke
  }" stroke-width="${
    keySize.strokeWidthMain * screenSizeFactor
  }" fill="${keyFill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
`;
  console.log(keyItem);
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
    <path d="${keyShape}" stroke="${keySize.stroke}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
    Sorry, your browser does not support inline SVG.
    </svg>
  `;

  console.log(keyItem);
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
  }" stroke="${keySize.stroke}" stroke-width="${
    keySize.strokeWidthAux * screenSizeFactor
  }" fill="${keySize.fill}" />
        Sorry, your browser does not support inline SVG.
    </svg>
  `;
  console.log(keyItem);
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
};

const renderFluteKeys = (instrument, screenSize) => {
  console.log("Reached flute");
  keysFlutePiccolo1(instrument, screenSize);
};

const renderPiccoloKeys = (instrument, screenSize) => {
  console.log("Reached piccolo");
  keysFlutePiccolo1(instrument, screenSize);
};

// { id: "key-rh-pinky", classNames: ["key-item"], keyType: "rightPinky" },
// {
//   id: "key-rh-broll",
//   classNames: ["key-item", "key-item-roller"],
//   keyType: "roller",
// },
// {
//   id: "key-rh-croll",
//   classNames: ["key-item", "key-item-roller"],
//   keyType: "roller",
// },
// { id: "key-rh-csharp", classNames: ["key-item"], keyType: "footKey" },
