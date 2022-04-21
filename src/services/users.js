import axios from 'axios'
import jwt from '../auth/jwt/useJwt'

export const createUser = data => {
    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/user/create',
        headers: {
            Authorization: jwt.getToken()
        },
        data: {
            email: data.email,
            password: data.password,
            role: data.role.value
        }
    }

    return axios(config)
}

export const infoUser = id => {
    const config = {
        method: 'get',
        url: `http://localhost:5000/api/user/${id}`,
        headers: {
            Authorization: jwt.getToken()
        }
    }

    return axios(config)
}

export const updateUser = (id, data) => {
    const config = {
        method: 'post',
        url: `http://localhost:5000/api/user/update/${id}`,
        headers: {
            Authorization: jwt.getToken()
        },
        data: {
            email: data.email,
            password: data.password,
            role: data.role.value
        }
    }

    return axios(config)
}

export const blockUser = (id) => {
    const config = {
        method: 'get',
        url: `http://localhost:5000/api/user/status/change/${id}/0`,
        headers: {
            Authorization: jwt.getToken()
        }
    }

    return axios(config)
}