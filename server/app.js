if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router/index')
const errorHanler = require('./middlewares/errorHandler')
const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use('/',router)

app.use(errorHanler)

app.listen(PORT,_=>{console.log(`listening on port ${PORT}`)})

