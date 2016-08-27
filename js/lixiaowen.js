$(document).ready(function() {
	/*导航*/
	$(".wrapHeader ul").find("a").eq(0).css("color","#f40");
	$(".wrapHeader ul li").hover(function() {
		var $index=$(this).index();
		$(".wrapHeader .nav_bg").stop().animate({"left":$index*150},800,function(){
			$(".wrapHeader ul").find("a").css("color","#fff");
			$(".wrapHeader ul").find("a").eq($index).css("color","#f40");
		});
		/*$(".wrapHeader ul").find("a").eq(0).css("color","#fff");*/
	}, function() {
		$(".wrapHeader ul").find("a").css("color","#fff");
		$(".wrapHeader .nav_bg").stop().animate({"left":0},800,function(){
			$(".wrapHeader ul").find("a").eq(0).css("color","#f40");
		});
	});
	$(".wrapHeader ul li").click(function(event) {
		var clicknum=$(this).index();
		$(".wrapHeader .nav_bg").stop().animate({"left":clicknum*150},800,function(){
			$(".wrapHeader ul").find("a").css("color","#fff");
			$(".wrapHeader ul").find("a").eq(clicknum).css("color","#f40");
		});
		$("body,html").stop().animate({"scrollTop":$(".wrapBox .box").eq(clicknum).offset().top-$(window).height()/2+1},500);
	});

	/*侧导航*/
	var arr=["首&nbsp;&nbsp;&nbsp;&nbsp;页","banner设计","平面设计","UI设计","HTML+CSS","移动前端","个人介绍","联系方式"];
	$(".fixedNav ul li").bind({
		mouseenter:function(){$(".fixedNav ul li").eq($(this).index()).append($("<span>"+arr[$(this).index()]+"</span>"));},
		mouseleave:function(){$(".fixedNav ul li").find("span").remove();},
		click:function(){
			$(this).addClass("current").siblings().removeClass("current");
			$("body,html").stop().animate({"scrollTop":$(".wrapBox .box").eq($(this).index()).offset().top-$(window).height()/2+1},500);
		}
	});
	/*屏幕滚动事件*/
	var scrollTop = 0;
	$(document).scroll(function(event) {
		scrollTop = $(document).scrollTop();
		if(scrollTop >= $(".page8").offset().top-$(window).height()/2 ){
			$(".fixedNav ul li").eq(7).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":7*150},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(7).css("color","#f40");
			});
		}else if(scrollTop >= $(".page7").offset().top-$(window).height()/2 ){
			$(".fixedNav ul li").eq(6).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":6*150},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(6).css("color","#f40");
			});
		}else if(scrollTop >= $(".page6").offset().top-$(window).height()/2 ){
			$(".fixedNav ul li").eq(5).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":5*150},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(5).css("color","#f40");
			});
		}else if(scrollTop >= $(".page5").offset().top-$(window).height()/2 ){
			$(".fixedNav ul li").eq(4).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":4*150},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(4).css("color","#f40");
			});
		}else if(scrollTop >= $(".page4").offset().top-$(window).height()/2 ){
			$(".fixedNav ul li").eq(3).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":3*150},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(3).css("color","#f40");
			});
		}else if(scrollTop >= $(".page3").offset().top-$(window).height()/2 ){
			$(".fixedNav ul li").eq(2).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":2*150},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(2).css("color","#f40");
			});
		}else if(scrollTop >= $(".page2").offset().top-$(window).height()/2 ){
			$(".fixedNav ul li").eq(1).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":1*150},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(1).css("color","#f40");
			});
		}else if(scrollTop >= $(".page1").offset().top ){
			$(".fixedNav ul li").eq(0).addClass("current").siblings().removeClass("current");
			$(".wrapHeader .nav_bg").stop().animate({"left":0},800,function(){
				$(".wrapHeader ul").find("a").css("color","#fff");
				$(".wrapHeader ul").find("a").eq(0).css("color","#f40");
			});
		}else if(scrollTop >0 ){
			$(".fixedNav").fadeIn();
		}else{
			$(".fixedNav").fadeOut();
		}
		if(scrollTop >= $(".page6").offset().top-$(window).height()/2 && scrollTop < $(".page7").offset().top-$(window).height()/2 ){
			$(".wrapBox .page6 .page6_bd").removeClass("cur");
		}else{
			$(".wrapBox .page6 .page6_bd").addClass("cur");
		}
	});
	/*返回顶部*/
	$(".copyright span").click(function(event) {
		$("body,html").stop().animate({"scrollTop":0},1500);
	});


	/*banner部分*/
	var W=$(window).width();
	$(".wrapBox .page1 ul li").width(W);
	$(".wrapBox .page1 .banner_fade").width(W);

	$(window).resize(function(event) {
		W=$(window).width();
		$(".wrapBox .page1 ul li").width(W);
		$(".wrapBox .page1 .banner_fade").width(W);
	});

	var timerspeed=4000;
	var picspeed=1000;
	var $key = 0;
	var num = 0;
	$(".wrapBox .page1 ul li").eq(0).clone().appendTo($(".wrapBox .page1 ul"));
			var timer = setInterval(autoplay,timerspeed);
			function autoplay(){
				if(!$(".wrapBox .page1 ul").is(":animated")){
					if($key < $(".wrapBox .page1 ul li").length-2){
						$key++;
						num = -$key*W;
						$(".wrapBox .page1 ul").stop().animate({"left":num},picspeed);
					}else{
						$key = 0;
						$(".wrapBox .page1 ul").stop().animate({"left":-($(".wrapBox .page1 ul li").length-1)*W},picspeed,function(){
							$(".wrapBox .page1 ul").css("left",0);
						});
					}
					$(".wrapBox .page1 ol li").eq($key).addClass("cur").siblings().removeClass("cur");
				}
			}
			/*左右箭头显示隐藏*/
			$(".page1").hover(function() {
				$(".page1 .left,.page1 .right").stop().fadeIn(200);
				clearInterval(timer);
				timer = null;
			}, function() {
				$(".page1 .left,.page1 .right").stop().fadeOut(200);
				clearInterval(timer);
				timer = setInterval(autoplay,timerspeed);
			});

			/*右箭头业务*/
			$(".page1 .right").click(function(event) {
				autoplay();
			});

			/*左箭头业务*/
			$(".page1 .left").click(function(event) {
				if(!$(".wrapBox .page1 ul").is(":animated")){
					if($key > 0 ){
						$key--;
						num = -$key*W;
						$(".wrapBox .page1 ul").stop().animate({"left":num},picspeed);
					}else{
						$key = $(".wrapBox .page1 ul li").length-2;
						num = -$key*W;
						$(".wrapBox .page1 ul").css("left",-($(".wrapBox .page1 ul li").length-1)*W).stop().animate({"left":num},picspeed);
					}
					$(".wrapBox .page1 ol li").eq($key).addClass("cur").siblings().removeClass("cur");
				}
			});

			/*小圆点业务*/
			$(".wrapBox .page1 ol li").click(function(event) {
				$key=$(this).index();
				var bannerN=$key+1;
				$(".wrapBox .page1 ol li").eq($key).addClass("cur").siblings().removeClass("cur");
				$(".wrapBox .page1 .banner_fade").css("background-image","url(images/banner"+bannerN+".jpg)");
				$(".wrapBox .page1 .banner_fade").fadeIn(1500,function(){
						$(".wrapBox .page1 ul").css({"left":-$key*W},picspeed);
						$(".wrapBox .page1 .banner_fade").hide();
				});
			});
			/*banner部分-异型轮播图*/
				//定义一个初始速度
				var sudu = 600;
				var flag = false;
				var nowimg = 2;
				//定义json
				var json0 = {"width":"174px","height":"122px","left":"-116px", "top":"100px"};
				var json1 = {"width":"356px","height":"223px","left":"0px", "top":"26px"};
				var json2 = {"width":"642px","height":"273px","left":"274px", "top":"0"};
			 	var json3 = {"width":"356px","height":"223px","left":"834px", "top":"26px"};
				var json4 = {"width":"174px","height":"122px","left":"1097px", "top":"100px"};
				var timer_banner = setInterval(banner1_autoplay,2000);
				$(".wrapBox .page2 .page2_bd").mouseenter(
					function() {
						clearInterval(timer_banner);
						timer_banner=null
					}
				);
				$(".wrapBox .page2 .page2_bd").mouseleave(
					function() {
						clearInterval(timer_banner);
						timer_banner = setInterval(banner1_autoplay,2000);
					}
				);
				$(".page2 .page2_bd .arr .arr_r").click(banner1_autoplay);
				function banner1_autoplay(){
						if(!$(".page2 .page2_bd ul.tuul li").is(":animated") || flag == true){
							if(nowimg < 8){
								nowimg ++;
							}else{
								nowimg = 0;
							}
							$(".xiaoyuandian li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
							//先交换位置
							$(".page2 .page2_bd ul.tuul li.no1").animate(json0,sudu);
							$(".page2 .page2_bd ul.tuul li.no2").animate(json1,sudu);
							$(".page2 .page2_bd ul.tuul li.no3").animate(json2,sudu);
							$(".page2 .page2_bd ul.tuul li.no4").animate(json3,sudu);
							$(".page2 .page2_bd ul.tuul li.no0").css(json4);
							//再交换身份
							$(".page2 .page2_bd ul.tuul li.no0").attr("class","waiting");
							$(".page2 .page2_bd ul.tuul li.no1").attr("class","no0");
							$(".page2 .page2_bd ul.tuul li.no2").attr("class","no1");
							$(".page2 .page2_bd ul.tuul li.no3").attr("class","no2");
							$(".page2 .page2_bd ul.tuul li.no4").attr("class","no3");
							//上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0
							if($(".page2 .page2_bd ul.tuul li.no3").next().length != 0){
								//如果no3后面有人，那么改变这个人的姓名为no4
								$(".page2 .page2_bd ul.tuul li.no3").next().attr("class","no4");
							}else{
								//no3前面没人，那么改变此时队列最开头的那个人的名字为no0
								$(".page2 .page2_bd ul.tuul li:first").attr("class","no4");
							}
							//发现写完上面的程序之后，no6的行内样式还是json0的位置，所以强制：
							$(".page2 .page2_bd ul.tuul li.no4").css(json4);
						}
					}
				$(".page2 .page2_bd .arr .arr_l").click(
					function(){
						if(!$(".page2 .page2_bd ul.tuul li").is(":animated") || flag == true){
							if(nowimg > 0){
								nowimg --;
							}else{
								nowimg = 8;
							}
							$(".xiaoyuandian li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
							//先交换位置:
							$(".page2 .page2_bd ul.tuul li.no0").animate(json1,sudu);
							$(".page2 .page2_bd ul.tuul li.no1").animate(json2,sudu);
							$(".page2 .page2_bd ul.tuul li.no2").animate(json3,sudu);
							$(".page2 .page2_bd ul.tuul li.no3").animate(json4,sudu);
							$(".page2 .page2_bd ul.tuul li.no4").css(json0);
							//再交换身份
							$(".page2 .page2_bd ul.tuul li.no4").attr("class","waiting");
							$(".page2 .page2_bd ul.tuul li.no3").attr("class","no4");
							$(".page2 .page2_bd ul.tuul li.no2").attr("class","no3");
							$(".page2 .page2_bd ul.tuul li.no1").attr("class","no2");
							$(".page2 .page2_bd ul.tuul li.no0").attr("class","no1");
							//上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0
							if($(".page2 .page2_bd ul.tuul li.no1").prev().length != 0){
								//如果no1前面有人，那么改变这个人的姓名为no0
								$(".page2 .page2_bd ul.tuul li.no1").prev().attr("class","no0");
							}else{
								//no1前面没人，那么改变此时队列最后的那个人的名字为no0
								$(".page2 .page2_bd ul.tuul li:last").attr("class","no0");
							}
							$(".page2 .page2_bd ul.tuul li.no0").css(json0);
						}	 
					}
				);
				$(".wrapBox .page2 .page2_bd .xiaoyuandian li").click(
					function(){
						sudu = 100;	//临时把这个速度变化一下
						flag = true;	//flag
						var $key = $(this).index();
						if($key > nowimg ){
							var cishu = $key - nowimg;
							for(var i = 1 ; i<= cishu ; i++){
								$(".page2 .page2_bd .arr .arr_r").trigger("click");	//让上帝帮你按一次又按钮
							}
						}else{
							var cishu = nowimg - $key;
							for(var i = 1 ; i<= cishu ; i++){
								$(".page2 .page2_bd .arr .arr_l").trigger("click");	//让上帝帮你按一次又按钮
							}
						}
						nowimg = $key;
						sudu = 600;	//再把速度恢复
						flag = false;
					}
				);
				/*平面设计*/
				$(".page3_bd").find(".pmwork").hover(function() {
					$(".pmwork").stop().fadeTo(200,0.5);
					$(this).stop().fadeTo(200,1);
				}, function() {
					$(".pmwork").stop().fadeTo(200,1);
				});
				/*UI设计*/
				var nowdushu = 0;
				var nowliang = 0;
                var timerUI=setInterval(autoplay_UI,3000);
				function autoplay_UI(){
						nowdushu = nowdushu - 40;
						if(nowliang < 8){
							nowliang = nowliang  + 1;
						}else{
							nowliang = 0;
						}
						$(".wrapBox .page4 .page4_bd ul").css({"-webkit-transform":"rotateX(-10deg) rotateY(" + nowdushu + "deg)","-moz-transform":"rotateX(-10deg) rotateY(" + nowdushu + "deg)"});
						$(".wrapBox .page4 .page4_bd ul li").removeClass("liang");	//所有人去掉亮
						//然后让三个元素带有liang：
						// 第一个元素，信号量标示的元素
						$(".wrapBox .page4 .page4_bd ul li").eq(nowliang).addClass("liang");
						//第二个元素，信号量下一个元素。如果信号量没有下一个兄弟，队列第一个变亮
						if($(".wrapBox .page4 .page4_bd ul li").eq(nowliang).next().length != 0){
							$(".wrapBox .page4 .page4_bd ul li").eq(nowliang).next().addClass("liang");
						}else{
							$(".wrapBox .page4 .page4_bd ul li:first").addClass("liang");
						}
						//第三个元素，信号量上一个元素。如果信号量没有上一个兄弟，队列最后一个变亮
						if($(".wrapBox .page4 .page4_bd ul li").eq(nowliang).prev().length != 0){
							$(".wrapBox .page4 .page4_bd ul li").eq(nowliang).prev().addClass("liang");
						}else{
							$(".wrapBox .page4 .page4_bd ul li:last").addClass("liang");
						}
					}
				$(".wrapBox .page4 .page4_bd").hover(function() {
					clearInterval(timerUI);
					timerUI=null;
				}, function() {
					clearInterval(timerUI);
					timerUI=setInterval(autoplay_UI,3000);
				});
				//给舞台添加鼠标移动事件监听
				$(".wrapBox .page4 .page4_bd").mousemove(
					function(e){
						var y = (e.pageY - $(".wrapBox .page4 .page4_bd").offset().top)/20;
						$(".wrapBox .page4 .page4_bd").css({"-webkit-transform":"rotateX(-" + y +"deg)","-moz-transform":"rotateX(-" + y +"deg)"});
					}
				);
				/*HTML+CSS*/
				$(".wrapBox .page5 .page5_bd ul li").mouseenter(function() {
					$(this).addClass("cur").siblings().removeClass("cur");
				});
				$(".wrapBox .page5 .page5_bd").mouseleave(function(event) {
					$(".wrapBox .page5 .page5_bd ul li").removeClass("cur");
				});
				



});