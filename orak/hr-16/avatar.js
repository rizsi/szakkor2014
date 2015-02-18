
avatar = function(x){
	this.x = x;
	this.y = 0;
	this.prevY = 0;
	this.velocity_x = 0;
	this.velocity_y = 0;
	this.img = loadImage("stickman.png");
	this.crouch = loadImage("crouch.png");
	this.width = 16;
	this.standingHeight=64;
	this.crouchHeight=44;
	this.height = this.standingHeight;
	
	this.collisionTest = [];
};

avatar.prototype.addCollosionTest = function(toCheck){
	this.collisionTest.push(toCheck);
}

avatar.prototype.removeCollosionTest = function(toCheck){
	this.collisionTest.splice(this.collisionTest.indexOf(toCheck), 1);
}

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
	new Audio(explosionSound.src).play();
	//console.log("Game over!");
	this.x = 0;
	this.y = 0;
	life--;
	lifeText.text = "life: "+life;
	if(life <= 0){
		gameOver();
	}
}

avatar.prototype.mushroomCheck = function(){
	for(var i in elements){
		if(elements[i] instanceof mushroom){
			var p=elements[i];
			
			if(p.x<=this.x +this.width && p.x+p.width >= this.x){
				/*console.log("player.y = "+this.y);
				console.log("spike.y = "+p.y);
				console.log("spike.height = "+p.height);
				console.log("player.height = "+this.height);*/
				if(p.y<=this.y+this.height && p.y+p.height >= this.y){
					if(this.prevY>p.y+p.height) {
						p.death();
					}else {
						this.death();
					}
				}
			}
		}
	}
}

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
	//this.spikeCheck();
	//this.mushroomCheck();
	
	for(var i in this.collisionTest){
		var p = this.collisionTest[i];
		if(p.x<this.x +this.width && p.x+p.width > this.x){
			if(p.y<this.y+this.height && p.y+p.height > this.y){
				p.collision(this);
			}
		}
	}
	
	if(!this.talajon){
	  this.velocity_y-=1;
	}
	
	if(keys[KEY_DOWN]){
		this.currentImg=this.crouch;
		this.height=this.crouchHeight;
	}else{
		this.currentImg=this.img;
		this.height=this.standingHeight;
	}
};

avatar.prototype.draw=function(context, t){
	context.drawImage(this.currentImg, t.tX(this.x), t.tY(this.y)-this.standingHeight);
};

