import React, { useState } from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';


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