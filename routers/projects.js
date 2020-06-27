const express = require('express')
const data = require('../models/projects')


const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await data.find()
        res.status(200).json(projects)
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