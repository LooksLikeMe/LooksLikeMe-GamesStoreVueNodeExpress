import express from 'express'
import mongoose from 'mongoose'
// import routes from './src/routes/index.js'
import categoriesRoute from './src/routes/categories.js'
import productRoute from './src/routes/products.js'

//подключение к mongodb
mongoose.connect(
    'mongodb+srv://Mikhail:xCGEcAM8OfiwSTB9@cluster0.frvqe.azure.mongodb.net/shopbd?retryWrites=true&w=majority',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
//инициализация приложения
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/categories', categoriesRoute)
app.use('/products', productRoute)


//обьявим роуты
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})