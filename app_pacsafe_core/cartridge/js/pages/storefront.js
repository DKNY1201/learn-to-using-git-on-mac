'use strict';
var $cache = {};
exports.init = function () {
	$cache = {
		header_shop_link_cat_menu : $('.shop-link, .menu-category'),
		header_shop_link: $('.shop-link'),
		nav_category_menu: $('.menu-category')
	};
	
	$cache.header_shop_link_cat_menu.hover(
		function() {
			$cache.nav_category_menu.stop().fadeIn();
			$cache.header_shop_link.css({
				'background-color': '#201547',
			    'color':'#fff'
			});
		}, function(){
			$cache.nav_category_menu.stop().fadeOut();
			$cache.header_shop_link.css({
				'background-color': '#fff',
			    'color':'#201547'
			});
		}
	)
	
    $('#homepage-slider')
        // responsive slides
        .on('jcarousel:create jcarousel:reload', function () {
            var element = $(this),
                width = element.innerWidth();
            element.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 5000
        });
    $('#homepage-slider .jcarousel-control')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .jcarouselPagination({
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

    $('#vertical-carousel')
        .jcarousel({
            vertical: true
        })
        .jcarouselAutoscroll({
            interval: 5000
        });
    $('#vertical-carousel .jcarousel-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('#vertical-carousel .jcarousel-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
};
