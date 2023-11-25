class CarBase {
    constructor() {}

    /**
     * openWindow
     */
    public openWindow() {
        console.log('open base car window');
    }

    /**
     * startEngine
     */
    public startEngine() {
        console.log('start car engine');
    }
}

class HybridCar extends CarBase {
    constructor(car: CarBase) {
        super()
        this.baseCar = car
    }

    baseCar: CarBase;

    /**
     * startEngine
     */
    public startEngine() {
        console.log('start electric engine');
    }
}

class HatchbackHybridCar extends HybridCar {
    constructor(car: CarBase) {
        super(car)
    }
}

const baseCar = new CarBase()
const hybridCar = new HybridCar(baseCar)

hybridCar.startEngine()

// #1
// create decorator design pattern example
