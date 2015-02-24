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
	//console.log("loading iamge: "+pic);
	this.img = loadImage("../../game/pictures/"+pic+".png");
	this.width = this.img.width;
	this.height = this.img.height;
};

thing.prototype.logic = function(){};

thing.prototype.draw = function(context, t){
	context.drawImage(this.img,
		 t.tX(this.x), t.tY(this.y));
};

//===============================================
//					Spikes

spike = function(x, y, width, height){
	var correcty = 10;
	this.a = 104/236;
	this.x = x;
	this.y = y-correcty;
	this.img = loadImage("rock_spike_3.png");
	this.width = width;//this.img.width;//104
	this.height = height+correcty;//this.img.height;//236
	
	/*
	var obj = thing.apply(this, x, y, 0, "rock_spike_2");
	obj.width = obj.img.width;
	obj.height = obj.img.height;
	return obj;
	*/
};

//spike.prototype = new thing();

spike.prototype.collide = function(p){
	p.death();
};

spike.prototype.logic = function(){};

spike.prototype.draw = function(context, t){
	var count = Math.round(this.width/(this.a*this.height));
	
	//console.log(count);
	if(count < 1){
		count=1;
	}
	var width_c = this.width/count;
		
	for(var i=0; i<count; i++){
		context.drawImage(this.img,
			 t.tX(this.x+i*width_c), t.tY(this.y)-this.height, width_c, this.height);
	}	
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
//				text

text = function(text, x, y, conext, font){
	this.text = text;
	this.x = x;
	this.y = y;
	this.width = 0;
	this.height = 0;
	this.font = font;
	this.context = context;
	
	if(font){
		tmp = context.font;
		context.font = font;
		this.width  = context.measureText(text).width;
		this.height = context.measureText(text).height;
		conext.font = tmp;
	}else{
		this.width  = context.measureText(text).width;
		this.height = context.measureText(text).height;
	}
};
/*
text.prototype.updateDimensions = new function(context){
	if(this.font){
		tmp = context.font;
		context.font = this.font;
		this.width  = context.measureText(text).width;
		this.height = context.measureText(text).height;
		conext.font = tmp;
	}else{
		this.width  = context.measureText(text).width;
		this.height = context.measureText(text).height;
	}
}
*/
text.prototype.logic=function(){
};

text.prototype.draw = function(context, t){
	if(this.font){
		context.save();
		context.font = this.font;
		context.fillText(this.text, this.x, this.y);
		context.restore();
	}else{
		context.fillText(this.text, this.x, this.y);
	}
	//context.fillText("Szig szakkör játéka!", 600/2-40, 20);
};

//=============================================
//       Mushroom

mushroom=function(){
	this.x0=450;
	this.y=0;
	this.x1=750;
	this.x=this.x0;
	this.speed=1;
	this.width=40;
	this.height=40;
	this.img = loadImage("gomba.png");
};
mushroom.prototype.logic=function(){
	if(this.x<=this.x1 && this.x>=this.x0)
	{
		this.x+=this.speed;
	}else
	{
		if(this.x0>this.x)
		{
			this.x=this.x0;
		}else
		{
			this.x=this.x1;
		}
		this.speed*=-1;	
	}
};

mushroom.prototype.collide = function(p){
	if(p.prevY>this.y + this.height) {
		this.death();
	}else {
		p.death();
	}
}

mushroom.prototype.death = function(){
	elements.splice(elements.indexOf(this),1);
	player.removeCollisionCheck(this);
}

mushroom.prototype.draw=function(context,t){
	context.drawImage(this.img,
		 t.tX(this.x), t.tY(this.y+2)-this.height+Math.sin(clock/2.0)*2);
};

//=============================================
//       coin

coin=function(x, y){
	this.x0 = x;
	this.y0 = y;
	this.speed = 0.1;
	this.angle =  0;
	this.img = loadImage("coin.png");
	this.img_m = loadImage("coin_m.png");
	var _this = this;
	this.img.onload = function(){
		_this.width0  = _this.width  = this.width;
		_this.height0 = _this.height = this.height;
	};
	//console.log(this.img);
};

coin.prototype.logic = function(){
	this.angle += this.speed;
	this.angle %= 4*2*Math.PI;
	
	this.x_d     = this.x0+this.width0*(0.5+0.5*(Math.cos(this.angle-Math.PI)));
	this.y       = this.y0+0.6*this.height0*(0.5+0.5*Math.cos(this.angle/2));
	this.width_d = this.width0*0.5*(Math.cos(this.angle)-Math.cos(this.angle-Math.PI));
	this.x       = (this.width_d < 0)?this.x_d+this.width_d : this.x_d;
	this.width   = Math.abs(this.width_d);
};

coin.prototype.collide = function(p){
	money++;
	moneyText.text = "Money: "+money+"€";
	this.death();
}

coin.prototype.death = function(){
	elements.splice(elements.indexOf(this),1);
	player.removeCollisionCheck(this);
}

coin.prototype.draw = function(context,t){	
	context.drawImage((this.width_d < 0)?this.img_m:this.img,
		 t.tX(this.x_d), t.tY(this.y+this.height), this.width_d, this.height);
};

//=============================================
//       potion

potion=function(x, y){
	this.x = x;
	this.y = y;
	this.img = loadImage("potion.png");
	var _this = this;
	this.img.onload = function(){
		_this.width  = this.width;
		_this.height = this.height;
	};
};

potion.prototype.logic = function(){
};

potion.prototype.collide = function(p){
	life++;
	this.death();
}

potion.prototype.death = function(){
	elements.splice(elements.indexOf(this),1);
	player.removeCollisionCheck(this);
}

potion.prototype.draw = function(context,t){
	context.drawImage(this.img,
		 t.tX(this.x), t.tY(this.y+this.height));
};


//=============================================
//       lifecounter


lifePanel = function(x, y, context){
	this.gap = 3;
	this.size = 20;
	this.x = x;
	this.y = y;
	
	this.img = loadImage("potion.png");
	this.text = new text("Life: ", x, y, context, this.size+"px Georgia");
};

lifePanel.prototype.logic = function(){};

lifePanel.prototype.draw = function(context,t){
	context.save();
	context.fillStyle="#FFFFFF";
	this.text.draw(context, t);
	context.restore();
	var x = this.x + this.text.width;
	
	for(var i=0; i<life; i++){
		x += this.gap;
		context.drawImage(this.img,
			 x, this.y-this.size, this.size, this.size);
		x += this.size;
	}
};
