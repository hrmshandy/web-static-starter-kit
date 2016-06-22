class Parallax {
	constructor(){
		this.defaults = {
			itemsSelector: '.parallax',
			responsive: true,
			horizontalScrolling: false
		};
	}

	init(opts){
		this
			.setOptions(opts)
			.build();

		return this;
	}

	setOptions(opts){
		this.options = $.extend(true, {}, this.defaults, opts);

		return this;
	}

	build(){
		if (!$(this.options.itemsSelector).get(0) || !($.isFunction($.fn.stellar)) || typeof(Modernizr.touch) == 'undefined') {
			return this;
		}

		var self = this;

		if (!$.browser.mobile) {
			$.stellar(self.options);
		} else {
			$(self.options.itemsSelector).addClass('parallax-disabled');
		}

		return this;
	}
}

export default Parallax;