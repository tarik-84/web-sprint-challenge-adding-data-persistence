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

router.get('/:id', async (req, res, next) => {
    try {
        const project = await data.findById(req.params.id)
        res.status(200).json(project)
    }catch(err) {
        next(err)
    } 
})

router.get('/:id/resources', async (req, res, next) => {
    try{
        const projectResources = await data.findProjectResources(req.params.id)
        res.json(projectResources) 
    }catch(err) {
        next(err)
    }
})


router.get('/:id/tasks', async (req, res, next) => {
    try{
        const projectTasks = await data.findProjectTasks(req.params.id)
        res.json(projectTasks) 
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