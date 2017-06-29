$(document).ready(function() {
	$('.menu a').on('click', function(event) {
		event.preventDefault();
		$(this).addClass('current').siblings().removeClass('current');
		/* Act on the event */
	}).on('mouseover', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).addClass('current').css({'transform':'rotate(360deg)'}).siblings().removeClass('current').css({'transform':'rotate(0deg)'});
		$('.ups').css({'display':'block'});
		$('.ups h3').html($(this).html());
	}).on('mouseout',function(event){
		event.preventDefault();
		$('.ups').css({'display':'none'});
		$(this).removeClass('current');
	});
	$('#content').fullpage({
		    //continuousVertical: true,  //循环演示
                    //绑定菜单
            scrollingSpeed:400,
            anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
            menu: '#menu',

                    // 导航
            'navigation': true,
			// 设置背景色
			//sectionsColor : ['#fff', '#0da5d6', '#2AB561', '#DE8910','#16BA9D','#0DA5D6'],
			afterLoad: function (anchorLink, index) {
				$('.section').removeClass('curr');
				$('.sec').css({'display':'none'});
				$('.six ul li').css({'color':'#2353B3','cursor':'pointer'});
				// 延时60毫秒执行
				setTimeout(function () {
					$('.section').eq(index - 1).addClass('curr');
				}, 60);
				switch(index){
					case 2:setTimeout(function(){
						$('.sec').css({'display':'block'})
					},1000);break;
					case 6:$("ul li.weix").on('mouseover',function(){
						$(this).css({'color':'#B3235F'});
						$('.six img').css({'opacity':'0.8'});
					}).on('mouseout',function(){
						$(this).css({'color':'#2353B3'});
						$('.six img').css({'opacity':'0'});
					});break;
				}
			}
		});
});