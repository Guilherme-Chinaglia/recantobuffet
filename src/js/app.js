$(function(){
	
	$('html, body').on('click', function(e){
		if(e.target == document.documentElement){	
			$('html, body').removeClass('show-menu');
		}
	});

	$('.fechar').on('click', function(){
		$('html, body').removeClass('show-menu');
	});

	$('#js-open-menu').on('click',  function(){
		$('html').addClass('show-menu');
	});
});

//função scroll suave de página
function ativaScrollSuave(selector){

	$(selector).click(function(event){

		event.preventDefault();
		var target = $(this).attr('href');
			
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);

		$('html, body').removeClass('show-menu');
	});
}

ativaScrollSuave('a[href*=home]');
ativaScrollSuave('a[href*=quem-somos]');
ativaScrollSuave('a[href*=servicos]');
ativaScrollSuave('a[href*=fotos]');
ativaScrollSuave('a[href*=contato]');
ativaScrollSuave('a[href*=map]');

//link active
$(function(){
	
	var link = $('.nav-item');
	
	$(link).on('click', function(){

		link.removeClass('active');
		$(this).addClass('active');
	});
});