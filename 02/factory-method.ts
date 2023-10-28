class Book {
    constructor() {}

    private status: string

    /**
     * order
     */
    public order() {
        console.log('new book order')
    }
}

class Shop {
    constructor() {}

    /**
     * createBook
     */
    public createBook() {
        const book = new Book()

        return book
    }

    /**
     * orderBook
     */
    public orderBook() {
        
    }

    /**
     * orderBoardGame
     */
    public orderBoardGame() {
        
    }
}

// const shop = new Shop()

// const bookNumber1 = shop.createBook()
// bookNumber1.order()

class Profile {
    constructor(phoneNumberValue: number) {
        this.phoneNumber = phoneNumberValue

        console.log('user profile created')
    }

    public phoneNumber: number
}

class User {
    constructor(name: string) {
        this.username = name
    }

    public username: string

    /**
     * createProfile
     */
    public createProfile(userPhoneNumber: number) {
        const userProfile = new Profile(userPhoneNumber)

        return userProfile
    }
}

const user1 = new User('Mike')
user1.createProfile(123)
