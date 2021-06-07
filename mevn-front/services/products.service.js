import {req} from './generic.service.js'

const getProduct=(id) => {
    req({url: `products/${id}`, method : 'get'})
}

const getProducts = () => {
    req({url: `products`, method : 'get'})
}

export {
    getProduct,
    getProducts
}
