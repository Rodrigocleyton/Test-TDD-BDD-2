const { describe, it, before, beforeEach, afterEach } = require('mocha')
const CarService = require('./../../src/service/carService')

const  { join } = require('path')
//não se assert em BDD, EM BDD é tudo mais semântico, falado, para que qualquer pessoa possa entender a regra de negócio com mais facilidade
//const assert = require('assert')
const { expect } = require('chai')//dentro dele vem o expert e outros módulos para asserssão. Padrão BDD
const sinon = require('sinon')

//busca dentro da pasta database
const carsDatabase = join(__dirname, './../../database', "cars.json")

const mocks = {
    validCarCategory: require('./../mocks/valid-carCategory.json'),
    validCar: require('./../mocks/valid-car.json'),
    validCustomer: require('./../mocks/valid-customer.json')
}

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

    //cria um sandbox para que cada teste que rodar, ele limpe todas as instâncias para garantir que nenhuma instância seja corrompida durante a execução
    //antes de cada it cria uma instãncia vazia do sinon
    beforeEach(() =>{
        sandbox = sinon.createSandbox()
    })
    //depois de cada item que mudarem o objeto será resetado
    afterEach(()=>{
        sandbox.restore()
    })

    it('should retrieve a random positionfrom an array' , () => {
        const data = [0, 1, 2, 3, 4]
        const result = carService.getRandomPositionFromArray(data)
        //é esperado um valor menor do que o data.length e precisa ser maior ou igual a  0
        expect(result).to.be.lte(data.length).and.be.gte(0)
    })

    it('should choose the first id from de carId in carCategory', () => {
        const carCategory = mocks.validCarCategory
        const carIndex = 0//para pegar sempre o primeiro carro

        sandbox.stub(
            carService,
            carService.getRandomPositionFromArray.name
        ).returns(carIndex)//quando chamar retornará 0


        const result = carService.chooseRandomCar(carCategory)
        const expected = carCategory.carIds[carIndex]//espera que pegar o id 0
        expect(result).to.be.equal(expected)

    })
    /*
    //deverá retornar um carro disponível
    it('given a carCategory it should return an available car ', async () => {
        const car = mocks.validCar
        //cria uma instância imutável para não afetar os outros testes, não vai modificar o objeto pai
        const carCategory = Object.create(mocks.validCarCategory)
        carCategory.ids = [car.id]


        const customer = mocks.validCustomer

        const result = await carService.getAvailableCar(carCategory)
        const expected = car

        //assert.deepStrictEqual(result, expected)
        //console.log('result', result)
        expected(result).to.be.deep.equal(expected)
    })
    */
})