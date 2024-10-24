//setInterval("ag()",3000);
//function ag(){
//    $(".visual_inner ul:eq(0)").stop().animate({marginTop:"-812px"},function(){
//        $(".visual_inner ul:eq(0) li:first").appendTo(".visual_inner ul:eq(0)");
//        $(this).css({marginTop:"0"});
//    });
//};



$(function(){
    
    $(".nav_btn").click(function(){
        $("nav").stop().animate({ marginLeft:0 });        
        $(".search").stop().animate({ marginLeft:0 });        
    });
     $(".nav_btn_close").click(function(){
        $("nav").stop().animate({ marginLeft:"-100%" });        
        $(".search").stop().animate({ marginLeft:"-100%" });        
    });  
    
	
	
// [gnb] 넓이값 조건에 따른 다른 메뉴 활성 방식 
	if( $(window).width() > 1100 ){
		$(".gnb>li>ul").stop().slideUp(0); 
		$("*").stop(true);
		$(".gnb h2").mouseover(function(){
            $(".gnb>li>ul").stop().slideUp("fast");   
            $(this).next().stop().slideDown("fast");
            return false;
		}); 
        
        
// PC버전 찾기 버튼
        $(".search").css({display:"none"});
        $("#header>p:eq(1)").hide();
        
        $("#header>p:eq(0)").click(function(){
            $(".search").css({display:"block"});
            $("#header>p:eq(1)").show();
            $("#header>p:eq(0)").hide();
        });        
        $("#header>p:eq(1), #container").click(function(){
            $(".search").css({display:"none"});
            $("#header>p:eq(0)").show();
            $("#header>p:eq(1)").hide();
        });

// PC버전 퀙메뉴 바
        $(".lnb_inner li:eq(0)").mouseover(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_vision_hover.png)"});
            $(this).children().children().css({color:"rgb(79,183,48)"});
        });       
        $(".lnb_inner li:eq(0)").mouseleave(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_vision.png)"});
            $(this).children().children().css({color:"rgb(255,255,255)"});
        });
        $(".lnb_inner li:eq(1)").mouseover(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_business_hover.png)"});
            $(this).children().children().css({color:"rgb(79,183,48)"});
        });       
        $(".lnb_inner li:eq(1)").mouseleave(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_business.png)"});
            $(this).children().children().css({color:"rgb(255,255,255)"});
        });
        $(".lnb_inner li:eq(2)").mouseover(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_global_hover.png)"});
            $(this).children().children().css({color:"rgb(79,183,48)"});
        });       
        $(".lnb_inner li:eq(2)").mouseleave(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_global.png)"});
            $(this).children().children().css({color:"rgb(255,255,255)"});
        });
        $(".lnb_inner li:eq(3)").mouseover(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_shop_hover.png)"});
            $(this).children().children().css({color:"rgb(79,183,48)"});
        });       
        $(".lnb_inner li:eq(3)").mouseleave(function(){
            $(this).css({"background-image":"url(images/index_img/index_lnb_shop.png)"});
            $(this).children().children().css({color:"rgb(255,255,255)"});
        });
        
	}else{
		$("*").stop(true);
		$(".gnb h2").click(function(){
        $(".gnb>li>ul").stop().slideUp("fast");   
        $(this).next().stop().toggle("fast");
        return false;
		});
		
	};
	
	
// 새로고침에 대한 함수 생성
	function reload(){
			$( window ).resize(function() {
				window.location.reload(); 
			});
	};
		
// [gnb] 리사이즈 되었을 때 남아있는 이벤트 함수(pc-마우스오버 / m-마우스클릭)를 새로고
	$(window).resize(function(){
		if( $(window).width() < 1100 ){
			reload();
		}else{
            reload();
        };
	});
    

});

