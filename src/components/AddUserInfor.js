import React from 'react';

class AddUserInfor extends React.Component {

    state = {
        name: '',
        address: 'Ha Noi',
        age: ''
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: '4',
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age} years old
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <br />
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfor;