import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from 'react';

export default function ManageUser(props) {

    const [showModalCreatUser, setShowModalCreatUser] = useState(false);


    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary'
                        onClick={() => setShowModalCreatUser(true)}> <FcPlus /> Add new user</button>
                </div>
                <div className='table-users-container'>
                    Table User
                </div>
                <ModalCreateUser
                    show={showModalCreatUser}
                    setShow={setShowModalCreatUser} />
            </div>
        </div >
    )
}