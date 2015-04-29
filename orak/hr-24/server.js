//=============================================
//				Imports

var http            = require('http');
var fs              = require('fs');
var url             = require('url');
var nodeStatic      = require('node-static');
var util            = require('util');
var WebSocketServer = require('websocket').server;

//				Files opened

var program         = fs.readFileSync('program.html');
var elements        = fs.readFileSync('elements.js');
var avatar          = fs.readFileSync('avatar.js');
var communication   = fs.readFileSync('communication.js');

//				Static file server
var fileServer      = new nodeStatic.Server('../../game');


//=============================================
//				Functions

myLog = function(msg){
  console.log((new Date()) + msg);
};

replyHtml = function(req, res, file){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(file);
};

replyJS = function(req, res, file){
  res.writeHead(200, {'Content-Type': 'text/javascript'});
  res.end(file);
};

// HTTP server
// Serves HTTP GET requests from Browsers (likely)
httpServerFunction = function (req, res) {
  var uri = url.parse(req.url).pathname;
	
  if("/program.html" == uri || "/" == uri || "" == uri || "/index.html" == uri){
	  replyHtml(req, res, program);
  }else if("/elements.js" == uri){
	  replyJS(req, res, elements);
  }else if("/avatar.js" == uri){
	  replyJS(req, res, avatar);
  }else if("/communication.js" == uri){
	  replyJS(req, res, communication);
  }
  fileServer.serve(req, res);
};

// WebSocket server
// Serves WebSocket connection requests at the given port
wsServer_onRequest = function(request) {
  var connection = request.accept(null, request.origin);
  var handler    = new ClientHandler(connection);
}

//=============================================
//			ClientsManager

// Handles the clients connected via WebSocket.
// Mainly sends all received informations to the other connected clients.
// This way all player receives the sended informations from the others.

ClientsManager = function(){
  // We count from 1 because 0 means false
  this.currentId = 1;
  this.clients = {};
};

ClientsManager.prototype.registerClient = function(client){
  client.id = this.currentId++;
  this.clients[client.id] = client;
  myLog("Client created: " + client.id);
};

ClientsManager.prototype.removeClient = function(client){
  delete(this.clients[client.id]);
  myLog("Client disconnected: "+client.id);
  this.sendAllButThis({id:-1},{disconnected: client.id});
};

ClientsManager.prototype.sendAllButThis = function(client, msg){
  for(id in this.clients){
    if(id!=client.id){
      this.clients[id].send(msg);
    }
  }
};



//=============================================
//			ClientHandler

ClientHandler = function(connection){
  this.connection = connection;
  clientsManager.registerClient(this);
  this.send({id: this.id});
//  console.log(util.inspect(connection, {showHidden: false, depth: null}));
  connection.on('message', this.receiveRaw.bind(this));
  connection.on('close',   this.close.bind(this));
};

ClientHandler.prototype.send = function(object){
  this.connection.sendUTF(JSON.stringify(object));
};

ClientHandler.prototype.receiveRaw = function(message){
  if (message.type === 'utf8'){
    var msg=JSON.parse(message.utf8Data);
    this.receive(msg);
  }
};

ClientHandler.prototype.receive = function(msg){
  clientsManager.sendAllButThis(this,
	{
	  from: this.id,
	  msg:  msg
    });
//    this.send({msg: "Greetings from server!", rep: msg});
};

ClientHandler.prototype.close = function(connection){
  clientsManager.removeClient(this);
};


//=============================================
//			Main program

var httpServer = http.createServer(httpServerFunction);

httpServer.listen(9999);

// Based on: https://gist.github.com/martinsik/2031681
// http://www.index.hu
// https://www.index.hu
// ws://rizsi.hu
// ftp://rizsi.com
var wsServer = new WebSocketServer({httpServer: httpServer});

wsServer.on('request', wsServer_onRequest);

var clientsManager = new ClientsManager();