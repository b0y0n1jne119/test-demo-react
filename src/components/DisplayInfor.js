import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss';
import screen from './../logo.svg';


const DisplayInfor = (props) => {
    const { listUsers } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert("You gust")
            }
        }, [listUsers]
    );

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                <div style={{ color: 'blue' }}>My name's is {user.name}</div>
                                <div>My age's is {user.age}</div>
                                <hr />
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete </button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;