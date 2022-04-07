const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

});
/*
connection.connect((error)=>{
    if(error){
       /* console.log('El error de conexion es: '+'error')
       console.log('Conectado a la base de datos');
        return;
    }
    */
    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
      });
      

module.exports = connection;