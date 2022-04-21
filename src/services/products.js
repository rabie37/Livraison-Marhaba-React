import axios from 'axios'
import jwt from '../auth/jwt/useJwt'

export const createProduct = data => {
    console.log('create Product data : ', data)

    const formData = new FormData()

    formData.append(
        'image',
        data.image,
        data.image.name
    )

    formData.append('name', data.name)
    formData.append('categoryId', data.categoryId.value)
    formData.append('price', data.price)
    formData.append('decsription', data.decsription)

    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/product/create',
        headers: {
            Authorization: jwt.getToken()
        },
        data: formData
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
        method: 'post',
        url: `http://localhost:5000/api/product/update/${id}`,
        headers: {
            Authorization: jwt.getToken()
        },
        data: data
    }

    return axios(config)
}
