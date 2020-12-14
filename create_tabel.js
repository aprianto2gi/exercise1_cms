const mysql = require('mysql');

const connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecommerce"
});

connect.connect(function(err){
    if(err){
        console.log(err);
    } console.log("koneksi sukses");

    var sql=`CREATE TABLE product(  
        id_product int(11) AUTO_INCREMENT,
        nama_produk varchar(60) NOT NULL,
        gambar_produk varchar(200) NOT NULL,
        harga_produk int(13) NOT NULL,
        des_produk text NOT NULL,
        createdate date NOT NULL,
        PRIMARY KEY(id_product)
    )`;
    connect.query(sql,function(err,res){
        if(err){
            console.log(err);
        }
        console.log("table berhasil dibuat");
        connect.destroy();
    });
});