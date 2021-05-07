
import { database } from "./database.js"

// I don't think I need this but maybe.
// import const getOrderBuilder = {...database.orderBuilder}


export const getPaints = () => {
    return [...database.paints]
}

export const getSeats = () => {
    return [...database.seats]
}

export const getTech = () => {
    return [...database.dashboard]
}

export const getWheels = () => {
    return [...database.wheels]
}

export const getStyles = () => {
    return [...database.carStyles]
}

export const getOrders = () => {
    return [...database.orders]
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setSeat = (id) => {
    database.orderBuilder.seatId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}


// This function takes the object from orderbuilder and puts it in the order array.
//It also checks to make sure all items are selected and removes any items in the orderBuilder once it becomes an order.
export const addOrder = () => {
    if (
        "paintId" in database.orderBuilder &&
        "techId" in database.orderBuilder &&
        "wheelId" in database.orderBuilder &&
        "seatId" in database.orderBuilder &&
        "styleId" in database.orderBuilder
    ) {
        const newOrder = { ...database.orderBuilder }

        newOrder.id = (
            database.orders.length > 0
                ? [...database.orders].pop().id + 1
                : 1)

        newOrder.timestamp = Date.now()

        database.orders.push(newOrder)

        database.orderBuilder = {}

        document.dispatchEvent(new CustomEvent("stateChanged"))
    } else {
        window.alert("Please complete your selections before placing an order.")
    }
}