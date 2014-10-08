function loadImage(src)
{
	var image = new Image();
	image.src = src;
	return image;
}

function keyup(e){
	if(e.keyCode == 37){
		leftkeydown = false;
	} else if(e.keyCode == 39){
		rightkeydown = false;
	}
}
function keydown(e){
	if(e.keyCode == 37){
		leftkeydown = true;
	} else if(e.keyCode == 39){
		rightkeydown = true;
	}
}

function initialize ()
{
	canvas = document.getElementById('mycanvas');
	context = canvas.getContext('2d');
	position = 0;
	player_x = 30;
	player_y = 240-64;
	
	rightkeydown = false;
	leftkeydown = false;
	
	background = loadImage("http://rizsi.github.io/szakkor2014/orak/hr-02/background.png");
	player = loadImage("http://rizsi.github.io/szakkor2014/orak/hr-02/stickman.png");
	
	document.body.addEventListener("keydown", keydown);
	document.body.addEventListener("keyup", keyup);
}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	context.drawImage(background, 0, 0);
	
	if(rightkeydown){
		player_x++;
	}
	if(leftkeydown){
		player_x--;
	}
	
	context.drawImage(player, player_x, player_y);
	
	
	window.requestAnimationFrame(animate);
}

window.addEventListener("load", function()
{
	initialize();
	animate();
});