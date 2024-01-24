const Account = require('../models/Accounts')
const mongoose = require('mongoose')

// get all accs
const getAllAccs = async (req, res) => {
    const accounts = await Account.find({})

    res.send(accounts);
}

// get single acc
const getAcc = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such account'})
    }

    const account = await Account.findById(id)

    if (!account) {
        return res.status(404).json({error: 'No such account'})
    } else {
        return res.status(200).json(account)
    }
}

// create new acc
const createAcc = async (req, res) => {
    const {userId, email, password} = req.body

    // add doc to db
    try {
        const account = await Account.create( {userId, email, password} )
        res.send(account)
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

// delete acc
const deleteAcc = async (req, res) => {
    const { userId } = req.params

    const account = await Account.findOneAndDelete( {userId: userId} )

    if (!account) {
        return res.status(400).json({error: 'No such account'})
    }

    res.status(200).json(account);
}

// update acc
const updateAcc = async (req, res) => {
    const { userId } = req.params

    const account = await Account.findOneAndUpdate( {userId: userId}, {
        ...req.body
    } )

    if (!account) {
        return res.status(400).json({error: 'No such account'})
    }

    const newInfo = await Account.find( {userId: userId} )

    res.status(200).json(newInfo)
}


module.exports = {
    getAllAccs,
    getAcc,
    createAcc,
    deleteAcc,
    updateAcc
}