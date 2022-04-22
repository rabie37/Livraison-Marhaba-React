import axios from 'axios'
import jwt from '../auth/jwt/useJwt'

export const createProduct = data => {
    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/product/create',
        headers: {
            Authorization: jwt.getToken()
        },
        data: data
    }

    return axios(config)
}

export const infoProduct = id => {
    const config = {
        method: 'get',
        url: `http://localhost:5000/api/product/${id}`,
        headers: {
            Authorization: jwt.getToken()
        }
    }

    return axios(config)
}

export const updateProduct = (id, data) => {
    const config = {
        method: 'put',
        url: `http://localhost:5000/api/product/update/${id}`,
        headers: {
            Authorization: jwt.getToken()
        },
        data: data
    }

    return axios(config)
}