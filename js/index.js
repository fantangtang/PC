$(function(){
	//鼠标经过菜单导航显示二级内容
	$('.top-r ul li').hover(function(){
		if($(this).children().hasClass('nav-list')){	
			var outHeight = $(this).children('.nav-list').outerHeight();
			$('.two-nav').height(outHeight).show();
			$(this).children('.nav-list').show();	
		}		
	},function(){
		$('.two-nav').hide().height(0);
		$(this).children('.nav-list').hide();	
	});
	
/*	//鼠标经过导航菜单变色
	$('.top-r ul li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});*/
	
	//---------------------------输入框提示 start--------------------
	$('input,#sug-area').each(function(){
		if(typeof($(this).attr('data-place'))!="undefined"){
			$(this).val($(this).attr('data-place'));
		}
	});
	$('input,#sug-area').focus(function(){
		if($(this).val()==$(this).attr('data-place')){
			$(this).val('');
		}		
	});
	$('input,#sug-area').blur(function(){
		if($(this).val()==''){
			$(this).val($(this).attr('data-place'));
		}
	});
	//-------------------------输入框提示 end----------------------
	
	
	//tab切换
	tabTree(".service-tab ul li",".service-list");
	  /* 选项卡 */
	  function tabTree(menu,content){
	     $(menu).click(function(){
	        $(this).addClass("on").siblings().removeClass("on");
	        var idx = $(this).index();
	        $(content).siblings(content).css("display","none").eq(idx).css("display","block");
	     }).first().trigger("click");    
	  }
	  


})
