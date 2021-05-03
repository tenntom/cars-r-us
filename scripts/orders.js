import { getOrders, getPaints, getSeats, getTech, getWheels } from "./database.js"

const shoppingCart = (order) => {
    const paints = getPaints ()
    const seats = getSeats()
    const tech = getTech()
    const wheels = getWheels()

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundSeat = seats.find(
        (seat) => {
            return seat.id === order.seatId
        }
    )

    const foundTech = tech.find(
        (dashboard) => {
            return dashboard.id === order.techId
        }
    )

    const foundwheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    return `
    <li>
    Order ${order.id} was placed on ${order.time} and includes ${order.wheels},  ${order.paint} paint, a ${order.tech} dashboard, and ${order.seat} seats.
    </li>
    `
}



export const carOrders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const orderDetails = orders.map(shoppingCart)

    html += orderDetails.join("")
    html += "</ul>"
    return html
}
