'use strict';
var dialog = require('../dialog');
var util = require('../util');
$(function(){
    $(window).resize(function() {
        fluidDialog();
    });
    openPopupHomePage();
});

function openPopupHomePage() {
    if (window.isPopupHomePage) {
        dialog.open({
            url: util.appendParamToURL(Urls.homepopup),
            options: {
                open: function () {
                    $('div#dialog-container').dialog('option','position', 'center' , 'collision' , 'fit');
                },
                width: 'auto', // overcomes width:'auto' and maxWidth bug
                maxWidth: 350,
                height: 'auto',
                modal: true,
                fluid: true, //new option
                resizable: false
            }
        });
    }
}

//responsive dialog 
function fluidDialog() {
    var $visible = $('.ui-dialog:visible');
    // each open dialog
    $visible.each(function () {
        var $this = $(this);
        var dialog = $this.find('.ui-dialog-content').data('ui-dialog');
        // if fluid option == true
        if (dialog.options.fluid) {
            var wWidth = $(window).width();
            // check window width against dialog width
            if (wWidth < (parseInt(dialog.options.maxWidth , 10) + 50))  {
                // keep dialog from filling entire screen
                $this.css('max-width', '90%');
            } else {
                // fix maxWidth bug
                $this.css('max-width', dialog.options.maxWidth + 'px');
            }
            //reposition dialog
            dialog.option('position', dialog.options.position);
        }
    });
}


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
