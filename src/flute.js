const chart = document.getElementById("pane-two-top")

const mainKey = () => {
    const div = document.createElement("div")
    div.innerHTML = `
        <svg height="100" wdith="100">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        </svg>
    `
    chart.appendChild(div)
}