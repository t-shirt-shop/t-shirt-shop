require('dotenv').config()

const express = require('express');
const server = express();
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'))
server.use(cors())

const tshirtRoutes = require('./Routes/tshirtRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')

server.use('/tshirts', tshirtRoutes)
server.use('/category', categoryRoutes)


// const projectsRoutes = require('./Routes/projectsRoutes')
// const actionsRoutes = require('./Routes/actionsRoutes')

// server.use('/projects', projectsRoutes)
// server.use('/actions', actionsRoutes)


const port = process.env.PORT || 4000

server.listen(port, () => console.log(`server running on port ${port}`));


