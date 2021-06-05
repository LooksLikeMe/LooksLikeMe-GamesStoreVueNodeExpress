import boom from 'boom'

const genericCrud = (model) => ({
    async get({ params: { id } }, req, res) {
        try {
            const item = await model.findById(id)
            return res.status(200).send(item)
        } catch (err) {
            throw res.status(400).send(boom.boomify(err))
        }
    },
    async getAll(req, res) {
        try {
            console.log('hey')
            const items = await model.find()
            return res.status(200).send(items)
        } catch (err) {
            throw res.status(400).send(boom.boomify(err))
        }
    },
    async create({ body }, req, res) {
        try {
            const item = new model(body)
            const newItem = await item.save()
            return res.status(200).send(newItem)
        } catch (err) {
            throw res.status(400).send(boom.boomify(err))
        }
    },
    async update({ body, params: { id } }, res) {
        try {
            const item = await model.findByIdAndUpdate(id, body, { new: true })
            return res.status(200).send(item)
        } catch (err) {
            throw res.status(400).send(boom.boomify(err))
        }
    },
    async delete({ params: { id } }, req, res) {
        try {
            await model.findByIdAndDelete(id)
            return res.status(200).send({ status: 'OK', message: 'Продукт удален' })
        } catch (err) {
            throw res.status(400).send(boom.boomify(err))
        }
    }
})

export default genericCrud