


import { getWheels } from "./database.js"

const wheels = getWheels()

export const carWheels = () => {
    let html = "<ul>"

    const wheelStuff = wheels.map( (wheel) => {
        return `
        <li>
        <input type="radio" name="wheel" value="${wheel.id}">${wheel.style} ${wheel.wheelColor}
        </li>
        `
    })

    html += wheelStuff.join("")
    
    html += "</ul>"
    return html
}