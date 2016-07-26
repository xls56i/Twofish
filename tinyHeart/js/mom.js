var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.momTail = [];
	this.momEye = [];
	this.momBodyOra = [];
	this.momBodyBlu = [];
	

//	this.bigBody = new Image();

	
	this.momTailTimer = 0;
	this.momTailCount = 0;
	
	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;
	
	this.momBodyCount = 0;
}
momObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	for(var i = 0; i < 8; i++){
		this.momTail[i] = new Image();
		this.momTail[i].src = "img/bigTail" + i + ".png";
	}
	
	for(var i = 0; i < 2; i++){
		this.momEye[i] = new Image();
		this.momEye[i].src = "img/bigEye" + i +".png";
	}
	
	for(var i = 0; i < 8; i++){
		this.momBodyOra[i] = new Image();
		this.momBodyBlu[i] = new Image();
		this.momBodyOra[i].src = "img/bigSwim" + i + ".png";
		this.momBodyBlu[i].src = "img/bigSwimBlue" + i + ".png";
	}

}
momObj.prototype.draw = function(){
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);
	var deltaY = this.y - my;
	var deltaX = this.x - mx;
	var beta = Math.atan2(deltaY, deltaX);
	
	this.angle = lerpAngle(beta, this.angle, 0.7);
	
	this.momTailTimer += deltaTime;
	if(this.momTailTimer > 50){
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	}
	
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = 1 - this.momEyeCount;
		this.momEyeTimer %= this.momEyeInterval;
		
		if(this.momEyeCount == 0){
			this.momEyeInterval = Math.random() * 1000 + 2000;
		}
		else{
			this.momEyeInterval = 200;
		}
	}
	
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	
	var momTailCount = this.momTailCount;
	var momEyeCount = this.momEyeCount;
	var momBodyCount = this.momBodyCount;
	ctx1.drawImage(this.momTail[momTailCount],-this.momTail[momTailCount].width * 0.5 + 30, -this.momTail[momTailCount].height * 0.5);
	
	if(data._double == 1){
		ctx1.drawImage(this.momBodyOra[momBodyCount],-this.momBodyOra[momBodyCount].width * 0.5, -this.momBodyOra[momBodyCount].height * 0.5);
	}
	else{
		ctx1.drawImage(this.momBodyBlu[momBodyCount],-this.momBodyBlu[momBodyCount].width * 0.5, -this.momBodyBlu[momBodyCount].height * 0.5);
	}
	
	ctx1.drawImage(this.momEye[momEyeCount], -this.momEye[momEyeCount].width * 0.5, -this.momEye[momEyeCount].height * 0.5);
	ctx1.restore();
}
