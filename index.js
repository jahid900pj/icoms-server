const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./courses.json')

app.get('/', (req, res) => {
    res.send('news api running')
})

app.get('/allCourses', (req, res) => {
    res.send(courses)
})



app.listen(port, () => {
    console.log('assigment server running port', port)
})