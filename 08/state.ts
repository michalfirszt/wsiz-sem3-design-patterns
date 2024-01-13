// Button
type ButtonState = {
    id: string;
    text: string;
    disabeled: boolean;
}

class Button {
    constructor(buttonDefaultState: ButtonState) {
       this.state = buttonDefaultState;

       this.render();
    }

    private state: ButtonState;

    /**
     * getState
     */
    public getState() {
        return this.state;
    }

    /**
     * setState
     */
    public setState(newState: ButtonState) {
        this.state = newState;

        this.render();
    }

    /**
     * render
     */
    public render() {
        const button = `<button id="${this.state.id}" disabled="${this.state.disabeled}">${this.state.text}</button>`;
        console.log(button)
    }
}

const button = new Button({ id: 'example-button', text: 'Button Content', disabeled: false });

button.setState({ id: 'example-button', text: 'Button Content', disabeled: true });

// #1
// 09:00
// create class (other than Button) to show how to present state design pattern
