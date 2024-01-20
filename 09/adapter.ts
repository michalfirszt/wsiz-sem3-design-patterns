// StandardABC
interface IStandardABC {
    connectCableABC: () => [number, number, number];
}

// StandardXYZ
interface IStandardXYZ {
    connectCableXYZ: () => number;
}

class CableWithStandardABC implements IStandardABC {
    constructor() {}

    private signalA: number = 4;
    private signalB: number = 5;
    private signalC: number = 6;

    /**
     * getSignalA
     */
    public getSignalA() {
        return this.signalA;
    }

    /**
     * getSignalA
     */
    public getSignalB() {
        return this.signalB;
    }

    /**
     * getSignalA
     */
    public getSignalC() {
        return this.signalC;
    }

    /**
     * connectCableABC
     */
    public connectCableABC(): [number, number, number] {
        console.log('CableWithStandardABC connected');
        console.log(`Signal A: ${this.getSignalA()}, Signal B: ${this.getSignalB()}, Signal C: ${this.getSignalC()}`);

        return [this.getSignalA(), this.getSignalB(), this.getSignalC()];
    }
}

class CableWithStandardXYZ implements IStandardXYZ {
    constructor() {}

    private signalXYZ: number = 12;

    /**
     * getSignalXYZ
     */
    public getSignalXYZ() {
        return this.signalXYZ;
    }

    /**
     * connectCableXYZ
     */
    public connectCableXYZ(): number {
        console.log('CableWithStandardXYZ connected');
        console.log(`Signal XYZ: ${this.getSignalXYZ()}`);

        return this.getSignalXYZ();
    }
}

class StandardABCToStandardXYZAdapter implements IStandardXYZ {
    constructor(initialCableData: CableWithStandardABC) {
        this.cableWithStandardABC = initialCableData;
    }

    private cableWithStandardABC: CableWithStandardABC;

    /**
     * connectCableXYZ
     */
    public connectCableXYZ(): number {
        const result = this.cableWithStandardABC.getSignalA() + this.cableWithStandardABC.getSignalB() + this.cableWithStandardABC.getSignalC();

        console.log('CableWithStandardXYZ connected');
        console.log(`Signal XYZ: ${result}`);

        return result;
    }
}

const cableWithStandardABC = new CableWithStandardABC();
const standardABCToStandardXYZAdapter = new StandardABCToStandardXYZAdapter(cableWithStandardABC);

standardABCToStandardXYZAdapter.connectCableXYZ();
