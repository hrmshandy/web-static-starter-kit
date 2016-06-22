class Header {
	constructor(){
		this.wrapper = $('#header');
		this.options = {
			stickyEnableOnMobile: true
		}

		this
			.build()
			.events();
	}

	build(){

		var self = this,
			$html = $('html'),
			$window = $(window);

		// HTML Classes
		$html.addClass('sticky-header-enabled');

		// Check Sticky Header
		self.checkStickyHeader = function() {
			if ($window.scrollTop() >= this.wrapper.height()) {
				self.activateStickyHeader();
			} else {
				self.deactivateStickyHeader();
			}
		};

		// Activate Sticky Header
		self.activateStickyHeader = function() {

			if ($window.width() < 992) {
				if (!self.options.stickyEnableOnMobile) {
					self.deactivateStickyHeader();
					return;
				}
			}

			$html.addClass('sticky-header-active');

			$.event.trigger({
				type: 'stickyHeader.activate'
			});
		};

		// Deactivate Sticky Header
		self.deactivateStickyHeader = function() {

			$html.removeClass('sticky-header-active');

			$.event.trigger({
				type: 'stickyHeader.deactivate'
			});
		};

		return this;
	}

	events(){
		var self = this;

		$(window).on('scroll resize', function() {
			self.checkStickyHeader();
		});

		return this;
	}
}

export default Header;