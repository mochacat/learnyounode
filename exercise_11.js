var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(request, response){
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(response);
});

server.listen(parseInt(process.argv[2]));
