import genericCrud from './generic.controller.js'
import Category  from '../model/Category.js'

export default {
    ...genericCrud(Category)
}