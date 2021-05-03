import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            const [prompt, paintId] = event.target.value.split("--")
            setPaint(parseInt(paintId))
        }
    }
)

export const carPaint = () => {
    let html = "<ul>"

    const paintStuff = paints.map((paint) => {
        return `
        <li>
        <input type="radio" name="paint" value="paint--${paint.id}">${paint.color}
        </li>
        `
    })

    html += paintStuff.join("")

    html += "</ul>"
    return html
}