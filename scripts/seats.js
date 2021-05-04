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