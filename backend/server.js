const express = require('express');
const cors= require('cors');
const mysql =require('mysql');


const app=express();
//Q: What is the point of line 2?


app.use(cors());

mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ms',

})

app.get("/",(req,res) =>{
    const sql= "SELECT * FROM student";
    db.query(sql,(err,result) =>{
        if(err) return res.send(err);
        return res.send(result);
    })
})


app.listen(8081, ()=>{
    console.log("server is running on port 8081");
})