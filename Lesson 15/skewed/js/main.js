
/*-----------------------------------hero slider----------------------------*/
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true
    });
});

/*--------------------------------slider team-------------------------------*/
$(document).ready(function() {
    $("#owl-slider").owlCarousel({
        autoPlay: true,
        slideSpeed:	50,
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1]
    });
});


/*-----------------------------slider portfolio------------------------------*/
$(document).ready(function() {
    $("#portfolio-slider").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3]
    });
});


/*----------------------------video------------------------------------------*/
$(document).ready(function(){
    $('.vb').click( function() {
        $('.video').slideToggle(250);
        $('.vb').remove();
    })
});

/* ----------------------- COUNTER ----------------------------------------- */
$(document).ready(function(){
    jQuery('.total').counterUp({
        delay: 10,
        time: 1000
    });

    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();
});
