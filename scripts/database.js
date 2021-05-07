export const database = {
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
    carStyles: [{
        id: 1,
        name: "Car",
        priceMarkup: 1
    }, {
        id: 2,
        name: "SUV",
        priceMarkup: 1.5
    }, {
        id: 3,
        name: "Truck",
        priceMarkup: 2.25
    }], 
    orders: [
        {
            id: 1,
            paintId: 1,
            seatId: 1,
            techId: 1,
            wheelId: 1,
            styleId: 2,
            timestamp: 1620144693000
        }
    ],
    orderBuilder: {}
}

