import { getTech, setTech } from "./database.js"

const dashboards = getTech()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            const[,techId] = (event.target.value.split("--"))
            setTech(parseInt(techId))
        }
    }
)

//setTech function adds the matched item to the Order Builder

//carTech sets up the radio button list

export const carTech = () => {
    let html = "<ul>"

    const dashboardStuff = dashboards
.map( (tech) => {
        return `
        <li>
        <input type="radio" name="tech" value="tech--${tech.id}"> ${tech.tech}
        </li>
        `
    })

    html += dashboardStuff.join("")
    
    html += "</ul>"
    return html
}