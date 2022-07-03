const keysLargeKeys = {
  stroke: "silver",
  fill: "none",
  strokeWidthMain: 3,
  strokeWidthAux: 2,
  thumb1: {
    mainWidth: 18,
    x: 6,
    y: 25,
    keyHeight: 10,
    keyWidth: 10,
  },
  thumb2: {
    mainWidth: 28,
    x: 1,
    y: 25,
    keyHeight: 10,
    keyWidth: 20,
  },
  mainRound: {
    mainWidth: 40,
    cx: 20,
    cy: 20,
    r: 15,
  },
  leftPinky: {
    mainWidth: 40,
    d: "M 10 10 h 20 v 40 h -5 v -28 h -15 v -12",
  },
  trill: {
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

const mainKeyIds = [
  "key-lh-1",
  "key-lh-2",
  "key-lh-3",
  "key-rh-1",
  "key-rh-2",
  "key-rh-3",
];

const renderKeys = (instrument, screenSize) => {
  const keySize = screenSize === "large" ? keysLargeKeys : keysSmallKeys;

  instrument === "flute"
    ? (keySize.stroke = "silver")
    : (keySize.stroke = "black");

  let keyDiv = document.createElement("div");
  keyDiv.classList.add("key-item");

  let keyMain = `
  <div class="key-item">
    <svg class="key-target" id="key-lh-100" height="40" width="${keySize.mainRound.mainWidth}">
        <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
        Sorry, your browser does not support inline SVG.
    </svg>
</div>
  `;

  // keyLh1

  /*
  <div class="key-item">
  <svg class="key-target" id="key-lh-1" height="40" width="${keySize.mainRound.mainWidth}">
      <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
      Sorry, your browser does not support inline SVG.
  </svg>
</div>
*/

  const keySetup = `
        <div class="key-item key-lower">
            <svg class="key-target" id="key-th-bflat" height="63" width="${keySize.thumb1.mainWidth}">
                <rect x="${keySize.thumb1.x}" y="${keySize.thumb1.y}" height="${keySize.thumb1.keyHeight}" width="${keySize.thumb1.keyWidth}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.  
            </svg>
        </div>
        <div class="key-item key-lower">
            <svg class="key-target" id="key-th" height="63" width="${keySize.thumb2.mainWidth}">
                <rect x="${keySize.thumb2.x}" y="${keySize.thumb2.y}" height="${keySize.thumb2.keyHeight}" width="20" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-1" height="40" width="${keySize.mainRound.mainWidth}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-2" height="40" width="${keySize.mainRound.mainWidth}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-3" height="40" width="${keySize.mainRound.mainWidth}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-4" height="60" width="${keySize.leftPinky.mainWidth}">
            <path d="${keySize.leftPinky.d}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-rh-1" height="40" width="${keySize.mainRound.mainWidth}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item key-lower">
            <svg class="key-target" id="key-rh-tr1" height="63" width="${keySize.trill.mainWidth}">
                <ellipse cx="${keySize.trill.cx}" cy="${keySize.trill.cy}" rx="${keySize.trill.rx}" ry="${keySize.trill.ry}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-rh-2" height="40" width="${keySize.mainRound.mainWidth}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item key-lower">
            <svg class="key-target" id="key-rh-tr2" height="63" width="${keySize.trill.mainWidth}">
                <ellipse cx="${keySize.trill.cx}" cy="${keySize.trill.cy}" rx="${keySize.trill.rx}" ry="${keySize.trill.ry}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthAux}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-rh-3" height="40" width="${keySize.mainRound.mainWidth}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
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

  chart.innerHTML += keyMain;

  let svgKeyLh1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgKeyLh1.classList.add("key-target");
  svgKeyLh1.setAttributeNS(null, "id", "key-lh-1");
  svgKeyLh1.setAttributeNS(null, "height", "40");
  svgKeyLh1.setAttributeNS(null, "width", keySize.mainRound.mainWidth);

  svgKeyLh1.innerHTML = `
  <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.stroke}" stroke-width="${keySize.strokeWidthMain}" fill="${keySize.fill}" />
  Sorry, your browser does not support inline SVG.
  `;
  console.log(chart);
  chart.appendChild(svgKeyLh1);
};
