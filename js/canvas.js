var c=document.getElementById('canvas'),
ctx=c.getContext("2d"),
w=c.width=window.innerWidth,
h=c.height=window.innerHeight,
ball=[];
ctx.fillStyle='rgba(25,224,206,0.65)';
ctx.fillRect(0, 0, w, h);

window.addEventListener('resize',function(){
	w=c.width=window.innerWidth;
    h=c.height=window.innerHeight;
    //console.log(w);
	clearInterval(time1);
	for(var i=0;i<12;i++){
	radius=randomNum(Math.floor(w/30),Math.floor(w/20));
	ball[i]={
		radius:radius,
		x:randomNum(radius,w-radius),
		y:randomNum(radius,h-radius),
		speedX:randomNum(8,50),
		speedY:randomNum(10,50)
	};
}
	setInterval(function(){randomBall(ball);},1000/60);
})
for(var i=0;i<12;i++){
	radius=randomNum(Math.floor(w/30),Math.floor(w/20));
	ball[i]={
		radius:radius,
		x:randomNum(radius,w-radius),
		y:randomNum(radius,h-radius),
		speedX:randomNum(8,50),
		speedY:randomNum(10,50)
	};
}

//console.log(ball[0].x);
//随机生成一个数
function randomNum(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}
//随机生成一个颜色
function randomColor(min,max){
	var r=randomNum(min,max),
	g=randomNum(min,max),
	b=randomNum(min,max);
	a=Math.random();
	return 'rgba('+r+','+g+','+b+','+a+')';
}
//随机生成一个球
function randomBall(ball){
	//ctx.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
	ctx.fillStyle='rgba(25,224,206,0.65)';
    ctx.fillRect(0, 0, w, h);
	for(var i=0;i<12;i++){
		ctx.fillStyle=randomColor(0,255);
		ctx.beginPath();
		ctx.arc(ball[i].x, ball[i].y,ball[i].radius, 0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		//console.log(speed(ball));
	}
	ball=speed(ball);
}
function speed(ball
	){
	for(var i=0;i<12;i++){
		if(ball[i].x+ball[i].speedX+ball[i].radius>w||ball[i].x+ball[i].speedX-ball[i].radius<0){
			ball[i].speedX=-ball[i].speedX;
		}
		if(ball[i].y+ball[i].speedY+ball[i].radius>h||ball[i].y+ball[i].speedY-ball[i].radius<0){
			ball[i].speedY=-ball[i].speedY;
		}
		ball[i].x+=ball[i].speedX;
		ball[i].y+=ball[i].speedY;
		//console.log(ball[i].x)
	}
	return ball;
}
var time1=setInterval(function(){randomBall(ball);
	
},1000/60);

//speed(ball);





