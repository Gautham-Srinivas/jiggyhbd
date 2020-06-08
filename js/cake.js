
$(function () {
    var flame = $('#flame');
    var txt = $('#wishTxt1');
    var txt2 = $('#wishTxt2');
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
           
            autoType(".wish2",200);
            autoType(".wish",200);
            txt.hide();
            wish.hide().delay(1750).fadeIn(2000);
            
           
            $('#candle').animate({
                'opacity': '.5'
            }, 100);
            $('.container-wishes').delay(9000).fadeIn(14000);
            //autoType(".type-js",100);
            $('.container-wish').animate({
                'opacity': '0'
            }, 17000);
            $('#cake').animate({
                'opacity': '0'
            }, 17000);
            //txt2.hide().delay(15000);
            start();
        }
    })
});

function randomCake() {
    const cake = document.querySelector('.cake');
    const candle = document.querySelector('.candle');
    const container = document.querySelector('.container');
  //  const randoButton = document.querySelector('#rando-button');
  //  const cakes = ['default-cake', 'chocolate-cake', 'strawberry-cake', 'pistachio-cake', 'red-velvet-cake'];

  //  randoButton.addEventListener('click', function() {
     //   randomInit();
   // }, false);
    function randomInit() {
        cake.classList.add("bounce-cake");
        candle.classList.add("bounce-cake")
            let currentCake = container.classList[1];
          //  setTimeout(() => container.classList.replace(currentCake, getRandomCake()), 820);
            setTimeout(() => {cake.classList.remove("bounce-cake"); candle.classList.remove("bounce-cake")}, 1500);
            $('#cake').show();
    }
    randomInit();
};