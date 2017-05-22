$(function() {
		$('.thumbnail').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTo: $("#contactUsSection").offset()
    }, 2000);
});