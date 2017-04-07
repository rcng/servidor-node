var mysql = require('mysql');

function Conexion(){
   this.pool = null;

   this.inicia = function() {
      this.pool = mysql.createPool({
         connectionLimit: 10,
         host: 'localhost',
         user: 'root',
         password: '123456',
         database: 'demo'
      })
   }

   this.obtener = function(callback) {
      this.pool.getConnection(function(error, connection){
         callback(error, connection);
      })
   }
}

module.exports = new Conexion();