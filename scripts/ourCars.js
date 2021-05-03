import { carTech } from "./dashboard.js"
import { carPaint } from "./paints.js"
import { carSeat } from "./seats.js"
import { carWheels } from "./wheels.js"
import { carOrders } from "./orders.js"

document.addEventListener(
    "button",
    (event) => {
        if (event.target.id === "orderButton") {
            addOrder()
        }
    }
)


export const ourCars = () => {
    return `
        <h1>Cars R Us!</h1>

        <article class="choices">
            <section class="choices--paints options">
                <h2 class="option--heading">Paints</h2>
                ${carPaint()}
            </section>
            <section class="choices--seats options">
                <h2 class= "option--heading">Seats</h2>
                ${carSeat()}
            </section>
            <section class="choices-dashboards options">
                <h2 class = "option--heading">Dashboard</h2>
                ${carTech()}
            </section>
            <section class="choices--wheels options">
                <h2 class = "option--heading">Wheels</h2>
                 ${carWheels()}
            </section>
        </article>
        <article id="orderButton-section">
        <button id="orderButton">Place Order</button>
        </article>

        <article class="orders">
        <h2><em>Orders</em></h2>
        <p>${carOrders()}</p>

        </article>

    `
}