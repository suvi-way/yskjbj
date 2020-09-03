//轮播
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

//公司业务
$(".work_con li").mouseover(function(){
	if($(this).index()<3){
		$(this).addClass("hover").siblings(".first").removeClass("hover");
	}else{
		$(this).addClass("hover").siblings(".second").removeClass("hover");
	}
});

//项目案例
$(".program_con").each(function(i,v){
	$(v).mouseover(function(){
		var src=$(this).find("img").attr("src");
		var src1=src.replace("1","2");
		// console.log(src1)
		$(this).find("img").attr("src",src1);
	})
	$(v).mouseout(function(){
		var src=$(this).find("img").attr("src");
		var src1=src.replace("2","1");
		// console.log(src1)
		$(this).find("img").attr("src",src1);
	})
})