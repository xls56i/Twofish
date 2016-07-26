var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	
	this.babyTail = [];
	this.babyEye = [];
	this.babyBody = [];
	
	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
	
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;

}

babyObj.prototype.init = function(){
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
	
	for(var i = 0; i < 8; i++){
		this.babyTail[i] = new Image();
		this.babyTail[i].src = "img/babyTail" + i +".png";
	}
	
	for(var i = 0; i < 2; i++){
		this.babyEye[i] = new Image();
		this.babyEye[i].src = "img/babyEye" + i +".png";
	}
	
	for(var i = 0; i < 20; i++){
		this.babyBody[i] = new Image();
		this.babyBody[i].src = "img/babyFade" + i + ".png"
	}
}
babyObj.prototype.draw = function(){
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);
	var deltaY = this.y - mom.y;
	var deltaX = this.x - mom.x;
	var beta = Math.atan2(deltaY, deltaX);
	this.angle = lerpAngle(beta, this.angle, 0.7);
	
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}
	
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = 1 - this.babyEyeCount;
		this.babyEyeTimer %= this.babyEyeInterval;
		
		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1000 + 2000;
		}
		else{
			this.babyEyeInterval = 200;
		}
	}
	
	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer > 300){
		this.babyBodyCount ++;
		if(this.babyBodyCount > 19){
			this.babyBodyCount = 19;
			data.gameOver = true;
		}
		
		this.babyBodyTimer %= 300;
	}
	
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	
	var babyTailCount = this.babyTailCount;
	var babyEyeCount = this.babyEyeCount;
	var babyBodyCount = this.babyBodyCount;
	
	ctx1.drawImage(this.babyTail[babyTailCount],-this.babyTail[babyTailCount].width * 0.5 + 23, -this.babyTail[babyTailCount].height * 0.5);
	ctx1.drawImage(this.babyBody[babyBodyCount],-this.babyBody[babyBodyCount].width * 0.5, -this.babyBody[babyBodyCount].height * 0.5);
	ctx1.drawImage(this.babyEye[babyEyeCount], -this.babyEye[babyEyeCount].width * 0.5, -this.babyEye[babyEyeCount].height * 0.5);
	ctx1.restore();
}
