
avatar = function(x){
	this.x = x;
	this.y = 0;
	this.prevY = 0;
	this.velocity_x = 0;
	this.velocity_y = 0;
	this.img = loadImage("stickman.png");
	this.crouch = loadImage("crouch.png");
	this.width = 16;
};

avatar.prototype.logic = function(){

	var speedX = 5;
	
	if(keys[KEY_RIGHT]){
			this.x += speedX;
	}if(keys[KEY_LEFT]){
			this.x -= speedX;
	}

	this.prevY = this.y;
	this.y += this.velocity_y;
	
	if(keys[KEY_UP] && this.talajon){
		this.velocity_y = 17;
		this.y += 1;
	}
	
	this.talajon=false;
	
	if(this.y<=0){
	  this.y=0; this.velocity_y=0; this.talajon=true;
	}
	
	for(var i in elements){
		if(elements[i] instanceof platform){
			var p=elements[i];
			if(p.x<this.x +this.width && p.x+p.width > this.x){
				if(this.prevY>=p.y && this.y<=p.y){
				  this.y=p.y;
				  this.velocity_y=0;
				  this.talajon=true;
				}
			}
		}
	}
	
	if(!this.talajon){
	  this.velocity_y-=1;
	}
	
	if(keys[KEY_DOWN]){
		this.currentImg=this.crouch;
	}else{
		this.currentImg=this.img;
	}
};

avatar.prototype.draw=function(context, t){
	context.drawImage(this.currentImg, t.tX(this.x), t.tY(this.y)-64);
};
