import { getTech } from "./database.js"

const dashboards = getTech()

export const carTech = () => {
    let html = "<ul>"

    const dashboardStuff = dashboards
.map( (tech) => {
        return `
        <li>
        <input type="radio" name="tech" value="${tech.id}"> ${tech.tech}
        </li>
        `
    })

    html += dashboardStuff.join("")
    
    html += "</ul>"
    return html
}