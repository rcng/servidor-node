function AllowCrossDomain() {
   
   this.permisos = function(req, res, next) {
      var whiteList = [
         'http://localhost:4200',
         'http://google.com.ec'
      ];

      var origen = req.headers.origin;
      if (whiteList.indexOf(origen) >= -1) {
         res.setHeader('Access-Control-Allow-Origin', origen);
      }
      //res.header('Access-Control-Allow-Origin','');
      res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
      res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
      next();
   }

}

module.exports = new AllowCrossDomain();