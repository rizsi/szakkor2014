communication=function(){
  if (!window.WebSocket)
  {
    alert("Web socket is not supported by your browser. Program will not work.");
  }
  var loc = window.location, new_uri;
  if (loc.protocol === "https:") {
    new_uri = "wss:";
  } else {
    new_uri = "ws:";
  }
  new_uri += "//" + loc.host;
  console.info("Web socket URI: "+new_uri);
  this.connection = new WebSocket(new_uri);
  this.connection.onopen = this.login.bind(this);
  this.connection.onmessage = this.receive.bind(this);
};
communication.prototype.login=function()
{
  console.info("WS connected!");
  this.connection.send("Login from user!");
};
communication.prototype.receive=function(message)
{
  console.info("received: "+message.data);
};

