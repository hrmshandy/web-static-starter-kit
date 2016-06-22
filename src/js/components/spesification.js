class Spesification {
	constructor(){
		this.events();
	}

	events() {
		var html = $('html'),
			close = function(){
				html.removeClass('spec-detail--show');
				$('.spec-detail__item--current').removeClass('spec-detail__item--current');
			};

		$('.spec__item').each(function(pos, item) {
			// grid item click event
			$(item).on('click', function(ev) {
				ev.preventDefault();
				ev.stopPropagation();

				var target = $(this).attr('href'),
					offset = $('#specification').offset().top;

				$(target).addClass('spec-detail__item--current');

				html.addClass('spec-detail--show');

				$('html, body').animate({
					scrollTop: offset
				}, 720, 'swing');
			});
		});

		$(document).on('click', function(){
			close();
		});

		$('.spec-detail__close').on('click', function(){
			close();
		});

		$('.spec-detail__item').on('click', function(ev){
			ev.stopPropagation();
		});
	}
}

export default Spesification;