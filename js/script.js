

$(function(){
	var url = $("#upcomingTourCarousel .carousel-item.active").data("img");
	$(".upcomingTours").css("background","transparent url("+url+") no-repeat center center");
	$("#upcomingTourCarousel").on('slide.bs.carousel', function (e) {
		var url = $(e.relatedTarget).data("img")
		$(".upcomingTours").css("background","transparent url("+url+") no-repeat center center");

	});
	changeBackGraound();
});

$(window).scroll(function(){
	var sticky = $('header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 650) sticky.addClass('fixed-header');
	else sticky.removeClass('fixed-header');
  });
