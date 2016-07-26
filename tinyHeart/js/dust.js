var dustObj = function(){
	this.img = [];
	this.x = [];
	this.y = [];
	this.alpha = 0;
	this.amp = [];
	this.nu = [];
}
dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
	for(var i = 0; i < 7; i++){
		this.img[i] = new Image();
		this.img[i].src = "img/dust" + i + ".png";
	}
	for(var i = 0; i < this.num; i++){
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		this.amp[i] = 20 + Math.random() * 25;
		this.nu[i] = Math.floor(Math.random() * 7);
	}
	this.alpha = 0;
}
dustObj.prototype.draw = function(){
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	for(var i = 0; i < this.num; i++){
		ctx1.drawImage(this.img[this.nu[i]], this.x[i] + this.amp[i] * l, this.y[i]);
	}
}
