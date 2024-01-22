"use strict"
$(document).ready(function () {
    // Resaltar campos del formulario al enfocar
    $('#contact-form input, #contact-form textarea').on('focusin', function () {
        $(this).css('background-color', '#370B8F'); // Morado
    }).on('focusout', function () {
        $(this).css('background-color', ''); // Color original al desenfocar
    });

    // Generar y mostrar ecuación del CAPTCHA
    function generateCaptcha() {
        let num1 = Math.ceil(Math.random() * 10);
        let num2 = Math.ceil(Math.random() * 10);
        $('#captchaEquation').text(`${num1} + ${num2}`);
        return num1 + num2;
    }
    let captchaSolution = generateCaptcha();

    // Validar respuesta del CAPTCHA en tiempo real
    $('#captcha-input').on('input', function () {
        let userAnswer = parseInt($(this).val(), 10);
        if (userAnswer === captchaSolution) {
            $('#captcha-status').text('✔ Correcto');
        } else {
            $('#captcha-status').text('✖ Incorrecto');
        }
    });

    // Validar y enviar el formulario
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        let userAnswer = parseInt($('#captcha-input').val(), 10);

        // Validar campos obligatorios
        $('#contact-form input[required], #contact-form textarea[required]').each(function () {
            if (!$(this).val()) {
                isValid = false;
                $(this).css('border', '2px solid red');
            } else {
                $(this).css('border', '');
            }
        });

        // Validar política de privacidad
        if (!$('#privacyPolicy').is(':checked')) {
            isValid = false;
            alert('Debe aceptar la política de privacidad.');
        }

        // Validar respuesta del CAPTCHA
        if (userAnswer !== captchaSolution) {
            isValid = false;
            alert('Respuesta de captcha incorrecta.');
        }

        // Enviar formulario si es válido
        if (isValid) {
            // Aquí se puede manejar el envío del formulario
            alert('Formulario enviado correctamente.');
            // Restablecer formulario y CAPTCHA
            this.reset();
            captchaSolution = generateCaptcha();
        }
    });
});
