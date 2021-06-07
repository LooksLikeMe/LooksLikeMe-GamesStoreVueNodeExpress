import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1'

export const req = async ({url, method, data = {}}) => {
    const res = axios[method](`${API_URL}/${url}`, data)
    return res
}