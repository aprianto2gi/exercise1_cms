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
    } console.log("koneksi berhasil");

    let sql=`INSERT INTO product(nama_produk,gambar_produk,harga_produk,des_produk,createdate) VALUES ?`;
    var values=[
        ['sepatu sneaker', 'sneaker.jpg', '200000', 'kami menjual sepatu berkualitas semua ukuran', '2020-01-17'],
        ['sepatu pantofel', 'pantofel.jpg', '500000', 'kami menjual sepatu pantofel 2020', '2020-01-30']
    ];
    connect.query(sql, [values],function(err,res){
        if(err){
            console.log(err);
        }
        console.log("input berhasil");
        connect.destroy();
    });
});