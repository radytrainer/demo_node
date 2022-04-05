const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 4000;
app.use(cors({origin: '*'})) // allow all requests
// app.use(cors({origin: 'http://127.0.0.1:5500'})) // allow only http://127.0.0.1
app.use(express.static('public'))
app.listen(PORT, ()=>console.log('listening on port: ' + PORT));

let users = JSON.parse(fs.readFileSync('./database.json'));

app.get('/users', (req, res) => {
    res.send(users)
})