$(function ()
{
    jQuery.support.cors = true;
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
    
	//分页
	$('.box').pagination({
        coping: true,
        homePage: '首页',
        endPage: '尾页',
        prevContent: '上页',
        nextContent: '下页',
        mode:'fixed',
        count: 3
    });

    // 其它页面点击顶部下拉导航、底部导航跳转
        var parameter=window.location.href.split("?")[1];
        if(parameter){
            var data = window.location.href.split("?")[1].split("=")[1];
            $(".newsSelect").children("li").eq(data).addClass('active').siblings().removeClass('active');
            // console.log($(".newsSelect").eq(data).addClass("activeNav").parents("tr"))
            $(".newsNav").eq(data).addClass("active").parents("tr").siblings().children("td").children(".newsNav").removeClass('active');
        }
});