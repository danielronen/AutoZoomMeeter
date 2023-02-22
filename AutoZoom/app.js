const express = require('express');
const {spawn} = require('child_process');
const fs = require('fs');

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/all", (req, res) => {
    var dataToSend;
    const python = spawn('python', ['myScript.py']);
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.json(dataToSend)
    });
});

app.get("/meetings", (req, res) =>{
    res.sendFile("C:/Users/User/Documents/Projects/AutoZoom/public/table.html");
});

app.get("/meet", (req, res) => {
    var dataToSend;
    const python = spawn('python', ['example.py']);
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.json(dataToSend)
    });
});


app.listen(PORT, '0.0.0.0', () => console.log(`Listening in PORT ${PORT}`));