$(document).ready(function(){
	$('.slider').slick({
		arrows : true,
		slidesToShow:3,
		infinite: false,
		slidesToScroll: 3,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					
				}
			}
		]
	});
});

