$('.header-navbar__btn').ready(function(){
	$('.header-navbar__btn').click(function(){
		$(this).toggleClass('open');
    $('.header-navbar__list').stop(true, true).slideToggle(500);
	});
});