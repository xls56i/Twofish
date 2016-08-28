var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

var bgPic = new Image();
var bgPic5 = new Image();
var fruit;
var ane;
var mom;
var baby;

var mx;
var my;

var data;

var wave;
var halo;

var dust;
var temp = 0;


document.body.onload = kkk;
function kkk(){
	document.getElementById("img2").onclick = function(){
		document.getElementById("cover").style.display="none";
		game();
	}
	document.getElementById("img3").onclick = function(){
		document.getElementById("restart").style.display="none";
		game();
	}
}
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	//获得convas context
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');
	
	can1.addEventListener('mousemove', onMouseMove, false);
	
	bgPic.src = "img/background.jpg";
	bgPic5.src = "img/power1-restart.png";
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObject();
	ane.init();
	
	fruit = new fruitObject();
	fruit.init();
	
	mom = new momObj();
	mom.init();
	
	baby = new babyObj();
	baby.init();
	
	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";
	data = new dataObj();
	
	wave = new waveObj();
	wave.init();
	
	halo = new haloObj();
	halo.init();
	
	dust = new dustObj();
	dust.init();
}

function gameloop(){
	
	requestAnimationFrame(gameloop);
	
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40)
		deltaTime = 40;
	
	drawBackground();
	
	ane.draw();
	
	fruitMonitor();
	fruit.draw();
	
	ctx1.clearRect(0, 0, canWidth, canHeight);
	
	mom.draw();
	momEat();
	feed();
	baby.draw();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offsetX || e.layerX){
			mx = e.offsetX == undefined ? e.layerX : e.offsetX;
			my = e.offsetY == undefined ? e.layerY : e.offsetY;
		}
	}
}
