class DatabaseConnection {
    constructor() {}

    private static instance: DatabaseConnection;

    private host: string;

    /**
     * getInstace
     */
    public static getInstace() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection()
        }

        return DatabaseConnection.instance
    }

    /**
     * setHost
     */
    public setHost(newHost: string) {
        this.host = newHost
    }

    /**
     * getHost
     */
    public getHost() {
        return this.host
    }
}

const dbConnection1 = DatabaseConnection.getInstace()
dbConnection1.setHost('localhost')

// localhost
console.log(dbConnection1.getHost());

const anotherDBConnection = DatabaseConnection.getInstace()

// localhost
console.log(anotherDBConnection.getHost());
