class Menu {
	constructor(){
		this.wrapper = $('#mainMenu');

		this
			.build()
			.events();
	}

	build(){
		var self = this,
			$html = $('html'),
			$header = $('#header');

		// Add Arrows
		$header.find('.dropdown-toggle, .dropdown-submenu > a').append($('<i />').addClass('fa fa-caret-down'));

		return this;
	}

	events(){
		var self = this,
			menu = $('.menu'),
			menuItems = $('.menu__link'),
			setCurrent = function(ev) {
				ev.preventDefault();

				var item = $(this).closest('li'), // li
					target = $(this).attr('href');

				console.log(target);

				// return if already current
				if( item.hasClass('menu__item--current') ) {
					return false;
				}
				// remove current
				$('.menu__item--current').removeClass('menu__item--current');
				// set current
				item.addClass('menu__item--current');

				self.scrollToTarget(target, 60);
			};

		menuItems.each(function() {
			$(this).on('click', setCurrent);
		});

	}

	scrollToTarget(target, offset) {
		var self = this;

		$('body').addClass('scrolling');

		$('html, body').animate({
			scrollTop: $(target).offset().top - offset
		}, 750, 'swing', function() {
			$('body').removeClass('scrolling');
		});

		return this;

	}
}

export default Menu;