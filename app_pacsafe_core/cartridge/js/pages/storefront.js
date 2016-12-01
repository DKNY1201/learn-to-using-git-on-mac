'use strict';
var dialog = require('../dialog');
var tls = require('../tls');

$(function(){
	var ispopupHomePage = $("#isPopupHomePage").val();
	var href = $("#isPopupHomePage").data('href');
	if(ispopupHomePage == "true"){
		dialog.open({
            url: href,
            options: {
                width : 350
            }
        });
	}
})


exports.init = function () {
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
