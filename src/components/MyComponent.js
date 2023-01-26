import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';


class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Minh Duc", age: "11" },
            { id: 2, name: "The Dung", age: "24" },
            { id: 3, name: "Duc Tu", age: "25" },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    //JSX
    render() {
        //DRY: don't repeat yourself
        return (

            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /><br />
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                    />
                </div>

                <div className='b'>

                </div>
            </>
        );
    }
}

export default MyComponent;