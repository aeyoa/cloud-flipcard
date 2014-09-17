$(function () {

    var textArea = $('textarea');
    $(textArea).keypress(function (event) {
        /* Enter */
        if (event.keyCode == 13) {
            event.preventDefault();
            flip();
        }
    });

    $(textArea).keyup(function (event) {
        /* Left arrow*/
        if (event.keyCode == 37) {
            moveLeft($(this).closest('.card-translate'));
        }
        /* Right arrow */
        if (event.keyCode == 39) {
            moveRight($(this).closest('.card-translate'));
        }
    });

    function moveLeft(elem) {
        $(elem).transition({x: '-=720'}, 'easeOutQuint');
    }

    function moveRight(elem) {
        $(elem).transition({x: '+=720'}, 'easeOutQuint');
    }

    function flip() {
        var card = $('.card');
        card.toggleClass('flipped');
        if (card.hasClass('flipped')) {
            $('.back textarea').focus();
        } else {
            $('.front textarea').focus();
        }
    }

});