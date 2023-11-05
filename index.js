const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routes/drinks.route'))

mongoose.connect('mongodb+srv://yanarsaev:eBaRuSm4gmSKDZ2u@cluster0.2gs1s7k.mongodb.net/')
.then(() => console.log('[MongoDb] Подключение - установлено'))
.catch(() => console.log('[MongoDb] Подключение - НЕ установлено'))

app.listen(3000, () => console.log('Server has been started'))