var http = require('http'),
    url = require('url');

var server = http.createServer(function(request, response){
  if (request.method == 'GET'){
    var parsedUrl = url.parse(request.url, true);
    var path = parsedUrl.pathname, iso = parsedUrl.query.iso;
    var date = new Date(iso), time = {};
    if (iso){
      if (path == '/api/parsetime'){
        time = {
          "hour" : date.getHours(),
          "minute" : date.getMinutes(),
          "second" : date.getSeconds()
        };
      } else if ('/api/unixtime'){
        time = {
          "unixtime" : date.getTime()
        };
      }
    }
    
    if (time){
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(time));
    } else {
      response.writeHead(404);
      response.end();
    }
  } else {
    return response.end('Not a GET\n');
  }
});

server.listen(parseInt(process.argv[2]));
