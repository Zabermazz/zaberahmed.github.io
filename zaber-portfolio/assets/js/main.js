(function($) {
	var $window = $(window),
		$body = $('body');

	$window.on('load', function() {
		$body.removeClass('is-preload');
	});
})(jQuery);