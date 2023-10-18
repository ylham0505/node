const express = require('express') // wyzywaem express.js
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000 //nastraiwaem port default(localhost:3000)

const app = express() //obyekt prilojeniya mojno wyzywat razlicnye funkciyi

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
