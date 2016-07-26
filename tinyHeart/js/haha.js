function lerpDistance(aim, cur, ratio){
	var delta = cur - aim;
	return aim + delta * ratio;
}
function lerpAngle(a, b, t){
	var d = b - a;
	if(d > Math.PI)
		d = d - 2 * Math.PI;
	if(d < -Math.PI)
		d = d + 2 * Math.PI;
	return a + d * t;
}

function distance(x1, y1, x2, y2){
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}
