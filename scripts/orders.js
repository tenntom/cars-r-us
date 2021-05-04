import { getOrders, getPaints, getSeats, getTech, getWheels } from "./database.js"


// shoppingCart brings all the information together to be displayed in the Orders section. 

const shoppingCart = (order) => {
    const paints = getPaints ()
    const seats = getSeats()
    const tech = getTech()
    const wheels = getWheels()

    //These find methods will return the entire object based on the id number so that information is available in the orders display.
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

    //This adds up all the prices.
    const totalCost = foundWheel.price + foundPaint.price + foundTech.price + foundSeat.price

    const costString = totalCost.toLocaleString ("en-US", {
        style: "currency",
        currency: "USD"
    })

    const dateObject = new Date(order.timestamp)
    const timeFormatted = dateObject.toLocaleString()


    return `
    <li>
    Order ${order.id} was placed on ${dateObject} and includes ${foundWheel.wheelColor} ${foundWheel.style} wheels,  ${foundPaint.color} paint, a ${foundTech.tech} dashboard, and ${foundSeat.color} ${foundSeat.material} seats. The total cost was ${costString}.
    </li>
    `
}


//this function iterates through the orders and produces the order sentence above for each order using .map.
export const carOrders = () => {
    const showOrders = getOrders()
    let html = "<ul>"

    const orderDetails = showOrders.map(shoppingCart)

    html += orderDetails.join("")
    html += "</ul>"
    return html
}
