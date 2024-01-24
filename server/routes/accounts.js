const express = require('express')

const {
    getAllAccs, getAcc, createAcc, deleteAcc, updateAcc
} = require('../controllers/accountController')


const router = express.Router()

// GET all accounts
router.get('/', getAllAccs)

// GET a single account
router.get('/:id', getAcc)

// POST a new account
router.post('/', createAcc)

// DELETE an account
router.delete('/:userId', deleteAcc)

// UPDATE an account
router.patch('/:userId', updateAcc)

module.exports = router