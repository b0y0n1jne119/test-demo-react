import React, { useState } from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';


// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "Minh Duc", age: "11" },
//             { id: 2, name: "The Dung", age: "24" },
//             { id: 3, name: "Duc Tu", age: "25" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userID) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userID);
//         this.setState({
//             listUsers: listUsersClone
//         });
//     }

//     //JSX
//     render() {
//         //DRY: don't repeat yourself
//         return (

//             <>
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br /><br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>

//                 <div className='b'>

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setlistUsers] = useState(
        [
            { id: 1, name: "Minh Duc", age: "11" },
            { id: 2, name: "The Dung", age: "24" },
            { id: 3, name: "Duc Tu", age: "25" },
        ]
    );

    const handleAddNewUser = (userObj) => {
        setlistUsers(
            [
                userObj, ...listUsers
            ]
        )
    }

    const handleDeleteUser = (userID) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userID);
        setlistUsers(listUsersClone);
    }

    return (
        <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /><br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>

            <div className='b'>

            </div>
        </>
    )
}


export default MyComponent;