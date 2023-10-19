const express = require('express') // wyzywaem express.js
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000 //nastraiwaem port default(localhost:3000)
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')

const app = express() //obyekt prilojeniya mojno wyzywat razlicnye funkciyi
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'public')))


app.use(todoRoutes)



async function start() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodedb') // podklyucaem database
        app.listen(PORT, () => {
            console.log('Server has been started...')
        }) //zapuskaem server s pomosyu listen()
    } catch (e) {
        console.log(e) // esli osybka
    }
} 

start()
