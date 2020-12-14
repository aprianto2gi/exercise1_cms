const mysql = require('mysql');
const connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
});

connect.connect(function(err){
    if(err){
        console.log(err);
    }

    console.log('koneksi sukses');
    var query="CREATE DATABASE ecommerce";
    connect.query(query,function(err,res){
        if(err){
            console.log(err);
        }

        console.log("database Berhasil dibuat");
        connect.destroy();
    });
});
