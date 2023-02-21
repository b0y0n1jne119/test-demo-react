import axios from 'axios';

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('emai', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('image', image);

    return axios.post('', data);
}

const putUpdateUser = (username, role) => {
    const data = new FormData();
    data.append('username', username);
    data.append('role', role);

    return axios.put('', data);
}

export { postCreateNewUser, putUpdateUser }