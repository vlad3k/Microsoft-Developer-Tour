(function() {

	$(document).click(function (event) {
	if (!$(event.target).closest($('.select__cities')).length && !$(event.target).closest('.select__open').length) {
		$($('.select__cities')).removeClass('select__cities_open').fadeOut();
		$($('.select__cities')).addClass('select__cities_close');
	}
});

$('.select__open').click(function () {
	if ($('.select__cities').hasClass('select__cities_close')) {
		$('.select__cities').removeClass('select__cities_close');
		$('.select__cities').addClass('select__cities_open').fadeIn();
	} else {
		$('.select__cities').removeClass('select__cities_open');
		$('.select__cities').addClass('select__cities_close').fadeOut();
	}
});

$('.item-place').click(function() {
	$('.place').fadeIn();
});
	
/*$('.item-place').click(function (event) {
	if($(event.target).closest($('.item-place'))) {
		$(event.target).closest($('.item-place')).next().next().css('order', '-1');
	}
});*/

$('.place__close').click(function() {
	$('.place').fadeOut();
});

}());
