import { ourCars } from "./ourCars.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = ourCars()
}

renderAllHTML()