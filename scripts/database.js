const database = {
    paints: [{
        id: 1,
        color: "Silver",
        price: 100
    }, {
        id: 2,
        color: "Midnight Blue",
        price: 110
    }, {
        id: 3,
        color: "Firebrick Red",
        price: 120
    }, {
        id: 4,
        color: "Spring Green",
        price: 130
    }],
    seats: [{
        id: 1,
        color: "Beige",
        material: "Fabric",
        price: 200
    }, {
        id: 2,
        color: "Charcoal",
        material: "Fabric",
        price: 210
    }, {
        id: 3,
        color: "White",
        material: "Leather",
        price: 260
    }, {
        id: 4,
        color: "Black",
        material: "Leather",
        price: 270
    }],
    dashboard: [{
        id: 1,
        tech: "Basic Package",
        price: 300
    }, {
        id: 2,
        tech: "Navigation Package",
        price: 400
    }, {
        id: 3,
        tech: "Visibility Package",
        price: 450
    }, {
        id: 4,
        tech: "Ultra Package",
        price: 550
    }],
    wheels: [{
        id: 1,
        size: 17,
        style: "Radial",
        wheelColor: "Standard",
        price: 200
    }, {
        id: 2,
        size: 17,
        style: "Radial",
        wheelColor: "Black",
        price: 240
    }, {
        id: 3,
        size: 18,
        style: "Spoke",
        wheelColor: "Silver",
        price: 300
    }, {
        id: 4,
        size: 18,
        style: "Spoke",
        wheelColor: "Black",
        price: 320
    }],
    orders: [
        {
        id: 1,
        paintId: 1,
        seatId: 1,
        techId: 1,
        wheelId: 1,
        timestamp: 1620144693000
    }
],
    orderBuilder: {}
}

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


export const addOrder = () => {
    if (
        "paintId" in database.orderBuilder &&
        "techId" in database.orderBuilder &&
        "wheelId" in database.orderBuilder &&
        "seatId" in database.orderBuilder
    ) {
    const newOrder = { ...database.orderBuilder }

    newOrder.id = (
        database.orders.length > 0
        ? [...database.orders].pop().id + 1
        : 1)

    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)

    // console.log(database)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
    } else {
        window.alert("Please complete your selections before placing an order, bro.")
    }
}