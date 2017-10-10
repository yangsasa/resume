// alert(1)
$(function(){
	$(".tab .anniu-box .anniu").click(function(){
		// 隐藏所有内容
		$(".tab .content-box ul").hide();
		// num表示点击的按钮是哪个
		var num = $(".tab .anniu-box .anniu").index($(this))
		// 把对应的内容显示出来
		$(".tab .content-box ul").eq(num).show();
		// 把所有的按钮背景色去掉
		$(".tab .anniu-box .anniu").css({
			"background":"rgba(0,0,0,0)"
		})
		// 添加对应的按钮背景色
		$(this).css({
			"background":"#4eb2d6"
		})
		
	})
		$(".backtop").backTop();
	/*// $(".backtop") 返回按钮父容器*/ 
})