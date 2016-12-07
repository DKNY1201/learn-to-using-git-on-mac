'use strict';

function initializeEvents() {
	debugger
    // Show/Hide navigation category menu on shop link hover
	$cache.headerShopLinkCatMenu.on( "hover",
		function() {
			$cache.navCategoryMenu.stop().fadeIn();
	        $cache.headerShopLink.css({
	            'background-color': '#201547',
	            'color': '#fff'
	        });
	    },
	    function() {
	        $cache.navCategoryMenu.stop().fadeOut();
	        $cache.headerShopLink.css({
	            'background-color': '#fff',
	            'color': '#201547'
	        });
	    }
	);
	
	
//    $cache.headerShopLinkCatMenu.hover(
//        function() {
//            $cache.navCategoryMenu.stop().fadeIn();
//            $cache.headerShopLink.css({
//                'background-color': '#201547',
//                'color': '#fff'
//            });
//        },
//        function() {
//            $cache.navCategoryMenu.stop().fadeOut();
//            $cache.headerShopLink.css({
//                'background-color': '#fff',
//                'color': '#201547'
//            });
//        }
//    );
	
    // Show/Hide navigation library menu on explore link hover
	
	$cache.headerExploreLinkLibraryMenu.on( "hover",
		function() {
	        $cache.navLibraryMenu.stop().fadeIn();
	        $cache.headerExploreLink.css({
	            'background-color': '#201547',
	            'color': '#fff'
	        });
	    },
	    function() {
	        $cache.navLibraryMenu.stop().fadeOut();
	        $cache.headerExploreLink.css({
	            'background-color': '#fff',
	            'color': '#201547'
	        });
	    }
	);
	
//    $cache.headerExploreLinkLibraryMenu.hover(
//        function() {
//            $cache.navLibraryMenu.stop().fadeIn();
//            $cache.headerExploreLink.css({
//                'background-color': '#201547',
//                'color': '#fff'
//            });
//        },
//        function() {
//            $cache.navLibraryMenu.stop().fadeOut();
//            $cache.headerExploreLink.css({
//                'background-color': '#fff',
//                'color': '#201547'
//            });
//        }
//    );
}

var $cache = {};

var header = {
    init: function() {
        $cache = {
            headerShopLinkCatMenu: $('.shop-link, .menu-category.header-menu'),
            headerShopLink: $('.shop-link'),
            navCategoryMenu: $('.menu-category.header-menu'),
            headerExploreLinkLibraryMenu: $('.explore-link, .menu-category.header-library-content'),
            headerExploreLink: $('.explore-link'),
            navLibraryMenu: $('.menu-category.header-library-content')
        };
        initializeEvents();
    }
};

module.exports = header;
