const express = require('express')
const data = require('../models/tasks')


const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resource = await data.find()
        res.status(200).json(resource)
    }catch(err) {
        next(err)
    } 
})


router.post('/', async (req, res, next) => {
    try {
        const project = await data.add(req.body)
        res.status(201).json(project)
    }catch(err) {
        next(err)
    } 
})



module.exports = router