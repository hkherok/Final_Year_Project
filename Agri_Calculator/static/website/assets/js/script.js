(function($) {

"use strict";

// imageZoom effect
$('.product-active .item').zoom();


// Parallax background
function bgParallax() {
if ($(".parallax").length) {
$(".parallax").each(function() {
var height = $(this).position().top;
var resize = height - $(window).scrollTop();
var doParallax = -(resize/5);
var positionValue = doParallax + "px";
var img = $(this).data("bg-image");

$(this).css({
backgroundImage: "url(" + img + ")",
backgroundPosition: "50%" + positionValue,
backgroundSize: "cover"
});
});
}
}


// Hero slider background setting
function sliderBgSetting() {
if ($(".hero-slider .slide").length) {
$(".hero-slider .slide").each(function() {
var $this = $(this);
var img = $this.find(".slider-bg").attr("src");

$this.css({
backgroundImage: "url("+ img +")",
backgroundSize: "cover",
backgroundPosition: "center center"
})
});
}
}


//Setting hero slider
function heroSlider() {
if ($(".hero-slider").length) {
$(".hero-slider").slick({
autoplay: true,
autoplaySpeed: 6000,
pauseOnHover: true,
arrows: true,
prevArrow: '<button type="button" class="slick-prev">Previous</button>',
nextArrow: '<button type="button" class="slick-next">Next</button>',
dots: true,
fade: true,
cssEase: 'linear'
});
}
}
// // stickey menu
$(window).on('scroll',function() {
var scroll = $(window).scrollTop(),
mainHeader = $('#sticky-header'),
mainHeaderHeight = mainHeader.innerHeight();

// console.log(mainHeader.innerHeight());
if (scroll > 1) {
$("#sticky-header").addClass("sticky");
}else{
$("#sticky-header").removeClass("sticky");
}
});
/*------------------------------------------
= HIDE PRELOADER
-------------------------------------------*/
function pageLoader() {
if($('.page-loader').length) {
$('.page-loader').delay(100).fadeOut(500, function() {

//Active heor slider
heroSlider();

});
}
}

/*================================
slicknav
==================================*/

$('.main-menu .nav_mobile_menu').slicknav({
label: '',
duration: 1000,
easingOpen: "easeOutBounce", //available with jQuery UI
prependTo:'.mobile_menu'
});

/*------------------------------------------
= WOW ANIMATION SETTING
-------------------------------------------*/
var wow = new WOW({
boxClass: 'wow', // default
animateClass: 'animated', // default
offset: 0, // default
mobile: true, // default
live: true // default
});

/*------------------------------------------
= CONTACT FORM SUBMISSION
-------------------------------------------*/
if ($("#contact-form").length) {
$("#contact-form").validate({
rules: {
name: {
required: true,
minlength: 2
},

email: "required",

phone: "required",

address: "required",
},

messages: {
name: "Please enter your name",
email: "Please enter your email address",
phone: "Please enter your phone number",
address: "Please enter your address",
},

submitHandler: function (form) {
$.ajax({
type: "POST",
url: "mail.php",
data: $(form).serialize(),
success: function () {
$( "#loader").hide();
$( "#success").slideDown( "slow" );
setTimeout(function() {
$( "#success").slideUp( "slow" );
}, 3000);
form.reset();
},
error: function() {
$( "#loader").hide();
$( "#error").slideDown( "slow" );
setTimeout(function() {
$( "#error").slideUp( "slow" );
}, 3000);
}
});
return false; // required to block normal submit since you used ajax
}

});
}

/*------------------------------------------
= STICKY HEADER
-------------------------------------------*/

// Function for clone an element for sticky menu
function cloneNavForSticyMenu($ele, $newElmClass) {
$ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
}

// clone home style 1 navigation for sticky menu
if ($('.site-header .navigation').length) {
cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
}

var lastScrollTop = '';

function stickyMenu($targetMenu, $toggleClass) {
var st = $(window).scrollTop();
var mainMenuTop = $('.site-header .navigation');

if ($(window).scrollTop() > 1000) {
if (st > lastScrollTop) {
// hide sticky menu on scroll down
$targetMenu.removeClass($toggleClass);

} else {
// active sticky menu on scroll up
$targetMenu.addClass($toggleClass);
}

} else {
$targetMenu.removeClass($toggleClass);
}

lastScrollTop = st;
}


// Single gallery slider
function productGallary() {
if ($('.product-active').length && $('.product-thumbnil-active').length) {

var $sync1 = $(".product-active"),
$sync2 = $(".product-thumbnil-active"),
flag = false,
duration = 500;

$sync1
.owlCarousel({
items: 1,
margin: 0,
nav: false,
dots: false
})
.on('changed.owl.carousel', function(e) {
if (!flag) {
flag = true;
$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
flag = false;
}
});

$sync2
.owlCarousel({
margin: 10,
items: 3,
nav: true,
dots: false,
navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
center: false,
responsive: {
0: {
items: 2,
autoWidth: false
},
400: {
items: 2,
autoWidth: false
},
500: {
items: 2,
center: false,
autoWidth: false
},
600: {
items: 3,
autoWidth: false
},
1200: {
items: 3,
autoWidth: false
}
},
})
.on('click', '.owl-item', function() {
$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

})
.on('changed.owl.carousel', function(e) {
if (!flag) {
flag = true;
$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
flag = false;
}
});

};
}

productGallary();


/*==========================================================================
WHEN WINDOW SCROLL
==========================================================================*/
$(window).on("scroll", function() {
toggleBackToTopBtn();

});

/*==========================================================================
WHEN DOCUMENT LOADING
==========================================================================*/
$(window).on('load', function() {

pageLoader();

sliderBgSetting();

sortingGallery();

productGallary();

});



/*================================
Gift-carousel
==================================*/
function testimonial_carousel() {
var owl = $(".testimonial-active");
owl.owlCarousel({
loop: true,
margin: 30,
nav: false,
items: 5,
smartSpeed: 2000,
dots: true,
autoplay: true,
autoplayTimeout: 5000,
responsive: {
0: {
items: 1
},
480: {
items: 1
},
760: {
items: 1
},
1080: {
items: 1
}
}
});
}
testimonial_carousel();


$(document).ready(function() {

$('.team-active ').owlCarousel({
loop: true,
margin:30,
autoplay: false,
smartSpeed: 1500,
mouseDrag: true,
navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
nav: true,
responsive: {
0: {
items:1
},
600: {
items: 1
},
1000: {
items: 1
}
}
});
});
/*================================
Gift-carousel
==================================*/
function gift_carousel() {
var owl = $(".Gift-carousel");
owl.owlCarousel({
loop: true,
margin: 0,
navText: false,
nav: false,
items: 5,
smartSpeed: 1000,
dots: false,
autoplay: true,
autoplayTimeout: 3000,
responsive: {
0: {
items: 3
},
480: {
items: 2
},
760: {
items: 4
},
1080: {
items: 6
}
}
});
}
gift_carousel();
/*------------------------------------------
= FUNFACE
-------------------------------------------*/
if ($(".odometer").length) {
$('.odometer').appear();
$(document.body).on('appear', '.odometer', function(e) {
var odo = $(".odometer");
odo.each(function() {
var countNumber = $(this).attr("data-count");
$(this).html(countNumber);
});
});
}
/*------------------------------------------
= BACK TO TOP BTN SETTING
-------------------------------------------*/
$("body").append("<a href='#' class='back-to-top'><i class='fa fa-angle-up'></i></a>");

function toggleBackToTopBtn() {
var amountScrolled = 1000;
if ($(window).scrollTop() > amountScrolled) {
$("a.back-to-top").fadeIn("slow");
} else {
$("a.back-to-top").fadeOut("slow");
}
}

$(".back-to-top").on("click", function() {
$("html,body").animate({
scrollTop: 0
}, 700);
return false;
})
/*------------------------------------------
= ACTIVE POPUP IMAGE
-------------------------------------------*/
if ($(".fancybox").length) {
$(".fancybox").fancybox({
openEffect : "elastic",
closeEffect : "elastic",
wrapCSS : "project-fancybox-title-style"
});
}


/*------------------------------------------
= POPUP VIDEO
-------------------------------------------*/
if ($(".video-play-btn").length) {
$(".video-play-btn").on("click", function(){
$.fancybox({
href: this.href,
type: $(this).data("type"),
'title' : this.title,
helpers : {
title : { type : 'inside' },
media : {}
},

beforeShow : function(){
$(".fancybox-wrap").addClass("gallery-fancybox");
}
});
return false
});
}


/*------------------------------------------
= POPUP YOUTUBE, VIMEO, GMAPS
-------------------------------------------*/
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
type: 'iframe',
mainClass: 'mfp-fade',
removalDelay: 160,
preloader: false,
fixedContentPos: false
});



