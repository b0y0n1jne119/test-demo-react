import React from 'react';


class MyComponent extends React.Component {

    state = {
        name: 'Minh Duc',
        address: 'Ha Noi',
        age: 26
    }

    //JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and i'm {this.state.age} years old
            </div>
        );
    }
}

export default MyComponent;