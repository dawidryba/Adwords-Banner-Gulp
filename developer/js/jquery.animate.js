jQuery(document).ready(function($) {
    function startAnimate(){
        $('.logo, .slogan1, .slogan2, .link, .picture, .click, .sep, .fir, .sec, .thr').addClass('notrans');
        $('.logo, .slogan1, .slogan2, .link, .picture, .click, .sep, .fir, .sec, .thr').removeClass('animate');
        setTimeout(function(){
            $('.logo, .slogan1, .slogan2, .link, .picture, .click, .sep, .fir, .sec, .thr').removeClass('notrans');
            $('.logo, .slogan1, .slogan2, .link, .picture, .click, .sep, .fir, .sec, .thr').addClass('animate');
        },1000);
    }

    startAnimate();
    var interval = setInterval(startAnimate, 12000);
    //$('.logo, .slogan1, .slogan2, .link, .picture, .click, .sep, .fir, .sec, .thr').addClass('notrans');
    //$('.logo, .slogan1, .slogan2, .link, .picture, .click, .sep, .fir, .sec, .thr').addClass('animate');
});
