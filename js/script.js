"use strict"
$(document).ready(function () {
    // Acordeón: Inicialmente plegado y funcionalidad de despliegue
    $('.accordion-content').hide();

    // Manejar el clic en los encabezados del acordeón
    $('.accordion-toggle').click(function () {
        // Seleccionar el contenido asociado a este encabezado
        let content = $(this).next('.accordion-content');

        // Comprobar si el panel ya está abierto y cerrarlo si es necesario
        if (content.is(':visible')) {
            content.slideUp();
        } else {
            // Cerrar todos los paneles abiertos y abrir el panel actual
            $('.accordion-content').slideUp();
            content.slideDown();
        }
    });
    
    // Efectos de Hover en Imágenes
    $('.office-image').hover(
        function () {
            $(this).css('opacity', '0.7');
        },
        function () {
            $(this).css('opacity', '1');
        }
    );

    $('.office-image').on({
        mouseenter: function () {
            $(this).attr('src', 'assets/logo.svg');
        },
        mouseleave: function () {
            $(this).attr('src', 'assets/logo.png');
        }
    });
});
