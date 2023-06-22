var http = require('http');
http.createServer(function (req, res) {
    console.log('hello');
  res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
  res.write(`hello_dosto${req.url}Hello World!`);
  res.write('hello_dosto');
  res.write('sb_thik_hai');
  res.end('kya_haal_hai_accha hai');

}).listen(8080);