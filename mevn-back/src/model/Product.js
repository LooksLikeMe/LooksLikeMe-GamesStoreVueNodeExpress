import mongoose from 'mongoose'
const { Schema, model} = mongoose

const productSchema = new Schema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: ''
    },
    amount: {
        type: Number,
        default: ''
    },
    imgUrl: {
        type: String,
        default: ''
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

export default model('Product', productSchema)