const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer(function (request, response) {
    var filePath = '.' + request.url;
    if (filePath == './') filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
      case '.wav':
        contentType = 'audio/wav';
        break;
    }

    fs.readFile(filePath, function (error, content) {
      if (filePath === './src__pages__index.async.js' && !!content) {
        content = content
          .toString()
          .replace(
            'c410d179b056797269a4a2188bdf8a48',
            process.env['ENDPOINT'] || ''
          );
      }

      if (error) {
        if (error.code == 'ENOENT') {
          response.writeHead(400);
          response.end('404 Page Not Found', 'utf-8');
        } else {
          response.writeHead(500);
          response.end(
            'Sorry, check with the site admin for error: ' +
              error.code +
              ' ..\n'
          );
          response.end();
        }
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  })
  .listen(9000, '0.0.0.0');
