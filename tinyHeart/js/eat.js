function momEat(){
	if(!data.gameOver){
		for(var i = 0; i < fruit.num; i++){
			if(fruit.alive[i]){
				var l = distance(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(l < 900){
					data.fruitNum++;
					if(mom.momBodyCount < 7){
						mom.momBodyCount++;
					}
					if(fruit.fruitType[i] == "blue"){
						data._double = 2;
					}
					fruit.dead(i);
					wave.born(fruit.x[i], fruit.y[i]);
				}
			}
		}
	}
}

function feed(){
	if(data.fruitNum > 0 && !data.gameOver){
		var l = distance(mom.x, mom.y, baby.x, baby.y);
		if(l < 900){
			baby.babyBodyCount = 0;
	//		data.reset();
			mom.momBodyCount = 0;
			data.addScore();
			halo.born(baby.x, baby.y);
		}	
	}
}
