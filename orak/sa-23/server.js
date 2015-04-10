var http = require('http');
var fs=require('fs');
var url=require('url');
var nodeStatic=require('node-static');
var fileServer = new nodeStatic.Server('../../game');
var program=fs.readFileSync('program.html');
var elements=fs.readFileSync('elements.js');
var avatar=fs.readFileSync('avatar.js');
var communication=fs.readFileSync('communication.js');
var WebSocketServer = require('websocket').server;
var httpServer=http.createServer(function (req, res) {
  var uri = url.parse(req.url).pathname;
  if("/program.html"==uri)  { replyHtml(req, res, program); return;}
  if("/elements.js"==uri)  { replyJS(req, res, elements); return;}
  if("/avatar.js"==uri)  { replyJS(req, res, avatar); return;}
  if("/communication.js"==uri)  { replyJS(req, res, communication); return;}
  fileServer.serve(req, res);
//  replyHtml(req, res, uri);
});
httpServer.listen(9615);

// Based on: https://gist.github.com/martinsik/2031681
var wsServer=new WebSocketServer({httpServer: httpServer});

ClientHandler=function(connection)
{
  this.connection=connection;
  connection.on('message', this.receive.bind(this));
  connection.on('close', this.close.bind(this));
};
ClientHandler.prototype.receive=function(message)
{
  if (message.type === 'utf8') {
    var msg=JSON.parse(message.utf8Data);
    this.connection.sendUTF(JSON.stringify( {msg: 
"Greetings from server!", rep: msg}));
  }
};
ClientHandler.prototype.close=function(connection)
{
};

wsServer.on('request', function(request) {
  console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
  var connection = request.accept(null, request.origin);
  var handler=new ClientHandler(connection);
});

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

