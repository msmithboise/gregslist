import HouseService from "./HouseService.js";



//PRIVATE

let houseService = new HouseService()

function drawHouses(houses) {
    let template = ''
    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `


        
      <div style="outline: 1px solid black" class="col-12">
          <p><b>Bedrooms:</b>  ${house.bedrooms}</p>
          <p><b>Bathrooms:</b>  ${house.bathrooms}</p>
          <p><b>Levels:</b>  ${house.levels}</p>
          <p><b>Description:</b>  ${house.description}</p>
          <p><b>Price:</b>  ${house.price}</p>

          <img class="url" src="${house.imgUrl}" alt="house">
          <button onclick="app.controllers.houseController.deleteHouse('${house.id}')">DELETE</button>
      </div>
      `
    }

    document.getElementById('houses').innerHTML = template


}








//PUBLIC
export default class HouseController {
    constructor() {
       houseService.getHouses(drawHouses)
    }
    addHouse(e) {
        e.preventDefault();
        let formData = e.target
        houseService.addHouse(formData, drawHouses)
        formData.reset()
      




    }


    deleteHouse(houseId){
    houseService.deleteHouse(houseId,drawHouses)
    }
}

