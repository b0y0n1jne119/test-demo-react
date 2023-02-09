import ModalCreateUser from './ModalCreateUser'

export default function ManageUser(props) {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    Table User
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}