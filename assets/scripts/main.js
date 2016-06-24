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

    });


    /* ~~~~~~~~~~ WOW Initial ~~~~~~~~~~ */

    new WOW().init();

});