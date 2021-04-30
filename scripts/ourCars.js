import { carTech } from "./dashboard.js"
import { carPaint } from "./paints.js"
import { carSeat } from "./seats.js"
import { carWheels } from "./wheels.js"
import { carOrders } from "./orders.js"

export const ourCars = () => {
    return `
        <h1>Cars R Us!</h1>

        <article class="choices"
            <section class="choices--paints options">
                <h2 class="car--color">Paint</h2>
                <p>${carPaint()}</p>
            </section>
            <section class="choices--seats options">
                <h2>Seats</h2>
                <p> ${carSeat()} </p>
            </section>
            <section class="choices-dashboards options">
                <h2>Dashboard</h2>
                <p>${carTech()}</p>
            </section>
            <section class="choices--wheels options">
                <h2>Wheels</h2>
                 <p>${carWheels()}</p>
            </section>
        </article>

        <article class="orders">
        <h2><em>Orders</em></h2>
        <p>${carOrders()}</p>

        </article>

    `
}