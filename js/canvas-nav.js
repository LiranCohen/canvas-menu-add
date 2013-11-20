jQuery(function($){
	$(document).ready(function(){
		var winH = $(window).height(), winW = $(window).width();
		if($(window).width() < 768) {
			$('#navigation .sub-menu').css({
				display:"block"
			});
		}
		var previousLink=null;
		$(window).on('resize',function(){
			if($(window).width() != winW) {
				$('.nav-close').click();
				if($(window).width() > 768 ) {
					$('#navigation ul').css({
						display: ""
					});
				} else ($(window).width() < 768) {
					$('#navigation .sub-menu').css({
						display:"block"
					});
				}
			}
		});

		$('#navigation ul.nav li a').on('click', function(event){
			if(previousLink != this && $(window).width() < 768 ){
				if(!$(this).parent().children('ul').length) {
					return;
				} else {
					event.preventDefault();
				}
				previousLink = this;
				$(this).parent().siblings('li').find('ul').css({
					display:"none"
				});
				$(this).parent().children('ul').css({
					display:"list-item"
				});
			} else {
				return;
			}
		});
	});
});