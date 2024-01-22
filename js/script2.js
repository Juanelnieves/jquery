"use strict"
$(document).ready(function () {
    // Evento Toggle
    $('#toggle-btn').click(function () {
        $('#toggle-element').toggle();
    });

    // Evento Animate
    $('#animate-btn').click(function () {
        $('#animate-element').animate({ opacity: 0.5 });
    });


    // Evento Click para el botón
    $('#scroll-indicator').click(function(e) {
        e.preventDefault(); 
        $('html, body').animate({ scrollTop: 0 }, 'slow'); 
    });

    // Evento Scroll
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        $('#scroll-indicator').text('Scroll Pos: ' + scrollPos);
    });

    // Evento Resize
    $(window).resize(function () {
        let windowSize = $(window).width();
        $('#resize-indicator').text('Window Width: ' + windowSize);
    });


    // Evento Click para el botón attr
    $('#btnRedirect').click(function(e) {
        e.preventDefault();
        $('#attr-demo').text('Portfolio');
        $('#attr-demo').attr('href', 'https://dejuanhaciapedroconcarino.web.app/.com');
    });

    // Uso de fadeIn()
    $('#fadein-btn').click(function () {
        $('#fadein-element').fadeIn();
    });
});