'use strict';

function initializeEvents() {
    // Show/Hide navigation category menu on shop link hover	
    $cache.headerShopLinkCatMenu.on('mouseenter', function() {
        $cache.navCategoryMenu.stop().fadeIn();
        $cache.headerShopLink.css({
            'background-color': '#201547',
            'color': '#fff'
        });
    });

    $cache.headerShopLinkCatMenu.on('mouseleave', function() {
        $cache.navCategoryMenu.stop().fadeOut();
        $cache.headerShopLink.css({
            'background-color': '#fff',
            'color': '#201547'
        });
    });

    // Show/Hide navigation library menu on explore link hover
    $cache.headerExploreLinkLibraryMenu.on('mouseenter', function() {
        $cache.navLibraryMenu.stop().fadeIn();
        $cache.headerExploreLink.css({
            'background-color': '#201547',
            'color': '#fff'
        });
    });

    $cache.headerExploreLinkLibraryMenu.on('mouseleave', function() {
        $cache.navLibraryMenu.stop().fadeOut();
        $cache.headerExploreLink.css({
            'background-color': '#fff',
            'color': '#201547'
        });
    });
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
