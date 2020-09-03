$(function ()
{
　　$(".tabbox li").click(function ()
　　{
		var that=$(this);　　　　
		//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
　　　　$(this).addClass("active").siblings().removeClass("active");
　　　　//获取选中元素的下标
　　　　var index = $(this).index();
　　　　$(this).parent().siblings().children().eq(index).addClass("active")
　　　　.siblings().removeClass("active");
		$("tr td a").each(function(index,val){
			// console.log(that.html())
			// console.log($(val).html())
			if(that.html()==$(val).html()){
				console.log(111)
				$("tr td").eq(index).children("a").addClass('active').parents().siblings().children("td").children("a").removeClass('active');
			}
		})
　　});
	//公司介绍轮播
	var swiper = new Swiper('.swiper-container', {
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable :true
	  }
	});

	// 其它页面点击底部导航跳转
	var parameter=window.location.href.split("?")[1];
	if(parameter){
		console.log(333)
		var data = window.location.href.split("?")[1].split("=")[1];
		$(".aboutSelect").children("li").eq(data).addClass('active').siblings().removeClass('active');
		$(".aboutContent").eq(data).css("display","block").siblings(".aboutContent").css("display","none");
		$(".aboutNav").eq(data).addClass("active").parents("tr").siblings().children("td").children(".aboutNav").removeClass('active');
	}
});

