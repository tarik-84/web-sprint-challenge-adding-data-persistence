const express = require('express')
const projectsRouter = require('./routers/projects')
const resourcesRouter = require('./routers/resources')
const tasksRouter = require('./routers/tasks')


const server = express()

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.use('/projects', projectsRouter)
server.use('/resources', resourcesRouter)
server.use('/tasks', tasksRouter)


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });