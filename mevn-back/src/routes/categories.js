import Router from 'express-promise-router'
const router = Router()
import category from '../controllers/category.controller.js'

router.route('/:id').get(category.get)
router.route('/').post(category.create)
router.route('/').get(category.getAll)
router.route('/:id').put(category.update)
router.route('/:id').delete(category.delete)

export default router