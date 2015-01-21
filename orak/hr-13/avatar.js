
avatar = function(x){
	this.x = x;
	this.y = 0;
	this.prevY = 0;
	this.velocity_x = 0;
	this.velocity_y = 0;
	this.img = loadImage("stickman.png");
	this.crouch = loadImage("crouch.png");
	this.width = 16;
	this.height = 64;
};

avatar.prototype.platformCheck = function(){
	
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
}

avatar.prototype.death = function(){
	console.log("Game over!");
	this.x = 0;
	this.y = 0;
}

avatar.prototype.spikeCheck = function(){

	for(var i in elements){
		if(elements[i] instanceof spike){
			var p=elements[i];
			if(p.x<this.x +this.width && p.x+p.width > this.x){
				if(p.y<this.y +this.height && p.y+p.height > this.y){
					console.log("Meghaltál!");
					this.x = 0;
					this.y = 0;
				}
			}
		}
	}
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
		this.velocity_y = 14;
		this.y += 0.001;
	}
	
	this.platformCheck();
	this.spikeCheck();
	
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
