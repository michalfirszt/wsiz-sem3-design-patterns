class CarService {
    constructor() {}

    private carType: string;

    private carColor: string;

    private engineType: string;

    private winterStaff: string;

    private airConditioning: boolean;

    private numberOfDoors: number;

    /**
     * setCarType
     */
    public setCarType(newCarType: string) {
        this.carType = newCarType
    }

    /**
     * setCarColor
     */
    public setCarColor(newCarColor: string) {
        this.carColor = newCarColor
    }

    /**
     * setAirConditioning
     */
    public setAirConditioning(isAirConditioning: boolean) {
        this.airConditioning = isAirConditioning
    }

    /**
     * finishCarOrder
     */
    public finishCarOrder() {
        if ([this.carType, this.engineType].includes(undefined)) {
            console.log('Car type is required')
        } else {
            console.log('Car order finished successfully')
        }
    }
}

let carOrder = new CarService()

carOrder.setCarType('cross')
// carOrder.setCarColor('blue')
// carOrder.setAirConditioning(true)
carOrder.finishCarOrder()


// Create another example of builder pattern:

class GameLevel {
    constructor() {
        
    }
}

class PlayerCreator {
    constructor() {}

    private playerClass: string;
    private eyesColor: string;

    /**
     * setPlayerClass
     */
    public setPlayerClass(newPlayerClass: string) {
        this.playerClass = newPlayerClass
    }

    /**
     * setEyesColor
     */
    public setEyesColor(newEyesColor: string) {
        this.eyesColor = newEyesColor
    }

    /**
     * startNewGame
     */
    public startNewGame() {
        if (!this.playerClass) {
            console.log('Remember to set player class')
        } else {
            // create new object game level
            let level = new GameLevel()
        }
    }
}
