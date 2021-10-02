const chart = document.getElementById("pane-two-top")

const mainKey = () => {
    const div = document.createElement("div")
    div.innerHTML = `
        <svg height="100" wdith="100">
            <circle cx="50" cy="50" r="40" stroke="silver" stroke-width="3" fill="black" />
        </svg>
        <svg height="50" wdith="50">
            <circle cx="25" cy="25" r="20" stroke="silver" stroke-width="3" fill="none" />
        </svg>
    `
    chart.appendChild(div)
}