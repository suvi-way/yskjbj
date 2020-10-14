// var lang=sessionStorage.getItem("lang");
// if(lang==1){
// 	sessionStorage.setItem("lang",2);
// 	$(".ch").css("color","#888");
// 	$(".en").css("color","#1B1B1B");
// }else{
// 	sessionStorage.setItem("lang",1);
// 	$(".ch").css("color","#1B1B1B");
// 	$(".en").css("color","#888");
// }
// 控制导航栏高度
var height=$(".navbar").height();
$(".nav>li").height(height)
// 判断是否是IE8
	var userAgent = navigator.userAgent;
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
// 中英文切换
$(".ch").click(function(){//中文切英文
	$(".ch").addClass('now_lan');
	$(".en").removeClass('now_lan');
})
$(".en").click(function(){//英文切中文
	$(".en").addClass('now_lan');
	$(".ch").removeClass('now_lan');
})

$(".downtitle").click(function(e){
	if(e.target.className.indexOf("downtitle")!=-1){
		var href=$(this).children("a").attr("href");
		window.location.href=href;
	}
})

// 二级导航跳转
$(".downMiddle li").click(function(){
	var href=$(this).children("a").attr("href");
	window.location.href=href;
})

//手机端导航右侧按钮背景颜色控制
var toggle=true;
$(".navbar-toggle").click(function(){
	if(toggle){
		console.log($(this))
		$(this).css("background-color","#ddd");
		toggle=false;
	}else{
		$(this).css("background-color","#fff");
		toggle=true;
	}
})


// 导航下拉框显示隐藏
$(".downtitle").mouseover(function(){
	// console.log($(this).children('a'))
	$(this).children('a').css("color","#017F40");
	$(this).children(".downmenu").css("display","block");
})
$(".downtitle").mouseout(function(){
	$(this).children('a').css("color","#4B4B4B");
	$(this).children(".downmenu").css("display","none");
})
//轮播文字动效
$(document).ready(function(){
	// alert(111)
	setTimeout (function(){
		$(".banner_icon1").addClass("icon1");
	  },0);
	  setTimeout (function(){
		$(".banner_icon2").addClass("icon2");
	  },200);
	  setTimeout (function(){
		$(".banner_icon3").addClass("icon3");
	  },400);
})

$(document).scroll(function(){
	var scrollTop=$(document).scrollTop();
	var partnerH=$('.banner').height();
	// console.log(scrollTop)
	if(scrollTop<partnerH){
		setTimeout (function(){
		$(".banner_icon1").addClass("icon1");
		},0);
		setTimeout (function(){
		$(".banner_icon2").addClass("icon2");
		},200);
		setTimeout (function(){
		$(".banner_icon3").addClass("icon3");
		},400);
	}else if(scrollTop>partnerH){
		$(".banner_icon1").removeClass("icon1");
		$(".banner_icon2").removeClass("icon2");
		$(".banner_icon3").removeClass("icon3");
	}
})
