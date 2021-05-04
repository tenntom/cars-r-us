import { getSeats, setSeat } from "./database.js"

const seats = getSeats()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "seat") {
            const[,seatId] = event.target.value.split("--")
            setSeat(parseInt(seatId))
        }
    }
)

//setSeat function adds the matched item to the Order Builder

//carSeat creates the set radio buttons

export const carSeat = () => {
    let html = "<ul>"

    const seatstuff = seats.map( (seat) => {
        return `
        <li>
        <input type="radio" name="seat" value="seat--${seat.id}">${seat.color} ${seat.material}
        </li>
        `
    })

    html += seatstuff.join("")
    
    html += "</ul>"
    return html
}