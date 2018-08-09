import HouseService from "./HouseService.js";



//PRIVATE

let houseService = new HouseService()

function drawHouses() {
    let houses = houseService.getHouses()
    let template = ''

    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `
      <div style="outline: 1px solid black" class="col-3">
          <p>Price:  ${house.price}</p>
          <p>Square Footage:  ${house.squareFt}</p>
          <p>Location:  ${house.location}</p>
          <p>Color:  ${house.color}</p>
          <img src="${house.imgUrl}" alt="house">
      </div>
      `
    }

    document.getElementById('houses').innerHTML = template


}








//PUBLIC
export default class HouseController {
    constructor() {
        drawHouses()
    }
    addHouse(triggeredEvent) {
        triggeredEvent.preventDefault();
        let formData = triggeredEvent.target
        houseService.addHouse(formData)
        formData.reset()
        drawHouses()




    }
}

