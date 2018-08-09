import House from '../../models/House.js'
//PRIVATE

let houses = []

//PUBLIC
export default class HouseService{
    constructor(){

    }
  getHouses(){
      let housesCopy = []

        //same as below
    // for (let i = 0; i < cars.length; i++) {
    //   const car = cars[i];

    // }

    // this is just saying for each 'car'
    //  in the whole cars array do whatever is in the code block 
    houses.forEach(house => {
        housesCopy.push(new House(
          house.price,
          house.squareFt,
          house.location,
          house.color,
          house.imgUrl
        ))
      })
      return housesCopy;
  }
    
  addHouse(formData) {
    let newHouse = new House(
      formData.price.value,
      formData.squareFt.value,
      formData.location.value,
      formData.color.value,
      formData.imgUrl.value
    )
    houses.push(newHouse)
    console.log(houses)

  }
}















