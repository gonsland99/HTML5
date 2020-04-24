$(function(){
//	$(".menu").hover(function(){
//		$(this).find(".sub").show();		//.css("display", "block")
//		$(this).find("a:first").addClass("on");
//	}, function(){
//		$(this).find(".sub").hide();		//.css("display", "none")
//		$(this).find("a:first").removeClass("on");
//	});
	$(".menu").hover(function(){
		$(this).find(".sub").stop(true).slideDown(300);	
		$(this).find("a:first").addClass("on");
	}, function(){
		$(this).find(".sub").stop(true).slideUp(300);	
		$(this).find("a:first").removeClass("on");
	});
});