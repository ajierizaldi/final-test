const express = require('express')
const router = express.Router()
const { getProduct, createProduct, getProductById, updateProduct, deleteProduct, historyProduct } = require('../controllers/Form')
const { VerifyUser } = require('../middleware/AuthUser')


router.get('/products',
    VerifyUser,
    getProduct)
router.get('/products/:id',
    VerifyUser,
    getProductById)
router.get('/history',
    VerifyUser,
    historyProduct)
router.post('/products',
    VerifyUser,
    createProduct)
router.patch('/products/:id',
    VerifyUser,
    updateProduct)
router.delete('/products/:id',
    VerifyUser,
    deleteProduct)

module.exports = router;