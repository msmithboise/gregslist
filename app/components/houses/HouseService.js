import House from '../../models/House.js'
//PRIVATE

const housesApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses',
  timeout: 3000
})

//PUBLIC
export default class HouseService {
  constructor() {

  }
  getHouses(draw) {
    housesApi.get()
      .then(res => {
        let houses = res.data.data.map(rawHouse => {
          return new House(rawHouse)
        })
        draw(houses)
      })

  }

  addHouse(formData, draw) {
    let newHouse = new House({
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      levels: formData.levels.value,
      year: formData.year.value,
      imgUrl: formData.imgUrl.value,
      price: formData.price.value,
      description: formData.description.value
    })

    housesApi.post('', newHouse)
    .then(res => {
      this.getHouses(draw)
    })

  }

  deleteHouse(id,draw){
    housesApi.delete(id)
    .then(() => {
      this.getHouses(draw)
    })
  }

}















