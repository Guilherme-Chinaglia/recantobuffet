$(document).ready(function() {
    $(window).scroll(function() {
      $('.fix-nav, .nav-bars').css('background', 'rgba(0, 0, 0, 0.8)');
    });
}); //Falta implementar somente no scrolldown

//função scroll suave de página
function ativaScrollSuave(selector){

	$(selector).click(function(event){

		event.preventDefault();
		var target = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000)
	});
}

ativaScrollSuave('a[href*=home]');
ativaScrollSuave('a[href*=quem-somos]');
ativaScrollSuave('a[href*=servicos]');
ativaScrollSuave('a[href*=fotos]');
ativaScrollSuave('a[href*=contato]');