import Header from './components/header'
import Menu from './components/menu'
import Parallax from './components/parallax'
import BackToTop from './components/backtotop'

// Preloader
$(window).load(function() {
    $('#preloader').fadeOut('slow');
});

// Header
if (typeof Header !== 'undefined') {
	new Header();
}

// Menu

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
if(typeof BackToTop !== 'undefined') {
	new BackToTop('#back-to-top', 100);
}

