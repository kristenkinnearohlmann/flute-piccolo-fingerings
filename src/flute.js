const chart = document.getElementById("pane-two-top")

const keysFlute = () => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div>
        <div id="key-lh1" class="key-item">
            <svg height="100" wdith="100">
                <circle cx="50" cy="50" r="40" stroke="silver" stroke-width="3" fill="red" />
            </svg>
        </div>
        <div id="key-lh2" class="key-item">
            <svg height="100" wdith="100">
                <circle cx="50" cy="50" r="40" stroke="silver" stroke-width="3" fill="orange" />
            </svg>
        </div>
        <div id="key-lh3" class="key-item">
            <svg height="100" wdith="100">
                <circle cx="50" cy="50" r="40" stroke="silver" stroke-width="3" fill="yellow" />
            </svg>
        </div>
    </div>
    `
    chart.appendChild(div)
}