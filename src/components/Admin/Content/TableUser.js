import { useState } from "react"

export default function TableUser(props) {

    const [listUsers, setLisUsers] = useState([
        {
            "id": 1,
            "username": "Nguyen Minh Duc",
            "email": 'b0y0n1jne119@gmail.com',
            "role": 'ADMIN'
        },
        {
            "id": 2,
            "username": "Nguyen The Dung",
            "email": 'nguyenminhduc119@gmail.com',
            "role": 'USER'
        }
    ]);

    return (
        <table className='table table-hover table-bordered'>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tr key={`table-users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-warning mx-3" onClick={() => props.handleClickBtnUpdate(item)}>Update</button>
                                    <button className="btn btn-danger">Del</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}