/*------------------------------------------
= ACTIVE POPUP IMAGE
-------------------------------------------*/
if ($(".popup-image").length) {
$('.popup-image').magnificPopup({
type: 'image',
zoom: {
enabled: true,

duration: 300,
easing: 'ease-in-out',
opener: function(openerElement) {
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}
});
}


/*------------------------------------------
= ACTIVE GALLERY POPUP IMAGE
-------------------------------------------*/
if ($(".popup-gallery").length) {
$('.popup-gallery').magnificPopup({
delegate: 'a',
type: 'image',

gallery: {
enabled: true
},

zoom: {
enabled: true,

duration: 300,
easing: 'ease-in-out',
opener: function(openerElement) {
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}
});
}


/*------------------------------------------
= FUNCTION FORM SORTING GALLERY
-------------------------------------------*/
function sortingGallery() {
if ($(".sortable-gallery .gallery-filters").length) {
var $container = $('.gallery-container');
$container.isotope({
filter:'*',
animationOptions: {
duration: 750,
easing: 'linear',
queue: false,
}
});

$(".gallery-filters li a").on("click", function() {
$('.gallery-filters li .current').removeClass('current');
$(this).addClass('current');
var selector = $(this).attr('data-filter');
$container.isotope({
filter:selector,
animationOptions: {
duration: 750,
easing: 'linear',
queue: false,
}
});
return false;
});
}
}

sortingGallery();


/*------------------------------------------
= MASONRY GALLERY SETTING
-------------------------------------------*/
function masonryGridSetting() {
if ($('.masonry-gallery').length) {
var $grid = $('.masonry-gallery').masonry({
itemSelector: '.grid-item',
columnWidth: '.grid-item',
percentPosition: true
});

$grid.imagesLoaded().progress( function() {
$grid.masonry('layout');
});
}
}

// masonryGridSetting();


/*-----------------------
cart-plus-minus-button
-------------------------*/
$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function() {
var $button = $(this);
var oldValue = $button.parent().find("input").val();
if ($button.text() == "+") {
var newVal = parseFloat(oldValue) + 1;
} else {
// Don't allow decrementing below zero
if (oldValue > 0) {
var newVal = parseFloat(oldValue) - 1;
} else {
newVal = 0;
}
}
$button.parent().find("input").val(newVal);
});


})(window.jQuery);


//viw
    // featured-active
    $('.featured-active').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    // featured-active
    $('.featured-active2').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });



 /*-----------------------
       cart-plus-minus-button
     -------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
