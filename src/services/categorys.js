import axios from 'axios'
import jwt from '../auth/jwt/useJwt'

export const createCategory = data => {
    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/category/create',
        headers: {
            Authorization: jwt.getToken()
        },
        data: data
    }

    return axios(config)
}

export const infoCategory = id => {
    const config = {
        method: 'get',
        url: `http://localhost:5000/api/category/${id}`,
        headers: {
            Authorization: jwt.getToken()
        }
    }

    return axios(config)
}

export const updateCategory = (id, data) => {
    const config = {
        method: 'put',
        url: `http://localhost:5000/api/category/update/${id}`,
        headers: {
            Authorization: jwt.getToken()
        },
        data: data
    }

    return axios(config)
}