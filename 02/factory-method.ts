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

const shop = new Shop()

const bookNumber1 = shop.createBook()
bookNumber1.order()
