import React from 'react';


class MyComponent extends React.Component {

    state = {
        name: 'Default',
        address: 'Ha Noi',
        age: 31
    }

    handleClick(event) {
        console.log(">> Tuổi của tui là ", this.state.age)

        this.setState({
            name: 'Hooyin Kyoma',
            age: Math.floor((Math.random() * 31) + 1)
        });
    };

    handleOnMoverOver(event) {
        console.log(">> Hello I'm Okabe")
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    //JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and i'm {this.state.age} years old
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;