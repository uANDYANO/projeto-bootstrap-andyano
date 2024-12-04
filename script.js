$(document).ready(function () {
    $('#roll-home').click(function(){
        const destino2 = $('#carouselExampleIndicators');

        $('html').animate({
            scrollTop: destino2.offset().top
        }, 1000, 'swing')
    })

    $('#roll-produtos').click(function(){
        const destino2 = $('#produtos');

        $('html').animate({
            scrollTop: destino2.offset().top
        }, 1000, 'swing')
    })

    $('#roll-contato').click(function(){
        const destino2 = $('#contato');

        $('html').animate({
            scrollTop: destino2.offset().top
        }, 1000, 'swing')
    })
});