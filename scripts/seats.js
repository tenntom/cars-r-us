import { getSeats } from "./database.js"

const seats = getSeats()

export const carSeat = () => {
    let html = "<ul>"

    const seatstuff = seats.map( (seat) => {
        return `
        <li>
        <input type="radio" name="seat" value="${seat.id}">${seat.color} ${seat.material}
        </li>
        `
    })

    html += seatstuff.join("")
    
    html += "</ul>"
    return html
}