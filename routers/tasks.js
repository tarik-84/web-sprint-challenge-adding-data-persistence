const express = require('express')
const data = require('../models/tasks')


const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await data.find()
        res.status(200).json(tasks)
    }catch(err) {
        next(err)
    } 
})


router.get('/:id', async (req, res, next) => {
    try {
        const task = await data.findTaskById(req.params.id)
        res.status(200).json(task)
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