import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from 'react';
import TableUser from './TableUser';
import ModalUpdateUser from './ModalUpdateUser';
import ModalDeleteUser from './ModalDeleteUser';

export default function ManageUser(props) {

    const [showModalCreatUser, setShowModalCreatUser] = useState(false);
    const [showmodalUpdateUser, setShowmodalUpdateUser] = useState(false);
    const [dataUpdate, setdataUpdate] = useState({});
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleClickBtnUpdate = (user) => {
        setShowmodalUpdateUser(true);
        setdataUpdate(user)
    }

    const resetUpdatedata = () => {
        setdataUpdate({})
    }

    const handleClickBtnDel = (user) => {
        setShowModalDelete(true);
    }

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
                    <TableUser
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDel={handleClickBtnDel}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreatUser}
                    setShow={setShowModalCreatUser} />
                <ModalUpdateUser
                    show={showmodalUpdateUser}
                    setShow={setShowmodalUpdateUser}
                    dataUpdate={dataUpdate}
                    resetUpdatedata={resetUpdatedata}
                />
                <ModalDeleteUser
                    show={showModalDelete}
                    setShow={setShowModalDelete}
                />
            </div>
        </div >
    )
}