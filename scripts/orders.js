import { getOrders } from "./database.js"

const orders = getOrders()

export const carOrders = () => {
    let html = "<ul>"

    const orderDetails = orders.map( (order) => {
        return `
        <li>
        Order ${order.id} was placed on ${order.time}
        </li>
        `
    })

    html += orderDetails.join("")
    html += "</ul>"
    return html
}
