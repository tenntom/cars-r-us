import { getStyles, setStyle } from "./dataAccess.js"

const styles = getStyles()

//event to set in orderBuilder
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            const [, styleId] = event.target.value.split("--")

            setStyle(parseInt(styleId))
        }
    }
)




//display menu
export const carStyles = () => {
    let html = "<ul class='styles-list'>"

    const styleStuff = styles.map((style) => {
        return `
        <li class=style-item>
        <input type="radio" name="style" value ="style--${style.id}" class="style-text">${style.name}
        </li>
        `
    })

    html += styleStuff.join("")
    html += "</ul>"
    return html
}