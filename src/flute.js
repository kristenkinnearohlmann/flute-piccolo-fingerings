const keysFlute = () => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div>
        <div id="key-lh1" class="key-item">
            <svg height="40" wdith="40">
                <circle cx="20" cy="20" r="15" stroke="silver" stroke-width="3" fill="red" />
            </svg>
        </div>
        <div id="key-lh2" class="key-item">
            <svg height="30" wdith="30">
                <circle cx="15" cy="15" r="10" stroke="silver" stroke-width="3" fill="orange" />
            </svg>
        </div>
        <div id="key-lh3" class="key-item">
            <svg height="30" wdith="30">
                <circle cx="15" cy="15" r="10" stroke="silver" stroke-width="3" fill="yellow" />
            </svg>
        </div>
    </div>
    `
    chart.appendChild(div)
}