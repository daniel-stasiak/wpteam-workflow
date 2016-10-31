$(function() {

    $(document).ready(function() {


        /* ~~~~~~~~~~ Animsition ~~~~~~~~~~ */

        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading',
            loadingInner: '',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'html',
            transition: function(url){ window.location.href = url; }
        });


        /* ~~~~~~~~~~ Match height ~~~~~~~~~~ */

        $('.match-height').matchHeight({
            byRow: true,
            property: 'min-height',
            target: null,
            remove: false
        });


        /* ~~~~~~~~~~ Modal fix ~~~~~~~~~~ */

        $('.modal').appendTo("body");


        /* ~~~~~~~~~~ Select2 ~~~~~~~~~~ */

        $('select').select2();


        /* ~~~~~~~~~~ Set animation scroll when URL is with #anchor and make smooth scroll ~~~~~~~~~~ */

        if ( window.location.hash ) scroll(0,0);
        setTimeout( function() { scroll(0,0); }, 1);

        $('.scroll').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ($($(this).attr('href')).offset().top - $('.main-header').height()) + 'px'
            }, 1000, 'swing');
        });

        if(window.location.hash) {
            $('html, body').animate({
                scrollTop: ($(window.location.hash).offset().top - $('.main-header').height()) + 'px'
            }, 1000, 'swing');
        }


        /* ~~~~~~~~~~ Return to top button ~~~~~~~~~~ */

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').addClass('isVisible');
            } else {
                $('#return-to-top').removeClass('isVisible');
            }
        });

        $('#return-to-top').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
        });


        /* ~~~~~~~~~~ Mobile navigation ~~~~~~~~~~ */

        $("#mobile-navigation").mmenu({
           "extensions": [
              "pagedim-black",
              "theme-dark"
           ],
           "offCanvas": {
              "position": "right"
           },
           "navbars": [
              {
                 "position": "top"
              }
           ]
        });
    });


    /* ~~~~~~~~~~ WOW Initial ~~~~~~~~~~ */

    new WOW().init();

});