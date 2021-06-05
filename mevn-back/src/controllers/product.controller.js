import genericCrud from './generic.controller.js'
import Product from '../model/Product.js'

export default {
    ...genericCrud(Product)
}