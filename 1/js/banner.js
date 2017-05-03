// JavaScript Document
$(function(){
	//alert("加载完成");
	var num = 0;//图片的下标
	var txt_arr = ['这是第一张图片','这是第二张图片',
	'这是第三张图片','这是第四张图片','这是第五张图片'];
	var img_num = $(".banner_img img").length-1;
	
	changeImg(num);
	// 换图效果 换成当前图 原点按钮跟着一起换 文字换
	function changeImg(num){
		$(".banner_img img").eq(num).show().siblings('img').hide();
		$(".banner li").eq(num).addClass('current').siblings('li').removeClass('current');
		$(".down_txt").html(txt_arr[num]);
	}
	
	//右按钮，点击完切换到下一张图
	$(".right_btn").click(function(){
		//alert(num);	
		if(num < img_num){
			num = num +1;
		}else{
			num = 0;
		}
		changeImg(num);
	})
	
	//左按钮 点击完切换上一张图
	$(".left_btn").click(function(){
		//alert(num);
		if(num >0){
			num = num -1;
		}else{
			num = img_num;
		}
		changeImg(num);	
	})
	
	//计时器效果
	var timer = setInterval("$('.right_btn').click()",2000);
	
	//鼠标进入盒子 停止轮播 移出盒子 继续轮播
	$(".banner").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer = setInterval(	"$('.right_btn').click()",2000);
	})
	
	//原点切换
	$(".banner li").mouseover(function(){
		var index = $(this).index();
		num = index;
		//alert(index);
		changeImg(index);		
	})
	

//结束	
})




