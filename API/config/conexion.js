const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const conexion = mysql.createPool({


  //mysql.createConnection

  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b944333c5f5ec0',
  password: 'a8180168',

  database: 'heroku_6b292d8975153dc',


});

conexion.getConnection((err) => {

  if (err) {
    console.log('ha ocurrido un error:' + err)
  }
  else {
    console.log('la base de datos se conecto !!!')
  }

});

module.exports = conexion;




