const { timeStamp } = require('console');
const express = require('express')
const fs = require('fs')
const app = express()

const date = new Date();
const dotenv = require('dotenv').config

app.get("/createtimestam", function (req,res){
    fs.writeFile(`./${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}.txt`,
    `Date : ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}
    timeStamp : ${new Date()}`,
    (err) => {
        if (err) throw err;
        console.log("File Created")
    });
    res.json ("File Created")
});

app.listen(process.env.PORT || 3000)
