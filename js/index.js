var LANGUAGE_CODE; //标识语言


function loadProperties(type) {
    jQuery.i18n.properties({
        name: 'strings', // 资源文件名称
        path: 'static/', // 资源文件所在目录路径
        mode: 'map', // 模式：变量或 Map 
        language: type, // 对应的语言
        cache: false,
        // encoding: 'UTF-8',
        callback: function () { // 回调方法    
            $("[data-lang]").each(function(){  
	            $(this).html($.i18n.prop($(this).data("lang"))); 
	        })
        }
    });
}


function switchLang() {
	var lang=sessionStorage.getItem("lang");
	if(lang==1){
		

		LANGUAGE_CODE = 'zh_CN'
		sessionStorage.setItem("lang",2);
		// $(".aboutDes").css("text-indent","2em");
		// $(".jiange").css("display","none");
		$(".ch").addClass('now_lan');
		$(".en").removeClass('now_lan');
	}else{
		LANGUAGE_CODE = 'en_US'
		sessionStorage.setItem("lang",1);
		// $(".aboutDes").css("text-indent","0");
		// $(".jiange").css("display","block");
		$(".en").addClass('now_lan');
		$(".ch").removeClass('now_lan');
	}
	loadProperties(LANGUAGE_CODE);
}

// if(sessionStorage.getItem("lang")==1){
// 	LANGUAGE_CODE = 'en_US'
// 	$(".language").css("background","url(img/ch.png) no-repeat center/cover")
// 	console.log($(".mes[data-lang=address]"))
// }else{
// 	LANGUAGE_CODE = 'zh_CN'
// 	$(".language").css("background","url(img/en.png) no-repeat center/cover");
// }

loadProperties(LANGUAGE_CODE);


