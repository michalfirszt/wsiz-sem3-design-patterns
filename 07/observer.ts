interface WeatherForecastSubject {
    registerObserver: (observer: WeatherObserver) => void;
    removeObserver: (observer: WeatherObserver) => void;
    notifyObservers: () => void;
}

interface WeatherObserver {
    updateTemerature: (temerature: number) => void;
}

class WeatherForecast implements WeatherForecastSubject {
    constructor() {}

    private observers: WeatherObserver[] = [];
    private temerature: number = 0;

    /**
     * setTemperature
     */
    public setTemperature(newTemerature: number) {
        this.temerature = newTemerature;

        this.notifyObservers()
    }

    /**
     * registerObserver
     */
    public registerObserver(observer: WeatherObserver) {
        this.observers.push(observer)
    }

    /**
     * removeObserver
     */
    public removeObserver(observer: WeatherObserver) {
        this.observers.filter((currentObserver) => {
            return currentObserver !== observer
        })
    }

    /**
     * notifyObservers
     */
    public notifyObservers() {
        this.observers.forEach((currentObserver) => {
            currentObserver.updateTemerature(this.temerature)
        })
    }
}

class WeatherWebsite implements WeatherObserver {
    constructor(weatherForecast: WeatherForecast) {
        weatherForecast.registerObserver(this)
    }

    /**
     * updateTemerature
     */
    public updateTemerature(temerature: number) {
        console.log(`WeatherWebsite update: new temerature: ${temerature}`);
    }
}

class WeatherMobileApp implements WeatherObserver {
    constructor(weatherForecast: WeatherForecast) {
        weatherForecast.registerObserver(this)
    }

    /**
     * updateTemerature
     */
    public updateTemerature(temerature: number) {
        console.log(`new mobile app update:`);
        console.log(`new temerature: ${temerature}`);
    }
}

const weatherForecast = new WeatherForecast()
const weatherWebsite = new WeatherWebsite(weatherForecast)
const weatherMobileApp = new WeatherMobileApp(weatherForecast)

weatherForecast.setTemperature(15)

// Examples:
// Likes and views counter
// Message communication
// Online store: newsletter
// System update notification
