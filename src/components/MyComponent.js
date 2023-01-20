import React from 'react';


class MyComponent extends React.Component {

    state = {
        name: 'Minh Duc',
        address: 'Ha Noi',
        age: 31
    }

    handleClick() {
        console.log(">> Hello I'm Kurisu")
    };

    handleOnMoverOver(event) {
        console.log(">> Hello I'm Okabe")
    };

    //JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and i'm {this.state.age} years old
                <button onMouseOver={this.handleOnMoverOver}>
                    Okabe Rintaro
                </button>
                <button onClick={this.handleClick}>
                    Kurisu
                </button>
            </div>
        );
    }
}

export default MyComponent;