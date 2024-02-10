// Button
type ButtonState = {
    id: string;
    text: string;
    disabled: boolean;
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
    private render() {
        const button = `<button id="${this.state.id}" disabled="${this.state.disabled}">${this.state.text}</button>`;
        console.log(button)
    }
}

const button = new Button({ id: 'example-button', text: 'Button Content', disabled: false });

button.setState({ ...button.getState(), disabled: true });
button.setState({ ...button.getState(), text: 'Updated text' });

// Example:
// Input, example state: (id, value, placeholder, label, type)
// Video player: (time, volume, mute, play, pause, stop)
// Channel Item: (active, color, name)
// Message Item: (readed, sended, author, content, date)
