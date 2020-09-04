require(["jquery","inbizsdk"],function($,inbizsdk){
	
	  var btn = inbiz("HtmlView1598865313682");
	  
	btn.beforeEvent = function(){
	}
	
	btn.afterEvent = function(){
	 //首页按钮点击事件
	  $(".home-leftBtn").click(function(){
		  var openName = $(this).html();
		  window.open(openName.toLowerCase() + "?version=50764b36fbb74b26b9a5033f7c3c6d42");
	  });
		
	 //首页更多列表信息点击事件
		$(".moreNews, .moreNewsTwo").click(function(){
			alert("弹出更多信息");
		});
	}
});