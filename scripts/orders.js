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

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const totalCost = foundWheel.price + foundPaint.price + foundTech.price + foundSeat.price

    const costString = totalCost.toLocaleString ("en-US", {
        style: "currency",
        currency: "USD"
    })

    const dateObject = order.timestamp

    const timeFormatted = dateObject.toLocaleString()
    // const timeFormatted = dateObject.toLocaleString("en-US", {
    //     day: "numeric",
    //     year: "numeric",
    //     hour: "numeric",
    //     minute: "numeric",
    //     second: "numeric"
    // })
    // const timeFormatted = dateObject.toLocaleString("en-US", {
    //     hour: '2 digit',
    //     minute: '2-digit',
    //     second: '2-digit'
    // })



    return `
    <li>
    Order ${order.id} was placed on ${timeFormatted} and includes ${foundWheel.wheelColor} ${foundWheel.style} wheels,  ${foundPaint.color} paint, a ${foundTech.tech} dashboard, and ${foundSeat.color} ${foundSeat.material} seats. The total cost was ${costString}.
    </li>
    `
}



export const carOrders = () => {
    const showOrders = getOrders()
    let html = "<ul>"

    const orderDetails = showOrders.map(shoppingCart)

    html += orderDetails.join("")
    html += "</ul>"
    return html
}
