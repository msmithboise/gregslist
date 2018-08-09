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
          <p><b>Price:</b>  ${house.price}</p>
          <p><b>Square Footage:</b>  ${house.squareFt}</p>
          <p><b>Location:</b>  ${house.location}</p>
          <p><b>Color:</b>  ${house.color}</p>
          <img class="url" src="${house.imgUrl}" alt="house">
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

