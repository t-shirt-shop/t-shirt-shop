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
const userRoutes = require('./Routes/userRoutes')
const commentsRoutes = require('./Routes/commentsRoutes')
const cartRoutes = require('./Routes/cartRoutes')
const ordersRoutes = require('./Routes/ordersRoutes')
const shirtCartRoutes = require('./Routes/shirtCartRoutes')

server.use('/tshirts', tshirtRoutes)
server.use('/category', categoryRoutes)
server.use('/users', userRoutes)
server.use('/comments', commentsRoutes)
server.use('/carts', cartRoutes)
server.use('/orders', ordersRoutes)
server.use('/shirt/cart', shirtCartRoutes)

const port = process.env.PORT || 4000

server.listen(port, () => console.log(`server running on port ${port}`));