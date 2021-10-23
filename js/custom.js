/*
Template Name: Soprdaily - Organic Food & Grocery Market Mobile Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/
(function($) {
    "use strict";
    
    
    
    $("body").on("contextmenu",function(e){
        return false;
    });
    $(document).keydown(function(e){
         if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)){
           return false;
         }
         if(e.which === 123){
             return false;
         }
         if(e.metaKey){
             return false;
         }
         //document.onkeydown = function(e) {
         // "I" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
             return false;
         }
         // "J" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
             return false;
         }
         // "S" key + macOS
         if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         // "U" key
         if (e.ctrlKey && e.keyCode == 85) {
            return false;
         }
         // "F12" key
         if (event.keyCode == 123) {
            return false;
         }
    });
	

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','../../../www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-120909275-1', 'auto');
ga('send', 'pageview');
    

    // Add active state to sidbar nav links
    // owl-carousel-fresh
    $('.owl-carousel-fresh.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2.2,
            },
            600: {
                items: 2.2,
            },
            1000: {
                items: 2.2,
            }
        }
    });
    // owl-carousel-wide
    $('.owl-carousel-wide.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2.2,
            },
            600: {
                items: 2.2,
            },
            1000: {
                items: 2.2,
            }
        }
    });
    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.1,
                dots: false,
            },
            600: {
                items: 1.1,
                dots: false,
            },
            1000: {
                items: 1.1,
                loop: false,
                dots: false,
            }
        }
    });

    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');

    var defaultOptions = {
        disableAt: false,
        customToggle: $toggle,
        levelSpacing: 40,
        navTitle: 'Askbootstrap',
        levelTitles: true,
        levelTitleAsBack: true,
        pushContent: '#container',
        insertClose: 2
    };

    // call our plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);
    
    
    
    
    
    
    

})(jQuery);