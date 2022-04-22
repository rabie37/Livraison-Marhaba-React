import axios from 'axios'
import jwt from '../auth/jwt/useJwt'

export const createCommand = data => {
    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/command/create',
        headers: {
            Authorization: jwt.getToken()
        },
        data: data
    }

    return axios(config)
}

export const infoCommand = id => {
    const config = {
        method: 'get',
        url: `http://localhost:5000/api/command/${id}`,
        headers: {
            Authorization: jwt.getToken()
        }
    }

    return axios(config)
}

export const updateCommand = (id, data) => {
    const config = {
        method: 'put',
        url: `http://localhost:5000/api/command/update/${id}`,
        headers: {
            Authorization: jwt.getToken()
        },
        data: data
    }

    return axios(config)
}