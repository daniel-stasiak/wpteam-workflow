// var $lateral_menu_trigger = $('.menu-trigger'),
//     $content_wrapper = $('.main-content'),
//     $navigation = $('header'),
//     display = false;

// $lateral_menu_trigger.on('click', function(event){
//     event.preventDefault();

//     $lateral_menu_trigger.toggleClass('is-clicked');
//     $navigation.toggleClass('lateral-menu-is-open');

//     $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
//             $('body').toggleClass('overflow-hidden');
//         });

//     $('#lateral-nav').toggleClass('lateral-menu-is-open');

//     if(display === false) {
//         $('#lateral-nav').addClass('display');
//         display = true;
//     } else {
//         setTimeout(function() {
//             $('#lateral-nav').removeClass('display');
//         }, 400);
//         display = false;
//     }
// });

// $content_wrapper.on('click', function(event){
//     if(display === true) {
//         if( !$(event.target).is('.menu-trigger, .menu-trigger span') ) {
//             $lateral_menu_trigger.removeClass('is-clicked');
//             $navigation.removeClass('lateral-menu-is-open');

//             $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
//                 $('body').removeClass('overflow-hidden');
//             });

//             $('#lateral-nav').toggleClass('lateral-menu-is-open');

//             if(display === false) {
//                 $('#lateral-nav').addClass('display');
//                 display = true;
//             } else {
//                 setTimeout(function() {
//                     $('#lateral-nav').removeClass('display');
//                 }, 400);
//                 display = false;
//             }
//         }
//     }
// });

// $('.menu-item-has-children').children('a').on('click', function(event){
//     event.preventDefault();
//     $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.menu-item-has-children').siblings('.menu-item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
// });