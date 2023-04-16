const BaseRepository = require('./../repository/base/baseRepository')

//criação da classe

class CarService {
    constructor({cars}) {
        this.carRepository = new BaseRepository({ file:cars })
    }
    /*
    test(id){
        return this.carRepository.find(id)
    }
    */
    //recebe uma lista como parâmetro
    getRandomPositionFromArray(list) {
        //pega o tamanho da lista
        const listLength = list.length
        //faz o arrendodamento do que vem randomicamente
        return Math.floor(
            Math.random() * (listLength)
        )
    }

    async getAvailableCar(carCategory) {
        return null
    }
}

module.exports = CarService