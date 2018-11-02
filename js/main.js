	$(document).ready(function(e) {
		
		var maxBanNum = $("div[class^='banWrap']").length;
		if($(".banNum a").length > 0) {
			//$(".banNum a").get(0).attr("value");
			//maxBanNum = parseInt(maxBanNum);
		}
		/** 头部菜单折叠 
		var oldTop = 0;
		$(window).scroll(function(e) {
			if(oldTop > $(window).scrollTop() || $(window).scrollTop() < 70) {
				$(".top").slideDown({ duration: 500,  easing: 'easeInOutBack'});
			} else {
				$(".top").slideUp({ duration: 500,  easing: 'easeInOutBack'}); 	
			}
			oldTop = $(window).scrollTop();
		}); 
		*/
		
		$("#custConClose").click(function(e) { 
             $(".custCon").animate({width:'0px', paddingLeft:0, paddingRight:0},500);
        });
		
		$(".custClose").click(function(e) { 
            $(".custCon").animate({width:'0px', paddingLeft:0, paddingRight:0},500);
			$(".cademy").animate({width:'0px'},500,function() {
				$(".cademy").hide();
			});
			$(".custClose").hide();
        });
		$("#custom").click(function(e) {
			 
			$(".cademy").hide(); 
			$(".cademy").css({width:'0px'});
			if($(".custCon").css("width") == "400px") { 
				$(".custCon").animate({width:'0px', paddingLeft:0, paddingRight:0},500);
				$(".custClose").hide();
			} else {
				$(".custCon").animate({width:'400px',paddingLeft:40, paddingRight:40},500);
				$(".custClose").show();
			}
			
			
        });
		
		$(".weixin").click(function(e) {
			
			$(".custCon").css({width:'0px', paddingLeft:0, paddingRight:0});
			if($(".cademy").css("width") == "220px") { 
				$(".cademy").animate({width:'0px'},500,function() {
					$(".cademy").hide();
				});
				$(".custClose").hide();
			} else {
				$(".cademy").show();
				$(".cademy").animate({width:'220px'},500);
				$(".custClose").show();
			}
        });
		
		$(".backTop").click(function(e) {
            $("html,body").animate({scrollTop:0},500);
        });
		
		$(".t_item a").click(function(e) {
			var target = $(this).attr("href");
			var top = $(target).offset().top;
			 
			$("html,body").animate({scrollTop:top},500);
			return false;
		});
		
		$(window).scroll(function(e) {
			if($(".pageMain").length > 0) {
				var left = $(".pageMain").offset().left;
				if( $(window).scrollTop() > 300) {
					$(".leftMenu").addClass("fix");
					$(".leftMenu").css({left:left + 20});
				} else { 
					$(".leftMenu").removeClass("fix");
					$(".leftMenu").css({left:0});
				}
			}
			
			var scrollTop = $(window).scrollTop();
			 
			if(scrollTop > 10) {
				$(".sideBar").css({bottom:70});
				$(".backTop").show();
			} else {
				
				$(".backTop").hide();
				$(".sideBar").css({bottom:134});
			}
                        var obj = null;
			/*var scrollTop = $(window).scrollTop();
			
			 
			$(".rightCon h2").each(function(index, element) {
				 
				if($(this).offset().top - 60 < scrollTop) {
					obj = $(this);
				}
			});*/
			
			//alert(scrollTop);
			//alert(obj.offset().top);
			
			//$(".title2").css({'background-color':'#fff'});
			
			//alert(obj.html());
			//obj.css({'background-color':'#ececec'});
			 
			if(obj != null) {
			$(".t_item").removeClass("cur"); 
				$("a[href=#" + $(obj).find("a:first-child").attr("id") + "]").parent().addClass("cur");
			}
			 
		});
		
		/** 3秒自动切换 */
		var T = setTimeout(slide,3000);
		
		/** 图片切换 */
		$(".banNum a").click(function(e) {			
			var currentTarget = ".banWrap" + $(".cur").attr("value"); 
			var target = ".banWrap" + $(this).attr("value"); 
			
			if(currentTarget == target) return false;
			
			$(currentTarget).stop();
			$(currentTarget).css({'z-index':2});
			$(currentTarget + " .banMain .banTxt").removeClass("a-fadein");
			$(currentTarget + " .banMain .banBtn").removeClass("a-fadein");
			$(currentTarget + " .banMain .banPic").removeClass("a-fadeinB");
			 
			$(target).css({'z-index':3});
			$(target + " .banMain .banTxt").addClass("a-fadein");
			$(target + " .banMain .banBtn").addClass("a-fadein");
			$(target + " .banMain .banPic").addClass("a-fadeinB");
			
			$(".banNum a").removeClass("cur");
			$(this).addClass("cur"); 
			 
			$(currentTarget).stop().animate( {'opacity':'0'},500); 
			$(target).show();
			$(target).stop().animate( {'opacity':'1'},600);  
		});
		
		/** 右切换 */
		$(".ArrowRight").click(function(e) {
			clearTimeout(T);
			var curV = parseInt($(".cur").attr("value"));
			
			if(curV == 1) curV = maxBanNum + 1;
			curV = curV - 1; 
			if(curV < 10) {
				$(".banNum a[value='0"+curV+"']").trigger("click"); 
			} else {
				$(".banNum a[value='"+curV+"']").trigger("click"); 
			}
        });
		
		/** 左切换 */
		$(".ArrowLeft").click(function(e) {
			clearTimeout(T);
			var curV = parseInt($(".cur").attr("value"));
			
			if(curV == maxBanNum) curV = 0;
			curV = curV + 1; 
			
			if(curV < 10) {
				$(".banNum a[value='0"+curV+"']").trigger("click");
			} else {
				$(".banNum a[value='"+curV+"']").trigger("click");
			}
        });		
		
		/** 3秒自动切换 */
		function slide() { 
			$(".ArrowRight").trigger("click");
			T = setTimeout(slide,3000); 
		}
		
		$(".banner").hover(function() {
			clearTimeout(T);
		},function(){ 
			T = setTimeout(slide,3000);	
		});
		
		/** 菜单效果 */
		var  menu = $(".menu"); 
		menu.append("<li class='curLine'></li>");    
		var curLine = $(".curLine");
		 
		curLine
			.width($(".current_item").width() - 30)
			.height(3)
			.css("left", $(".current_item").position().left + 15)
			.data("origLeft", curLine.position().left)
			.data("origWidth", curLine.width());
			
		$(".menu li a").hover(function() {
			$el = $(this);
			leftPos = $el.position().left + 15;
			newWidth = $el.parent().width() - 30;
			 
			curLine.stop().animate({
				left: leftPos,
				width: newWidth
			});
		},function() { 
			curLine.stop().animate({
				left: curLine.data("origLeft"),
				width: curLine.data("origWidth")
			});
		});
		
		/** 窗口大小改变,小于1200,隐藏左右切换按钮 */
		$(window).resize(function(){
			if($(document).width() < 1200) {
				$(".ArrowLeft").hide();
				$(".ArrowRight").hide();
			} else {
				$(".ArrowLeft").show();
				$(".ArrowRight").show();
			}
			
			$(window).trigger("scroll");
		});
		
		$(window).trigger("resize");
			//$("#custom").click(
		//);
    });
	