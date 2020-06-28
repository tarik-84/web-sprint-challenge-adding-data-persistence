const express = require('express')
const data = require('../models/resource')


const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await data.find()
        res.status(200).json(resources)
    }catch(err) {
        next(err)
    } 
})


router.get('/:id', async (req, res, next) => {
    try {
        const resource = await data.findResourceById(req.params.id)
        res.status(200).json(resource)
    }catch(err) {
        next(err)
    } 
})


router.post('/', async (req, res, next) => {
    try {
        const resource = await data.add(req.body)
        res.status(201).json(resource)
    }catch(err) {
        next(err)
    } 
})



module.exports = router