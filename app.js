const express = require('express')
const app = express() 

app.get('/', (req, res) => res.send('U kurac misevi'))

app.listen(process.env.PORT);