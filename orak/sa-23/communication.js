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
  this.connection.send(JSON.stringify({msg: "Login from user!"}));
};
communication.prototype.receive=function(message)
{
  var msg=JSON.parse(message.data);
  if(msg.id)
  {
    this.id=msg.id;
    console.info("set id to: "+this.id);
  }
  if(msg.from)
  {
    var remoteId=this.getRemoteId(msg.from);
    if(!elements.es[remoteId])
    {
      var t=new thing(0,0,0,"stickman.png");
      t.id=remoteId;
      elements.put(t);
    }
    elements.es[remoteId].x=msg.msg.x;
    elements.es[remoteId].y=msg.msg.y;
  }
  if(msg.disconnected)
  {
    var remoteId=this.getRemoteId(msg.disconnected);
    elements.removeById(remoteId);
  }
//  console.info("received: "+JSON.stringify(msg));
};
communication.prototype.send=function(message)
{
  if(this.id)
  {
    this.connection.send(JSON.stringify(message));
  }
};
communication.prototype.getRemoteId=function(id)
{
  return "remote"+id;
};
