$(document).ready(function () {

    // progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#0d6efd',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#aaa' },
        to: { color: '#0d6efd' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 60);
            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#0d6efd',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#0d6efd' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 254);
            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#0d6efd',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#aaa' },
        to: { color: '#0d6efd' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 32);
            circle.setText(value);

        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#0d6efd',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#aaa' },
        to: { color: '#0d6efd' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 5423);
            circle.setText(value);

        }

    });

    // iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }

    });

    // Parallax

    // setTimeout serve para carregar primeiro as imagens
    setTimeout(function () {
        $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });
        $('#apply-area').parallax({ imageSrc: 'img/pattern.png' });
    }, 200);

    // Filtro portfólio
    // Função acionada quando um botão da classe filter-btn é clicado
    $('.filter-btn').on('click', function () {
        // Guarda o id do botão clicado como "tipo"
        let type = $(this).attr('id');
        // Contra as boxes mostradas no elemento de classe project-box
        let boxes = $('.project-box');

        // Controla o estado ativo dos botões
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // Se o tipo do botão clicado for igual ao tipo da box, ela é mostrada no elemento boxes com a função eachBoxes
        if (type == 'fe-btn') {
            eachBoxes('fe', boxes);
        } else if (type == 'be-btn') {
            eachBoxes('be', boxes);
        } else if (type == 'fs-btn') {
            eachBoxes('fs', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    // Animação fadeIn fadeOut das boxes
    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // Inicialização dos ToolTips do Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

});