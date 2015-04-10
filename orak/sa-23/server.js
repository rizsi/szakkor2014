var http = require('http');
var fs=require('fs');
var url=require('url');
var program=fs.readFileSync('program.html');
var elements=fs.readFileSync('elements.js');
var avatar=fs.readFileSync('avatar.js');
http.createServer(function (req, res) {
  var uri = url.parse(req.url).pathname;
  if("/program.html"==uri)  { replyHtml(req, res, program); return;}
  if("/elements.js"==uri)  { replyJS(req, res, elements); return;}
  if("/avatar.js"==uri)  { replyJS(req, res, avatar); return;}

  replyHtml(req, res, uri);
}).listen(9615);

replyHtml = function(req, res, file)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(file);
};

replyJS = function(req, res, file)
{
  res.writeHead(200, {'Content-Type': 'text/javascript'});
  res.end(file);
};

