// ** Redux Imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import jwt from '../../../../src/auth/jwt/useJwt'


// ** Axios Imports
import axios from 'axios'

const token = jwt.getToken().replace(/"/g, '')
console.log(token)

axios.defaults.headers = {
    Authorization: 'none token set...'
}

export const getData = createAsyncThunk('datatables/getData', async params => {
    console.log('params : ', params)
    let response = []

    try {
        response = await axios.get('http://localhost:5000/api/user/list')
    } catch (error) {
        console.log(error)
    }

    console.log('response users : ', response)

    const data = response.data.user

    return { allData: data, data: data, totalPages: data.length, params }
})
