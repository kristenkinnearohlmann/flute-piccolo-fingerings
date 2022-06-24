const keysLarge = {
  mainRound: {
    cx: 20,
    cy: 20,
    r: 15,
    stroke: "silver",
    strokeWidth: 3,
    fill: "none",
    width: 40,
  },
  thumb1: {
    x: 6,
    y: 25,
    height: 10,
    keyWidth: 10,
    stroke: "silver",
    strokeWidth: 2,
    fill: "none",
    mainWidth: 18,
  },
  thumb2: {},
};

// Large * 0.85
const keysSmall = {
  mainRound: {
    cx: 17,
    cy: 17,
    r: 12.75,
    stroke: "silver",
    strokeWidth: 3,
    fill: "none",
    width: 34,
  },
  thumb1: {
    x: 5.1,
    y: 21.25,
    height: 8.5,
    keyWidth: 8.5,
    stroke: "silver",
    strokeWidth: 2,
    fill: "none",
    mainWidth: 15.3,
  },
  thumb2: {},
};

const keysFlute = (screenSize) => {
  console.log("Flute keys script", screenSize);
  const keySize = screenSize === "large" ? keysLarge : keysSmall;
  const keySetup = `
        <div class="key-item key-lower">
            <svg class="key-target" id="key-th-bflat" height="63" width="${keySize.thumb1.mainWidth}">
                <rect x="${keySize.thumb1.x}" y="${keySize.thumb1.y}" height="${keySize.thumb1.height}" width="${keySize.thumb1.keyWidth}" stroke="${keySize.thumb1.stroke}" stroke-width="${keySize.thumb1.strokeWidth}" fill="${keySize.thumb1.fill}" />
                Sorry, your browser does not support inline SVG.  
            </svg>
        </div>
        <div class="key-item key-lower">
            <svg class="key-target" id="key-th" height="63" width="28">
                <rect x="1" y="25" height="10" width="20" stroke="silver" stroke-width="2" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-1" height="40" width="${keySize.mainRound.width}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.mainRound.stroke}" stroke-width="${keySize.mainRound.strokeWidth}" fill="${keySize.mainRound.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-2" height="40" width="${keySize.mainRound.width}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.mainRound.stroke}" stroke-width="${keySize.mainRound.strokeWidth}" fill="${keySize.mainRound.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-3" height="40" width="${keySize.mainRound.width}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.mainRound.stroke}" stroke-width="${keySize.mainRound.strokeWidth}" fill="${keySize.mainRound.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-lh-4" height="60" width="40">
            <path d="M 10 10 h 20 v 40 h -5 v -28 h -15 v -12" stroke="silver" stroke-width="3" fill="none" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-rh-1" height="40" width="${keySize.mainRound.width}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.mainRound.stroke}" stroke-width="${keySize.mainRound.strokeWidth}" fill="${keySize.mainRound.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item key-lower">
            <svg class="key-target" id="key-rh-tr1" height="63" width="18">
                <ellipse cx="9" cy="24" rx="5" ry="12" stroke="silver" stroke-width="2" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-rh-2" height="40" width="${keySize.mainRound.width}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.mainRound.stroke}" stroke-width="${keySize.mainRound.strokeWidth}" fill="${keySize.mainRound.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item key-lower">
            <svg class="key-target" id="key-rh-tr2" height="63" width="18">
                <ellipse cx="9" cy="24" rx="5" ry="12" stroke="silver" stroke-width="2" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-rh-3" height="40" width="${keySize.mainRound.width}">
                <circle cx="${keySize.mainRound.cx}" cy="${keySize.mainRound.cy}" r="${keySize.mainRound.r}" stroke="${keySize.mainRound.stroke}" stroke-width="${keySize.mainRound.strokeWidth}" fill="${keySize.mainRound.fill}" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div class="key-item">
            <svg class="key-target" id="key-rh-pinky" height="40" width="24">
            <ellipse cx="13" cy="24" rx="9" ry="15" stroke="silver" stroke-width="2" fill="none" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div>
            <div class="key-item key-item-roller">
                <svg class="key-target" id="key-rh-broll" height="8" width="22">
                    <rect x="1" y="1" height="6" width="20" stroke="silver" stroke-width="2" fill="none" />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <svg class="key-target" id="key-rh-croll" height="8" width="22">
                    <rect x="1" y="1" height="6" width="20" stroke="silver" stroke-width="2" fill="none" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <div class="key-item">
                <svg class="key-target" id="key-rh-csharp" height="20" width="28">
                    <rect x="1" y="2" height="15" width="20" stroke="silver" stroke-width="2" fill="none" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
        <div>
    `;
  chart.innerHTML = keySetup;
};
