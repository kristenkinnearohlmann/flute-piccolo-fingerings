const keysFlute = () => {
    const keySetup = `
        <div id="key-lh-1" class="key-item">
            <p class="key-name">LH 1</p>
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="silver" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-lh-2" class="key-item">
            <p class="key-name">LH 2</p>
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="silver" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-lh-3" class="key-item">
            <p class="key-name">LH 3</p>
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="silver" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-1" class="key-item">
            <p class="key-name">RH 1</p>
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="silver" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-tr1" class="key-item key-lower">
            <p class="key-name-lower">TR 1</p>
            <svg height="63" width="18">
            <ellipse cx="9" cy="24" rx="5" ry="12" stroke="silver" stroke-width="2" fill="none" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-2" class="key-item">
            <p class="key-name">RH 2</p>
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="silver" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
        <div id="key-rh-3" class="key-item">
            <p class="key-name">RH 3</p>
            <svg height="40" width="40">
                <circle cx="20" cy="20" r="15" stroke="silver" stroke-width="3" fill="none" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
    `
    chart.innerHTML = keySetup
}