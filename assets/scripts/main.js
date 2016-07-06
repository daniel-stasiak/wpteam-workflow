$(function() {

    $(document).ready(function() {


        /* ~~~~~~~~~~ Animsition ~~~~~~~~~~ */

        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
            loading: true,
            loadingParentElement: 'html', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '', // e.g '<img src="loading.svg" />'
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
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


        /* ~~~~~~~~~~ Set animation scroll when URL is with #anchor ~~~~~~~~~~ */

        if ( window.location.hash ) scroll(0,0);
        setTimeout( function() { scroll(0,0); }, 1);

        $('.scroll').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top + 'px'
            }, 1000, 'swing');
        });

        if(window.location.hash) {
            $('html, body').animate({
                scrollTop: ($(window.location.hash).offset().top - 50) + 'px'
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


        /* ~~~~~~~~~~ Smooth scroll ~~~~~~~~~~ */

        $(document).on('click', 'a.page-scroll', function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });

    });


    /* ~~~~~~~~~~ WOW Initial ~~~~~~~~~~ */

    new WOW().init();

});