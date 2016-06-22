class BackToTop {
	constructor(el, showOn) {
		this.el = $(el);
    	this.showOn = showOn;

    	this
			.build()
			.events();
	}

	build() {
		var self = this,
			scrollTop = $(window).scrollTop(),
	    	windowWidth = $(window).width(),
	    	containerWidth = $('.container').width(),
	    	windowHeight = $(window).height(),
	    	documentHeight = $(document).height(),
	    	footerHeight = $("footer").height();

		if (scrollTop > this.showOn) {
	        this.el.addClass('show');
	    } else {
	        this.el.removeClass('show');
	    }

	    if((scrollTop + windowHeight) < (documentHeight - footerHeight)) {
	        this.el.css("position","fixed");
	        this.el.css('right', ((windowWidth - containerWidth + 15)/2)+'px');
	        this.el.css('bottom', '30px');
	    } else {
	    	this.el.css("position","relative");
	    	this.el.css('right', '0px');
	    	this.el.css('bottom', '100px');
	    }
	}

	events() {
		var self = this;

		$(window).on('scroll resize', function () {
	        self.build();
	    });

	    this.el.on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700, 'swing');
	    });
	}
}