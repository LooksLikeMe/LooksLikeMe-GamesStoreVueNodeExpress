import {getProduct, getProducts} from '@/services/products'

const mutations = {
    setProduct(state, product) {
        state.product = product
    },
    setProducts(state, products) {
        state.products = products
    },
    setProductErr(state, err){
        state.productErr = err
    }
}
const action = {
    async fetchProduct({commit}, id) {
        try {
            const product = await getProduct(id)
            commit('setProduct', product)
        } catch (err) {
            commit('setProductErr', err)
        }
    },
    async fetchProducts() {
        try {
            const products = await getProducts(id)
            commit('setProducts', products)
        } catch (err) {
            commit('setProductErr', err)
        }
    }
}
const getters = () => {
    product: ({ product }) => product
    products: ({ products }) => products
    productErr: ({ productErr }) => productErr

}
const state = () => ({
    product: {},
    products: [],
    productErr: null
})
export default {
    mutations,
    action,
    getters,
    state
}