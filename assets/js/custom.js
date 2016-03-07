// prettyPhoto
(function($) {
	jQuery(document).ready(function(){
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
			animationSpeed:'slow',
			theme:'pp_default',
			slideshow:false,
			overlay_gallery: false,
			social_tools:false,
			deeplinking:false
		});
	});
})(jQuery);

// Portfolio
(function($) {
	"use strict";
	var $container = $('.portfolio'), portfolioLayout = 'fitRows';

	if ($container.hasClass('portfolio-centered')) {
		portfolioLayout = 'masonry';
	}

	function getColumnNumber() {
		var winWidth = $(window).width(),
		columnNumber = 1;

		if (winWidth > 1200) {
			columnNumber = 5;
		} else if (winWidth > 950) {
			columnNumber = 4;
		} else if (winWidth > 600) {
			columnNumber = 3;
		} else if (winWidth > 400) {
			columnNumber = 2;
		} else if (winWidth > 250) {
			columnNumber = 1;
		}
			return columnNumber;
		}

		function setColumns() {
			var winWidth = $(window).width(),
			columnNumber = getColumnNumber(),
			itemWidth = Math.floor(winWidth / columnNumber);

			$container.find('.portfolio-item').each(function() {
				$(this).css( {
				width : itemWidth + 'px'
			});
		});
	}

	function setPortfolio() {
		setColumns();
		$container.isotope({
			filter: '*',
			itemSelector: '.portfolio-item',
			layoutMode: portfolioLayout
		});
	}

	function updatePortfolio() {
		setColumns();
		$container.isotope('layout');
	}

	$container.imagesLoaded(function () {
		setPortfolio();
	});

	$(window).on('resize', function () {
		updatePortfolio();
	});
})(jQuery);
