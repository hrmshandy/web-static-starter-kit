import Header from './components/header'
import Menu from './components/menu'
import Parallax from './components/parallax'
import Spesification from './components/spesification'

// Preloader
$(window).load(function() {
    $('#preloader').delay(350).fadeOut('slow');
});

// Header
if (typeof Header !== 'undefined') {
	new Header();
}

// Menu
$('#menu').onePageNav({
    currentClass: 'menu__item--current',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    offset: 60,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

// Parallax
if (typeof Parallax !== 'undefined') {
	new Parallax().init();
}
var p = document.querySelectorAll('.parallax');
[].forEach.call(p, function(el) {
	var url = el.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, ''),
		img = document.createElement("img");

	img.src = url;
	img.style.width = '100%';
	img.style.visibility = 'hidden';
	img.className = 'unvisible-image';
	el.appendChild(img);
});

/* Back To Top */
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
        	var $el = $('#back-to-top'),
            	scrollTop = $(window).scrollTop(),
            	windowWidth = $(window).width(),
            	containerWidth = $('.container').width(),
            	windowHeight = $(window).height(),
            	documentHeight = $(document).height(),
            	footerHeight = $("footer").height();

            if (scrollTop > scrollTrigger) {
		        $el.addClass('show');
		    } else {
		        $el.removeClass('show');
		    }

		    if((scrollTop + windowHeight) < (documentHeight - footerHeight)) {
		        $el.css("position","fixed");
		        $el.css('right', ((windowWidth - containerWidth + 15)/2)+'px');
		        $el.css('bottom', '30px');
		    } else {
		    	$el.css("position","relative");
		    	$el.css('right', '0px');
		    	$el.css('bottom', '100px');
		    }
        };

    backToTop();

    $(window).on('scroll resize', function () {
        backToTop();
    });

    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// Revolution Slider
jQuery(document).ready(function() {
   jQuery("#slider1").revolution({
		sliderType:"standard",
		sliderLayout:"fullscreen",
		delay:9000,
		navigation: {
			arrows:{enable:true}
		},
		parallax:{
			type:"on",
			levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
			origo:"enterpoint",
			speed:400,
			bgparallax:"on",
			disable_onmobile:"off"
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1240,1024,778,480],
		gridheight:[868,768,960,720],
		autoHeight:"off",
		fullScreenAutoWidth:"off",
		fullScreenAlignForce:"off",
		fullScreenOffsetContainer: "",
    });
});

// Spesification
if (typeof Spesification !== 'undefined') {
	new Spesification();
}

// Scroll To

$('.scroll-to').on('click', function(e){
	e.preventDefault();
	var target = $(this).attr('href'),
		offset = $(target).offset().top - $(this).data('offset');

	$('html, body').animate({
		scrollTop: offset
	}, 750, 'swing');
});

// Building
$('.legend a').click(function(e){
	e.preventDefault();

	$('.legend li').each(function(){
		$(this).removeClass('legend__item--selected');
	});

	$(this).closest('li').addClass('legend__item--selected');

	var img = $(this).data('image');

	$('.building__image').attr('src', img);

	console.log(img);
});
