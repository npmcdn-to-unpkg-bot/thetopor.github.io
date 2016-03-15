$(document).ready(function(){
	// prettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animationSpeed: "slow",
		theme: "pp_default",
		slideshow: false,
		overlay_gallery: false,
		social_tools: false,
		deeplinking: false
	});


	// Portfolio
	if ($("#portfolio").length) {
		var $container = $("#portfolio"), portfolioLayout = "masonry";

		function getColumnNumber() {
			var colNumber = Math.floor($(window).width() / 250);
			colNumber = (colNumber > 5) ? 5 : colNumber;
			return colNumber;
		}

		function setColumns() {
			var itemWidth = Math.floor($(window).width() / getColumnNumber());
			$container.find(".portfolio-item").each(function() {
				$(this).css("width", itemWidth + "px");
			});
		}

		function setPortfolio() {
			setColumns();
			$container.isotope({
				filter: "*",
				itemSelector: ".portfolio-item",
				layoutMode: portfolioLayout
			});
		}

		function updatePortfolio() {
			setColumns();
			$container.isotope("layout");
		}

		$container.imagesLoaded(function () {
			setPortfolio();
			$(window).resize(function () {
				updatePortfolio();
			});
		});

	}


	// Animate tiles
	$(".tile").mouseenter(function() {
		$(this).find(".tile-content, .tile-content *").each(function() {
			$(this).addClass($(this).data("animate"));
			$(this).fadeTo(0, 1);
		});
	})
	$(".tile").mouseleave(function() {
		$(this).find(".tile-content, .tile-content *").each(function() {
			$(this).removeClass($(this).data("animate"));
			$(this).fadeTo(0, 0);
		});
	});
});
