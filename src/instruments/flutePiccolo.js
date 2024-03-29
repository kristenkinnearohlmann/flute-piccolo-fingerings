let screenSizeFactor;
let keyStrokeColor;
let finalChart;
let keyFill = "none";
const keySizeValues = {
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

const renderFlutePiccoloKeys = (instrument, screenSize, chart, keysToSet) => {
  screenSizeFactor = screenSize === "large" ? 1 : 0.85;
  finalChart = document.createElement("div");

  if (instrument === "flute") {
    keyStrokeColor = "silver";
    renderCommonKeys(instrument, keysToSet);
    chart.innerHTML = finalChart.innerHTML;
  }

  if (instrument === "piccolo") {
    keyStrokeColor = "black";
    renderCommonKeys(instrument, keysToSet);
    chart.innerHTML = finalChart.innerHTML;
  }
};

const createKeyItem = () => {
  let keyDiv = document.createElement("div");
  keyDiv.classList.add("key-item");
  return keyDiv;
};

// thumb1
const renderKeysFlutePiccoloThumb1 = (keyId, keyName, keysToSet, keyItem) => {
  keyFill = keysToSet.includes(keyId) ? keyStrokeColor : "none";
  keyItem.classList.add("key-lower");
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" data-key-name="${keyName}" height="${
    keySizeValues.thumb1.mainHeight * screenSizeFactor
  }" width="${keySizeValues.thumb1.mainWidth * screenSizeFactor}">
      <rect x="${keySizeValues.thumb1.x * screenSizeFactor}" y="${
    keySizeValues.thumb1.y * screenSizeFactor
  }" height="${keySizeValues.thumb1.keyHeight * screenSizeFactor}" width="${
    keySizeValues.thumb1.keyWidth * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySizeValues.strokeWidthAux * screenSizeFactor
  }" fill="${keyFill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
  `;
  return keyItem;
};

// thumb2
const renderKeysFlutePiccoloThumb2 = (keyId, keyName, keysToSet, keyItem) => {
  keyFill = keysToSet.includes(keyId) ? keyStrokeColor : "none";
  keyItem.classList.add("key-lower");
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" data-key-name="${keyName}" height="${
    keySizeValues.thumb2.mainHeight * screenSizeFactor
  }" width="${keySizeValues.thumb2.mainWidth * screenSizeFactor}">
      <rect x="${keySizeValues.thumb2.x * screenSizeFactor}" y="${
    keySizeValues.thumb2.y * screenSizeFactor
  }" height="${keySizeValues.thumb2.keyHeight * screenSizeFactor}" width="${
    keySizeValues.thumb2.keyWidth * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySizeValues.strokeWidthAux * screenSizeFactor
  }" fill="${keyFill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
  `;
  return keyItem;
};

// main
const renderKeysFlutePiccoloMain = (keyId, keyName, keysToSet, keyItem) => {
  keyFill = keysToSet.includes(keyId) ? keyStrokeColor : "none";
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" data-key-name="${keyName}" height="${
    keySizeValues.mainRound.mainHeight * screenSizeFactor
  }" width="${keySizeValues.mainRound.mainWidth * screenSizeFactor}">
      <circle cx="${keySizeValues.mainRound.cx * screenSizeFactor}" cy="${
    keySizeValues.mainRound.cy * screenSizeFactor
  }" r="${
    keySizeValues.mainRound.r * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySizeValues.strokeWidthMain * screenSizeFactor
  }" fill="${keyFill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
`;
  return keyItem;
};

// leftPinky
const renderKeysFlutePiccoloLeftPinky = (
  keyId,
  keyName,
  keysToSet,
  keyItem
) => {
  keyFill = keysToSet.includes(keyId) ? keyStrokeColor : "none";
  const keyShape = keySizeValues.leftPinky.d
    .split(" ")
    .map((item) => {
      return parseInt(item) ? `${item * screenSizeFactor}` : item;
    })
    .join(" ");

  keyItem.innerHTML = `
    <svg class="key-target" id="${keyId}" data-key-name="${keyName}" height="${
    keySizeValues.leftPinky.mainHeight * screenSizeFactor
  }" width="${keySizeValues.leftPinky.mainWidth * screenSizeFactor}">
    <path d="${keyShape}" stroke="${keyStrokeColor}" stroke-width="${
    keySizeValues.strokeWidthAux * screenSizeFactor
  }" fill="${keyFill}" />
    Sorry, your browser does not support inline SVG.
    </svg>
  `;

  return keyItem;
};

// trill
const renderKeysFlutePiccoloTrill = (keyId, keyName, keysToSet, keyItem) => {
  keyFill = keysToSet.includes(keyId) ? keyStrokeColor : "none";
  keyItem.classList.add("key-lower");
  keyItem.innerHTML = `
    <svg class="key-target" id="${keyId}" data-key-name="${keyName}" height="${
    keySizeValues.trill.mainHeight * screenSizeFactor
  }" width="${keySizeValues.trill.mainWidth * screenSizeFactor}">
        <ellipse cx="${keySizeValues.trill.cx * screenSizeFactor}" cy="${
    keySizeValues.trill.cy * screenSizeFactor
  }" rx="${keySizeValues.trill.rx * screenSizeFactor}" ry="${
    keySizeValues.trill.ry * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySizeValues.strokeWidthAux * screenSizeFactor
  }" fill="${keyFill}" />
        Sorry, your browser does not support inline SVG.
    </svg>
  `;
  return keyItem;
};

// rightPinky
const renderKeysFlutePiccoloRightPinky = (
  keyId,
  keyName,
  keysToSet,
  keyItem
) => {
  keyFill = keysToSet.includes(keyId) ? keyStrokeColor : "none";
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" data-key-name="${keyName}" height="${
    keySizeValues.rightPinky.mainHeight * screenSizeFactor
  }" width="${keySizeValues.rightPinky.mainWidth * screenSizeFactor}">
  <ellipse cx="${keySizeValues.rightPinky.cx * screenSizeFactor}" cy="${
    keySizeValues.rightPinky.cy * screenSizeFactor
  }" rx="${keySizeValues.rightPinky.rx * screenSizeFactor}" ry="${
    keySizeValues.rightPinky.ry * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySizeValues.strokeWidthAux * screenSizeFactor
  }" fill="${keyFill}" />
  Sorry, your browser does not support inline SVG.
  </svg>
  `;
  return keyItem;
};

