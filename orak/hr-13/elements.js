//===============================================
//					CloudObject

cloudObject = function(x, y, velocity_x){
	this.x = x;
	this.y = y;
	this.velocity_x = velocity_x;
	this.alpha = 0.5;

	this.img = loadImage("../../game/pictures/mistic_cloud.png"); //mistic_cloud.png
};

cloudObject.prototype.logic = function(){
	this.x += this.velocity_x;
	if(this.x > 600){
		this.x = -300;
	}
};

cloudObject.prototype.draw = function(context, t){
	context.globalAlpha = this.alpha;
	context.drawImage(this.img, t.tX(this.x), t.tY(this.y));
	context.globalAlpha = 1;
};

//===============================================
//					Transformation

transformation = function(){
	this.x=0;
	this.y=0;
	this.ay=1;
	this.ax=1;
};

transformation.prototype.tX=function(x){
	return this.ax*x+this.x;
};

transformation.prototype.tY=function(y){
	return this.ay*y+this.y;
};

//===============================================
//					Thing

thing = function(x, y, z, pic){
	this.x = x;
	this.y = y;
	this.z = z;

	this.img = loadImage("../../game/pictures/"+pic+".png");
};

thing.prototype.logic = function(){};

thing.prototype.draw = function(context, t){
	context.drawImage(this.img,
		 t.tX(this.x), t.tY(this.y));
};

//===============================================
//				Platform

platform = function(x, y, width){
	this.x = x;
	this.y = y;
	this.width = width;
};

platform.prototype.logic = function(){};

platform.prototype.draw = function(context, t){
	context.fillStyle = "black";
	context.fillRect(t.tX(this.x), t.tY(this.y), this.width, 5);
};

//===============================================
//				Cim

cim=function(){
};
cim.prototype.logic=function(){
};
cim.prototype.draw=function(context, t){
	context.fillText("Szig szakkör játéka!", 600/2-40, 20);
};
