const keysPiccolo = () => {
    const keySetup = `
        <div id="key-th-bflat" class="key-item key-lower">
            <svg height="63" width="18">
                <rect x="6" y="25" height="10" width="10" stroke="black" stroke-width="2" fill="none" />
                Sorry, your browser does not support inline SVG.  
            </svg>
        </div>
        <div id="key-th" class="key-item key-lower">
            <svg height="63" width="28">
                <rect x="1" y="25" height="10" width="20" stroke="black" stroke-width="2" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-lh-1" class="key-item">
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="black" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-lh-2" class="key-item">
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="black" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-lh-3" class="key-item">
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="black" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-lh-4" class="key-item">
            <svg height="60" width="40">
            <path d="M 10 10 h 20 v 40 h -5 v -28 h -15 v -12" stroke="black" stroke-width="3" fill="none" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-1" class="key-item">
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="black" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-tr1" class="key-item key-lower">
            <svg height="63" width="18">
            <ellipse cx="9" cy="24" rx="5" ry="12" stroke="black" stroke-width="2" fill="none" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-2" class="key-item">
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="black" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-tr2" class="key-item key-lower">
            <svg height="63" width="18">
            <ellipse cx="9" cy="24" rx="5" ry="12" stroke="black" stroke-width="2" fill="none" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-3" class="key-item">
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="black" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-pinky" class="key-item">
            <svg height="40" width="24">
            <ellipse cx="13" cy="24" rx="9" ry="15" stroke="black" stroke-width="2" fill="none" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div>
            <div id="key-rh-broll" class="key-item">
                <svg height="8" width="22">
                    <rect x="1" y="1" height="6" width="20" stroke="black" stroke-width="2" fill="none" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <div id="key-rh-croll" class="key-item">
                <svg height="8" width="22">
                    <rect x="1" y="1" height="6" width="20" stroke="black" stroke-width="2" fill="none" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <div id="key-rh-csharp" class="key-item">
                <svg height="20" width="28">
                    <rect x="1" y="2" height="15" width="20" stroke="black" stroke-width="2" fill="none" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
        <div>
    `
    chart.innerHTML = keySetup
}