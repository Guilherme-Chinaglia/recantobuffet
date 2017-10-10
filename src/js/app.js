$(document).ready(function() {
    $(window).scroll(function() {
      $('.fix-nav').css('background', 'rgba(0, 0, 0, 0.8)');
    });
}); //Falta implementar somente no scrolldown


/*
function ativaScrollSuave(selector){

	$(selector).click(function(event){

		event.preventDefault();
		var target = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000)
	});
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');
*/