// rollers
const updateRollersContent = (instrument) => {
  return instrument === "piccolo"
    ? ""
    : `
      <rect x="${keySizeValues.roller.x * screenSizeFactor}" y="${
        keySizeValues.roller.y * screenSizeFactor
      }" height="${keySizeValues.roller.keyHeight * screenSizeFactor}" width="${
        keySizeValues.roller.keyWidth * screenSizeFactor
      }" stroke="${keyStrokeColor}" stroke-width="${
        keySizeValues.strokeWidthAux * screenSizeFactor
      }" fill="${keyFill}" />
      Sorry, your browser does not support inline SVG.
  `;
};

const renderKeysFlutePiccoloRollers = (
  keyObj,
  keyItem,
  keysToSet,
  instrument
) => {
  keyItem.classList.add("key-item-roller");
  // both rollers are added to the same div
  keyObj.forEach((key) => {
    keyFill = keysToSet.includes(key.keyId) ? keyStrokeColor : "none";
    keyItem.innerHTML += `
    <svg class="key-target" id="${key.keyId}" data-key-name="${
      key.keyName
    }" height="${keySizeValues.roller.mainHeight * screenSizeFactor}" width="${
      keySizeValues.roller.mainWidth * screenSizeFactor
    }">
    ${updateRollersContent(instrument)}
    </svg>
    `;
  });
  return keyItem;
};

// foot key
const renderKeysFlutePiccoloFootKey = (keyId, keyName, keysToSet, keyItem) => {
  keyFill = keysToSet.includes(keyId) ? keyStrokeColor : "none";
  keyItem.innerHTML = `
  <svg class="key-target" id="${keyId}" data-key-name="${keyName}" height="${
    keySizeValues.footKey.mainHeight * screenSizeFactor
  }" width="${keySizeValues.footKey.mainWidth * screenSizeFactor}">
  <rect x="${keySizeValues.footKey.x * screenSizeFactor}" y="${
    keySizeValues.footKey.y * screenSizeFactor
  }" height="${keySizeValues.footKey.keyHeight * screenSizeFactor}" width="${
    keySizeValues.footKey.keyWidth * screenSizeFactor
  }" stroke="${keyStrokeColor}" stroke-width="${
    keySizeValues.strokeWidthAux * screenSizeFactor
  }" fill="${keyFill}" />
  Sorry, your browser does not support inline SVG.
</svg>
  `;
  return keyItem;
};

const renderCommonKeys = (instrument, keysToSet) => {
  // left thumb keys
  finalChart.appendChild(
    renderKeysFlutePiccoloThumb1(
      "th1",
      "key-th-bflat",
      keysToSet,
      createKeyItem()
    )
  );
  finalChart.appendChild(
    renderKeysFlutePiccoloThumb2("th2", "key-th", keysToSet, createKeyItem())
  );
  // left main keys
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("l1", "key-lh-1", keysToSet, createKeyItem())
  );
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("l2", "key-lh-2", keysToSet, createKeyItem())
  );
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("l3", "key-lh-3", keysToSet, createKeyItem())
  );
  // left pinky
  finalChart.appendChild(
    renderKeysFlutePiccoloLeftPinky(
      "pl1",
      "key-lh-4",
      keysToSet,
      createKeyItem()
    )
  );
  // right main 1
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("r1", "key-rh-1", keysToSet, createKeyItem())
  );
  // trill 1
  finalChart.appendChild(
    renderKeysFlutePiccoloTrill("tr1", "key-rh-tr1", keysToSet, createKeyItem())
  );
  // right main 2
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("r2", "key-rh-2", keysToSet, createKeyItem())
  );
  // trill 2
  finalChart.appendChild(
    renderKeysFlutePiccoloTrill("tr2", "key-rh-tr2", keysToSet, createKeyItem())
  );
  // right main 3
  finalChart.appendChild(
    renderKeysFlutePiccoloMain("r3", "key-rh-3", keysToSet, createKeyItem())
  );
  // right pinky
  finalChart.appendChild(
    renderKeysFlutePiccoloRightPinky(
      "pr1",
      "key-rh-pinky",
      keysToSet,
      createKeyItem()
    )
  );
  // right rollers and foot key
  let rollerDiv = document.createElement("div");
  // rollers
  rollerDiv.appendChild(
    renderKeysFlutePiccoloRollers(
      [
        { keyId: "roll1", keyName: "key-rh-broll" },
        { keyId: "roll2", keyName: "key-rh-croll" },
      ],
      createKeyItem(),
      keysToSet,
      instrument
    )
  );
  // foot key
  rollerDiv.appendChild(
    renderKeysFlutePiccoloFootKey(
      "pr2",
      "key-rh-csharp",
      keysToSet,
      createKeyItem()
    )
  );
  // add right rollers and foot key
  finalChart.appendChild(rollerDiv);
};
