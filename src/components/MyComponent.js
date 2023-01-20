import React from 'react';


class MyComponent extends React.Component {

    state = {
        name: 'Minh Duc',
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

    //JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and i'm {this.state.age} years old
                <button onMouseOver={this.handleOnMoverOver}>
                    Okabe Rintaro
                </button>
                <button onClick={(event) => { this.handleClick(event) }}>
                    Kurisu
                </button>
            </div>
        );
    }
}

export default MyComponent;