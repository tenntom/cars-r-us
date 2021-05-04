


import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            const[,wheelId] = event.target.value.split("--")
            setWheels(parseInt(wheelId))
        }
    }
)

//setPaint function adds the matched item to the Order Builder

//carWheels function 

export const carWheels = () => {
    let html = "<ul>"

    const wheelStuff = wheels.map( (wheel) => {
        return `
        <li>
        <input type="radio" name="wheel" value="wheel--${wheel.id}">${wheel.style} ${wheel.wheelColor}
        </li>
        `
    })

    html += wheelStuff.join("")
    
    html += "</ul>"
    return html
}