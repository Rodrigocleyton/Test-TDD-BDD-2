const { describe, it, before } = require('mocha')
const CarService = require('./../../src/service/carService')
const  { join } = require('path')

//busca dentro da pasta database
const carsDatabase = join(__dirname, './../../database', "cars.json")

//suite de testes
describe('carService Suite Tests', () => {
    let carService = {}
    //usando o before antes de rodar qualquer teste o service será iniciado
    before(()=> {
        carService = new CarService({
            //enviado como injeção de dependência para dentro de carService
            // a partir disso a service vai delegar pra repository, e a repository vai ler o arquivo de dentro do json
            cars: carsDatabase
        })
    })

    //deverá retornar um carro disponível
    it('given a carCategory it should return an available car ', async () => {
        const result = await carService.test()
        console.log('result', result)
    })
})