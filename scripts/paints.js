import { getPaints } from "./database.js"

const paints = getPaints()

export const carPaint = () => {
    let html = "<ul>"

    const paintStuff = paints.map( (paint) => {
        return `
        <li>
        <input type="radio" name="paint" value="${paint.id}">${paint.color}
        </li>
        `
    })

    html += paintStuff.join("")
    
    html += "</ul>"
    return html
}