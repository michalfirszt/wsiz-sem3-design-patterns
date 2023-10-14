abstract class Vehicle {
    constructor(newNumberOfWheels: number) {
        this.numberOfWheels = newNumberOfWheels
    }

    private numberOfWheels: number = 0
    private speed: string = '50km/h'
    
    /**
     * getSpeed
     */
    public getSpeed() {
        return this.speed
    }

    /**
     * getNumberOfWheels
     */
    public getNumberOfWheels() {
        return this.numberOfWheels
    }

    /**
     * setNumberOfWheels
     */
    public setNumberOfWheels(value: number) {
        this.numberOfWheels = value
    }
}

class Car extends Vehicle {
    constructor() {
        super(4)
    }

    public engineName: string = ''

    /**
     * setEngineName
     */
    public setEngineName(newEngineName: string) {
        this.engineName = newEngineName
    }
}

let newCar = new Car()
console.log(newCar.getNumberOfWheels())

abstract class Model {
    constructor() {}

    private type: string

    /**
     * create
     */
    public create() {
        
    }

    /**
     * update
     */
    public update() {
        
    }
}

class Article extends Model {
    constructor() {
        super()
    }
}

const article1 = new Article()

article1.create()

// let vehicleNumber1 = new Vehicle(2)
// console.log(vehicleNumber1.getNumberOfWheels())

// vehicleNumber1.setNumberOfWheels(4)
// console.log(vehicleNumber1.getNumberOfWheels())

