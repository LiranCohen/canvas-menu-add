// Plugin Name: Canvas Mobile Menu Addition
// Plugin URI: http://github.com/LiranCohen/canvas-menu-add/
// Description: WooThemes' Canvas Mobile Menu Addition. Hides sub-menus in mobile mode and shows them only when clicked.
// Version: 1.1
// Author: Liran Cohen
// Author URI: http://www.liranco.info
// License: GPL2


jQuery(function($){
	$(document).ready(function(){
		//gets and tests the window's width for the purpose of hiding the menus
		winW = $(window).width();
		if($(window).width() < 768) {
			$('#navigation ul.sub-menu').css({
				display:"none"
			});
		}
		//sets previousLink catcher to null 
		var previousLink=null;
		//Makes changes on resize from mobile to larger version.
		$(window).on('resize',function(){
			if($(window).width() != winW) {
				$('.nav-close').click();
				if($(window).width() > 768 ) {
					$('#navigation ul').css({
						display: ""
					});
				} else if ($(window).width() < 768) {
					$('#navigation ul.sub-menu').css({
						display:"none"
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