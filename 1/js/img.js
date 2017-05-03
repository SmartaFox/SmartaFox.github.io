// JavaScript Document
$(function(){//加载函数
 //alert("加载完成");
 //动画效果 animate(动画效果,动画时长,动画完成以后触发的事情)
/* $(".img_box").animate({"left":"-200px"},'slow',function(){ alert('移动完成'); })*/

	//点击右按钮,往前移动一张图片,第一张图取出来放到队伍后边
	var width = $(".img_box img").width();
	$(".right_button").click(function(){
		document.title = $(".img_box").css('left');
		$(".img_box").animate({'left':-width*2},	function(){
			$(".img_box img:first").insertAfter($(".img_box img:last"));
			$(".img_box").css("left",-width);
			
			})		
	})
	
	//点击左按钮 盒子往右滑动一个图片的宽度 把最后一张图取出来放到第一张图前边 -200滑动到0
	$(".left_button").click(function(){
		$(".img_box").animate({"left":0},
			function(){
				$(".img_box img:last").insertBefore($(".img_box img:first"));
				$(".img_box").css("left",-width);
			})
				
	})
	
	//自动计时 执行右侧按钮效果 图片往前移动
	var timer = setInterval(function(){
		$(".right_button").click();
	},2000);
	
	
	//鼠标放到盒子上 停止滚动 移出 重新加一下计时器
	$(".img_box").mouseover(function(){
		clearInterval(timer);	
	}).mouseout(function(){
		timer = setInterval(function(){
			$(".right_button").click();
		},2000);
	})
	
	
		
})
