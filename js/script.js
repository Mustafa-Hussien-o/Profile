/*global $, window*/
$(function () {
   
    "use strict";

    /* -- Start Nice Scroll -- 
    $("html").niceScroll(); */    

    /* -- * Start Var Area * -- */

    var doc_height  =   $(window).innerHeight(),
        nav_bar     =   $(".nav_bar"),
        nav_item    =   $(".nav_bar .nav-item, .Footer .inner-links a"),
        Projects    =   $(".Projects .Project"),
        nav_toggler =   $(".nav_bar .navbar-collapse"),
        typed = new Typed('.Typed', {
            strings: [
                "Frontend Developer",
                "You Will Know <b>All You Want</b>",
                "You Will Find <b>My Cv</b>",
                "You Will Find <b>Previous Projects</b>",
            ],
            typeSpeed: 50,
            backDelay: 2000,
            backSpeed: 60,
            loop: true
        });

    /* -- * Start Set Dimensions * -- */

    $(".Height").css("height", doc_height);
    $(".navbar-nav a, .Footer .inner-links a").on("click", function (e) { e.preventDefault() })

    /*$(window).on("resize", function () {
        location.reload();
        $(".Height").css("height", doc_height);
    });*/

    /* -- * Start Nav Bar Functions * -- */

    nav_item.on("click", function () {
        $("html, body").animate({
            scrollTop: ($("#" + $(this).data("id")).offset().top) - 80
        }, 2000);
    });

    nav_toggler.on("click", function () {
        $(this).toggleClass("show hide");
    });

    /* -- * Start Window On Scroll Functions * -- */

    $(window).on("scroll", function () {
        // Nav Bar Style Function
        if ($(this).scrollTop() >= ( doc_height - 250 ) ) {
            nav_bar.css({
                "box-shadow"        :   "0 0 10px #CCC",
                "background-color"  :   "rgba(9,43,97,.89)"
            });
            $(".go_up").fadeIn(1700);
        } else {
            nav_bar.css({
                "box-shadow"        :   "none",
                "background-color"  :   "rgba(9,43,97,.0)"
            });
            $(".go_up").fadeOut(1700);
        }
    });

    /* -- Start Projects Functions -- */

    Projects.hover(function () {
        $(this).animate({"background-position-y" : "-400px"}, 3000);
        $(this).children().slideDown(500);
    }, function () {
        $(this).animate({"background-position-y" : "0"}, 500);
        $(this).children().slideUp();
    });

    /* -- * Start Footer Function * -- */

    $(".Footer .Copy svg, .go_up").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 2000);
    });
    

    
/*------------------------------------------------------------*/
    /*------------------------------------------------------------*/
    /*------------------------------------------------------------*/
/*------------------------------------------------------------*/
});