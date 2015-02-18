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
};

thing.prototype.logic = function(){};

thing.prototype.draw = function(context, t){
	context.drawImage(this.img,
		 t.tX(this.x), t.tY(this.y));
};

//===============================================
//					Spikes

spike = function(x, y, width, height){
	var correcty = 0;//10;
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

spike.prototype.logic = function(){};

spike.prototype.collision = function(p){
	p.death();
};

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

text=function(text, x, y){
	this.text = text;
	this.x = x;
	this.y = y;
};

text.prototype.logic=function(){
};

text.prototype.draw=function(context, t){
	context.fillStyle = "black";
	context.globalAlpha = 1;
	context.fillText(this.text, this.x, this.y);
};

//=============================================
//       Mushroom

mushroom=function(){
	this.x0=450;
	this.y=0;
	this.x1=750;
	this.x=this.x0;
	this.speed=4;
	this.width=40;
	this.height=40;
	this.img = loadImage("gomba.png");
};
mushroom.prototype.logic=function(){
	if(this.x<=this.x1 && this.x>=this.x0){
		this.x+=this.speed;
	}else{
		if(this.x0>this.x){
			this.x=this.x0;
		}else{
			this.x=this.x1;
		}
		this.speed*=-1;	
	}
};


mushroom.prototype.collision = function(p){
	if(p.prevY >= this.y+this.height) {
		p.removeCollosionTest(this);
		this.death();
	}else {
		p.death();
	}
}

mushroom.prototype.death=function(){
	elements.splice(elements.indexOf(this),1);
}

mushroom.prototype.draw=function(context,t){
	context.drawImage(this.img,
			 t.tX(this.x), t.tY(this.y+2)-this.height+Math.sin(clock/2.0)*2);
};

//===============================================
//				coin

coin=function(x, y){
	this.y=y;
	this.x=x;
	this.width=40;
	this.height=40;
	this.img = loadImage("coin.png");
};
coin.prototype.logic=function(){
	//forgás animáció
};


coin.prototype.collision = function(p){
	money++;
	moneyText.text = "Money = "+money+"€";
	p.removeCollosionTest(this);
	this.death();
}

coin.prototype.death=function(){
	elements.splice(elements.indexOf(this),1);
}

coin.prototype.draw=function(context,t){
	context.drawImage(this.img,
			 t.tX(this.x), t.tY(this.y));
};
