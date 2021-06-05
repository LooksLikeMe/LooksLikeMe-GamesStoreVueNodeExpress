import mongoose from 'mongoose'
const { Schema, model } = mongoose

const categorySchema = new Schema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

export default model('Category', categorySchema)