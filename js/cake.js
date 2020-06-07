
$(function () {
    var flame = $('#flame');
    var txt = $('#wishTxt');
    var count = $('.container-countdown');
    var wish = $('.wish');
    var timer = $('.timer');

    flame.on({
        click: function () {
            flame.removeClass('burn').addClass('puff');
            $('.smoke').each(function () {
                $(this).addClass('puff-bubble');
            }); ``
            $('#glow').remove();
            timer.hide().delay(750);
            count.hide().delay(750);
            wish.hide().html("<h3>Happy birthday Jiggy!!!</h3>").delay(750).fadeIn(300);
            txt.hide().html("<h3 id='wishtrue'>Your wish will come true...</h3>").delay(900).fadeIn(5000);
            $('#candle').animate({
                'opacity': '.5'
            }, 100);
            $('.container-wishes').delay(9000).fadeIn(5000);
            $('#cake').animate({
                'opacity': '0'
            }, 15000);
            $('#wishtrue').animate({
                'opacity': '0'
            }, 15000);
            start();
        }
    })
});